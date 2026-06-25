const API_KEY = "AIzaSyC_fAiaHWIqCJtAFR0-eUic74jqe833MYo";
const URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

async function getQuiz() {
  let topic = document.getElementById("topic").value;

  document.getElementById("output").innerText = "Loading... ⏳";

  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Give one simple quiz question with answer on ${topic}`
              }
            ]
          }
        ]
      })
    });

    const data = await res.json();
    console.log(data);

    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      data?.error?.message ||
      "No response";

    document.getElementById("output").innerText = result;

  } catch (err) {
    console.log(err);
    document.getElementById("output").innerText = "Network error ❌";
  }
}