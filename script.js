// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// MOBILE DROPDOWN

const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", () => {

  if (window.innerWidth <= 768) {
    dropdown.classList.toggle("active");
  }

});

// VIDEO MODAL

const watchButtons = document.querySelectorAll(".watch-btn");
const videoModal = document.getElementById("videoModal");
const recipeVideo = document.getElementById("recipeVideo");
const closeVideo = document.getElementById("closeVideo");

watchButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const videoURL = button.getAttribute("data-video");

    recipeVideo.src = `${videoURL}?autoplay=1`;

    videoModal.classList.add("active");

  });

});

// CLOSE VIDEO

closeVideo.addEventListener("click", () => {

  videoModal.classList.remove("active");

  recipeVideo.src = "";

});

// CLOSE WHEN CLICKING OUTSIDE

videoModal.addEventListener("click", (e) => {

  if (e.target === videoModal) {

    videoModal.classList.remove("active");

    recipeVideo.src = "";

  }

});

// SCROLL REVEAL

// SCROLL REVEAL

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((element) => {

    const elementTop =
      element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {

      element.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// STICKY NAVBAR SHADOW

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";

  } else {

    navbar.style.boxShadow = "none";

  }

});

// FILTER SYSTEM

const filterButtons = document.querySelectorAll(".filter-btn");
const recipeCards = document.querySelectorAll(".recipe-card");

filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    filterButtons.forEach((btn) =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const filter = button.dataset.filter;

    recipeCards.forEach((card) => {

      if (
        filter === "all" ||
        card.classList.contains(filter)
      ) {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

});