

  window.onload = function () {
    window.setTimeout(fadein1, 2000);
    window.setTimeout(fadein2, 4000);
    window.setTimeout(fadein3, 6000);
  }

  function fadein1() {
    document.getElementById('tagline1').style.opacity = '1';
  }

  function fadein2() {
    document.getElementById('tagline2').style.opacity = '1';
  }

  function fadein3() {
    document.getElementById('tagline3').style.opacity = '1';
  }
