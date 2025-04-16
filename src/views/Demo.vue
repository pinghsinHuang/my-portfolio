<template>
 
  <div class="container mt-5">
     <div class="card shadow p-5 mb-5">
       <div class="row">
         <div class="col-6">
            <div class="card h-100" style="max-width: 530px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="/img/w.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-text">運用中央氣象局開放資料平台 串接API 製作天氣小卡</p>
                    <a href="https://pinghsinhuang.github.io/Weather_Card/" class="btn btn-sm btn-dark">連結</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card h-100" style="max-width: 530px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://pingjejovup.github.io/sushiro_web_practice/img/bgimg/about_img.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-text"> 
                      運用壽司郎原有卡通素材，重新設計一個台灣區一頁式官網<br>
                      html、scss 獨立切版
                    </p>
                    <a href="https://pingjejovup.github.io/sushiro_web_practice" class="btn btn-sm btn-dark">連結</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    <div class="card shadow p-5">
      <h2 class="text-dark mb-3">chat gpt 問答</h2>
      <div class="row mb-3">
        <div class="col-4"> 
        <label for="modeSelect" class="form-label">選擇回答模式：</label>
        <select id="modeSelect" v-model="selectedMode" class="form-select">
          <option value="normal">💬 一般模式</option>
          <option value="art">👨‍💼 創意模式</option>
        </select>
      </div>
        <div class="col-8 align-self-end">
        <input v-model="question" class="form-control" placeholder="輸入你的問題..." />


        </div>
      </div>
     <div class="col-12 text-end">
       <button @click="askGPT" class="btn btn-dark mt-2">送出</button>
     </div>

        <div class="mt-3" v-if="reply">
          <h5>AI 回答：</h5>
          <p>{{ reply }}</p>
        </div>
    </div>

   
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: '',
      reply: '',
      selectedMode: 'normal', // 預設為一般模式
    };
  },
  methods: {
    async askGPT() {
      const promptPrefix = this.getPromptPrefix();
      const fullPrompt = `${promptPrefix}${this.question}`;

      const res = await fetch('/.netlify/functions/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: fullPrompt })
      });

      const data = await res.json();
      this.reply = data.reply || data.error || '⚠️ 無法取得回應';
    },

    getPromptPrefix() {
      switch (this.selectedMode) {
       
        case 'art':
          return '請用有創意有趣的方式，50字以內，回答以下問題：';
        case 'normal':
        default:
          return '';
      }
    }
  }
};
</script>