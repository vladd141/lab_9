let count = 0;

const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {

    if (button.classList.contains("decrease")) {
      count--;
    }

    if (button.classList.contains("increase")) {
      count++;
    }

    if (button.classList.contains("reset")) {
      count = 0;
    }

    value.textContent = count;

    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "#222";
    }
  });
});
