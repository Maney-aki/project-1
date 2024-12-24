// Function to simulate navigation or feature exploration
function getStarted() {
    alert("Welcome to Kiki Healthcare Assistant! Explore the features by navigating the sections.");
}

// Responsive navigation toggle for smaller screens
const navToggle = document.createElement('button');
navToggle.textContent = "☰";
navToggle.style.display = "none";
navToggle.style.background = "#1c1c1f";
navToggle.style.color = "#fff";
navToggle.style.border = "none";
navToggle.style.padding = "10px 15px";
navToggle.style.cursor = "pointer";

const header = document.querySelector('header');
const nav = header.querySelector('nav');
header.insertBefore(navToggle, nav);

navToggle.addEventListener('click', () => {
    const isExpanded = nav.style.display === 'block';
    nav.style.display = isExpanded ? 'none' : 'block';
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.style.display = 'flex';
        navToggle.style.display = 'none';
    } else {
        nav.style.display = 'none';
        navToggle.style.display = 'block';
    }
});

// Initial check for responsive design
if (window.innerWidth <= 768) {
    nav.style.display = 'none';
    navToggle.style.display = 'block';
}

// Chatbot Functionality
const chatbotMessages = document.getElementById("chatbotMessages");
const chatbotInput = document.getElementById("chatbotInput");

function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (!userMessage) return;

    appendMessage("User", userMessage);
    chatbotInput.value = "";

    setTimeout(() => {
        const botReply = getBotReply(userMessage);
        appendMessage("Kiki", botReply);
    }, 1000);
}

function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = `${sender}: ${message}`;
    messageElement.style.margin = "5px 0";
    messageElement.style.fontWeight = sender === "Kiki" ? "bold" : "normal";
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotReply(message) {
    // Basic chatbot responses (extend as needed)
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (lowerMessage.includes("health")) {
        return "I can help with healthcare monitoring, reminders, and more! What do you need?";
    } else if (lowerMessage.includes("emergency")) {
        return "If this is a real emergency, please call your local emergency services immediately.";
    } else {
        return "I'm here to help! Could you provide more details?";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    console.log("Espy Healthcare Assistant Loaded!");
});