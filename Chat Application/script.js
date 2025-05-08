const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-btn');

// Function to add a message to the chat box
function addMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to simulate a bot response
function botResponse(userMessage) {
  const responses = {
    hello: "Hi there! How can I help you today?",
    how: "I'm just a bot, but I'm doing well! How about you?",
    bye: "Goodbye! Have a great day!",
    default: "Sorry, I don't understand that. Can you try asking something else?"
  };

  // Simple bot logic
  const response = responses[userMessage.toLowerCase()] || responses.default;
  setTimeout(() => addMessage(response, 'bot'), 1000);
}

// Event listener for sending a message
sendButton.addEventListener('click', () => {
  const userMessage = messageInput.value.trim();

  if (userMessage !== '') {
    addMessage(userMessage, 'user');
    messageInput.value = '';
    botResponse(userMessage);
  }
});

// Allow pressing "Enter" to send a message
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendButton.click();
  }
});
