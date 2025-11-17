import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/analyze', async (req, res) => {
  const { userInput } = req.body;

  if (!userInput) {
    return res.status(400).json({ error: 'ユーザーの入力が必要です' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.VITE_ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2500,
        messages: [
          {
            role: 'user',
            content: `あなたは日本の政治に詳しいアナリストです。以下のユーザーの考えや要望を分析し、最も適合する日本の政党を3つ提案してください。

主要政党: 自由民主党、立憲民主党、日本維新の会、公明党、日本共産党、国民民主党、れいわ新選組、社会民主党

ユーザーの意見:
「${userInput}」

## 分析手順：
1. ユーザーの意見から重要なキーワードと政策課題を抽出
2. 各政党の公式政策・マニフェスト・実績と照らし合わせ
3. 一致度を以下の観点から評価：
   - 政策の方向性の一致度（50点）
   - 具体的施策の一致度（30点）
   - 過去の実績との整合性（20点）
4. 合計点を適合度（%）として算出

## 重要：
- 適合度は必ず上記の評価基準に基づいて算出すること
- 理由には具体的な政策名や公約を含めること
- 各理由の根拠となる情報源を可能な限り具体的に明記すること
  例：「2024年衆院選マニフェスト」「公式サイトの政策ページ」「国会での発言（YYYY年MM月）」など
- 情報源が不確かな場合は「一般的な政策方針として」などと明記すること
- 知識カットオフ（2025年1月）以降の情報は含まれていない可能性があることを認識すること

以下のJSON形式のみで回答してください（他のテキストは一切含めないでください）:
{
  "recommendations": [
    {
      "party": "政党名",
      "match_percentage": 85,
      "reasons": [
        "理由1：具体的な政策名や公約を含む",
        "理由2：具体的な政策名や公約を含む",
        "理由3：具体的な政策名や公約を含む"
      ],
      "policy_matches": [
        {
          "policy_area": "政策分野名（例：教育、経済、外交）",
          "user_position": "ユーザーの立場の要約",
          "party_position": "政党の立場・公約",
          "match_score": 85,
          "source": "根拠となる情報源（例：2024年マニフェスト、公式サイトなど）"
        }
      ],
      "score_breakdown": {
        "policy_direction": 45,
        "concrete_measures": 28,
        "track_record": 18
      }
    }
  ],
  "analysis": "ユーザーの政策志向の詳細な分析（3-4文、抽出したキーワードを含む）"
}`
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'API request failed');
    }

    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
