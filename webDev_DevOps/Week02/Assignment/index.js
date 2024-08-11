// promisified set timeout

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Usage 
timeout(1000).then(() => console.log("1 second has passed"));


// -------------------------------------------------

//   promisified fetch
function fetchWithPromise(url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          return reject(new Error(`HTTP error! Status: ${response.status}`));
        }
        return response.json(); // Assuming you want JSON response
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

// Usage 
fetchWithPromise("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch error:", error));

// -------------------------------------------

// Promisified fs.readFile

const fs = require("fs");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

// Usage 
readFile("a.txt", "utf8")
  .then((data) => console.log(data))
  .catch((error) => console.error("Error reading file:", error));
