const sources = [
  "http://stream.zeno.fm/2pcxz945dchvv", // Beethoven
  "http://stream.zeno.fm/3qmnn155dchvv" // Mozart
  "http://stream.zeno.fm/kyzzrm68dchvv" // Brahms
  "http://stream.zeno.fm/5m2eyf68dchvv" // Bruckner
  "http://stream.zeno.fm/znyp0gn3echvv" // Beriloz
  "http://stream.zeno.fm/rrddefk3echvv" // Mahler
  "http://stream.zeno.fm/ugxdct68dchvv" // Shostakovich
  "http://stream.zeno.fm/swvf11m3echvv" // Sibelius
  "http://stream.zeno.fm/24ma6qn3echvv" // Tchaikovsky
];

const labels = [
  [ "Beethoven", "http://stream.zeno.fm/2pcxz945dchvv"],
  [ "Mozart", "http://stream.zeno.fm/3qmnn155dchvv"]
  [ "Brahms", "http://stream.zeno.fm/kyzzrm68dchvv"]
  [ "Bruckner", "http://stream.zeno.fm/5m2eyf68dchvv"]
  [ "Beriloz", "http://stream.zeno.fm/znyp0gn3echvv"]
  [ "Mahler", "http://stream.zeno.fm/rrddefk3echvv"]
  [ "Shostakovich", "http://stream.zeno.fm/ugxdct68dchvv"]
  [ "Sibelius", "http://stream.zeno.fm/swvf11m3echvv"]
  [ "Tchaikovsky", "http://stream.zeno.fm/24ma6qn3echvv"]
];

let playingIndex = 0; // current radio
let playing = true; // stream status
let music = null;

setTimeout(function(){
    loadStream(playingIndex);
}, 1);

function loadStream(index){
  if(playing && music !== null)
    destroyStream();

  music = new Audio();
  music.src = sources[index];
  music.load();
  music.play();
  setLabel(index);
  pauseIcon();
  playingIndex = index;
  playing = true;
}

function destroyStream(){
  music.pause();
  music.src = "";
  playIcon();
  playing = false;
}

function changePlayback(){
  if(playing){ destroyStream();  }else{  loadStream(playingIndex);  }
}

function setLabel(index){
  document.getElementById("label").innerHTML = '<h6> <a target="_blank" href="' + labels[index][1] + '">' + labels[index][0] + '</a></h6>';
}

document.onkeydown = function(e) {
  e = e || window.event;
  switch(e.which || e.keyCode) {
    case 32:
      changePlayback();
    break;
  }
};

// icons
function pauseIcon(){
  document.getElementById('playbackButton').className = 'icon fa-pause';
}
function playIcon(){
  document.getElementById('playbackButton').className = 'icon fa-play';
}
