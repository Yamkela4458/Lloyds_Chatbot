// Typing
const typedWords = [
  "Financial Literacy",
  "Budgeting Skills",
  "Saving Habits",
  "Loan Understanding",
  "Digital Safety"
];

let index = 0;
let charIndex = 0;

function typeEffect() {
  const el = document.getElementById("typed-words");
  if (!el) return;

  const word = typedWords[index];

  if (charIndex < word.length) {
    el.textContent += word.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 90);
  } else {
    setTimeout(eraseEffect, 1200);
  }
}

function eraseEffect() {
  const el = document.getElementById("typed-words");
  if (!el) return;

  if (charIndex > 0) {
    el.textContent = el.textContent.slice(0, -1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % typedWords.length;
    setTimeout(typeEffect, 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, 500);
});

// Chat responses
const responses = {
  hello: "Hello. How can I support your learning today?",
  hi: "Hello. How can I support your learning today?",
  budgeting: "Budgeting helps you manage income and expenses effectively.",
  savings: "A savings account helps you store money securely and earn interest.",
  loan: "A loan is borrowed money that must be repaid with interest.",
  security: "Protect your banking details. Never share passwords or PINs.",
  default: "Please choose a topic: budgeting, savings, loans, or security."
};

// user input
function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim().toLowerCase();

  if (!message) return;

  addMessage(input.value, "user");
  input.value = "";

  setTimeout(() => {
    addMessage(getResponse(message), "bot");
  }, 500);
}

// Render message
function addMessage(text, type) {
  const box = document.getElementById("chat-box");

  const div = document.createElement("div");
  div.className = type === "user" ? "user-message" : "bot-message";
  div.textContent = text;

  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

// input to response
function getResponse(input) {
  for (let key in responses) {
    if (input.includes(key)) return responses[key];
  }
  return responses.default;
}
