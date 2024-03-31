"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl =>
    `${lbl}`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#taxRate").value);

    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert(getErrorMsg("Subtotal must be > 0 and < 10000"));
        focusAndSelect("#subtotal");
    } else if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert(getErrorMsg("Tax rate must be > 0 and < 12"));
        focusAndSelect("#taxRate");
    } else {
        $("#salesTax").value = (subtotal * (taxRate * 0.01)).toFixed(2);
        $("#total").value = ((subtotal * (taxRate * 0.01)) + subtotal).toFixed(2);
        focusAndSelect("#subtotal");
    }
};

const clearEntries = () => {
    $("#subtotal").value = "";
    $("#taxRate").value = "";
    $("#subtotal").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("The DOM is ready!");
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#subtotal").focus();
});