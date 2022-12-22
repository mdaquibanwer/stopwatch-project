
const hours = document.getElementById('hrs');
const minutes = document.getElementById('mins');
const seconds = document.getElementById('secs');
const mSeconds = document.getElementById('ms');

let hour = 0;
let minute = 0;
let second = 0;
let mSecond = 0;

let timer = false;

const startTimer = ()=>{
    timer = true;
    stopwatch();
}
const stopTimer = ()=>{
    timer = false
}
const resetTimer = ()=>{
    mSecond=0;
    second=0;
    minute=0;
    hour=0;
    mSeconds.innerHTML = "00";
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00";
    timer = false
}
const stopwatch = ()=>{
    
    mSecond = mSecond+1;
    mSeconds.innerHTML = mSecond;
    seconds.innerHTML = second;
    minutes.innerHTML = minute;
    hours.innerHTML = hour;
    if(mSecond===100){
        second+=1;
        mSecond=0;
    }
    if(second===60){
        second=0;
        minute+=1;
    }
    if(minute===60){
        hour += 1;
        minute=0;
    }

    if(timer){
        setTimeout(() => {
            stopwatch();
        }, 10);
    }
}