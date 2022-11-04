const player = document.querySelector('.player_img');
const volumeRage = document.querySelector('.player__volume-range');
const prev = document.querySelector('.music__prev');
const play = document.querySelector('.music__play');
const next = document.querySelector('.music__next');
const playerStart = document.querySelector('#start');
const playerEnd = document.querySelector('#end');
const duration = document.querySelector('.player-duration');
const line = document.querySelector('.player-line');
const volumeIcon = document.querySelector('.player-icon');



const audios = [
    "../player 3/musics/music.mp3",
    "../player 3/musics/mp3.mp3",
    "../player 3/musics/Halsey - Without Me (Lyrics).mp3",
    "../player 3/musics/peacebass]   Miyagi   Эндшпиль.mp3",
]

let countMusic = 0;
let audio = new Audio(audios[countMusic]);


function audioplay() {
    if (audio.paused) {
        audio.play();
        play.innerHTML = '<i class="fas fa-pause"></i>'
        end()
        start()
    }else{
        audio.pause();
        play.innerHTML = '<i class="fas fa-play-circle"></i>'
    }
}



function formatTime(time) {
    let hour = Math.trunc(time / 3600)
    time = time - (hour * 3600)
    let min = Math.trunc(time / 60)
    time = time - (min * 60)
    return time
}

function start() {
    setInterval(() => {
        playerStart.innerHTML += formatTime(audio.currentTime)
    }, 1000);
}

function end() {
    playerEnd.innerHTML += formatTime(audio.duration)
}

volumeRage.addEventListener('click', function (e) {
    audio.volume = e.target.value / 100
})

function audioNext() {
    if (!audio.paused) {
        audio.pause();
    }
    audio.currentTime = 0;
    if (audios.length - 1 > countMusic) {
       
        ++countMusic
    }else{
        countMusic = 0;
    }
    audio = new Audio(audios[countMusic]);
    audio.play();
}

function audioPrev() {
    if (!audio.paused) {
        audio.pause();
    }
    audio.currentTime = 0;
    if (0 < countMusic) {
       
        --countMusic
    }else{
        countMusic = audios.length-1;
    }
    audio = new Audio(audios[countMusic]);
    audio.play();
}

play.addEventListener("click", audioplay);
next.addEventListener("click", audioNext);
prev.addEventListener("click", audioPrev);
