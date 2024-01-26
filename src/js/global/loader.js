const loader = (body) => {
  const imgLoad = imagesLoaded(body);

  // Loader Timeline
  const loadingTl = gsap.timeline();
  loadingTl.to(".loader__spinner", {
    // rotate: "360deg",
    duration: 1.3,
    ease: "none",
    repeat: -1,
  });

  // Page Reveal Timeline
  const pageRevealTl = gsap.timeline({
    paused: true,
  });
  pageRevealTl
    .to(".loader__spinner", {
      width: "200vw",
      height: "200vw",
      duration: 5,
      ease: "power4.out",
    })
    .to(
      ".loader",
      {
        opacity: 0,
      },
      "<1"
    )
    .to(".loader", { display: "none" }, "<1");

  // ImagesLoaded
  imgLoad.on("done", () => {
    pageRevealTl.play();
  });
};

export default loader;
