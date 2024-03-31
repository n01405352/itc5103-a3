"use strict";

// Get the object for the HTML element that's specified by the CSS selector
const $ = selector => document.querySelector(selector);

// Cursor focus and select
const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

// Error Message
const errorMessage = () => {
    alert("Amount must be >= 0 and <= 99");
    focusAndSelect("#changeDue");
};

// Calculate change and display results
const makeChange = userEntry => {
    const quarters = parseInt(userEntry / 25);
    userEntry = userEntry % 25;
    const dimes = parseInt(userEntry / 10);
    userEntry = userEntry % 10;
    const nickels = parseInt(userEntry / 5);
    userEntry = userEntry % 5;
    const pennies = parseInt(userEntry);

    // Display results in text boxes
    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
};

// processEntry event handler
const processEntry = () => {
    const changeDue = parseInt($("#changeDue").value); // Get user's entry

    // Verify number between 0 and 99
    if (isNaN(changeDue) || changeDue < 0 || changeDue > 99) {
        const errMsg = errorMessage();
    } else {
        makeChange($("#changeDue").value); // Pass user entry to makeChange
        focusAndSelect("#changeDue"); // Select changeDue after click Calculate
    }
};

// Clear changeDue text box
const clearChangeDue = () => {
    $("#changeDue").value = "";
};

// DOMContentLoaded event handler
document.addEventListener("DOMContentLoaded", () => {
    console.log("The DOM is ready!");
    $("#calculate").addEventListener("click", processEntry);
    $("#changeDue").addEventListener("click", clearChangeDue);

    $("#changeDue").focus(); // Move cursor to changeDue on application start
});