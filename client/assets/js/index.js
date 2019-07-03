function main(){
  const h2 = document.createElement("h2");
  h2.setAttribute("id", "h3Root");
  h2.innerHTML = "This text was created dynamically with JavaScript.";
  document.getElementById("Root").appendChild(h2);
  const button = document.getElementById("projectButton");
  button.addEventListener("click", getProjects);
}

// I Think the line 18 is the problem, .json() is not working.
function getProjects() {
  fetch("http://localhost:3000/projectButton", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => response.toString())
    .then((response) => {
      console.log(response);
    })
    .catch(err => {
      // Do something for an error here
      console.log("Error Reading data " + err);
    });
}