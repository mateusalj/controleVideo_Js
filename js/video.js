//DOM
const play = document.querySelector('#btn-play');
const pause = document.querySelector('#btn-pause');
const stop = document.querySelector('#btn-stop');
const backward = document.querySelector('#btn-backward');
const forward = document.querySelector('#btn-forward');
const vid = document.querySelector('#videoBg');

play.addEventListener('click', ()=>{
    vid.play();
})
pause.addEventListener('click', ()=>{
    vid.pause();
})
stop.addEventListener('click', ()=>{
    vid.pause();
    vid.currentTime = 0;
})
backward.addEventListener('click', ()=>{
    vid.playbackRate -= 0.5;
})
forward.addEventListener('click', ()=>{
    vid.playbackRate += 0.5;
})