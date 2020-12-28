function click_me(){
    var a= document.getElementById("two");
    if(a.style.display==="block")
    {a.style.display="none";}
    else{a.style.display="block";}
}
function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }
  function pause() {
    var audio = document.getElementById("audio");
    audio.pause();
  }



