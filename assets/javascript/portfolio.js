window.onload = function () {
  window.setTimeout(fadein1, 1000);
  window.setTimeout(fadein2, 3000);
  window.setTimeout(fadein3, 5000);
  window.setTimeout(fadein4, 7000);
}

function fadein1() {
  document.getElementById("tagline1").style.opacity = "1";
}

function fadein2() {
  document.getElementById("tagline2").style.opacity = "1";
}

function fadein3() {
  document.getElementById("tagline3").style.opacity = "1";
}

function fadein4() {
  document.getElementById("intro").style.opacity = "1";
}
