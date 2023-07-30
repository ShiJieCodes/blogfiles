// drop down for modal start
const modals = document.querySelectorAll(".modal");

modals.forEach(function (modal) {
  const btns = modal.querySelector(".modal-btns");
  btns.addEventListener("click", function () {
    modals.forEach(function (item) {
      if (item !== modal) {
        item.classList.remove("show-text");
      }
      modal.classList.toggle("show-text");
    });
  });
});
// drop down for modal end

// fixed navbar start
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navbarHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navbarHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  const topLink = document.querySelector(".top-link");
  if (scrollHeight > 800) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent default
    console.log("hey");
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position -= navHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
