import loader from "./global/loader.js";
import smoothScroll from "./global/smoothScroll.js";
import { changeToggleShape, showHideMenu } from "./global/fullScreenMenu.js";
import stickyHeader from "./global/stickyHeader.js";
import customCursor from "./logic/customCursor.js";

// Variables
const body = document.querySelector(".body");
const cursor1 = document.querySelector(".cursor--1");
const cursorCircleSmall = document.querySelector(".cursor__circle--small");
const cursor2 = document.querySelector(".cursor--2");
const sectionInteractive = document.querySelector(
  ".hero__img-container--interactive"
);
const sectionWidth = sectionInteractive.offsetWidth;
const sectionHeight = sectionInteractive.offsetHeight;
const interactionTl = gsap.timeline({ paused: true });
const cursorArrow = document.querySelector(".cursor__arrow");
const arrow = document.querySelector(".arrow-centered");

// Loader
loader(body);

// Custom Cursors
customCursor(cursor1, 1);
customCursor(cursor2, 2);

// Entrance Animations
gsap.fromTo(
  ".hero__img-container",
  {
    clipPath: "circle(0% at 100% 50%)",
  },
  {
    clipPath: "circle(50% at 50% 50%)",
    duration: 2,
    stagger: 0.3,
    ease: "power4.out",
    delay: 1,
  }
);
gsap.from(".hero__heading span", {
  opacity: 0,
  stagger: 0.2,
  duration: 1.5,
  delay: 2,
});

// Header Filter
const header = document.querySelector(".header");
stickyHeader(header, "header--sticky");

// Desktop JS
let mm = gsap.matchMedia();
mm.add("(min-width: 991px)", () => {
  //   customCursor(cursor1, 1);
  //   customCursor(cursor2, 2);

  gsap.set(arrow, {
    opacity: 0,
  });

  interactionTl
    .to(
      cursorCircleSmall,
      {
        backgroundColor: "#2e3233",
      },
      "<"
    )
    .to(
      cursor2,
      {
        width: sectionWidth,
        height: sectionHeight,
        marginLeft: -sectionWidth / 2,
        marginTop: -sectionHeight / 2,
        duration: 1,
      },
      "<"
    )
    .to(
      arrow,
      {
        opacity: 1,
        duration: 0.1,
      },
      "<"
    );

  sectionInteractive.addEventListener("mouseenter", () => {
    interactionTl.play();
  });

  sectionInteractive.addEventListener("mouseleave", (e) => {
    if (e.target.classList.contains("hero__img-container--interactive")) {
      interactionTl.reverse();
    }
  });

  const links = document.querySelectorAll(".activates-cursor");
  links.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      let hoveredItem = e.target;

      if (hoveredItem.classList.contains("activates-cursor")) {
        gsap.to(cursorCircleSmall, {
          backgroundColor: "#eeff33",
        });
      }
    });

    link.addEventListener("mouseleave", (e) => {
      let hoveredItem = e.target;

      if (hoveredItem.classList.contains("activates-cursor")) {
        gsap.to(cursorCircleSmall, {
          backgroundColor: "#dae6e6",
        });
      }
    });
  });
});

// Mobile JS
mm.add("(max-width: 990px)", () => {
  // Fullscreen Menu
  const mainMenu = document.querySelector(".main-menu__list");
  const toggle = document.querySelector(".hamburger-container");
  const toggleInner = document.querySelector(".hamburger");

  const extraMenu = document.querySelector(".header__extra-menu");
  const forWord = document.querySelector(".main-menu span");
  mainMenu.insertAdjacentElement("afterbegin", forWord);
  mainMenu.insertAdjacentElement("beforeend", extraMenu);

  showHideMenu(header, mainMenu, toggle);
  changeToggleShape(toggle, toggleInner, ".main-menu");

  const circleMobile = document.querySelector(".hero__circle--interactive");
  const arrowMobile = document.querySelector(".hero__arrow");

  gsap.fromTo(
    circleMobile,
    {
      y: -500,
    },
    {
      y: 0,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionInteractive,
        start: "top 50%",
        end: "bottom bottom",
        toggleActions: "restart none reverse none",
        //   markers: true,
      },
    }
  );

  gsap.fromTo(
    arrowMobile,
    {
      rotate: 90,
    },
    {
      rotate: -90,
      ease: "power4.out",
      duration: 2,
      scrub: true,
      scrollTrigger: {
        trigger: sectionInteractive,
        start: "top 50%",
        end: "bottom bottom",
        toggleActions: "restart none reverse none",
      },
    }
  );
});

const updateArrowRotation = (e) => {
  // Calculate the angle between the arrow and the cursor in radians
  const rect = arrow.getBoundingClientRect();
  const arrowCenterX = rect.left + rect.width / 2;
  const arrowCenterY = rect.top + rect.height / 2;

  const deltaX = Math.max(Math.min(e.clientX - arrowCenterX, 100), -100); // Limit deltaX to -100 to 100
  const deltaY = Math.max(Math.min(e.clientY - arrowCenterY, 100), -100); // Limit deltaY to -100 to 100

  // Calculate the angle using both deltaX and deltaY
  const angleRad = Math.atan2(deltaY, deltaX);

  // Convert radians to degrees
  const angleDeg = (angleRad * 180) / Math.PI;

  // Adjust sensitivity based on distance from arrow center to cursor
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  const sensitivity = 1; // Adjust this constant for sensitivity
  const rotatedAngle = angleDeg * sensitivity * (1 + distance / 500);

  // Calculate the angle difference to avoid flickering
  const angleDiff =
    rotatedAngle -
      parseFloat(
        arrow.style.transform.replace("rotate(", "").replace("deg)", "")
      ) || 0;

  // Rotate the arrow
  arrow.style.transform = `rotate(${rotatedAngle}deg)`;

  // If the angle difference is too large, add or subtract a full rotation
  if (Math.abs(angleDiff) > 180) {
    arrow.style.transform = `rotate(${
      rotatedAngle + (angleDiff > 0 ? -360 : 360)
    }deg)`;
  }
};

document.addEventListener("mousemove", updateArrowRotation);
