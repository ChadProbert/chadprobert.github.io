/* FADE IN SKILLS ITEMS ON SCROLL FUNCTIONALITY */

// selects all the skills items
const skillsItems = document.querySelectorAll(".skillsItem li");

// checks if the element is in the viewport
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// starts the animation when the element is in the viewport
const animateSkillsItems = () => {
  skillsItems.forEach((item) => {
    if (isElementInViewport(item)) {
      item.style.animationPlayState = "running";
    }
  });
};

window.addEventListener("scroll", animateSkillsItems);
window.addEventListener("load", animateSkillsItems);
window.addEventListener("resize", animateSkillsItems);


// FADE IN PROJECTS ON SCROLL FUNCTIONALITY

// selects all the elements with the class "fade-in"
const projectCards = document.querySelectorAll('.fade-in');

// checks if the element is in the viewport
function fadeInOnScroll() {
  projectCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight) {
      card.classList.add('active');
    }
  });
}

window.addEventListener('scroll', fadeInOnScroll);
document.addEventListener('DOMContentLoaded', () => {
  fadeInOnScroll();
});

/* references:
Google Chrome Grepper extension answer
*/