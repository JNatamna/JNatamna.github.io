// Get the modal
var modal = document.getElementById("myModal");
var videoPlayer = document.getElementById("videoPlayer");

// Get ref links
var gitLink;
var itchLink;

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("portImg");
var captionText = document.getElementById("caption");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  tempSrc = videoPlayer.src;
  videoPlayer.setAttribute("src", "");
}

modal.onclick = function(){
    modal.style.display = "none";
    videoPlayer.setAttribute("src", "");
}

function showModal(e){
    modal.style.display = "block";
    var tempUrlHolder = e.getAttribute('data-url');

    gitLink = e.getAttribute('data-gitlink');
    itchLink = e.getAttribute('data-itchlink');


    if(gitLink === ""){
      document.getElementById("gitImg").style.display = "none";
    }
    else{
      document.getElementById("gitImg").style.display = "block";
    }

    if(itchLink === ""){
      document.getElementById("itchImg").style.display = "none";
    }
    else{
      document.getElementById("itchImg").style.display = "block";
    }

    videoPlayer.setAttribute("src", tempUrlHolder);
    captionText.innerHTML = e.alt;
}


document.querySelector("#itchImg").addEventListener("click", () => {
  if(itchLink === ""){
  }
  else{
    window.location.href = itchLink;
  }
});

document.querySelector("#gitImg").addEventListener("click", () => {
  if(gitLink === ""){
  }
  else{
    window.location.href = gitLink;
  }
});