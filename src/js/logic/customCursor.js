// Custom Cursor
const customCursor = (cursor, duration) => {
  const trackCursorPosition = (e) => {
    gsap.to(cursor, {
      top: `${e.pageY}`,
      left: `${e.pageX}`,
      duration: duration,
    });

    const arrow = document.querySelector(".cursor__arrow");
    // gsap.set(arrow, {
    //   transformOrigin: 'center right',
    // });

    const cursorY = e.clientY;
    const rotation = (cursorY / window.innerHeight) * 90 - 45;
    const constrainedRotation = Math.min(45, Math.max(-45, rotation));

    // gsap.to(arrow, {
    //   rotate: -constrainedRotation,
    //   duration: 0.5,
    // });
  };

  window.addEventListener("mousemove", trackCursorPosition);
};

export default customCursor;
