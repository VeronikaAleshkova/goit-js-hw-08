import Player from "@vimeo/player";
import throttle from "lodash.throttle";

// localStorage.setItem("videoplayer-current-time", )

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// const savedTime = localStorage.getItem("videoplayer-current-time");


if(localStorage.getItem("videoplayer-current-time")) {
  const savedTime = localStorage.getItem("videoplayer-current-time");
  player.setCurrentTime(savedTime);
  };

// player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);

     player.on('timeupdate', throttle(onSaveTime, 1000));
     
     function onSaveTime(currentTime) {
      console.log(currentTime);

      localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime.seconds));

      
      if(savedTime) {
      player.setCurrentTime(savedTime);
      };


  //   player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
  //     // seconds = the actual time that the player seeked to
  // }).catch(function(error) {
  //     switch (error.name) {
  //         case 'RangeError':
  //             // the time was less than 0 or greater than the video’s duration
  //             break;
  
  //         default:
  //             // some other error occurred
  //             break;
  //     }
  // });
