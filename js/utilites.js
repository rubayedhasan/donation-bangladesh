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

//get current banlance as number value
function currentBalance() {
  const balance = document.getElementById("current-balance").innerText;
  const balanceAsNum = parseFloat(balance);
  return balanceAsNum;
}

// get input field number value
function getFieldNumValue(fieldId) {
  const value = document.getElementById(fieldId).value;
  const numValue = parseFloat(value);
  return numValue;
}

// reset input field value
function resetField(fieldId) {
  document.getElementById(fieldId).value = "";
}

// get innerText Value
function getElementInnerValue(elementId) {
  return document.getElementById(elementId).innerText;
}

// get innerText value As Number
function getElementInnerNumberValue(elementId) {
  return parseFloat(document.getElementById(elementId).innerText);
}

// set innerText value
function setElementInnerValue(elementId, newValue) {
  document.getElementById(elementId).innerText = newValue;
}

// add recent transaction to history log
function updateHistoryLog(moneyYouDonated, donateTitle) {
  const historyContainer = document.getElementById("history-logs");
  const div = document.createElement("div");
  div.innerHTML = `
     
            <h5 class="font-semibold text-xl text-[#123458]">
              ${moneyYouDonated} Taka Donated for ${donateTitle}
            </h5>
            <p class="font-medium pt-4">
              Date: ${new Date()}
            </p>
    `;
  div.classList.add("border-2", "border-black", "rounded-md", "p-6");
  historyContainer.appendChild(div);
}
