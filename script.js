const input = document.getElementById("input");
const btn = document.getElementById("btn");
const response = document.getElementById("response");

const API_KEY = "AIzaSyCLdPWCGavhMKtPalD7J5SVrYunMm933zk";
const API_URL = `https://v2.jokeapi.dev/joke/Any?apikey=${API_KEY}`;

const getJoke = () => {
  response.innerText = "Loading... ⏳";

  fetch(API_URL, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      response.innerText =
        (data.joke && "🤣 " + data.joke) ||
        ("😂 " + data.setup + "\n" + data.delivery + " 🤣");
    })
    .catch(() => {
      response.innerText = "Error 😢";
    });
};


btn.onclick = getJoke;


input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getJoke();
  }
});