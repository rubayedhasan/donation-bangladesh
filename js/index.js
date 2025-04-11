/**
 * event listener for blog button
 */
document.getElementById("btn-blog").addEventListener("click", function () {
  //   go to the blog.html page
  window.location.href = "blog.html";
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
    const currentDonatedMoney = getElementInnerNumberValue(
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
    resetField("input-donation-for-noakhali");

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
    const currentDonatedMoney = getElementInnerNumberValue(
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
    resetField("input-donate-for-feni");

    // update history log
    updateHistoryLog(donationMoney, title);

    // open modal
    showElement("modal-container");
  });

/**
 * 3. event listener for donate now::(aid for quota) button
 */
document
  .getElementById("btn-aid-for-quota")
  .addEventListener("click", function () {
    // read element properties
    const balance = currentBalance();
    const donationMoney = getFieldNumValue("input-aid-for-quota");
    const title = getElementInnerValue("title-aid-for-quota");
    const currentDonatedMoney = getElementInnerNumberValue(
      "total-donation-aid-for-quota"
    );

    // validation
    if (donationMoney <= 0 || isNaN(donationMoney)) {
      showElement("logical-error-aid-for-quota");
      return;
    } else {
      hideElement("logical-error-aid-for-quota");
    }

    if (donationMoney > balance) {
      showElement("logical-error-aid-for-quota");
      return;
    } else {
      hideElement("logical-error-aid-for-quota");
    }

    // calculation
    const newBalance = balance - donationMoney;
    const newDonatedMoney = currentDonatedMoney + donationMoney;

    // update balance & donation money
    setElementInnerValue("current-balance", newBalance);
    setElementInnerValue("total-donation-aid-for-quota", newDonatedMoney);

    // reset input field
    resetField("input-aid-for-quota");

    // update history log
    updateHistoryLog(donationMoney, title);

    // open modal
    showElement("modal-container");
  });

/**
 * 4. event listener for donate now::(Feed the Hungry) button
 */
document
  .getElementById("btn-feed-the-hungry")
  .addEventListener("click", function () {
    // read element properties
    const balance = currentBalance();
    const donationMoney = getFieldNumValue("input-feed-the-hungry");
    const title = getElementInnerValue("title-feed-the-hungry");
    const currentDonatedMoney = getElementInnerNumberValue(
      "total-donation-for-hungry"
    );

    // validation
    if (donationMoney <= 0 || isNaN(donationMoney) || donationMoney > balance) {
      showElement("logical-error-feed-the-hungry");
      return;
    } else {
      hideElement("logical-error-feed-the-hungry");
    }

    // calculation
    const newBalance = balance - donationMoney;
    const newDonatedMoney = currentDonatedMoney + donationMoney;

    // update balance & donated money
    setElementInnerValue("current-balance", newBalance);
    setElementInnerValue("total-donation-for-hungry", newDonatedMoney);

    // reset input field
    resetField("input-feed-the-hungry");

    // update history log
    updateHistoryLog(donationMoney, title);

    // open modal
    showElement("modal-container");
  });

/**
 * 5. event listener for donate now::(donate for cancer socitey) button
 */
document
  .getElementById("btn-donate-for-cancer-society")
  .addEventListener("click", function () {
    // read element properties
    const balance = currentBalance();
    const donationMoney = getFieldNumValue("input-donate-for-cancer-society");
    const title = getElementInnerValue("title-donate-for-cancer-society");
    const currentDonatedMoney = getElementInnerNumberValue(
      "total-donation-for-cancer-society"
    );

    // validation
    if (donationMoney <= 0 || isNaN(donationMoney) || donationMoney > balance) {
      showElement("logical-error-for-cancer-society");
      return;
    } else {
      hideElement("logical-error-for-cancer-society");
    }

    // calculation
    const newBalance = balance - donationMoney;
    const newDonatedMoney = currentDonatedMoney + donationMoney;

    // update balance & donated money
    setElementInnerValue("current-balance", newBalance);
    setElementInnerValue("total-donation-for-cancer-society", newDonatedMoney);

    // reset input field
    resetField("input-donate-for-cancer-society");

    // update history log
    updateHistoryLog(donationMoney, title);

    // open modal
    showElement("modal-container");
  });

/**
 * 6. event listener for donate now::(Support Health and Hygiene) button
 */
document
  .getElementById("btn-support-health")
  .addEventListener("click", function () {
    // read element properties
    const balance = currentBalance();
    const donationMoney = getFieldNumValue("input-support-health");
    const title = getElementInnerValue("title-support-health");
    const currentDonatedMoney = getElementInnerNumberValue(
      "total-donation-for-support-health"
    );

    // validation
    if (donationMoney <= 0 || isNaN(donationMoney) || donationMoney > balance) {
      showElement("logical-error-support-health");
      return;
    } else {
      hideElement("logical-error-support-health");
    }

    // calculation
    const newBalance = balance - donationMoney;
    const newDonatedMoney = currentDonatedMoney + donationMoney;

    // update balance & donated money
    setElementInnerValue("current-balance", newBalance);
    setElementInnerValue("total-donation-for-support-health", newDonatedMoney);

    // reset input field
    resetField("input-support-health");

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
