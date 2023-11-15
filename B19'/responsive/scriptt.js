function toggleSound(videoId) {
    var video = document.getElementById(videoId);
    var soundIcon = video.parentNode.getElementsByClassName("sound-icon")[0];
    
    if (video.muted) {
      video.muted = false;
      soundIcon.classList.remove("muted");
    } else {
      video.muted = true;
      soundIcon.classList.add("muted");
    }
  }
  
  function togglePlay(videoId) {
    var video = document.getElementById(videoId);
    var playIcon = video.parentNode.getElementsByClassName("play-icon")[0];
    
    if (video.paused) {
      video.play();
      playIcon.classList.remove("paused");
    } else {
      video.pause();
      playIcon.classList.add("paused");
    }
  }
  
  
  
  
  