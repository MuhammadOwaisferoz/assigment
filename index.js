const colorChangeBtn = document.getElementById("color-change-btn");

colorChangeBtn.addEventListener("click", function() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16); /* Generate a random color */

  document.body.style.backgroundColor = "#" + randomColor; /* Set the background color of the page to the random color */
});
