// show element
function showElement(elementId) {
  document.getElementById(elementId).classList.remove("hidden");
}

// hide element
function hideElement(elementId) {
  document.getElementById(elementId).classList.add("hidden");
}

// add styles to element by tailwindcss class
function activeButtonStyles(elementId) {
  document
    .getElementById(elementId)
    .classList.add(
      "bg-gradient-to-r",
      "from-[#E0D8C3]",
      "to-[#D2C7B0]",
      "hover:from-[#D2C7B0]",
      "hover:to-[#E0D8C3]"
    );
  document
    .getElementById(elementId)
    .classList.remove("btn-outline", "border-[#D4C9BE]");
}

// remove styles from element
function deactiveButtonStyles(elementId) {
  document
    .getElementById(elementId)
    .classList.remove(
      "bg-gradient-to-r",
      "from-[#E0D8C3]",
      "to-[#D2C7B0]",
      "hover:from-[#D2C7B0]",
      "hover:to-[#E0D8C3]"
    );

  document
    .getElementById(elementId)
    .classList.add("btn-outline", "border-[#D4C9BE]");
}
