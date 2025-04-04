import Layout from '../components/Layout';
import Link from 'next/link';
import PaperHeader from '../components/PaperHeader';
import StartReadingButton from '../components/StartReadingButton';
import { useEffect, useState } from 'react';
import { getPaperById } from '../data/papers';

export default function Home() {
  // 画面サイズの状態を管理
  const [isMobile, setIsMobile] = useState(false);

  // 画面サイズの変更を監視
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // 初期値を設定
    handleResize();
    
    // リサイズイベントのリスナーを追加
    window.addEventListener('resize', handleResize);
    
    // クリーンアップ関数
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 論文情報の取得
  const paper = getPaperById('curiosity-driven-imagination');
  const paperInfo = {
    title: paper.fullTitle, // フルタイトルを使用
    jaTitle: paper.jaTitle, // 日本語タイトルを追加
    subtitle: paper.subtitle,
    authors: paper.authors,
    affiliations: paper.affiliations,
    authorsWithAffiliations: paper.authorsWithAffiliations, // 所属情報付き著者を追加
    conference: paper.conference,
    publicationDate: paper.publicationDate
  };

  return (
    <Layout title="トップページ">
      <div className="space-y-8">
        {/* 論文ヘッダー */}
        <PaperHeader 
          title={paperInfo.title}
          jaTitle={paperInfo.jaTitle}
          authors={paperInfo.authors}
          affiliations={paperInfo.affiliations}
          authorsWithAffiliations={paperInfo.authorsWithAffiliations}
          paperUrl={paper.arxivLink}
        />

        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary/20 pb-2">Abstract（論文概要）</h2>
          <div className="bg-gradient-to-br from-primary-light to-secondary-light p-6 rounded-lg shadow-sm border border-primary/20">
            <p className="text-text leading-relaxed">
              本論文は、動的で不確実なオープンワールド環境に迅速に適応するためのロボットシステムを提案しています。
              提案手法「Curiosity-Driven Imagination（好奇心駆動型想像力）」は、内発的好奇心モジュール（ICM: Intrinsic Curiosity Module）を活用して
              環境への好奇心を刺激し、想像空間内で新しい行動計画を生成・検証することで、未知の状況への適応能力を高めます。
              従来のTask and Motion Planning（TAMP）アプローチと比較して、より効率的かつ柔軟な環境適応を実現しています。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary/20 pb-2">Key Contributions（主要な貢献）</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white to-secondary-light p-6 rounded-lg shadow-md border-t-4 border-secondary hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-secondary">Curiosity-Driven Learning</h3>
              <p className="text-text">
                内発的好奇心モジュール（ICM）により、ロボットが自律的に環境を探索し、興味深い新しい経験を優先的に獲得する仕組みを確立。
                予測誤差を好奇心の指標として活用することで、効率的な環境理解を促進します。
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-accent-light p-6 rounded-lg shadow-md border-t-4 border-accent hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-accent">Imagination-Based Planning</h3>
              <p className="text-text">
                実世界での試行錯誤なしに、想像空間内で新しい行動計画を生成・評価する能力を実現。
                これにより、実際の実行前に多様な可能性を安全に検討でき、適応の効率性が大幅に向上します。
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-primary-light p-6 rounded-lg shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary">Bi-Level Architecture</h3>
              <p className="text-text">
                低レベルの学習ベースコンポーネントと高レベルの記号的計画コンポーネントを統合した革新的なハイブリッドアーキテクチャを提案。
                両アプローチの長所を組み合わせることで、より効果的な意思決定を実現します。
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-secondary-light p-6 rounded-lg shadow-md border-t-4 border-secondary hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-secondary">Novelty Adaptation Capability</h3>
              <p className="text-text">
                従来のアプローチでは困難であった新規の課題や状況に素早く適応する能力を実証。
                実験では「Shift」と「Disruption」の2種類の環境変化に対する適応能力を検証しています。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary/20 pb-2">Research Context（研究の位置づけ）</h2>
          <div className="bg-gradient-to-br from-white to-primary-light p-6 rounded-lg shadow-md border border-primary/20">
            <p className="text-text mb-4">
              本研究は、以下の研究分野に重要な貢献をしています：
            </p>
            <ul className="list-disc pl-6 space-y-3 text-text">
              <li><span className="font-semibold text-primary">Robotics</span>：実世界でのロボットタスク実行における適応能力の向上</li>
              <li><span className="font-semibold text-secondary">Reinforcement Learning</span>：好奇心駆動型探索による効率的な学習アプローチ</li>
              <li><span className="font-semibold text-accent">Symbolic AI</span>：記号的計画と学習ベースの手法の統合</li>
              <li><span className="font-semibold text-secondary">Cognitive Robotics</span>：想像力を模倣した内部モデルの活用</li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary/20 pb-2">Paper Sections（論文セクション）</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/background/" className="no-underline">
              <div className="bg-gradient-to-br from-white to-primary-light p-5 rounded-lg shadow-sm border border-primary/20 hover:shadow-md transition-shadow duration-300 h-full">
                <h3 className="text-xl font-semibold mb-2 text-primary">I. Background</h3>
                <p className="text-text">
                  オープンワールド環境におけるロボット適応の課題と従来アプローチの限界について解説します。
                </p>
              </div>
            </Link>
            
            <Link href="/related-work/" className="no-underline">
              <div className="bg-gradient-to-br from-white to-primary-light p-5 rounded-lg shadow-sm border border-primary/20 hover:shadow-md transition-shadow duration-300 h-full">
                <h3 className="text-xl font-semibold mb-2 text-primary">II. Related Work</h3>
                <p className="text-text">
                  内発的好奇心、想像力ベースの計画、ハイブリッドアプローチなど、関連する研究分野を紹介します。
                </p>
              </div>
            </Link>
            
            <Link href="/method/" className="no-underline">
              <div className="bg-gradient-to-br from-white to-accent-light p-5 rounded-lg shadow-sm border border-accent/20 hover:shadow-md transition-shadow duration-300 h-full">
                <h3 className="text-xl font-semibold mb-2 text-accent">IV. Proposed Method</h3>
                <p className="text-text">
                  Curiosity-Driven Imaginationフレームワークのアーキテクチャとコンポーネントについて詳述します。
                </p>
              </div>
            </Link>
            
            <Link href="/experiments/" className="no-underline">
              <div className="bg-gradient-to-br from-white to-secondary-light p-5 rounded-lg shadow-sm border border-secondary/20 hover:shadow-md transition-shadow duration-300 h-full">
                <h3 className="text-xl font-semibold mb-2 text-secondary">V. Experiments</h3>
                <p className="text-text">
                  提案手法を評価するためのタスク環境設計と実験条件について説明します。
                </p>
              </div>
            </Link>
            
            <Link href="/results/" className="no-underline">
              <div className="bg-gradient-to-br from-white to-secondary-light p-5 rounded-lg shadow-sm border border-secondary/20 hover:shadow-md transition-shadow duration-300 h-full">
                <h3 className="text-xl font-semibold mb-2 text-secondary">VI. Results and Analysis</h3>
                <p className="text-text">
                  性能評価の結果と比較手法に対する優位性の分析を提示します。
                </p>
              </div>
            </Link>
            
            <Link href="/discussion/" className="no-underline">
              <div className="bg-gradient-to-br from-white to-accent-light p-5 rounded-lg shadow-sm border border-accent/20 hover:shadow-md transition-shadow duration-300 h-full">
                <h3 className="text-xl font-semibold mb-2 text-accent">VII. Discussion</h3>
                <p className="text-text">
                  実験結果からの知見と、提案手法の長所・限界についての議論を展開します。
                </p>
              </div>
            </Link>
          </div>
        </section>
        
        <section className="mt-12 bg-gradient-to-br from-primary-light to-secondary-light p-6 rounded-lg shadow-sm border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-primary">Framework Overview（概念図）</h2>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="border-2 border-primary/20 rounded-lg p-4 bg-gradient-to-br from-white to-primary-light">
              {/* モジュール構成を表現するための図 */}
              <div className="flex flex-col space-y-4">
                {/* タイトル */}
                <div className="w-full py-3 px-4 md:py-4 md:px-6 bg-gradient-to-r from-primary to-primary rounded-lg border border-primary text-center font-semibold shadow-sm text-white">
                  <div className="text-sm md:text-base">Curiosity-Driven Imagination Framework</div>
                </div>
                
                {/* メインコンテンツ - モバイルでは縦並び、デスクトップでは横並び */}
                <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-3 gap-4'}`}>
                  {/* 左側のモジュール */}
                  <div className="flex flex-col space-y-3 md:space-y-4">
                    <div className="p-2 md:p-3 bg-gradient-to-br from-secondary-light to-secondary-light rounded-lg border border-secondary text-center shadow-sm">
                      <div className="font-medium text-sm md:text-base">Intrinsic Curiosity Module</div>
                      <div className="text-xs mt-1 text-text">内発的好奇心モジュール</div>
                    </div>
                    
                    <div className="p-2 md:p-3 bg-gradient-to-br from-primary-light to-primary-light rounded-lg border border-primary text-center shadow-sm">
                      <div className="font-medium text-sm md:text-base">State Transition Model</div>
                      <div className="text-xs mt-1 text-text">状態遷移モデル</div>
                    </div>
                    
                    {/* モバイル表示時の中央から右向き矢印 */}
                    {isMobile && (
                      <div className="flex justify-center py-1">
                        <span className="text-primary text-xl">↓</span>
                      </div>
                    )}
                  </div>
                  
                  {/* 中央のモジュール */}
                  <div className="flex flex-col space-y-3 md:space-y-4">
                    <div className="p-2 md:p-3 bg-gradient-to-br from-accent-light to-accent-light rounded-lg border border-accent text-center shadow-sm">
                      <div className="font-medium text-sm md:text-base">Imagination Space</div>
                      <div className="text-xs mt-1 text-text">想像空間</div>
                    </div>
                    
                    <div className="p-2 md:p-3 bg-gradient-to-br from-accent-light to-accent-light rounded-lg border border-accent text-center shadow-sm">
                      <div className="font-medium text-sm md:text-base">Reward Machine</div>
                      <div className="text-xs mt-1 text-text">報酬機械</div>
                    </div>
                    
                    {/* モバイル表示時の中央から右向き矢印 */}
                    {isMobile && (
                      <div className="flex justify-center py-1">
                        <span className="text-primary text-xl">↓</span>
                      </div>
                    )}
                  </div>
                  
                  {/* 右側のモジュール */}
                  <div className="flex flex-col space-y-3 md:space-y-4">
                    <div className="p-2 md:p-3 bg-gradient-to-br from-primary-light to-primary-light rounded-lg border border-primary text-center shadow-sm">
                      <div className="font-medium text-sm md:text-base">Operator Discovery</div>
                      <div className="text-xs mt-1 text-text">オペレータ発見</div>
                    </div>
                    
                    <div className="p-2 md:p-3 bg-gradient-to-br from-secondary-light to-secondary-light rounded-lg border border-secondary text-center shadow-sm">
                      <div className="font-medium text-sm md:text-base">Policy Learning</div>
                      <div className="text-xs mt-1 text-text">政策学習</div>
                    </div>
                  </div>
                </div>
                
                {/* 非モバイル表示時の水平接続矢印 */}
                {!isMobile && (
                  <div className="relative h-0">
                    <div className="absolute left-[calc(16.67%)] top-[-80px] transform -translate-x-1/2 text-primary text-xl">→</div>
                    <div className="absolute left-[calc(83.33%)] top-[-80px] transform -translate-x-1/2 text-primary text-xl">←</div>
                    <div className="absolute left-1/2 top-[-100px] transform -translate-x-1/2 text-primary text-xl">↔</div>
                    <div className="absolute left-1/2 top-[-60px] transform -translate-x-1/2 text-primary text-xl">↔</div>
                  </div>
                )}
                
                {/* 環境とのインタラクション */}
                <div className="w-full py-2 md:py-3 px-4 md:px-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border border-gray-300 text-center font-medium shadow-sm">
                  <div className="text-sm md:text-base">Environment Interaction</div>
                  <div className="text-xs mt-1 text-text">環境とのインタラクション</div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-text mt-2">
            図1: Curiosity-Driven Imagination (CDI) Framework Architecture Overview
          </p>
        </section>
        
        <section className="mt-8 bg-gradient-to-br from-white to-primary-light p-6 rounded-lg shadow-sm border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-primary">About This Paper（この論文について）</h2>
          <p className="text-text">
            この論文「Curiosity-Driven Imagination: Discovering Plan Operators and Learning Associated Policies for Open-World Adaptation」は、
            ロボットが未知の変化に適応するための革新的なアプローチを提案しています。従来の純粋に記号的なアプローチでは対応が難しい
            オープンワールド環境において、好奇心駆動型の探索と想像力を模倣したプランニングを組み合わせることで、
            効率的かつ効果的な適応能力を実現しています。
          </p>
        </section>
        
        {/* 論文を読み始めるボタン */}
        <StartReadingButton href="/background/" />
      </div>
    </Layout>
  );
}
