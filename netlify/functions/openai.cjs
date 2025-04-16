const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    console.log('Function triggered');

    const { message } = JSON.parse(event.body || '{}');

    if (!message || message.trim() === '') {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: '請輸入問題內容' }),
      };
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      }),
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0]) {
      return {
        statusCode: 502,
        body: JSON.stringify({ error: 'OpenAI 回應格式錯誤' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: data.choices[0].message.content }),
    };
  } catch (err) {
    console.error('❌ Server error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || 'Internal Server Error' }),
    };
  }
};
