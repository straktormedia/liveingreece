const stickyHeader = (header, className) => {
  let lastScrollPosition = 0;

  const hideHeader = () => {
    const distanceFromTop =
      window.scrollY || document.documentElement.scrollTop;

    if (distanceFromTop > lastScrollPosition) {
      header.classList.add(className);
    } else {
   
      header.classList.add(className);
    }

    lastScrollPosition = distanceFromTop <= 0 ? 0 : distanceFromTop;

    if (distanceFromTop == 0) {
      header.classList.remove(className);
    }
  };

  window.addEventListener("scroll", hideHeader, false);
};

export default stickyHeader;
