<template>
 
  <div class="container mt-5">
    <div class="card shadow p-4">
      <h1 class="text-dark mb-3">chat gpt 問答</h1>
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
     
        <button @click="askGPT" class="btn btn-primary mt-2">送出</button>

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
          return '請用有創意有趣的方式，回答以下問題：';
        case 'normal':
        default:
          return '';
      }
    }
  }
};
</script>