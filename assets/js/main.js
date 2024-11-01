jQuery(document).ready(function ($) {
  $('#data-show-table').DataTable({
    responsive: true,
    searching:false,
    ordering:false,
    info:false,
    paging:false,
  });
  
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
  // Function to check screen size and toggle the class
  function handleResize() {
    const element = document.querySelector('.mobile-view-table');
    if (window.innerWidth <= 991) {
      element.classList.add('nowrap');  
    } else {
      element.classList.remove('nowrap');   
    }
  }

  // Run the function once on page load
  handleResize();

  // Add event listener for window resize
  window.addEventListener('resize', handleResize);
//  app version
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
  document.getElementById("apprunning").click();

  // payment option
  function payment_option(evt, appversion) {
    var i, payment_option, paymentlinks;
    payment_option = document.getElementsByClassName("payment-option-list");
    for (i = 0; i < payment_option.length; i++) {
      payment_option[i].style.display = "none";
    }
    paymentlinks = document.getElementsByClassName("paymentlinks");
    for (i = 0; i < paymentlinks.length; i++) {
      paymentlinks[i].className = paymentlinks[i].className.replace(" active", "");
    }
    document.getElementById(appversion).style.display = "block";
    evt.currentTarget.className += " active";
    }
  document.getElementById("payment-option").click();

 


   //  app version
   function account_step_function(evt, account_step_function_id) {
    var i;
    // item content select korer jonnon
    var appversionContent = document.getElementsByClassName("account-step-thumbnails");
    for (i = 0; i < appversionContent.length; i++) {
       appversionContent[i].style.display = "none";
    }
    // button select korer jonno
    var applinks = document.getElementsByClassName("account-step");
    for (i = 0; i < applinks.length; i++) {
       applinks[i].className = applinks[i].className.replace(" active", "");
    }
    document.getElementById(account_step_function_id).style.display = "block";
    evt.currentTarget.className += " active";
    }
    document.getElementById("account-step-active").click();