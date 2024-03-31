"use strict";

// Get the object for the HTML element that's specified by the CSS selector
const $ = selector => document.querySelector(selector);

// Cursor focus and select
const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

// Error message
const errorMessage = () => {
    alert("Amount must be > 0");
    focusAndSelect("#taxableIncome");
};

// 2020 Federal Income Tax calculation for individuals
const calculateTax = taxableIncome => {
    if (taxableIncome <= 9875) {
        return taxableIncome * 0.1;
    } else if (taxableIncome <= 40125) {
        return 987.5 + (taxableIncome - 9875) * 0.12;
    } else if (taxableIncome <= 85525) {
        return 4617.5 + (taxableIncome - 40125) * 0.22;
    } else if (taxableIncome <= 163300) {
        return 14605.5 + (taxableIncome - 85525) * 0.24;
    } else if (taxableIncome <= 207350) {
        return 33271.5 + (taxableIncome - 163300) * 0.32;
    } else if (taxableIncome <= 518400) {
        return 47367.5 + (taxableIncome - 207350) * 0.35;
    } else {
        return 156235 + (taxableIncome - 518400) * 0.37;
    }
};

// processEntry function
const processEntry = () => {
    // Get user's entry
    const taxableIncome = parseFloat($("#taxableIncome").value);

    // Verify user entered number > 0
    if (isNaN(taxableIncome) || taxableIncome < 0) {
        errorMessage();
    } else {
        const incomeTaxOwed = calculateTax(taxableIncome) // Pass taxableIncome to calculateTax
        $("#incomeTaxOwed").value = incomeTaxOwed.toFixed(2); // Display calculated income tax owed in text box
        focusAndSelect("#taxableIncome"); // Move focus to taxableIncome after click Calculate
    }
};

// Clear text boxes
const clearTaxableIncome = () => {
    $("#taxableIncome").value = "";
    $("#incomeTaxOwed").value = "";
};

// DOMContentLoaded event handler
document.addEventListener("DOMContentLoaded", () => {
    console.log("The DOM is ready!");
    $("#calculate").addEventListener("click", processEntry);
    $("#taxableIncome").addEventListener("click", clearTaxableIncome)

    $("#taxableIncome").focus(); // Move cursor to taxableIncome on application start
});