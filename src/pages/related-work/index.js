import React from 'react';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import SectionHeader from '../../components/SectionHeader';
import SectionContainer from '../../components/SectionContainer';
import { getPaperById } from '../../data/papers';

export default function RelatedWork() {
  const paper = getPaperById('curiosity-driven-imagination');
  
  return (
    <Layout title="関連研究">
      <div className="space-y-8">
        <SectionHeader 
          number="2"
          title="Related Work"
          subtitle="Curiosity-Driven Imaginationに関連する既存研究の概要"
        />
        
        <SectionContainer>
          <div className="prose max-w-none">
            <p>
              本研究は複数の研究分野の交点に位置しています。ここでは、内発的好奇心、想像力ベースの計画、記号的計画と強化学習の統合など、
              関連する主要な研究領域を紹介します。
            </p>
            
            <div className="bg-gradient-to-r from-primary-light to-secondary-light p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary border-b border-primary/20 pb-2">2.1 内発的好奇心（Intrinsic Curiosity）</h3>
              <p className="text-text">
                内発的好奇心は、外部報酬が希少または存在しない環境での探索を促進するメカニズムです。
                以下の研究がこの分野に重要な貢献をしています：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-3 text-text">
                <li>
                  <strong className="text-primary">Pathak et al. (2017)</strong>: 予測誤差を内発的報酬として使用する好奇心駆動型探索手法を提案。
                  環境との相互作用から学習した順モデルの予測誤差を最大化することで、エージェントが未知の状態を探索するよう促します。
                </li>
                <li>
                  <strong className="text-primary">Burda et al. (2019)</strong>: Random Network Distillation (RND)を用いた好奇心ベースの探索手法を提案。
                  固定されたランダムネットワークの出力を予測するモデルの誤差を内発的報酬として使用します。
                </li>
                <li>
                  <strong className="text-primary">Houthooft et al. (2016)</strong>: VIME (Variational Information Maximizing Exploration)を提案。
                  情報理論の観点から、ベイジアンニューラルネットワークを使った情報獲得に基づく探索を行います。
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-secondary-light to-primary-light p-6 rounded-lg shadow-sm border border-secondary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-secondary border-b border-secondary/20 pb-2">2.2 想像力ベースの計画（Imagination-based Planning）</h3>
              <p className="text-text">
                想像力ベースの計画は、エージェントが内部モデルを使って行動結果をシミュレーションし、実際の実行前に計画を評価・改善する手法です：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-3 text-text">
                <li>
                  <strong className="text-secondary">Hamrick et al. (2017)</strong>: モデルベース強化学習における想像力の役割を探求。
                  内部モデルを使った仮想的なロールアウトによる決定木探索を実装しています。
                </li>
                <li>
                  <strong className="text-secondary">Racanière et al. (2017)</strong>: Imagination-Augmented Agents (I2A)を提案。
                  内部モデルを使って複数の可能な未来をシミュレーションし、それらを統合して行動選択を行います。
                </li>
                <li>
                  <strong className="text-secondary">Xie et al. (2021)</strong>: 階層的強化学習に想像力ベースの計画を導入。
                  サブタスク間の依存関係を考慮した効率的な計画生成を可能にしています。
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-accent-light to-primary-light p-6 rounded-lg shadow-sm border border-accent/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-accent border-b border-accent/20 pb-2">2.3 ハイブリッドアプローチ（記号的計画と強化学習の統合）</h3>
              <p className="text-text">
                記号的計画と強化学習を統合するハイブリッドアプローチは、両者の長所を組み合わせる試みです：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-3 text-text">
                <li>
                  <strong className="text-accent">Garnelo et al. (2016)</strong>: 深層強化学習と記号的推論を統合する枠組みを提案。
                  高レベルのタスク計画と低レベルの行動制御を分離しつつ協調させています。
                </li>
                <li>
                  <strong className="text-accent">Yang et al. (2018)</strong>: PEORL (Planning-Execution-Observation Reinforcement Learning)フレームワークを提案。
                  記号的知識を報酬形成に組み込み、効率的な探索を実現しています。
                </li>
                <li>
                  <strong className="text-accent">Groshev et al. (2018)</strong>: 訓練データから学習した関数近似器を使って古典的計画のヒューリスティックを改善する手法を提案。
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-primary-light to-accent-light p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary border-b border-primary/20 pb-2">2.4 報酬機械（Reward Machines）</h3>
              <p className="text-text">
                報酬機械は、複雑な報酬構造を形式的に表現するためのフレームワークです：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-3 text-text">
                <li>
                  <strong className="text-primary">Icarte et al. (2018)</strong>: 強化学習における報酬機械の概念を導入。
                  有限状態オートマトンを使って時間的に拡張された報酬関数を表現しています。
                </li>
                <li>
                  <strong className="text-primary">Toro Icarte et al. (2022)</strong>: 報酬機械の学習と使用を統合したフレームワークを提案。
                  環境との相互作用から報酬機械を自動的に導出します。
                </li>
              </ul>
            </div>
            
            <p className="bg-primary-light border-l-4 border-primary p-4 rounded">
              本研究は、これらの関連研究の知見を統合し発展させることで、未知の環境への素早い適応という課題に取り組んでいます。
              特に、内発的好奇心による効率的な探索と、想像空間での計画評価を組み合わせた点が革新的です。
            </p>
          </div>
        </SectionContainer>
        
        <Navigation 
          paperId="curiosity-driven-imagination"
          currentSectionId="related-work" 
          customLabels={{
            prev: "背景",
            next: "提案手法"
          }}
        />
      </div>
    </Layout>
  );
}