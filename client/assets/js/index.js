
const modal = document.getElementById("myModal"),
  btn = document.getElementById("myBtn"),
  span = document.getElementsByClassName("close")[0],
  btn2nd = document.getElementById("myBtn2nd");

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

btn2nd.onclick = function () {
  modal.style.display = "block";
};