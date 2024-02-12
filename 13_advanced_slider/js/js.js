//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███      ▐██▌ ███  █▓█▄███▀      ▐██▌      ███▌
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌     ▐██▌ ▐███  ███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀  ▀▀      ▀▀▀   ▀▀▀  ▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
slider("slider-container", "horizontal", 4000, "img/", true, true);
//slider(containerID, "horizontal"/"vertical", timerMS/false, imagePath/, controls, dots);

function slider(containerID, direction = "horizontal", timerMS, imagePath, controls, dots) {
  ///////////////////// Direction ////////////////////////////
  let translateDir = direction == "horizontal" ? "translateX" : "translateY";

  /////////////////// Selectors ////////////////////////////
  const sliderContainer = document.querySelector(`.${containerID}`);
  const sliderContent = document.querySelector(".slider-content");
  sliderContent.classList.add(direction);
  const sliderCount = sliderContent.children.length;
  ///////////////////Create Last and First Clone & select///////////
  const firstClone = sliderContent.children[0].cloneNode(true);
  const lastClone = sliderContent.children[sliderCount - 1].cloneNode(true);

  sliderContent.append(firstClone);
  sliderContent.prepend(lastClone);
  const newSliderCount = sliderContent.children.length;
  ////////////////////Create Controls & select//////////////////////

  let previousArrowSec = document.createElement("section");
  previousArrowSec.classList.add("slider-control-previous");
  previousArrowSec.classList.add("hidden");
  previousArrowSec.classList.add(direction);
  previousArrowSec.innerHTML = `▶`;
  sliderContainer.appendChild(previousArrowSec);
  //-------------------------------------
  let nextArrowSec = document.createElement("section");
  nextArrowSec.classList.add("slider-control-next");
  nextArrowSec.classList.add("hidden");
  nextArrowSec.classList.add(direction);
  nextArrowSec.innerHTML = `▶`;
  sliderContainer.appendChild(nextArrowSec);

  const previousArrow = document.querySelector(".slider-control-previous");
  const nextArrow = document.querySelector(".slider-control-next");

  /////////////////Create slider-dot & select//////////////////////

  let newDiv = document.createElement("section");
  newDiv.classList.add("slider-dot");
  newDiv.classList.add("hidden");
  sliderContainer.appendChild(newDiv);
  const sliderDot = document.querySelector(".slider-dot");

  sliderDot.classList.add(direction);

  //////////////////// Create dots & select///////////////////////////
  for (let i = 0; i < sliderCount; i++) {
    const dot = document.createElement("div");
    dot.setAttribute("id", `dot-${i + 1}`);
    sliderDot.append(dot);
  }
  const sliderDots = document.querySelectorAll(".slider-dot div");
  ////////////////////Select 1st dot/////////////////////
  sliderDots[0].classList.add("selected");

  //|||||||||||||||||||Slider Content Name Generator||||||||||||||||||||||
  document.querySelectorAll(".slider-content div").forEach(function (e, i) {
    e.innerHTML = e.innerHTML == "" ? `SECTION ${i + 1}` : e.innerHTML;
  });
  //|||||||||||||||||||||||||||||| Next Slide Function||||||||||||||||||||
  function moveToNextSlide() {
    sliderContent.style.transition = ".5s ease-out";
    if (sliderPosition >= sliderCount + 1) return;
    sliderPosition++;
    sliderContent.style.transform = `${translateDir}(-${sliderPosition * sliderContentDirMeasure}px)`;

    if (sliderPosition == newSliderCount - 1) {
      dotSelected(1);
    } else {
      dotSelected(sliderPosition);
    }
  }
  //|||||||||||||||||||||||||||Selected Dot Function|||||||||||||||||||||
  function dotSelected(current) {
    sliderDots.forEach(function (e) {
      e.classList.remove("selected");
    });
    sliderDots[current - 1].classList.add("selected");
  }
  //|||||||||||||||||||||||||||Dot Click Action||||||||||||||||||||
  let sliderPosition = 1;

  let sliderContentDirMeasure = direction == "horizontal" ? sliderContent.getBoundingClientRect().width : sliderContent.getBoundingClientRect().height;

  sliderDots.forEach(function (e) {
    let idName = e.getAttribute("id");
    console.log(idName);
    let clicked = idName.slice(idName.indexOf("-") + 1) * 1;
    e.addEventListener("click", function () {
      sliderContent.style.transition = ".5s ease-out";
      sliderContent.style.transform = `${translateDir}(-${clicked * sliderContentDirMeasure}px)`;
      sliderPosition = clicked;
      dotSelected(sliderPosition);
    });
  });

  //|||||||||||||||||||||||||||| Onload Start |||||||||||||||||||||
  sliderContent.style.transform = `${translateDir}(-${sliderContentDirMeasure}px)`;
  dotSelected(sliderPosition);

  //|||||||||||||||||||||||||||Arrow Actions|||||||||||||||||||||||
  //------------------------- Next ------------------------
  nextArrow.addEventListener("click", moveToNextSlide);
  //------------------------- previouse ---------------------
  previousArrow.addEventListener("click", function () {
    sliderContent.style.transition = ".5s ease-out";
    if (sliderPosition <= 0) return;
    sliderPosition--;
    sliderContent.style.transform = `${translateDir}(-${sliderPosition * sliderContentDirMeasure}px)`;

    if (sliderPosition == 0) {
      dotSelected(sliderCount);
    } else {
      dotSelected(sliderPosition);
    }

    console.log("new slider pos - ", sliderPosition);
  });
  //|||||||||||||||||||||||||||Transition Finish Event|||||||||||||||||||||||
  sliderContent.addEventListener("transitionend", () => {
    if (sliderPosition == newSliderCount - 1) {
      sliderPosition = 1;
      sliderContent.style.transition = "none";
      sliderContent.style.transform = `${translateDir}(-${sliderContentDirMeasure}px)`;
    }
    if (sliderPosition == 0) {
      sliderPosition = sliderCount;
      sliderContent.style.transition = "none";
      sliderContent.style.transform = `${translateDir}(-${sliderPosition * sliderContentDirMeasure}px)`;
    }
  });

  //\\\\\\\\\\\\\\\\\\\\\\ Restart on Window Resize\\\\\\\\\\\\\\\\\
  window.addEventListener("resize", function () {
    sliderContentDirMeasure = direction == "horizontal" ? sliderContent.getBoundingClientRect().width : sliderContent.getBoundingClientRect().height;
    sliderContent.style.transform = `${translateDir}(-${(sliderPosition - 1) * sliderContentDirMeasure}px)`;
  });
  //|||||||||||||||||||||Lazy Loading||||||||||||||||||||||||||||

  if (imagePath) {
    let slider = document.querySelectorAll(".slider");

    const obsOptions = {
      root: sliderContainer,
      threshold: 0,
      rootMargin: "50px",
    };

    const obsCallback = function (entries) {
      entries.forEach((e) => {
        const intersecting = e.isIntersecting;
        if (intersecting) {
          e.target.firstElementChild.setAttribute("src", `${imagePath}${e.target.firstElementChild.dataset.src}`);
        }
      });
    };

    const observer = new IntersectionObserver(obsCallback, obsOptions);

    slider.forEach(function (section) {
      observer.observe(section);
    });
  }

  //||||||||||||||||||||||Automatation and Hover Pause|||||||||||||||||
  let standBy;
  const startSlide = () => {
    standBy = setInterval(() => {
      moveToNextSlide();
    }, timerMS);
  };

  if (timerMS) {
    startSlide();
    sliderContainer.addEventListener("mouseenter", () => {
      clearInterval(standBy);
    });
    sliderContainer.addEventListener("mouseleave", startSlide);
  }

  //||||||||||||||||||||||| Controls visibility |||||||||||||||
  if (dots == true) {
    sliderDot.classList.remove("hidden");
  }
  if (controls == true) {
    previousArrow.classList.remove("hidden");
    nextArrow.classList.remove("hidden");
  }
}
