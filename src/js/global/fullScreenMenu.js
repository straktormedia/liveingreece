import lenis from "./smoothScroll.js";

// gsap.registerPlugin();
// Show Hide Menu
const showHideMenu = (header, menu, toggle, otherTl = undefined) => {
  const menutl = gsap.timeline({ reversed: true });
  menutl
    .set(menu, {
      display: "flex",
    })
    .set(header, {
      mixBlendMode: "revert",
    })
    .fromTo(
      "main",
      {
        // scale: 1,
        opacity: 1,
      },
      {
        // scale: 0.95,
        opacity: 0,
        ease: Strong.easeInOut,
        duration: 1.5,
      }
    )
    .fromTo(
      menu,
      {
        y: "120%",
      },
      {
        y: "0%",
        ease: Strong.easeInOut,
        duration: 1.6,
      },
      "<"
    )
    .fromTo(
      ".main-menu__list li",
      {
        opacity: 0,
        // skewType: "simple",
        skewX: 5,
        rotationZ: 5,
        scaleY: 0,
      },
      {
        opacity: 1,
        // skewType: "simple",
        skewX: 0,
        rotationZ: 0,
        scaleY: 1,
        stagger: 0.07,
      },
      "<0.7"
    );

  toggle.addEventListener("click", () => {
    if (menutl.reversed()) {
      menutl.play();
      lenis.isStopped = true; // Enable smooth scrolling

      if (otherTl) {
        otherTl.reverse();
      }
    } else {
      menutl.reverse();
      lenis.isStopped = false; // Disable smooth scrolling

      if (otherTl) {
        otherTl.reverse();
      }
    }
  });
};

// Change Toggle Shape (from Hamburger to X)
const changeToggleShape = (toggle, toggleInner, menuClass) => {
  toggle.addEventListener("click", () => {
    // Set condition for pressed Toggle Button
    const isPressed = toggleInner.getAttribute("pressed") === "true";

    // Add "pressed" class and attribute
    toggleInner.classList.toggle("hamburger--pressed", !isPressed);
    toggleInner.setAttribute("pressed", isPressed ? "false" : "true");

    // Update rest of UI
    // showHideMobileMenu(menuClass, isPressed);
  });
};

export { changeToggleShape, showHideMenu };