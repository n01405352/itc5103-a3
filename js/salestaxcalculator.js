"use strict";

// Get the object for the HTML element that's specified by the CSS selector
const $ = selector => document.querySelector(selector);

// Error Message
const getErrorMsg = lbl =>
    `${lbl}`;

// Cursor focus and select
const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

// Get user entries, calculate sales tax and total, display results
const processEntries = () => {
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#taxRate").value);

    // Data validation
    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert(getErrorMsg("Subtotal must be > 0 and < 10000"));
        focusAndSelect("#subtotal");
    } else if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert(getErrorMsg("Tax rate must be > 0 and < 12"));
        focusAndSelect("#taxRate");
    } else {
        $("#salesTax").value = (subtotal * (taxRate * 0.01)).toFixed(2);
        $("#total").value = ((subtotal * (taxRate * 0.01)) + subtotal).toFixed(2);
        focusAndSelect("#subtotal"); // Move cursor to Subtotal on click Calculate button
    }
};

// Clear Subtotal text box
const clearSubtotal = () => {
    $("#subtotal").value = "";
}

// Clear Tax Rate text box
const clearTaxRate = () => {
    $("#taxRate").value = "";
}

// For clear button
const clearEntries = () => {
    const clSubtotal = clearSubtotal();
    const clTaxRate = clearTaxRate();
    $("#subtotal").focus();
}

// DOMContentLoaded event handler
document.addEventListener("DOMContentLoaded", () => {
    console.log("The DOM is ready!");
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#subtotal").addEventListener("click", clearSubtotal);
    $("#taxRate").addEventListener("click", clearTaxRate);

    $("#subtotal").focus(); // Move cursor to Subtotal on application start
});