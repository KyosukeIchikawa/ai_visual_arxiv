import Layout from '../../components/Layout';

export default function References() {
  return (
    <Layout title="参考文献">
      <div className="space-y-8">
        <header>
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">参考文献</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Curiosity-Driven Imaginationの研究に関連する文献リスト
          </p>
        </header>

        <section>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              本研究と関連する重要な先行研究と参考文献を以下にまとめています。
              これらの文献は、好奇心駆動型学習、想像力ベースの計画、オープンワールド適応などの分野における重要な貢献を含んでいます。
            </p>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">主要参考文献</h3>
              
              <ul className="space-y-6 list-none pl-0">
                <li className="pb-4 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex flex-col">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">[1] Pathak, D., Agrawal, P., Efros, A. A., & Darrell, T. (2017).</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Curiosity-driven exploration by self-supervised prediction.</span>
                    <span className="text-gray-600 dark:text-gray-300">In International Conference on Machine Learning (ICML) (pp. 2778-2787).</span>
                    <a href="https://arxiv.org/abs/1705.05363" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 mt-1 hover:underline">
                      https://arxiv.org/abs/1705.05363
                    </a>
                  </div>
                </li>
                
                <li className="pb-4 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex flex-col">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">[2] Hafner, D., Lillicrap, T., Ba, J., & Norouzi, M. (2020).</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Dream to control: Learning behaviors by latent imagination.</span>
                    <span className="text-gray-600 dark:text-gray-300">In International Conference on Learning Representations (ICLR).</span>
                    <a href="https://arxiv.org/abs/1912.01603" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 mt-1 hover:underline">
                      https://arxiv.org/abs/1912.01603
                    </a>
                  </div>
                </li>
                
                <li className="pb-4 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex flex-col">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">[3] Ha, D., & Schmidhuber, J. (2018).</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">World models.</span>
                    <span className="text-gray-600 dark:text-gray-300">Neural Computation, 31(2), 274-306.</span>
                    <a href="https://arxiv.org/abs/1803.10122" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 mt-1 hover:underline">
                      https://arxiv.org/abs/1803.10122
                    </a>
                  </div>
                </li>
                
                <li className="pb-4 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex flex-col">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">[4] Racanière, S., Weber, T., Reichert, D., Buesing, L., Guez, A., Rezende, D. J., ... & Pascanu, R. (2017).</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Imagination-augmented agents for deep reinforcement learning.</span>
                    <span className="text-gray-600 dark:text-gray-300">In Advances in Neural Information Processing Systems (NeurIPS) (pp. 5690-5701).</span>
                    <a href="https://arxiv.org/abs/1707.06203" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 mt-1 hover:underline">
                      https://arxiv.org/abs/1707.06203
                    </a>
                  </div>
                </li>
                
                <li className="pb-4 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex flex-col">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">[5] Kaelbling, L. P., & Lozano-Pérez, T. (2013).</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Integrated task and motion planning in belief space.</span>
                    <span className="text-gray-600 dark:text-gray-300">The International Journal of Robotics Research, 32(9-10), 1194-1227.</span>
                    <a href="https://doi.org/10.1177/0278364913484072" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 mt-1 hover:underline">
                      https://doi.org/10.1177/0278364913484072
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">関連研究：内発的好奇心</h3>
              
              <ul className="space-y-6 list-none pl-0">
                <li className="pb-4 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex flex-col">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">[6] Burda, Y., Edwards, H., Storkey, A., & Klimov, O. (2019).</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Exploration by random network distillation.</span>
                    <span className="text-gray-600 dark:text-gray-300">In International Conference on Learning Representations (ICLR).</span>
                    <a href="https://arxiv.org/abs/1810.12894" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 mt-1 hover:underline">
                      https://arxiv.org/abs/1810.12894
                    </a>
                  </div>
                </li>
                
                <li className="pb-4 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex flex-col">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">[7] Savinov, N., Raichuk, A., Marinier, R., Vincent, D., Pollefeys, M., Lillicrap, T., & Gelly, S. (2019).</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Episodic curiosity through reachability.</span>
                    <span className="text-gray-600 dark:text-gray-300">In International Conference on Learning Representations (ICLR).</span>
                    <a href="https://arxiv.org/abs/1810.02274" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 mt-1 hover:underline">
                      https://arxiv.org/abs/1810.02274
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">関連研究：報酬機械と記号的計画</h3>
              
              <ul className="space-y-6 list-none pl-0">
                <li className="pb-4 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex flex-col">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">[8] Icarte, R. T., Klassen, T., Valenzano, R., & McIlraith, S. (2018).</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Using reward machines for high-level task specification and decomposition in reinforcement learning.</span>
                    <span className="text-gray-600 dark:text-gray-300">In International Conference on Machine Learning (ICML) (pp. 2107-2116).</span>
                    <a href="https://proceedings.mlr.press/v80/icarte18a.html" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 mt-1 hover:underline">
                      https://proceedings.mlr.press/v80/icarte18a.html
                    </a>
                  </div>
                </li>
                
                <li className="pb-4 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex flex-col">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">[9] Silver, D., Huang, A., Maddison, C. J., Guez, A., Sifre, L., Van Den Driessche, G., ... & Hassabis, D. (2016).</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Mastering the game of Go with deep neural networks and tree search.</span>
                    <span className="text-gray-600 dark:text-gray-300">Nature, 529(7587), 484-489.</span>
                    <a href="https://doi.org/10.1038/nature16961" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 mt-1 hover:underline">
                      https://doi.org/10.1038/nature16961
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">関連研究：オープンワールド適応</h3>
              
              <ul className="space-y-6 list-none pl-0">
                <li className="pb-4 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex flex-col">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">[10] Finn, C., Abbeel, P., & Levine, S. (2017).</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Model-agnostic meta-learning for fast adaptation of deep networks.</span>
                    <span className="text-gray-600 dark:text-gray-300">In International Conference on Machine Learning (ICML) (pp. 1126-1135).</span>
                    <a href="https://arxiv.org/abs/1703.03400" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 mt-1 hover:underline">
                      https://arxiv.org/abs/1703.03400
                    </a>
                  </div>
                </li>
                
                <li className="pb-4 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex flex-col">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">[11] Peng, X. B., Andrychowicz, M., Zaremba, W., & Abbeel, P. (2018).</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Sim-to-real transfer of robotic control with dynamics randomization.</span>
                    <span className="text-gray-600 dark:text-gray-300">In IEEE International Conference on Robotics and Automation (ICRA) (pp. 1-8).</span>
                    <a href="https://arxiv.org/abs/1710.06537" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 mt-1 hover:underline">
                      https://arxiv.org/abs/1710.06537
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <p className="highlight">
              これらの参考文献は、本研究の基礎となる理論や手法を理解するのに役立ちます。
              特に、内発的好奇心の概念[1, 6, 7]、想像力ベースの行動計画[2, 3, 4]、タスクと動作の統合計画[5, 8]、
              そして環境変化への適応[10, 11]に関する文献は、「Curiosity-Driven Imagination」アプローチの
              理論的背景を深く理解するための重要な資料です。
            </p>
          </div>
        </section>
        
        <div className="flex justify-between mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div>
            <a href="/ai_visual_arxiv/conclusion/" className="text-blue-600 dark:text-blue-400 hover:underline">
              ← 結論
            </a>
          </div>
          <div>
            <a href="/ai_visual_arxiv/" className="text-blue-600 dark:text-blue-400 hover:underline">
              トップページ →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}