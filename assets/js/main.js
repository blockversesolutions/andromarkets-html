jQuery(document).ready(function ($) {
  
  // menu bg add
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >50) {
      $("header").addClass("menu-bg");
    } else {
      $("header").removeClass("menu-bg");
    }
  });
  // $(".close-mark").click(function(){
  //   $(".country-menu").hide();
  // });
  
});
// scroll bar js
document.addEventListener('DOMContentLoaded', function () {
  new SimpleBar(document.getElementById('scrollbar'));
});
 
 
document.addEventListener("click", function (event) {
  const div = document.getElementById("outside-click");
  const navbarText = document.getElementById("main_nav");
  if (!div.contains(event.target)) {
    // console.log('Clicked outside the div');
    navbarText.classList.remove("show");
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const textToType = "Market Terminal";
  const typedTextElement = document.getElementById("typed-text");
  let index = 0;

  function typeText() {
      if (index < textToType.length) {
          typedTextElement.textContent += textToType.charAt(index);
          index++;
          setTimeout(typeText, 100); // Adjust speed by changing the timeout duration
      }
  }
  typeText();
});
 
function appversion(evt, appversion) {
  var i, appvarsionContent, applinks;
  appversionContent = document.getElementsByClassName("appversionContent");
  for (i = 0; i < appversionContent.length; i++) {
    appversionContent[i].style.display = "none";
  }
  applinks = document.getElementsByClassName("applinks");
  for (i = 0; i < applinks.length; i++) {
    applinks[i].className = applinks[i].className.replace(" active", "");
  }
  document.getElementById(appversion).style.display = "block";
  evt.currentTarget.className += " active";
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("apprunning").click();
