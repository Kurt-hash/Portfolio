document.addEventListener("DOMContentLoaded", function() {
  // Simulate a delay to showcase the loading screen
  setTimeout(function() {
   let loadingScreen = document.getElementById("loading-screen");
    let mainContent = document.getElementById("main-content");
    let header = document.getElementById("header");
    let skills = document.getElementById("skills");
    let projects = document.getElementById("projects");
    let footer = document.getElementById("footer");
    let social = document.getElementById("social")

    loadingScreen.style.display = "none";
    mainContent.style.display = "block";
    header.style.display = "block";
    skills.style.display = "block";
    projects.style.display = "block";
    footer.style.display = "block";
    social.style.display = "block";
  }, 3000);
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      }
      else {
          entry.target.classList.remove('show');
      }
  });
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

// Get in touch
(function() {
  emailjs.init('lF1m_Byuvj_hi4UOO');
})();

document.getElementById('my-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // get the form data
  var formData = {
      from_name: document.getElementById('from_name').value,
      from_email: document.getElementById('from_email').value,
      to_name: document.getElementById('to_name').value,
      to_email: document.getElementById('to_email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
  };

  // send the email
  emailjs.send('service_8my8f57', 'template_v1ny5ha', formData)
      .then(function(response) {
          alert('Sent Successfully')
          console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
          console.log('FAILED...', error);
      });
});


