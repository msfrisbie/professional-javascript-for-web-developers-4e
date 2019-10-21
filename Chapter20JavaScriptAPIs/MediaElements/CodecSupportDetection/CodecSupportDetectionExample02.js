let audio = document.getElementById("audio-player");
// most likely "maybe"
if (audio.canPlayType("audio/mpeg")) {
  // do something
}
// could be "probably"
if (audio.canPlayType("audio/ogg; codecs=\"vorbis\"")) {
  // do something
}
