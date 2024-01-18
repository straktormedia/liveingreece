import loader from "./global/loader.js";
import smoothScroll from "./global/smoothScroll.js";
import stickyHeader from "./global/stickyHeader.js";
import backToTop from "./global/backToTop.js";
import customCursor from "./logic/customCursor.js";

const cursor1 =  document.querySelector('.cursor--1');
const cursorCircleSmall = document.querySelector('.cursor__circle--small');
const cursor2 =  document.querySelector('.cursor--2');
const sectionInteractive = document.querySelector('.hero__img-container--interactive');
const sectionWidth = sectionInteractive.offsetWidth;
const sectionHeight = sectionInteractive.offsetHeight;
const interactionTl = gsap.timeline({paused:true});
const cursorArrow = document.querySelector('.cursor__arrow');


customCursor(cursor1, 1);
customCursor(cursor2, 2);

// Desktop
let mm = gsap.matchMedia();
mm.add("(min-width: 991px)", () => {

customCursor(cursor1, 1);
customCursor(cursor2, 2);

gsap.set(cursorArrow, {
    scale: 0
})

interactionTl
.to(cursorCircleSmall, {
    backgroundColor: '#2e3233',
 })
.to(cursor2, {
    width: sectionWidth,
     height: sectionHeight,
     marginLeft: -sectionWidth / 2,
     marginTop: -sectionHeight / 2,
     duration: 2
 }, '<')
 .from(cursorArrow, {
    x: 100,
    duration: 2,
}, "<0.6"
 )
 .to(cursorArrow, {
    scale:1,
}, "<0.3"
 )

sectionInteractive.addEventListener('mouseenter', () => {
    interactionTl.play();
   
})

sectionInteractive.addEventListener('mouseleave', (e) => {
    console.log(e.target)
    if (e.target.classList.contains('hero__img-container--interactive')) {
  
        interactionTl.reverse();
    }
});

const links = document.querySelectorAll('.activates-cursor');
links.forEach(link=>{
    link.addEventListener('mouseenter', (e) => {
        let hoveredItem = e.target;


    if(hoveredItem.classList.contains('activates-cursor')) {   
        console.log('CURSOR!');
    gsap.to(cursorCircleSmall, {
    backgroundColor: '#eeff33'
    }) 
    }
    })

    link.addEventListener('mouseleave', (e) => {
        let hoveredItem = e.target;


    if(hoveredItem.classList.contains('activates-cursor')) {   
        console.log('CURSOR!');
    gsap.to(cursorCircleSmall, {
    backgroundColor: '#dae6e6'
    }) 
    }
    })
})

})

// Mobile
mm.add("(max-width: 990px)", () => {
    const circleMobile = document.querySelector('.hero__circle--interactive')
    const arrowMobile = document.querySelector('.hero__arrow')
    
    gsap.fromTo(circleMobile, {
y: -500
    }, {
        y:0,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: circleMobile,
            start: '0 50%',
            end: '0 bottom'
        }
    })

    gsap.fromTo(arrowMobile,{
        rotate: 90
    },{
        rotate: -90,
        ease: "power4.out",
        duration: 2,
        scrub:true,
        scrollTrigger: {
            trigger: sectionInteractive,
            // markers: true,
            start: 'top 50%',
            end: 'bottom bottom',
            toggleActions: 'restart none reverse none'
        }
        
    })
})


// const body = document.querySelector(".body");
// loader(body);

// const header = document.querySelector(".header");
// stickyHeader(header, "header--sticky");

// const backToTopButton = document.querySelector(".back-to-top");
// backToTop(backToTopButton, "back-to-top--visible");

console.log("Hello from JavaScript");
