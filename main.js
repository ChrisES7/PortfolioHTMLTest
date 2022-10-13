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

  document.querySelector("#socialIconsDiv").style.transform =
    "translateY(25px) ";

  setTimeout(function functionName() {
    document.querySelector("#socialIconsDiv img").style.margin = "0px 7px";
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
    "translateY(-50px)";
  document.querySelector("#socialIconsDiv").style.opacity = "0%";

  // setTimeout(() => {
  //   document.querySelector("#socialIconsDiv").style.display = "none";
  // }, 1500);
});
