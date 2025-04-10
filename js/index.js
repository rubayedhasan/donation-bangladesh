// event listener for blog button
document.getElementById("btn-blog").addEventListener("click", function () {
  //   go to the blog.html page
  window.location.href = "../blog.html";
});

// event listener for donation button
document.getElementById("btn-donation").addEventListener("click", function () {
  // add active styles to donation button
  activeButtonStyles("btn-donation");

  //   remove active styles from history button
  deactiveButtonStyles("btn-history");

  //   hide history container
  hideElement("history-container");

  // show donate section container
  showElement("donate-section-container");
});

// event listener for history button
document.getElementById("btn-history").addEventListener("click", function () {
  //   add active styles to history button
  activeButtonStyles("btn-history");

  //   remove active styles from donation button
  deactiveButtonStyles("btn-donation");

  //   show history container
  showElement("history-container");

  //   hide donate section container
  hideElement("donate-section-container");
});
