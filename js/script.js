const player = document.querySelector('.player')
const songName = document.querySelector('.player__song')
const songAuthor = document.querySelector('.player__author')
const buttons = document.querySelector('.player__buttons')
const audio = document.querySelector('.player__audio')
const progressContainer = document.querySelector('.progress__container')
const progressBar = document.querySelector('.progress__bar')

const songs = [
  {
    name: "JoJo (Sono Chi no Sadame)",
    author: "Hiroaki Tominaga",
    source: './src/audio/Hiroaki_Tominaga_JoJo_Sono_Chi_no_Sadame_Anime_Italian,_Vol_1.mp3'
  },
  {
    name: "It Was a Time",
    author: "TrackTribe",
    source: './src/audio/It Was a Time - TrackTribe.mp3'
  },
  {
    name: "JoJo Pillar Man",
    author: "ArtiSound",
    source: './src/audio/JoJo_pillar_man_ArtiSound_mix.mp3'
  },
  {
    name: "Murder In My Mind",
    author: "Kordhell",
    source: './src/audio/Kordhell - Murder In My Mind (Murder In My Mind).mp3'
  },
  {
    name: "Mulholland",
    author: "King Canyon",
    source: './src/audio/Mulholland - King Canyon.mp3'
  },
  {
    name: "My Name (Wearing Me Out)",
    author: "Shinedown",
    source: './src/audio/Shinedown_My_Name_Wearing_Me_Out_The_Studio_Album_Collection.mp3'
  },
  {
    name: "Silver Waves",
    author: "TrackTribe",
    source: './src/audio/Silver Waves - TrackTribe.mp3'
  },
]

let songIndex = 0

function loadSong(song) {
  songName.innerHTML = song.name
  songAuthor.innerHTML = song.author
  audio.src = song.source;
}

function playSong() {
  audio.play()
}

function pauseSong() {
  audio.pause()
}

loadSong(songs[songIndex])
playSong()
pauseSong()
