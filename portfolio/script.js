const tooglebtn = document.getElementById("nav-toggle");
const navright = document.getElementById("right");
  
tooglebtn.addEventListener("click", () => {
    navright.classList.toggle("active");
});

var typed = new Typed("#element", {
    strings: ["I am a passionate Web Developer."],
    typeSpeed: 30,
});

//smooth scrolling to anchor links with JavaScript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const scrollToTopButton = document.getElementById('scrollToTop');

// Add a scroll event listener to show/hide the button
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 100) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});
