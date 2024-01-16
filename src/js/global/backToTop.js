const backToTop = function (button, className) {
  // Back to Top

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      button.classList.add(`${className}`);
    } else {
      button.classList.remove(`${className}`);
    }
  });

  button.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

export default backToTop;
