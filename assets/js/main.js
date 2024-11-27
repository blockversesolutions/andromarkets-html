jQuery(document).ready(function ($) {
   
  if ($('.data-show-table').length) {  
    $('.data-show-table').DataTable({
        responsive: true,
        searching: false,
        ordering: false,
        info: false,
        paging: false,
    });
  }
  
  // menu bg add
  function checkScroll() {
    if ($(window).scrollTop() > 50) {
        $(".header-transparent").addClass("menu-bg");
    } else {
        $(".header-transparent").removeClass("menu-bg");
    }
  }
  // Run on page load
  $(document).ready(function () {
    checkScroll();
  });

  // Run on scroll
  $(window).on("scroll", function () {
    checkScroll();
  });
  // $(".close-mark").click(function(){
  //   $(".country-menu").hide();
  // });
  
});
// select box start
const select = document.querySelector('.custom-select');
const selectedOption = select.querySelector('.selected-option');
const options = select.querySelector('.options');
const optionItems = select.querySelectorAll('.option');

select.addEventListener('click', () => {
  select.classList.toggle('open');
});

optionItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    const value = event.target.dataset.value;
    selectedOption.textContent = event.target.textContent;
    select.classList.remove('open');
    optionItems.forEach((el) => el.classList.remove('selected'));
    event.target.classList.add('selected');
  });
});

// Close dropdown on clicking outside
document.addEventListener('click', (event) => {
  if (!select.contains(event.target)) {
    select.classList.remove('open');
  }
});

// select box end
(function () {
  const quantityContainers = document.querySelectorAll(".quantity");

  quantityContainers.forEach((quantityContainer) => {
    const minusBtn = quantityContainer.querySelector(".minus");
    const plusBtn = quantityContainer.querySelector(".plus");
    const inputBox = quantityContainer.querySelector(".input-box");

    updateButtonStates();

    quantityContainer.addEventListener("click", handleButtonClick);
    inputBox.addEventListener("input", handleQuantityChange);

    function updateButtonStates() {
      const value = parseInt(inputBox.value);
      minusBtn.disabled = value <= 1;
      // Remove the condition to disable the plus button based on max value
    }

    function handleButtonClick(event) {
      if (event.target.classList.contains("minus")) {
        decreaseValue();
      } else if (event.target.classList.contains("plus")) {
        increaseValue();
      }
    }

    function decreaseValue() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.max(value - 1, 1);
      inputBox.value = value;
      updateButtonStates();
      handleQuantityChange();
    }

    function increaseValue() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : value + 1; // No max limit now
      inputBox.value = value;
      updateButtonStates();
      handleQuantityChange();
    }

    function handleQuantityChange() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : value;

      // Execute your code here based on the updated quantity value
      console.log("Quantity changed:", value);
    }
  });
})();

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
    if (element) { // Check if element exists
        if (window.innerWidth <= 991) {
            element.classList.add('nowrap');  
        } else {
            element.classList.remove('nowrap');   
        }
    }
}

  // Run the function once on page load
  handleResize();

  // Add event listener for window resize
  window.addEventListener('resize', handleResize);

  