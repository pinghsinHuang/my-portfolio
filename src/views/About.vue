<template>
  <div class="container mt-5">
    <div class="card shadow p-4">
      <h2 class="h2 mb-5">自我介紹 👋</h2>
      <h4>黃平心</h4>
      <p class="lead">
        2018 年畢業於國立中興大學水土保持學系，後來對科技與網頁開發產生濃厚興趣，於 2020 年開始上課與自學前端技術，並成功轉職為前端工程師。投身於程式碼的世界後，我享受迎接新挑戰的過程，並熱衷於產出令客戶滿意的成果，從中獲得成就感。工作中也從中學習 UI/UX 設計，致力於優化用戶體驗。展望未來，我期望成為一名更具專業與經驗的前端工程師，能夠解決更多複雜的問題，持續擁抱技術創新。
      </p>
      <div class="timeline">
        <h2 class="timeline-title">工作經歷</h2>
        <div class="timeline-item">
          <div class="timeline-number">1</div>
          <div class="timeline-content">
            <h3>前端工程師</h3>
            <p>良知股份有限公司（2020–現在）</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-number">2</div>
          <div class="timeline-content">
            <h3>水保工程技師助理</h3>
            <p>天琛開發有限公司（2018–2019）</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-number">3</div>
          <div class="timeline-content">
            <h3>政府職業訓練</h3>
            <p>跨平台網站前端實作班（2019）</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
.timeline {
  background-color: #f0f7f6;
  padding: 2rem;
  max-width: 500px;
  border-radius: 12px;
  font-family: 'Helvetica Neue', sans-serif;
}

.timeline-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

.timeline-item {
  position: relative;
  padding-left: 3rem;
  margin-bottom: 2rem;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: 1.2rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #ccc;
}

.timeline-number {
  position: absolute;
  left: 0;
  background-color: #d6e8e1;
  color: #333;
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  text-align: center;
  line-height: 2rem;
  font-weight: bold;
}

.timeline-content h3 {
  font-size: 1.1rem;
  margin: 0;
}

.timeline-content p {
  margin: 0.2rem 0 0;
  color: #555;
  font-size: 0.95rem;
}

</style>
