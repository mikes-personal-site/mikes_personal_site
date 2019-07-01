function main(){
  const h2 = document.createElement("h2");
  h2.setAttribute("id", "h3Root");
  h2.innerHTML = "This text was created dynamically with JavaScript.";
  document.getElementById("Root").appendChild(h2);
  second()
}

function second() {
  const button = document.getElementById("projectButton");
  button.addEventListener("click", getProjects);
}

// Still need to get fetch to return proper JSON!
function getProjects() {
  fetch('http://localhost:3000/projectButton')
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
}