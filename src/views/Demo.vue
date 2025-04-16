<template>
 
  <div class="container mt-5">
    <div class="card shadow p-4">
      <h1 class="text-primary mb-3">AI small chat</h1>
       <input v-model="question" class="form-control" placeholder="輸入你的問題..." />
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
      reply: ''
    }
  },
  methods: {
    async askGPT() {
      const res = await fetch('/.netlify/functions/openai', {
        method: 'POST',
        body: JSON.stringify({ message: this.question })
      });
      const data = await res.json();
      this.reply = data.reply;
    }
  }
}
</script>