let mainImg = document.querySelector(".main-img");
let home = document.getElementById("home");

function changePepsi(pepsiSrc, bgColor) {
  mainImg.src = pepsiSrc;
  home.style.background = bgColor;
}

//hna kamkliki katb9a fix 7ta tani nkliki 3la xiwa7ed akhor
const flavorImages = document.querySelectorAll(".pepsi");
flavorImages.forEach(img => {
  img.addEventListener("click", () => {
    // remove from all
    flavorImages.forEach(i => i.classList.remove("active-click"));
    // add to selected one
    img.classList.add("active-click");
  });
});


/*
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5
      },
      "size": {
        "value": 3
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        }
      }
    }
});
*/


