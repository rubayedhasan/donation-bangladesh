/**
 * event listener for blog button
 */
document.getElementById("btn-blog").addEventListener("click", function () {
  //   go to the blog.html page
  window.location.href = "../blog.html";
});

/**
 * event listener for donation button
 */
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

/**
 * event listener for history button
 */
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

/**
 * 1. event listener for donate now::(donate for flood at noakhali) button
 */
document
  .getElementById("btn-donate-for-noakhali")
  .addEventListener("click", function () {
    // read element properties
    const balance = currentBalance();
    const donationMoney = getFieldNumValue("input-donation-for-noakhali");
    const title = getElementInnerValue("title-flood-at-noakhali");
    const currentDonatedMoney = getElemntInnerNumberValue(
      "total-donation-for-noakhali"
    );

    // validation
    if (donationMoney <= 0 || isNaN(donationMoney)) {
      showElement("logical-error-donate-for-noakhali");
      return;
    } else {
      hideElement("logical-error-donate-for-noakhali");
    }

    if (donationMoney > balance) {
      showElement("logical-error-donate-for-noakhali");
      return;
    } else {
      hideElement("logical-error-donate-for-noakhali");
    }

    // calculation balance & donation money
    const newBalance = balance - donationMoney;
    const newDonatedMoney = currentDonatedMoney + donationMoney;

    // update the balance
    setElementInnerValue("current-balance", newBalance);

    // update donation money
    setElementInnerValue("total-donation-for-noakhali", newDonatedMoney);

    // reset input field
    reseField("input-donation-for-noakhali");

    // update history of donation
    updateHistoryLog(donationMoney, title);

    // open modal
    showElement("modal-container");
  });

/**
 *  2. event listerner for donate now::(Donate for Flood Relief in Feni) button
 */
document
  .getElementById("btn-donate-for-feni")
  .addEventListener("click", function () {
    // read element
    const balance = currentBalance();
    const donationMoney = getFieldNumValue("input-donate-for-feni");
    const title = getElementInnerValue("title-flood-in-feni");
    const currentDonatedMoney = getElemntInnerNumberValue(
      "total-donation-for-feni"
    );

    // validation
    if (donationMoney <= 0 || isNaN(donationMoney)) {
      showElement("logical-error-donate-for-feni");
      return;
    } else {
      hideElement("logical-error-donate-for-feni");
    }

    if (donationMoney > balance) {
      showElement("logical-error-donate-for-feni");
      return;
    } else {
      hideElement("logical-error-donate-for-feni");
    }

    // calculation
    const newBalance = balance - donationMoney;
    const newDonatedMoney = currentDonatedMoney + donationMoney;

    // update balance & total donation money
    setElementInnerValue("current-balance", newBalance);
    setElementInnerValue("total-donation-for-feni", newDonatedMoney);

    // reset input field
    reseField("input-donate-for-feni");

    // update history log
    updateHistoryLog(donationMoney, title);

    // open modal
    showElement("modal-container");
  });

/**
 * event listener for modal close button
 */
document.getElementById("close-popup").addEventListener("click", function () {
  hideElement("modal-container");
});
