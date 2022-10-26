// Get the modal
var modal = document.getElementById("myModal");
var videoPlayer = document.getElementById("videoPlayer");

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
    console.log("click");
    modal.style.display = "block";
    var tempUrlHolder = e.getAttribute('data-url');
    videoPlayer.setAttribute("src", tempUrlHolder);
    captionText.innerHTML = e.alt;
}