window.onload = function () {
  setTimeout(function() {fadein("tagline1")}, 1500);
  setTimeout(function() {fadein("tagline2")}, 3000);
  setTimeout(function() {fadein("tagline3")}, 4500);
  setTimeout(function() {fadein("tagline4")}, 6500);
  setTimeout(function() {fadein("intro")}, 8500);  
}

function fadein(line) {
  document.getElementById(line).style.opacity = "1";
}