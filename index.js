const https = require("https");
const fs = require("fs");

const README_TEMPLATE_URL =
  "https://raw.githubusercontent.com/wayou/readme-template/master/README.md";

/**
 *
 * @param {*} url
 * @param {*} cb
 */
function fetchFile(url, cb) {
  const file = fs.createWriteStream("README.md");
  https
    .get(url, function(response) {
      const { statusCode } = response;
      let error;
      if (statusCode !== 200) {
        console.log("new url:", response.headers.location);
        error = new Error("Request Failed.\n" + `Status Code: ${statusCode}`);
      }
      if (error) {
        console.error(error.message);
        file.close();
        return;
      }
      
      response.pipe(file);
      file.on("finish", function() {
        file.close(cb);
      });
    })
    .on("error", error => {
      console.error(`request error: ${error.message}`);
    });
}

module.exports = function(templateUrl) {
  fetchFile(templateUrl || README_TEMPLATE_URL, function() {
    console.log("README.md created");
  });
};
