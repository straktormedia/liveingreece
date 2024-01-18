// Custom Cursor
const customCursor = (cursor) => {
    const trackCursorPosition = function (e) {
      cursor.style.top = e.pageY + "px";
      cursor.style.left = e.pageX + "px";
    };
  
    // Imitate default cursor
    window.addEventListener("mousemove", trackCursorPosition);

    const body = document.querySelector('.body')
    body.addEventListener('mouseover',(e) => {
    let hoveredItem = e.target;
    console.log(hoveredItem)
    

   if(hoveredItem.classList.contains('activates-cursor')) {   console.log('CURSOR!');
    gsap.to(cursor, {
    backgroundColor: '#eeff33'
    }) 
    }

})  

body.addEventListener('mouseout',(e) => {
    let hoveredItem = e.target;

   if(hoveredItem.classList.contains('activates-cursor')) {   console.log('CURSOR!');
    gsap.to(cursor, {
    backgroundColor: '#dae6e6'
    }) 
    }

}) 
};
  
  export default customCursor;