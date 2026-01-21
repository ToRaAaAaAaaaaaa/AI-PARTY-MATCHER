import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { candidates, policyCategories } from './candidates.js';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// 立候補者データを取得するエンドポイント
app.get('/api/candidates', (req, res) => {
  res.json({ candidates, policyCategories });
});

// 統合マッチングAPI（政党 + 候補者を1回で分析）
app.post('/api/analyze', async (req, res) => {
  const { userInput } = req.body;
  console.log('リクエスト受信:', userInput);

  if (!userInput) {
    return res.status(400).json({ error: 'ユーザーの入力が必要です' });
  }

  // 立候補者データをプロンプト用に整形（簡潔版）
  const candidatesInfo = candidates.map(c => {
    const policyScores = Object.entries(c.policy_answers)
      .map(([category, questions]) => {
        const scores = Object.entries(questions)
          .map(([qKey, qData]) => `${policyCategories[category].questions[qKey]}:${qData.answer}`)
          .join(', ');
        return `${policyCategories[category].label}[${scores}]`;
      })
      .join(' / ');

    return `${c.name}(${c.party},${c.district}): ${policyScores}`;
  }).join('\n');

  // タイムアウト設定（60秒）
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 60000);

  try {
    console.log('Claude API呼び出し開始...');

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.VITE_ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-haiku-20241022',
        max_tokens: 2500,
        messages: [
          {
            role: 'user',
            content: `あなたは日本の政治に詳しいアナリストです。ユーザーの考えを分析し、**政党**と**立候補者**の両方についてマッチング結果を提示してください。

## 主要政党
自由民主党、立憲民主党、日本維新の会、公明党、日本共産党、国民民主党、れいわ新選組、社会民主党

## 立候補者データベース（政策スタンス: 1=反対〜5=賛成）
${candidatesInfo}

## ユーザーの意見
「${userInput}」

## 分析手順
1. ユーザーの意見からキーワードと政策課題を抽出
2. 政党: 公式政策・マニフェストと照合し、上位3政党を選出
3. 候補者: 上記データの政策スタンスと照合し、上位3名を選出
4. それぞれ適合度(%)を算出

## 評価基準（100点満点）
- 政策方向性の一致: 50点
- 具体的施策の一致: 30点
- 実績・経歴との整合: 20点

以下のJSON形式のみで回答:
{
  "analysis": "ユーザーの政策志向分析（2-3文）",
  "party_recommendations": [
    {
      "party": "政党名",
      "match_percentage": 85,
      "reasons": ["理由1", "理由2"],
      "key_policies": ["一致する主要政策1", "一致する主要政策2"]
    }
  ],
  "candidate_recommendations": [
    {
      "name": "候補者名",
      "party": "所属政党",
      "district": "選挙区",
      "match_percentage": 80,
      "reasons": ["理由1", "理由2"],
      "matching_stances": ["一致する政策スタンス1", "一致する政策スタンス2"]
    }
  ]
}`
          }
        ]
      }),
      signal: controller.signal
    });

    clearTimeout(timeout);
    console.log('Claude APIレスポンス受信:', response.status);

    const data = await response.json();

    if (!response.ok) {
      console.error('APIエラー:', data);
      throw new Error(data.error?.message || 'API request failed');
    }

    console.log('成功！');
    res.json(data);
  } catch (error) {
    clearTimeout(timeout);
    if (error.name === 'AbortError') {
      console.error('タイムアウト（60秒）');
      res.status(504).json({ error: 'リクエストがタイムアウトしました' });
    } else {
      console.error('Error:', error);
      res.status(500).json({ error: error.message });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
