
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");

function botReply(message) {
  let reply = "Sorry, I didn't understand.";

  if (message.includes("hello")) reply = "Hello! Welcome to EduLearn 😊";
  else if (message.includes("course")) reply = "We offer Web Development, Data Science & Digital Marketing.";
  else if (message.includes("contact")) reply = "Email: info@edulearn.com | Phone: +91 9867894563";
  else if (message.includes("admission")) reply = "Admissions are open. Please contact us for details.";

  chatBody.innerHTML += `<div><b>Bot:</b> ${reply}</div>`;
}

chatInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const userMsg = chatInput.value.toLowerCase();
    chatBody.innerHTML += `<div><b>You:</b> ${chatInput.value}</div>`;
    botReply(userMsg);
    chatInput.value = "";
  }
});
