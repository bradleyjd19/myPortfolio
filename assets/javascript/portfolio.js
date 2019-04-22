window.onload = function () {
  setTimeout(function() {fadein("tagline1")}, 1500);
  setTimeout(function() {fadein("tagline2")}, 3000);
  setTimeout(function() {fadein("tagline3")}, 4500);
  setTimeout(function() {fadein("tagline4")}, 6500);
  setTimeout(function() {fadein("preName")}, 8500);
  setTimeout(function() {fadein("intro")}, 8500);
  setTimeout(function() {fadein("postName")}, 8500);
  setTimeout(fadeout, 12000);
  setTimeout(showLinks, 15000);
}

function fadein(line) { 
  document.getElementById(line).style.opacity = "1";
}

function fadeout() {
  document.getElementById("tagline1").style.opacity = "0";
  document.getElementById("tagline2").style.opacity = "0";
  document.getElementById("tagline3").style.opacity = "0";
  document.getElementById("tagline4").style.opacity = "0";
  document.getElementById("preName").style.opacity = "0";
  document.getElementById("postName").style.opacity = "0";
}

function showLinks() {
  document.getElementById("container-header").style.opacity = "1";
}

$(document).on("click", ".btn", hideContent);

function hideContent() {
  $("#container-content").hide();
}

$("#formSubmit").on("click", clearForm);

function clearForm() {
  $("#formName").val("");
  $("#formEmail").val("");
  $("#formMessage").val("");
}