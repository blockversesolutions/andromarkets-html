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

  