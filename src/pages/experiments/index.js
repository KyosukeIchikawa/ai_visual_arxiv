import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Experiments() {
  return (
    <Layout title="実験と結果">
      <div className="space-y-8">
        <header>
          <h1 className="text-3xl font-bold mb-4 text-primary">4. 実験</h1>
          <p className="text-lg text-primary">
            Curiosity-Driven Imaginationの評価と検証
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary">4.1 実験設定</h2>
          <div className="prose max-w-none">
            <p>
              提案手法の有効性を評価するために、以下の実験設定が用いられました。
              これらの実験は、動的で不確実なオープンワールド環境での適応能力を検証することを目的としています。
            </p>
            
            <div className="bg-gradient-to-r from-primary-light to-secondary-light p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">4.1.1 実験環境</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-medium mb-2 text-primary">ロボット操作ドメイン</h4>
                  <p className="text-text">
                    物理シミュレーション環境内のロボットアームが、様々なオブジェクトを操作するタスクを行います。
                    環境内には複数のオブジェクト（ブロック、球、カップなど）があり、それらを移動、積み重ね、または特定の位置に配置するタスクが課されます。
                  </p>
                </div>
                
                <figure className="text-center">
                  <div className="bg-white p-4 rounded-lg mb-2 shadow-inner">
                    {/* ロボット操作環境の図（簡略化した表現） */}
                    <div className="aspect-w-16 aspect-h-9 bg-gradient-to-b from-primary-light to-primary-light rounded-lg relative">
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gray-300 rounded"></div>
                      <div className="absolute bottom-4 left-1/4 w-2 h-20 bg-primary rounded"></div>
                      <div className="absolute bottom-24 left-1/4 w-24 h-2 bg-primary rounded-l"></div>
                      <div className="absolute bottom-24 left-1/4 transform translate-x-24 w-8 h-12 bg-primary rounded"></div>
                      
                      {/* オブジェクト */}
                      <div className="absolute bottom-6 left-1/2 w-6 h-6 bg-accent rounded"></div>
                      <div className="absolute bottom-6 left-2/3 w-6 h-6 bg-secondary rounded-full"></div>
                      <div className="absolute bottom-6 right-1/4 w-8 h-4 bg-amber-500 rounded-t"></div>
                    </div>
                  </div>
                  <figcaption className="text-sm text-primary">図1: ロボット操作実験環境の概念図</figcaption>
                </figure>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-primary">4.1.2 タスクと逐次的新規性注入</h3>
              
              <p className="text-text mb-4">
                実験では、<span className="text-primary font-medium">逐次的新規性注入（Sequential Novelty Injections）</span>という手法が用いられました。
                これは、エージェントが学習過程で徐々に新しい状況や課題に直面することを意味します。具体的には以下のようなシナリオが設定されました：
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-primary-light">
                      <th className="px-4 py-2 border border-primary/20 text-left text-primary">フェーズ</th>
                      <th className="px-4 py-2 border border-primary/20 text-left text-primary">環境の変化</th>
                      <th className="px-4 py-2 border border-primary/20 text-left text-primary">適応課題</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-4 py-2 border border-primary/20 font-medium text-primary">初期段階</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">基本的なブロック操作タスク</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">基本的な物体把持と配置を学習</td>
                    </tr>
                    <tr className="bg-primary-light/30">
                      <td className="px-4 py-2 border border-primary/20 font-medium text-primary">新規性注入 1</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">新しい形状のオブジェクトの導入</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">異なる把持戦略の必要性</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2 border border-primary/20 font-medium text-primary">新規性注入 2</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">オブジェクトの物理特性変化（重さ、摩擦）</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">力制御と動作計画の調整</td>
                    </tr>
                    <tr className="bg-primary-light/30">
                      <td className="px-4 py-2 border border-primary/20 font-medium text-primary">新規性注入 3</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">障害物の追加と環境の制約</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">障害物回避と代替経路計画</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2 border border-primary/20 font-medium text-primary">新規性注入 4</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">動的に変化するオブジェクトと相互作用</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">予測不可能な変化への対応</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-primary">4.1.3 比較手法</h3>
            <p>
              提案手法の効果を評価するために、以下の比較手法が実装されました：
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gradient-to-br from-primary-light to-secondary-light p-4 rounded-lg shadow-sm border border-primary/20">
                <h4 className="text-lg font-medium mb-2 text-primary">従来のTAMPアプローチ</h4>
                <ul className="list-disc pl-6 space-y-1 text-text">
                  <li>記号的計画（Symbolic Planning）に基づく高レベル計画</li>
                  <li>事前定義されたオペレータセット</li>
                  <li>動作計画のためのサンプリングベース手法</li>
                  <li>内部モデルはあるが、想像空間での計画生成はなし</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-secondary-light to-primary-light p-4 rounded-lg shadow-sm border border-secondary/20">
                <h4 className="text-lg font-medium mb-2 text-secondary">標準的な強化学習アプローチ</h4>
                <ul className="list-disc pl-6 space-y-1 text-text">
                  <li>深層強化学習（Deep Reinforcement Learning, Deep RL）</li>
                  <li>内発的報酬を用いない標準的な手法</li>
                  <li>階層的強化学習（Hierarchical Reinforcement Learning, HRL）</li>
                  <li>モデルベース強化学習（Model-Based Reinforcement Learning）（但し想像空間なし）</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-accent-light to-primary-light p-4 rounded-lg shadow-sm border border-accent/20">
              <h4 className="text-lg font-medium mb-2 text-accent">提案手法の変種</h4>
              <ul className="list-disc pl-6 space-y-1 text-text">
                <li><strong className="text-primary">ICMのみ</strong>：好奇心駆動型探索は使用するが、想像空間でのシミュレーションなし</li>
                <li><strong className="text-accent">想像空間のみ</strong>：内部モデルでのシミュレーションは行うが、好奇心駆動型探索なし</li>
                <li><strong className="text-primary">フル提案手法（ICM + 想像空間 + 報酬機械）</strong>：本論文の提案手法</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-bold mb-3 mt-6 text-primary">4.1.4 評価指標</h3>
            <p>
              以下の指標を用いて各手法の性能を評価しました：
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-text my-4">
              <li><strong className="text-primary">タスク達成率</strong>：各フェーズでタスクを正常に完了できた割合</li>
              <li><strong className="text-primary">適応時間</strong>：新規性注入後、元のパフォーマンスレベルに回復するまでに要したエピソード数</li>
              <li><strong className="text-secondary">サンプル効率</strong>：一定のパフォーマンスレベルに達するために必要なサンプル数</li>
              <li><strong className="text-accent">新規オペレータ発見率</strong>：システムが自動的に発見できた新しいオペレータの数</li>
              <li><strong className="text-primary">ロバスト性</strong>：環境の変動に対するパフォーマンスの安定性</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary">4.2 実験結果</h2>
          <div className="prose max-w-none">
            <p>
              実験結果は、提案手法「Curiosity-Driven Imagination」が従来のアプローチと比較して、
              オープンワールド環境での適応能力において優れていることを示しました。
            </p>
            
            <div className="bg-gradient-to-r from-primary-light to-secondary-light p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">4.2.1 主要な実験結果</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2 text-primary">タスク達成率</h4>
                
                <figure className="text-center">
                  <div className="bg-white p-4 rounded-lg mb-2 shadow-inner">
                    {/* タスク達成率のグラフ（簡略化した表現） */}
                    <div className="h-64 w-full bg-gradient-to-b from-white to-primary-light rounded-lg relative">
                      {/* Y軸 */}
                      <div className="absolute h-full w-px bg-gray-400 left-16"></div>
                      <div className="absolute left-6 top-0 text-xs text-primary">100%</div>
                      <div className="absolute left-6 top-1/4 text-xs text-primary">75%</div>
                      <div className="absolute left-6 top-1/2 text-xs text-primary">50%</div>
                      <div className="absolute left-6 top-3/4 text-xs text-primary">25%</div>
                      <div className="absolute left-6 bottom-0 text-xs text-primary">0%</div>
                      
                      {/* X軸 */}
                      <div className="absolute w-full h-px bg-gray-400 bottom-8 left-16"></div>
                      <div className="absolute bottom-2 left-16 text-xs text-primary">初期</div>
                      <div className="absolute bottom-2 left-1/3 text-xs text-primary">注入1</div>
                      <div className="absolute bottom-2 left-1/2 text-xs text-primary">注入2</div>
                      <div className="absolute bottom-2 left-2/3 text-xs text-primary">注入3</div>
                      <div className="absolute bottom-2 right-8 text-xs text-primary">注入4</div>
                      
                      {/* 提案手法の線 */}
                      <div className="absolute left-16 top-12 w-4/5 h-px bg-primary" style={{ transform: 'rotate(-5deg)' }}></div>
                      <div className="absolute left-[calc(16px+20%)] top-16 w-[20%] h-px bg-primary" style={{ transform: 'rotate(-25deg)' }}></div>
                      <div className="absolute left-[calc(16px+40%)] top-24 w-[20%] h-px bg-primary" style={{ transform: 'rotate(-15deg)' }}></div>
                      <div className="absolute left-[calc(16px+60%)] top-28 w-[20%] h-px bg-primary" style={{ transform: 'rotate(-10deg)' }}></div>
                      
                      {/* 比較手法の線 */}
                      <div className="absolute left-16 top-12 w-[20%] h-px bg-secondary" style={{ transform: 'rotate(-5deg)' }}></div>
                      <div className="absolute left-[calc(16px+20%)] top-16 w-[20%] h-px bg-secondary" style={{ transform: 'rotate(-45deg)' }}></div>
                      <div className="absolute left-[calc(16px+40%)] top-48 w-[20%] h-px bg-secondary" style={{ transform: 'rotate(-10deg)' }}></div>
                      <div className="absolute left-[calc(16px+60%)] top-52 w-[20%] h-px bg-secondary" style={{ transform: 'rotate(-5deg)' }}></div>
                      
                      {/* 凡例 */}
                      <div className="absolute top-2 right-2 flex items-center">
                        <div className="w-4 h-px bg-primary mr-1"></div>
                        <span className="text-xs text-primary">提案手法</span>
                      </div>
                      <div className="absolute top-6 right-2 flex items-center">
                        <div className="w-4 h-px bg-secondary mr-1"></div>
                        <span className="text-xs text-secondary">比較手法</span>
                      </div>
                    </div>
                  </div>
                  <figcaption className="text-sm text-primary">図2: 各フェーズでのタスク達成率の比較</figcaption>
                </figure>
                
                <p className="text-text mt-4">
                  提案手法は、新規性注入後の性能低下が比較手法より小さく、迅速に元のパフォーマンスレベルに回復しました。
                  特に、3回目と4回目の新規性注入後も80%以上のタスク達成率を維持した一方、従来のアプローチは50%以下まで低下しました。
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2 text-primary">適応時間</h4>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-primary-light">
                        <th className="px-4 py-2 border border-primary/20 text-left text-primary">手法</th>
                        <th className="px-4 py-2 border border-primary/20 text-center text-primary">注入1</th>
                        <th className="px-4 py-2 border border-primary/20 text-center text-primary">注入2</th>
                        <th className="px-4 py-2 border border-primary/20 text-center text-primary">注入3</th>
                        <th className="px-4 py-2 border border-primary/20 text-center text-primary">注入4</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-4 py-2 border border-primary/20 font-medium text-primary">提案手法</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-primary">12エピソード</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-primary">18エピソード</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-primary">25エピソード</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-primary">30エピソード</td>
                      </tr>
                      <tr className="bg-primary-light/30">
                        <td className="px-4 py-2 border border-primary/20 font-medium text-primary">TAMP</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-primary">35エピソード</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-primary">60エピソード</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-primary">90エピソード</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-primary">120+エピソード</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-2 border border-primary/20 font-medium text-secondary">標準RL</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-secondary">45エピソード</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-secondary">80エピソード</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-secondary">100+エピソード</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-secondary">120+エピソード</td>
                      </tr>
                      <tr className="bg-primary-light/30">
                        <td className="px-4 py-2 border border-primary/20 font-medium text-primary">ICMのみ</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-primary">20エピソード</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-primary">35エピソード</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-primary">50エピソード</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-primary">65エピソード</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-2 border border-primary/20 font-medium text-accent">想像空間のみ</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-accent">25エピソード</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-accent">40エピソード</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-accent">55エピソード</td>
                        <td className="px-4 py-2 border border-primary/20 text-center text-accent">70エピソード</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-text mt-4">
                  適応時間（元のパフォーマンスレベルに回復するまでに要したエピソード数）において、
                  提案手法は従来のアプローチと比較して3〜4倍の速さで適応できました。
                  特に複雑な状況（注入3、4）での適応速度の差が顕著でした。
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2 text-primary">オペレータ発見能力</h4>
                
                <p className="text-text mb-4">
                  新規性注入後、提案手法は以下のような新しいオペレータを自動的に発見し学習しました：
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-text">
                  <li>
                    <strong className="text-primary">異なる把持戦略</strong>：新しい形状のオブジェクトに対して、適切な把持位置と力の制御方法を発見
                  </li>
                  <li>
                    <strong className="text-primary">障害物回避行動</strong>：障害物を検知し、最適な回避経路を生成するオペレータを学習
                  </li>
                  <li>
                    <strong className="text-accent">複合行動</strong>：基本オペレータを組み合わせた効率的な行動シーケンスを発見
                  </li>
                  <li>
                    <strong className="text-secondary">適応的制御</strong>：オブジェクトの物理特性に応じて動きの速度と力を調整するオペレータを学習
                  </li>
                </ul>
                
                <p className="text-text mt-4">
                  提案手法は平均して各新規性注入後に3〜5個の新しいオペレータを発見できた一方、
                  従来のTAMPアプローチは事前定義されたオペレータのみを使用し、標準的な強化学習は明示的なオペレータを形成しませんでした。
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-primary">4.2.2 コンポーネント分析</h3>
            
            <p>
              提案手法の各コンポーネントの貢献を評価するために、異なる変種の比較実験が行われました：
            </p>
            
            <div className="bg-gradient-to-r from-secondary-light to-accent-light p-6 rounded-lg shadow-sm border border-secondary/20 my-6">
              <figure className="text-center">
                <div className="bg-white p-4 rounded-lg mb-2 shadow-inner">
                  {/* コンポーネント分析のグラフ（簡略化した表現） */}
                  <div className="h-64 w-full bg-gradient-to-b from-white to-primary-light rounded-lg relative">
                    {/* Y軸 - サンプル効率 */}
                    <div className="absolute h-full w-px bg-gray-400 left-16"></div>
                    <div className="absolute left-2 top-1/2 transform -rotate-90 origin-left text-xs text-primary">サンプル効率</div>
                    
                    {/* X軸 - 適応能力 */}
                    <div className="absolute w-full h-px bg-gray-400 bottom-8 left-16"></div>
                    <div className="absolute bottom-2 left-1/2 text-xs text-primary">適応能力</div>
                    
                    {/* 各手法のプロット */}
                    <div className="absolute left-24 bottom-16 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="absolute left-40 bottom-24 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="absolute left-56 bottom-32 w-4 h-4 rounded-full bg-accent"></div>
                    <div className="absolute left-72 bottom-48 w-4 h-4 rounded-full bg-secondary"></div>
                    <div className="absolute left-96 bottom-40 w-4 h-4 rounded-full bg-primary"></div>
                    
                    {/* 凡例 */}
                    <div className="absolute top-2 right-2 space-y-1 text-xs">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-primary mr-1"></div>
                        <span className="text-primary">フル提案手法</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-primary mr-1"></div>
                        <span className="text-primary">ICMのみ</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-accent mr-1"></div>
                        <span className="text-accent">想像空間のみ</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-secondary mr-1"></div>
                        <span className="text-secondary">標準RL</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-primary mr-1"></div>
                        <span className="text-primary">TAMP</span>
                      </div>
                    </div>
                  </div>
                </div>
                <figcaption className="text-sm text-primary">図3: 各手法のサンプル効率と適応能力の比較</figcaption>
              </figure>
              
              <div className="mt-4">
                <h4 className="text-lg font-medium mb-2 text-primary">分析結果</h4>
                <ul className="list-disc pl-6 space-y-2 text-text">
                  <li>
                    <strong className="text-primary">ICMの貢献</strong>：好奇心駆動型探索により、新規性の高い状況への積極的な探索が促進され、
                    環境の変化に対する適応速度が向上しました。ICMのみの変種は標準RLより大幅に適応が速かったですが、
                    フル提案手法には及びませんでした。
                  </li>
                  <li>
                    <strong className="text-accent">想像空間の貢献</strong>：内部シミュレーションにより、実際の試行錯誤なしに多数の行動計画を評価でき、
                    サンプル効率が大幅に向上しました。想像空間のみの変種はTAMPより効率的でしたが、
                    好奇心駆動型探索がないため新規状況での効率は劣りました。
                  </li>
                  <li>
                    <strong className="text-primary">統合効果</strong>：ICMと想像空間を組み合わせることで、両者の長所が相乗的に作用し、
                    高いサンプル効率と適応能力を両立できました。特に、ICMが興味深い状況を特定し、
                    想像空間でその状況を詳細に検討することで、効率的かつ効果的な学習が実現しました。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <div className="flex justify-between mt-10 pt-6 border-t border-primary/10">
          <div>
            <Link href="/method/">
              <a className="text-primary hover:text-primary-800 hover:underline flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                提案手法
              </a>
            </Link>
          </div>
          <div>
            <Link href="/results/">
              <a className="text-primary hover:text-primary-800 hover:underline flex items-center">
                結果と分析
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
