const music = document.querySelector("audio");
const img = document.querySelector("img")
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
    name: "music1 ",
    title:"Slow Slow",
    artist:"Yo Yo Honey Singh"
},
{
    name: "music2",
    title:"Mehram",
    artist:"Sachet Tandon"
},
{
    name: "music3",
    title:"Tu Yaheen Hai",
    artist:"Shehnaaz Gill, Raj ranjoodh"
}
]
let isPlaying = false;
const playMusic=()=>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause")
    img.classList.add("anime")
};

const pauseMusic=()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play")
    img.classList.remove("anime")
};

play.addEventListener("click",()=>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }

    // isPlaying ? pauseMusic() : playMusic();
});

const loadSongs = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    // music.src = "../music/" + songs.name + ".mp3";
    img.src = "../images/" + songs.name + ".jpg";
    music.src = "../music/" + songs.name + ".mp3";
};

songIndex = 0;

// loadSongs(songs[2]);
//loadSongs(songs[2]);

const nextSong = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
};
const prevSong = () =>{
    songIndex = (songIndex -1 + songs.length)%songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
