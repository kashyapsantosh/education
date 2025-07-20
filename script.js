const API_KEY = "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";
const API_URL = "https://openrouter.ai/api/v1/chat/completions";

async function getAnswer() {
  const question = document.getElementById("questionInput").value;
  const responseDiv = document.getElementById("response");
  responseDiv.innerText = "Thinking...";

  const headers = {
    "Authorization": Bearer ${API_KEY},
    "Content-Type": "application/json"
  };

  const body = JSON.stringify({
    model: "openai/gpt-3.5-turbo",
    messages: [{ role: "user", content: question }],
    max_tokens: 200,
  });

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: headers,
      body: body
    });

    const data = await res.json();
    const aiReply = data.choices[0].message.content.trim();
    responseDiv.innerText = aiReply;
  } catch (err) {
    responseDiv.innerText = "❌ Error getting response. Check your API key and network.";
  }
}