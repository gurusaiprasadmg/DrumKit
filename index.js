for (i = 0; i< document.querySelectorAll('.drum').length;i++){
  document.querySelectorAll('.drum')[i].addEventListener('click',handleclick)
  function handleclick(){
    this.style.color = 'orange'

    var button = this.innerText;
    checker(button)
    animat(button)
    }

}


addEventListener("keypress",function(event){
  var log = event.key;
  checker(log)
  animat(log)

  }
)



function checker(input){
  switch (input){
    case "a":
      var audio = new Audio("sounds/crash.mp3")
      audio.play()
    break;
    case "s":
      var audio = new Audio("sounds/kick-bass.mp3")
      audio.play()
    break;
    case "d":
      var audio = new Audio("sounds/snare.mp3")
      audio.play()
    break;
    case "f":
      var audio = new Audio("sounds/tom-1.mp3")
      audio.play()
    break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3")
      audio.play()
    break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3")
      audio.play()
    break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3")
      audio.play()
    break;
}
}

function animat(pressedkey){
  var activbutton = document.querySelector("."+pressedkey);
  activbutton.classList.add('pressed')
  setTimeout(function(){
    activbutton.classList.remove('pressed')
  }, 100)

}
