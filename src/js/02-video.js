import Player from "@vimeo/player";
import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//--------------1 вариант-------------------------

// if(localStorage.getItem("videoplayer-current-time")) {
//     player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
//   };

//--------------2 вариант-------------------------

// const savedTime = localStorage.getItem("videoplayer-current-time");
      
//       if(savedTime) {
//       player.setCurrentTime(savedTime);

//--------------3 вариант-------------------------

// player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);

//------------- 4 вариант-------------------------------

// player.setCurrentTime(localStorage.getItem("videoplayer-current-time") ?? 0);

//------------- 5 вариант-------------------------------

let savedTime = localStorage.getItem("videoplayer-current-time") === null? 0 : localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(savedTime);


     player.on('timeupdate', throttle(onSaveTime, 1000));
     
     function onSaveTime(currentTime) {
      console.log(currentTime);

      localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime.seconds));
      };