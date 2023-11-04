// Select the back to top button from the DOM.
const backToTopButton = document.querySelector('#back-to-top');

// Add an event listener to the window object to track the position of the scroll on the Y Axis.
window.addEventListener('scroll', function () {
    // IF the window.scrollY is greater than or equal to 320px, the back to top button will be displayed.
    if (window.scrollY >= 320) {
      backToTopButton.style.display = 'block';
    }
    // ELSE hide the back to top button.
    else {
      backToTopButton.style.display = 'none';
    }
});

// Function to scroll to the top of the page when invoked.
function scrollToTop() {
    window.scrollTo({ top: 0, behaviour: 'smooth' });
}
  
// Attach the scrollToTop function to the back to top button, with a click event listener.
backToTopButton.addEventListener('click', scrollToTop);

// Select the book reviews carousel from the DOM to allow custom control over the carousels properties.
const bookReviews = document.getElementById('book-reviews');
const carousel = new bootstrap.Carousel(bookReviews, {
    // Setting a 6 second interval between slides.
    interval: 6000,
    pause: false,
    touch: true,
    wrap: true,
});


// This variable will store the current scroll position in the document.
let scrollPosition = 0;
// Select the header navigation element from the DOM.
let headerNav = document.getElementById('header-nav');
// Add an event listener to the window object waiting for a scroll, once a scroll occurs, call the function.
window.addEventListener('scroll', function () {
    //Get the location of the scroll position.
    let scrollTop = window.screenY || document.documentElement.scrollTop;
    // IF the scroll location is greater than the current scroll position (0 by default), set the header navigation position to a negative number to transition it off screen.
    if (scrollTop > scrollPosition) {
        headerNav.style.cssText = 'top: -150px';
    }
    // ELSE the header navigation position will be set back its default value.
    else {
        headerNav.style.top = '0';
    }
    // Update the new scroll position and set it to the initial scroll position variable, this way the function can continue to check the value.
    scrollPosition = scrollTop;
    headerNav.style.position = 'fixed';
});

// Select all links from the DOM with the class of .nav-link
const navLinks = document.querySelectorAll('.nav-link');

// Loop through each link and add an event listener to each one, depending on which link is clicked, the active class will be added to that link, and removed from the others.
navLinks.forEach(function(link) {
    link.addEventListener('click', function () {
        // Remove 'active' class from all links
        navLinks.forEach(function(navLink) {
            // Remove the active class from links that are not active.          
            navLink.classList.remove('active');
        });

        // Add the active class to whatever navigation link was clicked.
        link.classList.add('active');
    });
});

// Query selectors for the book order form elements.
const orderButton = document.getElementById('order-button');
const orderForm = document.getElementById('order-form');

orderForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behaviour to allow for custom validation of resetting the form content and redirecting to the landing page.
    event.preventDefault();
    // Display a success message for the user when the form is submitted
    alert('Thank you for your interest in QualityLand, your order has been received! You will receive an email confirmation shortly.');
    // Reset the book order form
    orderForm.reset();
    // Redirect to the the landing page.
    window.location.href = '#hero';
 });

/* Thank you to Fireship for this useful Scroll Animations reference, check it out here. https://www.youtube.com/watch?v=T33NN_pPeNI&t=13s */

//  This code observes the viewport, looking for intersecting elements, when an element is intersecting, the class is added to the element, which triggers the animation.
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      // Displays the class if intersecting, shows the animation once.
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-animation");
      }
      // To show the animation multiple times, remove the class to allow the animation to be added again, this repeats over and over.
      else {
        entry.target.classList.remove("slide-animation");
      }
    });
  });
  
  // Select all elements with the class of .hidden, and loop through each one, adding the observer to each element, and once the viewport intersects with the element, the "slide-animation" class is added to the element, triggering the animation, and vice-versa.
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));