const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
var timeout;
function showCorsor() {
  document.querySelector("#main").addEventListener("mouseenter", function () {
    gsap.to("#min", {
      opacity: 1,
    });
  });
  document.querySelector("#main").addEventListener("mouseleave", function () {
    gsap.to("#min", {
      opacity: 0,
    });
  });
}
function loder() {
  var tl = gsap.timeline();
  tl.to(".boudelem", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 0.2,
  }).from("#home-footer", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
  });
}
function mouseSuqese() {
  var Xscale = 1;
  var Yscale = 1;

  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove", function (dets) {
    console.log();
    clearTimeout(timeout);
    Xscale = gsap.utils.clamp(1.2, 0.8, dets.clientX - xprev);
    Yscale = gsap.utils.clamp(1.2, 0.8, dets.clientY - yprev);
    (xprev = dets.clientX), (yprev = dets.clientY), mouseMouve(Xscale, Yscale);
    timeout = setTimeout(function () {
      document.querySelector(
        "#min"
      ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px)
            scale(1,1)`;
    }, 100);
  });
}
function mouseMouve(Xscale, Yscale) {
  console.log(document.querySelector("#min").offsetWidth);
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#min"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px)
         scale(${Xscale},${Yscale})`;
  });
}
function imaAnimaction() {
  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
      var diff = Math.floor(dets.clientY - elem.getBoundingClientRect().top);
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
      gsap.to(document.querySelector("#min"), {
        height: 10,
        width: 10,
        opacity: 1,
      });
      gsap.to(elem.querySelector("h1"), {
        left: 0,
        opacity: 0.8,
      });
      document.querySelector("#min").innerHTML = "<h4> </h4>";
    });
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
      gsap.to(document.querySelector("#min"), {
        height: 80,
        width: 80,
        opacity: 0.7,
      });
      gsap.to(elem.querySelector("h1"), {
        left: 30,
        opacity: 0.4,
      });
      document.querySelector("#min").innerHTML = "<h4>view</h4>";
    });
  });
}

function currentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm}`;
  document.querySelector("#time").innerText = formattedTime;
}

loder(), showCorsor(), mouseMouve();
mouseSuqese();
imaAnimaction();
setInterval(currentTime, 1000);
