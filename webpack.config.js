const path = require("path");

module.exports = {
  entry: "/src/js/index.js",
  output: {
    path: path.resolve("src/js"),
    // path: path.resolve(
    //   "../../xampp/htdocs/boilerplate.gr/wp-content/themes/boilerplate/src/js"
    // ),
    filename: "bundle.js",
  },
  mode: "development",
};
