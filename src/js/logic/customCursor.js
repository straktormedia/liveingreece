// Custom Cursor
const customCursor = (cursor, duration) => {
  const sectionWidth = document.querySelector('.hero__img-container--interactive').offsetWidth;
  const sectionHeight = document.querySelector('.hero__img-container--interactive').offsetHeight;

    const trackCursorPosition = function (e) {
      gsap.to(cursor, {
        top: `${e.pageY}`,
        left: `${e.pageX}`,
        duration: duration,
    
      })

      const arrow = document.querySelector('.cursor__arrow');
      gsap.set(arrow, {
        transformOrigin: 'center right',
      });
      
      
      const cursorY = e.clientY; 

      const rotation = ((cursorY / window.innerHeight) * 90) - 45; 
      const constrainedRotation = Math.min(60, Math.max(-60, rotation));
    
      gsap.to(arrow, {
        rotate: -constrainedRotation,
        duration: 0.5,
        // ease: "elastic.out(1,0.3)",
      });
      
    };
  
    // Imitate default cursor
    window.addEventListener("mousemove", trackCursorPosition);

      // Scroll
// window.addEventListener("scroll", (e) => {
//   // cursor.style.top = window.scrollY + "px";
//   gsap.to(cursor, {
//     y: window.scrollY,
//     // duration: 3,
//     ease: "power1.out",
//   });
// })

    // const cursor2 = document.querySelector('.hero__circle')
    // const trackCursorPosition2 = function (e) {
    //   cursor2.style.top = e.pageY + "px";
    //   cursor2.style.left = e.pageX + "px";
    // };
  
    // // Imitate default cursor
    // window.addEventListener("mousemove", trackCursorPosition2);

//     const body = document.querySelector('.body')
//     body.addEventListener('mouseover',(e) => {
//     let hoveredItem = e.target;
//     // console.log(hoveredItem)

//     if(hoveredItem.classList.contains('activates-cursor')) {   
//         console.log('CURSOR!');
//     gsap.to(cursor, {
//     backgroundColor: '#eeff33'
//     }) 
//     }

//     if(hoveredItem.classList.contains('activates-cursor-ultra'))
// {   
 
//     console.log('Ultra')
//     gsap.to(cursor, {
//     backgroundColor: '#2e3233'
//     }) }
    

// })  

// body.addEventListener('mouseout',(e) => {
//     let hoveredItem = e.target;

//    if(hoveredItem.classList.contains('activates-cursor')) {   console.log('CURSOR!');
//     gsap.to(cursor, {
//     backgroundColor: '#dae6e6'
//     }) 
//     }

//     if(hoveredItem.classList.contains('activates-cursor'))
//     {   
     
       
//         console.log('Ultra')
//         gsap.to(cursor, {
//           backgroundColor: '#dae6e6'
//         }) }
        

// }) 
};
  
  export default customCursor;