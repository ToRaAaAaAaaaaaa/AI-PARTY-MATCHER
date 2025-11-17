import React, { useState } from 'react';
import { Send, Loader2, RefreshCw } from 'lucide-react';

const AIPartyMatcher = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const analyzeInput = async () => {
    if (!input.trim()) {
      alert('政治や政策に関する考えを入力してください');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('http://localhost:3001/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userInput: input
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'APIからの応答が不正です');
      }

      if (!data.content || !data.content[0]) {
        throw new Error('APIからの応答が不正です');
      }

      let responseText = data.content[0].text;

      // JSONの抽出（マークダウンのコードブロックを除去）
      responseText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

      const parsed = JSON.parse(responseText);
      setResult(parsed);

    } catch (err) {
      console.error('エラー:', err);
      setError('分析中にエラーが発生しました。もう一度お試しください。');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setInput('');
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-indigo-900 mb-3">
              AI政党マッチング
            </h1>
            <p className="text-gray-600">
              あなたの考えや重視する政策をAIが分析し、最適な政党を提案します
            </p>
          </div>

          {!result ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  あなたの政治的な考えや重視する政策を自由に入力してください
                </label>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="例: 教育費を無償化してほしい。子育て世帯への支援を充実させて、将来への不安をなくしたい。環境問題にも真剣に取り組んでほしい。"
                  className="w-full h-40 p-4 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none resize-none text-gray-800"
                  disabled={loading}
                />
                <p className="text-xs text-gray-500 mt-2">
                  💡 複数の政策について書くと、より正確な分析ができます
                </p>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700">
                  {error}
                </div>
              )}

              <button
                onClick={analyzeInput}
                disabled={loading || !input.trim()}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                  loading || !input.trim()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    AIが分析中...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    AIに分析してもらう
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200">
                <h3 className="text-lg font-bold text-indigo-900 mb-2">
                  あなたの政策志向の分析
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {result.analysis}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                  おすすめの政党
                </h2>

                <div className="space-y-4">
                  {result.recommendations.map((rec, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl border-2 bg-white hover:shadow-lg transition-all"
                      style={{
                        borderColor: index === 0 ? '#818cf8' : index === 1 ? '#a78bfa' : '#c4b5fd',
                        backgroundColor: index === 0 ? '#f5f3ff' : '#faf5ff'
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-gray-800">
                          {index === 0 && '🥇 '}
                          {index === 1 && '🥈 '}
                          {index === 2 && '🥉 '}
                          {rec.party}
                        </h3>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">適合度</div>
                          <div className="text-3xl font-bold text-indigo-600">
                            {rec.match_percentage}%
                          </div>
                        </div>
                      </div>

                      {rec.score_breakdown && (
                        <div className="mb-4 p-3 bg-white rounded-lg border border-indigo-200">
                          <p className="text-xs font-semibold text-gray-600 mb-2">適合度の内訳:</p>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div>政策方向性: {rec.score_breakdown.policy_direction}/50点</div>
                            <div>具体的施策: {rec.score_breakdown.concrete_measures}/30点</div>
                            <div>過去の実績: {rec.score_breakdown.track_record}/20点</div>
                          </div>
                        </div>
                      )}

                      <div className="space-y-2 mb-4">
                        <p className="text-sm font-semibold text-gray-700">
                          おすすめする理由:
                        </p>
                        <ul className="space-y-1">
                          {rec.reasons.map((reason, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <span className="text-indigo-600 mt-1">•</span>
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {rec.policy_matches && rec.policy_matches.length > 0 && (
                        <div className="space-y-3">
                          <p className="text-sm font-semibold text-gray-700">
                            政策別の詳細分析:
                          </p>
                          {rec.policy_matches.map((policy, idx) => (
                            <div key={idx} className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-sm text-indigo-900">
                                  {policy.policy_area}
                                </h4>
                                <span className="text-xs font-bold text-indigo-600">
                                  一致度: {policy.match_score}%
                                </span>
                              </div>
                              <div className="space-y-1 text-xs text-gray-700">
                                <p><span className="font-semibold">あなたの立場:</span> {policy.user_position}</p>
                                <p><span className="font-semibold">政党の立場:</span> {policy.party_position}</p>
                                {policy.source && (
                                  <p className="text-gray-500 italic">出典: {policy.source}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    ⚠️ ご利用上の注意
                  </p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• この分析結果はAI（Claude）による参考情報です</li>
                    <li>• AIの知識は2025年1月時点のものであり、最新の政策や公約を反映していない可能性があります</li>
                    <li>• 実際の投票判断には、必ず各政党の公式サイトやマニフェストを直接確認してください</li>
                    <li>• 情報源として記載されている内容は、AIの学習データに基づく推定を含む場合があります</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={reset}
                className="w-full py-4 rounded-lg font-bold text-lg bg-gray-600 text-white hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                もう一度診断する
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Powered by Claude AI</p>
        </div>
      </div>
    </div>
  );
};

export default AIPartyMatcher;
