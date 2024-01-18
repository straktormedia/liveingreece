// Custom Cursor
const customCursor = (cursor) => {
    const trackCursorPosition = function (e) {
      cursor.style.top = e.pageY + "px";
      cursor.style.left = e.pageX + "px";
    };
  
    // Imitate default cursor
    window.addEventListener("mousemove", trackCursorPosition);

    // const cursor2 = document.querySelector('.hero__circle')
    // const trackCursorPosition2 = function (e) {
    //   cursor2.style.top = e.pageY + "px";
    //   cursor2.style.left = e.pageX + "px";
    // };
  
    // // Imitate default cursor
    // window.addEventListener("mousemove", trackCursorPosition2);

    const body = document.querySelector('.body')
    body.addEventListener('mouseover',(e) => {
    let hoveredItem = e.target;
    console.log(hoveredItem)

    if(hoveredItem.classList.contains('activates-cursor')) {   
        console.log('CURSOR!');
    gsap.to(cursor, {
    backgroundColor: '#eeff33'
    }) 
    }

    if(hoveredItem.classList.contains('activates-cursor-ultra'))
{   
 
    console.log('Ultra')
    gsap.to(cursor, {
    backgroundColor: '#2e3233'
    }) }
    

})  

body.addEventListener('mouseout',(e) => {
    let hoveredItem = e.target;

   if(hoveredItem.classList.contains('activates-cursor')) {   console.log('CURSOR!');
    gsap.to(cursor, {
    backgroundColor: '#dae6e6'
    }) 
    }

    if(hoveredItem.classList.contains('activates-cursor'))
    {   
     
       
        console.log('Ultra')
        gsap.to(cursor, {
          backgroundColor: '#dae6e6'
        }) }
        

}) 
};
  
  export default customCursor;