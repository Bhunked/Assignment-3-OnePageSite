var lastScroll = 0
let clickNum = 0
let disaClicks = 0
let ansClicks1 = 1
let ansClicks2 = 1
let ansClicks3 = 1
let ansClicks4 = 1
let ansClicks5 = 1
let ansClicks6 = 1
let ansClicks7 = 1
let ansClicks8 = 1



//  let subTitle = document.querySelector ("#information")
// subTitle.style.background = "#ff0"

// let qna = document.querySelector ("#qna")
// qna.style.background = "#f0f"
// document.querySelector ("#qna").addEventListener("click",function addOne(){
// });

//Want to make this into an array but cant figure out how  
function makeDisappear1(){
  if (ansClicks1 == 0) {
      document.getElementById("ans1").style.fontSize = "1px";
      document.getElementById("ans1").style.transition = "0.1s";
      document.getElementById("ans1").style.opacity = "0"; 

      ansClicks1 = ansClicks1 + 1
  } else {
      document.getElementById("ans1").style.fontSize = "1rem";
      document.getElementById("ans1").style.opacity = "1";
      document.getElementById("ans1").style.transition = "0.1s";
      ansClicks1 = ansClicks1 - 1
  }
  console.log("ansClicks1: " + ansClicks1)
}

function makeDisappear2(){
  if (ansClicks2 == 0) {
      document.getElementById("ans2").style.fontSize = "1px";
      document.getElementById("ans2").style.transition = "0.1s";
      document.getElementById("ans2").style.opacity = "0"; 

      ansClicks2 = ansClicks2 + 1
  } else {
      document.getElementById("ans2").style.fontSize = "1rem";
      document.getElementById("ans2").style.opacity = "1";
      document.getElementById("ans2").style.transition = "0.1s";
      ansClicks2 = ansClicks2 - 1
  }
  console.log("ansClicks2: " + ansClicks2)
}

function makeDisappear3(){
  if (ansClicks3 == 0) {
      document.getElementById("ans3").style.fontSize = "1px";
      document.getElementById("ans3").style.transition = "0.1s";
      document.getElementById("ans3").style.opacity = "0"; 

      ansClicks3 = ansClicks3 + 1
  } else {
      document.getElementById("ans3").style.fontSize = "1rem";
      document.getElementById("ans3").style.opacity = "1";
      document.getElementById("ans3").style.transition = "0.1s";
      ansClicks3 = ansClicks3 - 1
  }
  console.log("ansClicks3: " + ansClicks3)
}

function makeDisappear4(){
  if (ansClicks4 == 0) {
      document.getElementById("ans4").style.fontSize = "1px";
      document.getElementById("ans4").style.transition = "0.1s";
      document.getElementById("ans4").style.opacity = "0"; 

      ansClicks4 = ansClicks4 + 1
  } else {
      document.getElementById("ans4").style.fontSize = "1rem";
      document.getElementById("ans4").style.opacity = "1";
      document.getElementById("ans4").style.transition = "0.1s";
      ansClicks4 = ansClicks4 - 1
  }
  console.log("ansClicks4: " + ansClicks4)

}
function makeDisappear5(){
  if (ansClicks5 == 0) {
      document.getElementById("ans5").style.fontSize = "1px";
      document.getElementById("ans5").style.transition = "0.1s";
      document.getElementById("ans5").style.opacity = "0"; 

      ansClicks5 = ansClicks5 + 1
  } else {
      document.getElementById("ans5").style.fontSize = "1rem";
      document.getElementById("ans5").style.opacity = "1";
      document.getElementById("ans5").style.transition = "0.1s";
      ansClicks5 = ansClicks5 - 1
  }
  console.log("ansClicks5: " + ansClicks5)
}

function makeDisappear6(){
  if (ansClicks6 == 0) {
      document.getElementById("ans6").style.fontSize = "1px";
      document.getElementById("ans6").style.transition = "0.1s";
      document.getElementById("ans6").style.opacity = "0"; 

      ansClicks6 = ansClicks6 + 1
  } else {
      document.getElementById("ans6").style.fontSize = "1rem";
      document.getElementById("ans6").style.opacity = "1";
      document.getElementById("ans6").style.transition = "0.1s";
      ansClicks6 = ansClicks6 - 1
  }
  console.log("ansClicks6: " + ansClicks6)
}

function makeDisappear7(){
  if (ansClicks7 == 0) {
      document.getElementById("ans7").style.fontSize = "1px";
      document.getElementById("ans7").style.transition = "0.1s";
      document.getElementById("ans7").style.opacity = "0"; 
      

      ansClicks7 = ansClicks7 + 1
  } else {
      document.getElementById("ans7").style.fontSize = "1rem";
      document.getElementById("ans7").style.opacity = "1";
      document.getElementById("ans7").style.transition = "0.1s";
      ansClicks7 = ansClicks7 - 1
  }
  console.log("ansClicks7: " + ansClicks7)
}

function makeDisappear8(){
  if (ansClicks8 == 0) {
      document.getElementById("ans8").style.fontSize = "1px";
      document.getElementById("ans8").style.transition = "0.1s";
      document.getElementById("ans8").style.opacity = "0"; 

      ansClicks8 = ansClicks8 + 1
  } else {
      document.getElementById("ans8").style.fontSize = "1rem";
      document.getElementById("ans8").style.opacity = "1";
      document.getElementById("ans8").style.transition = "0.1s";
      ansClicks8 = ansClicks8 - 1
  }
  console.log("ansClicks8: " + ansClicks8)
}


// Makes text disappear but leaves a white gap where that I want to be filled
function magicText(){
    if (clickNum == 0) {
    document.getElementById("disappear").style.opacity = "0"; document.getElementById("disappear").style.transition = "1s";
    clickNum = clickNum + 1
    console.log(clickNum) 
    } else {
    document.getElementById("disappear").style.opacity = "1.0"; 
    clickNum = clickNum - 1
    console.log(clickNum) 
    }
  }

// Makes text shrink and disappear smoothly works almost how I want it too. 
function makeDisappear(){
    if (disaClicks == 0) {
        document.getElementById("moreText").style.fontSize = "1px"; 
        document.getElementById("moreText").style.transition = "0.1s";
        document.getElementById("moreText").style.opacity = "0"; 

        disaClicks = disaClicks + 1
    } else {
        document.getElementById("moreText").style.fontSize = "1rem";
        document.getElementById("moreText").style.opacity = "1"; 
        disaClicks = disaClicks - 1
    }
    console.log("Disaclicks: " + disaClicks)
  }

// Old way to make text disappear. Didnt allow me to make a smooth transition in css.

  // function makeDisappear(){
  //   if (disaClicks == 0) {
  //       document.getElementById("moreText").style.transition = "1s";
  //       document.getElementById("moreText").style.opacity = "0.1"; 
  //       document.getElementById("moreText").style.display = "none"; 
  //       disaClicks = disaClicks + 1
  //   } else {
  //       document.getElementById("moreText").style.display = "block"; 
  //       document.getElementById("moreText").style.transition = "1s";
  //       document.getElementById("moreText").style.opacity = "1"; 
  //       disaClicks = disaClicks - 1
  //   }
  //   console.log("Disaclicks: " + disaClicks)
  // }
  