const leftMainTopDiv = document.querySelector("#left-main-top");
const leftMainTopImg = document.querySelector("#left-main-top img");
const socialIconDiv = document.querySelector("#socialIconsDiv");
const socialIcon = document.querySelector("#socialIconsDiv img");

leftMainTopImg.addEventListener("mouseover", function rotateImage(e) {
  e.target.style.width = "200px"; // target is the selector before addEventListener
  // leftMainTopImg.style.width = "100px";
  e.target.style.transform = "rotate(22deg)";
  e.target.style.cursor = "pointer";

  // social media icons
  //Not hidden,Slide Down from current posi.,Opacity 100

  setTimeout(function() {
    document.querySelector("#socialIconsDiv").style.transform =
      "translateY(-15px)";
    document.querySelector("#socialIconsDiv img:nth-child(1)").style.transform =
      "translateX(-5px)";
    document.querySelector("#socialIconsDiv img:nth-child(3)").style.transform =
      "translateX(5px)";
    // document.querySelector("#socialIconsDiv img:nth-child(4)").style.transform =
    //   "translateX(30px)";
  }, 300);

  // transform: translateY(25px) translateX(50px);
  document.querySelector("#socialIconsDiv").style.opacity = "100%";
  document.querySelector("#socialIconsDiv").style.display = "flex";
});

// leftMainTopImg.addEventListener("click", function keepSocialIcons(e) {
//   console.log("keepIcons");
//   //Make appear button to hide them
//   document.querySelector("#socialIconsDiv").style.opacity = "100%";
//   document.querySelector("#socialIconsDiv").style.display = "flex";
// });

leftMainTopImg.addEventListener("mouseout", function rotateImage(e) {
  e.target.style.width = "200px"; // target is the selector before addEventListener
  // leftMainTopImg.style.width = "100px";
  e.target.style.transform = "";

  document.querySelector("#socialIconsDiv").style.transform =
    "translateY(-100px)";
  document.querySelector("#socialIconsDiv img:nth-child(1)").style.transform =
    "translateX(50px)";
  document.querySelector("#socialIconsDiv img:nth-child(3)").style.transform =
    "translateX(-50px)";
  // document.querySelector("#socialIconsDiv img:nth-child(4)").style.transform =
  //   "translateX(-90px)";
  document.querySelector("#socialIconsDiv").style.opacity = "0%";

  // setTimeout(() => {
  //   document.querySelector("#socialIconsDiv").style.display = "none";
  // }, 1500);
});

function scrollToProjects() {
  document.querySelector("#second").scrollIntoView({
    behavior: "smooth",
  });
}

// document.querySelector('.cards').addEventListener('mouseover')

// const cardFour = document.querySelector(".cards:nth-child(3)");
// const allCards = document.querySelectorAll(".cards");
//
// console.log(cardFour.style.ow);
// allCards.forEach((item) => {
//   console.log(item.style.padding);
// });


function myFunction(x) {
  if (x.matches) { // If media query matches
    // document.body.style.backgroundColor = "yellow";
    document.body.querySelector("#right-main-top").innerHTML =
      "<h2>If you want to see my projects</h2>";
  } else {
    document.body.querySelector("#right-main-top").innerHTML =
      "<h2>If you want to see my projects : </h2>";
  }
}

var x = window.matchMedia("(max-width: 1340px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
