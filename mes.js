const messages = [
    "Life is a paragon—a journey to understand ourselves.",
    "We come and go, we learn through the process.",
    "And we are all in the same boat.",
    "All of us are trying to find our way.",
];

const typingText = document.getElementById('typing-text');

function playMessages(index) {
    typingText.textContent = messages[index];

    index++;

    if (index >= messages.length) {
        index = 0;
    }

    setTimeout(() => {
        playMessages(index);
    }, 5000); 
}

setTimeout(() => {
    document.getElementById('intro-name').style.opacity = 0;
    document.getElementById('container').style.opacity = 1;
    document.getElementById('container').classList.add('fade-in');
    playMessages(0);
}, 1500);