import loader from "./global/loader.js";
import smoothScroll from "./global/smoothScroll.js";
import stickyHeader from "./global/stickyHeader.js";
import backToTop from "./global/backToTop.js";
import customCursor from "./logic/customCursor.js";

const cursor1 =  document.querySelector('.cursor--1');
const cursor2 =  document.querySelector('.cursor--2');
customCursor(cursor1, 1);
customCursor(cursor2, 2);

// gsap.set(cursor2, {
//     scale: 0
// })

const sectionInteractive = document.querySelector('.hero__img-container--interactive');
const sectionWidth = sectionInteractive.offsetWidth;
const sectionHeight = sectionInteractive.offsetHeight;
const interactionTl = gsap.timeline({paused:true});
interactionTl.to(cursor2, {
    width: sectionWidth,
     height: sectionHeight,
     marginLeft: -sectionWidth / 2,
     marginTop: -sectionHeight / 2,
     duration: 2
 });

sectionInteractive.addEventListener('mouseenter', () => {
    interactionTl.play();
   
})

// sectionInteractive.addEventListener('mouseout', () => {
//     console.log('left')
// interactionTl.reverse();
// })

// const body = document.querySelector(".body");
// loader(body);

// const header = document.querySelector(".header");
// stickyHeader(header, "header--sticky");

// const backToTopButton = document.querySelector(".back-to-top");
// backToTop(backToTopButton, "back-to-top--visible");

console.log("Hello from JavaScript");
