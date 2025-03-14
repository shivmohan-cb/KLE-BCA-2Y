// create h1, h1 textContent = Event listener
// create button , button textContent = Click
// create div, this element should have class="box" and id="blue-box"
// append all these element in body

const h1Tag = document.createElement("h1");
const buttonTag = document.createElement("button");
const divTag = document.createElement("div");
const bodyTag = document.querySelector("body");

h1Tag.textContent = "Event listener";
buttonTag.textContent = "Click";

divTag.classList.add("box");
divTag.setAttribute("id", "blue-box");
divTag.textContent = "Blue box";

bodyTag.append(h1Tag, buttonTag, divTag);

//---------------Event Listerner----------
// click
// mouseover
// keyup
// keydown

// onclick event

h1Tag.onclick = function(){
   h1Tag.style.border = "4px solid red";
}

buttonTag.addEventListener("click",function(event){
    console.log(event);
    h1Tag.textContent= "Click event happend";
    h1Tag.style.backgroundColor = "green"
    h1Tag.style.color= "white";
});

// keydown event listener
// addEventListener("keydown",function(e){
// //    console.log(e);
//    if(e.key=="r"){
//       divTag.style.backgroundColor = "red";
//    }
//    if(e.key=="b"){
//     divTag.style.backgroundColor = "blue";
//    }
// });

// addEventListener("keyup",(e)=>{
//     if(e.key=="r"){
//         divTag.style.backgroundColor = "";
//      }
//      if(e.key=="b"){
//       divTag.style.backgroundColor = "";
//      }
// });

h1Tag.style.backgroundColor = "blue";


// create element 
const ball = document.createElement("div");

ball.classList.add("ball");

bodyTag.append(ball);


// use arrows to move an element 
let translateX = 0;
let translateY = 0;
let movingRate = 10;
addEventListener("keydown",function(e){
//   console.log(e);
  if(e.key=="ArrowUp"){//moving up
     translateY -= movingRate; 
     ball.style.transform =  "translateY("+ translateY +"px) " + "translateX("+ translateX +"px)";
  }
  if(e.key=="ArrowDown"){//moving down
    translateY += movingRate; 
     ball.style.transform =  "translateY("+ translateY +"px) "+"translateX("+ translateX +"px)";
  }
  if(e.key=="ArrowLeft"){//moving left
    translateX -= movingRate; 
     ball.style.transform =  "translateY("+ translateY +"px) "+"translateX("+ translateX +"px)";
  }
  if(e.key=="ArrowRight"){// moving right
    translateX += movingRate; 
     ball.style.transform =  "translateY("+ translateY +"px) "+"translateX("+ translateX +"px)";
  }
});

// addEventListener("keyup",function(e){
//     console.log(e);
//     if(e.key=="ArrowUp"){}
//     if(e.key=="ArrowDown"){}
//     if(e.key=="ArrowLeft"){}
//     if(e.key=="ArrowRight"){}
//   });
  