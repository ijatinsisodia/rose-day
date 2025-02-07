// script.js

function playMusic() {
    const music = document.getElementById('background-music');
    music.play();
    document.removeEventListener('click', playMusic);
}

document.addEventListener('click', playMusic);
