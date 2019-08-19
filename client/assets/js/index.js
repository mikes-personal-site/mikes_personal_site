if (window.innerWidth > 600) {
  const modal = document.getElementById("myModal"),
    btn = document.getElementById("myBtn"),
    span = document.getElementsByClassName("close")[0],
    btn2nd = document.getElementById("myBtn2nd"),
    email = document.querySelector(".email").innerHTML,
    el = document.createElement("textarea");

  btn.onclick = function () {
    modal.style.display = "block";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  btn2nd.onclick = function () {
    modal.style.display = "block";
  };

  function myFunction() {
    document.body.appendChild(el);
    el.value = email;
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Copied to Clipboard");
  };
};