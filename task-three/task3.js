const x = document.getElementById("btnClick");
x.addEventListener("mouseover", onmouse);
x.addEventListener("click", pressBtn);
x.addEventListener("mouseout", offmouse);

function onmouse() {
  document.getElementById("text").innerHTML += "Mouse on me!<br>";
}

function pressBtn() {
  document.getElementById("text").innerHTML += "I was pressed!<br>";
}

function offmouse() {
  document.getElementById("text").innerHTML += "Mouse is not on me!<br>";
}