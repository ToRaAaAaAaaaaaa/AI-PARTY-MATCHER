import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, RefreshCw, Users, Building2 } from 'lucide-react';

const AIPartyMatcher = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const textareaRef = useRef(null);

  // 改行数に応じてテキストエリアの高さを調整（最小160px、最大400px）
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const lineCount = (input.match(/\n/g) || []).length + 1;
      const lineHeight = 24; // 1行あたりの高さ（px）
      const padding = 32; // 上下パディング
      const baseHeight = 40; // 初期の高さ

      // 改行数に基づいて高さを計算（最大400px）
      const calculatedHeight = Math.max(baseHeight, lineCount * lineHeight + padding);
      textarea.style.height = Math.min(calculatedHeight, 400) + 'px';
    }
  }, [input]);

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
              AI政党・候補者マッチング
            </h1>
            <p className="text-gray-600">
              あなたの考えをAIが分析し、最適な政党と候補者を同時に提案します
            </p>
          </div>

          {!result ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  あなたの政治的な考えや重視する政策を自由に入力してください
                </label>
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="例: 教育費を無償化してほしい。子育て世帯への支援を充実させて、将来への不安をなくしたい。環境問題にも真剣に取り組んでほしい。"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none resize-none text-gray-800 transition-all duration-200"
                  style={{ minHeight: '40px', maxHeight: '400px' }}
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
            <div className="space-y-8">
              {/* 分析結果 */}
              <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200">
                <h3 className="text-lg font-bold text-indigo-900 mb-2">
                  あなたの政策志向の分析
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {result.analysis}
                </p>
              </div>

              {/* 政党マッチング結果 */}
              <div>
                <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-6 h-6" />
                  おすすめの政党
                </h2>
                <div className="space-y-4">
                  {result.party_recommendations?.map((rec, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-xl border-2 bg-white hover:shadow-lg transition-all"
                      style={{
                        borderColor: index === 0 ? '#818cf8' : index === 1 ? '#a78bfa' : '#c4b5fd',
                        backgroundColor: index === 0 ? '#f5f3ff' : '#faf5ff'
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-800">
                          {index === 0 && '🥇 '}
                          {index === 1 && '🥈 '}
                          {index === 2 && '🥉 '}
                          {rec.party}
                        </h3>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">適合度</div>
                          <div className="text-2xl font-bold text-indigo-600">
                            {rec.match_percentage}%
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <ul className="space-y-1">
                          {rec.reasons?.map((reason, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="text-indigo-600 mt-0.5">•</span>
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>

                        {rec.key_policies && rec.key_policies.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {rec.key_policies.map((policy, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full"
                              >
                                {policy}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 候補者マッチング結果 */}
              <div>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  おすすめの候補者
                </h2>
                <div className="space-y-4">
                  {result.candidate_recommendations?.map((rec, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-xl border-2 bg-white hover:shadow-lg transition-all"
                      style={{
                        borderColor: index === 0 ? '#10b981' : index === 1 ? '#34d399' : '#6ee7b7',
                        backgroundColor: index === 0 ? '#ecfdf5' : '#f0fdf4'
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {index === 0 && '🥇 '}
                            {index === 1 && '🥈 '}
                            {index === 2 && '🥉 '}
                            {rec.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {rec.party} / {rec.district}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">適合度</div>
                          <div className="text-2xl font-bold text-emerald-600">
                            {rec.match_percentage}%
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <ul className="space-y-1">
                          {rec.reasons?.map((reason, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="text-emerald-600 mt-0.5">•</span>
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>

                        {rec.matching_stances && rec.matching_stances.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {rec.matching_stances.map((stance, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                              >
                                {stance}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 注意事項 */}
              <div className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  ⚠️ ご利用上の注意
                </p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• この分析結果はAI（Claude）による参考情報です</li>
                  <li>• 候補者データはデモ用の架空データです</li>
                  <li>• 実際の投票判断には、必ず各政党・候補者の公式情報を直接確認してください</li>
                </ul>
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
