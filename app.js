let mainDiv = document.querySelector(".tossBox");
let headBtn = document.querySelector("#headBtn");
let tailBtn = document.querySelector("#tailBtn");
let coinImage = document.querySelector("#image");
let displayText = document.querySelector("#displayTxt");
let flagHead = 0;
let flagTail = 0;

function render() {
    displayTxt.innerHTML = "";
    var random_num = Math.ceil(Math.random() * 2);
    console.log(random_num);
    return random_num;
}

function tossHead(index) {
  mainDiv.classList.add("coin_animate");
  let random_num = render();
  setTimeout(function (){
    if (random_num === 1) {
      coinImage.src = "./images/head.png";
      flagHead = index;
      displayText.innerHTML = "Congragulation You Won Its Head!";
    } else {
      coinImage.src = "./images/tail.png";
      displayText.innerHTML = "Sorry You Lose Its Tails!";
    }
    mainDiv.classList.remove("coin_animate");
  }, 3000)
}

function tossTail(index) {
    mainDiv.classList.add("coin_animate");
    let random_num = render();
    setTimeout(function(){
        if (random_num === 2) {
          coinImage.src = "./images/tail.png";
          flagTail = index;
          displayText.innerHTML = "Congragulation You Won Its Tails!";
        } else {
          coinImage.src = "./images/head.png";
          displayText.innerHTML = "Sorry You Lose Its Head!";
        }
         mainDiv.classList.remove("coin_animate");
    }, 3000)
}

