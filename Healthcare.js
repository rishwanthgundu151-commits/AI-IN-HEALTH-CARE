function scrollToChat() {
    document.getElementById("chat").scrollIntoView();
}

document.getElementById("chatForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let input = document.getElementById("userInput");
    let chatBox = document.getElementById("chatBox");

    let msg = document.createElement("p");
    msg.textContent = "You: " + input.value;
    chatBox.appendChild(msg);

    let reply = document.createElement("p");
    reply.textContent = "AI: Stay healthy!";
    chatBox.appendChild(reply);

    input.value = "";
});