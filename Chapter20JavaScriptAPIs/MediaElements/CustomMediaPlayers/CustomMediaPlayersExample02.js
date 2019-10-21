// get references to the elements
let player = document.getElementById("player"),
  btn = document.getElementById("video-btn"),
  curtime = document.getElementById("curtime"),
  duration = document.getElementById("duration");
// update the duration
duration.innerHTML = player.duration;
           
// attach event handler to button
btn.addEventListener( "click", (event) => {
  if (player.paused) {
    player.play();
    btn.value = "Pause";
  } else {
    player.pause();
    btn.value = "Play";
  }
});
           
// update the current time periodically
setInterval(() => {
  curtime.innerHTML = player.currentTime;
}, 250);
