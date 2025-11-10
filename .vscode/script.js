    
    AOS.init({offset:0});


    function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0)";
  document.querySelector(".hamburg").style.display = "none";
  document.querySelector(".cancle").style.display = "block";
}

function cancle() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-100%)";
  document.querySelector(".hamburg").style.display = "block";
  document.querySelector(".cancle").style.display = "none";
}


    // Simple typing effect simulation (optional enhancement)
const typingText = document.querySelector(".typing-text");
const cursor = document.getElementById("cursor");

let textArray = ["Frontend Developer", "Web Developer", "UI/UX Designer"];
let typingDelay = 100;
let erasingDelay = 60;
let newTextDelay = 2000;
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typingText.innerHTML = textArray[textIndex].substring(0, charIndex + 1) + '<span id="cursor">|</span>';
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.innerHTML = textArray[textIndex].substring(0, charIndex - 1) + '<span id="cursor">|</span>';
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textIndex++;
    if (textIndex >= textArray.length) textIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
    

  document.querySelectorAll('.circular-skill').forEach(skill => {
    const percentage = skill.getAttribute('data-percentage');
    const circle = skill.querySelector('circle:last-child');
    const offset = 314 - (314 * percentage) / 100;
    circle.style.strokeDashoffset = offset;
  });

  //Get the button
  const backToTopButton = document.getElementById("backToTop");

  //Show the button after scrolling down
  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopButton.style.display = "flex";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  //Scroll to top when clicked
  backToTopButton.addEventListener("click", ()=> {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

