function main() {
  const h2 = document.createElement("h2");
  h2.setAttribute("id", "h3Root");
  h2.innerHTML = "This text was created dynamically with JavaScript.";
  document.getElementById("Root").appendChild(h2);
}