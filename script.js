const typedWords = ["First National Bank","Secure Banking", "Smart Savings", "Instant Loans", "Digital Banking", "Future Finance"];
let typedIndex = 0;
let charIndex = 0;
const typingSpeed = 120;
const erasingSpeed = 60;
const delayBetweenWords = 1500;

function typeWords() {
  const span = document.getElementById('typed-words');
  if (!span) return;

  if (charIndex < typedWords[typedIndex].length) {
    span.textContent += typedWords[typedIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWords, typingSpeed);
  } else {
    setTimeout(eraseWords, delayBetweenWords);
  }
}

function eraseWords() {
  const span = document.getElementById('typed-words');
  if (!span) return;

  if (charIndex > 0) {
    span.textContent = typedWords[typedIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseWords, erasingSpeed);
  } else {
    typedIndex = (typedIndex + 1) % typedWords.length;
    setTimeout(typeWords, typingSpeed);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeWords, 500);
});

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

const replies = {
  hello: "Hi there! 😊 How can I assist you today?",
  "hi":"Hi there! 😊 How can I assist you today?",
  "how are you": "I'm just a Bot, but I’m always running at 100%! How can I help?",
  "balance": "To check your balance, please log in to your FNB App or Online Banking.",
  "open account": "You can open an account online at www.fnb.co.za or visit your nearest branch.",
  "loan": "FNB offers personal loans, business loans, and more. Click on Apply for loan below to apply online?",
  bye: "Goodbye! If you need anything else, I'm always here.",
  default: "I'm not sure how to answer that. Try asking about accounts, loans, or how to contact us."
};

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  displayMessage(message, "user");
  userInput.value = "";

  setTimeout(() => {
    const response = getBotReply(message.toLowerCase());
    displayMessage(response, "bot");
  }, 700);
}

function displayMessage(message, type) {
  const div = document.createElement("div");
  div.className = type === "user" ? "user-message" : "bot-message";
  div.textContent = message;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(input) {
  for (let key in replies) {
    if (input.includes(key)) {
      return replies[key];
    }
  }
  return replies.default;
}
