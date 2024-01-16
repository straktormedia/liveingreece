import home from "../pages/home.js";
import about from "../pages/about.js";
import contact from "../pages/contact.js";

const router = (siteName) => {
  // Router

  let url = window.location.pathname;
  // Check if we are in XAMPP environment
  if (window.location.href.includes("localhost")) {
    console.log("We are in XAMPP environment");

    // Remove "localhost" from the URL
    url = url.replace(/\/?localhost\/?/, "/");
  }

  let words = url.split("/");
  let pageSlug = words[words.length - 2];
  let customPostSlug = words[words.length - 3];

  // Home
  if (
    //Live Server
    words[1] === "index.html" ||
    // Netlify
    words[1] === "" ||
    // XAMPP
    (words[1] === siteName && !customPostSlug)
  )
    home();

  // About
  if (url === "/about" || words[1] === "about.html" || pageSlug === "about")
    about();

  // Contact
  if (
    url === "/contact" ||
    words[1] === "contact.html" ||
    pageSlug === "contact"
  )
    contact();
};

export default router;
