"use strict";

// Get the object for the HTML element that's specified by the CSS selector
const $ = selector => document.querySelector(selector);

// Cursor focus and select
const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

// processEntries function
const processEntries = () => {
    // Get user's entries
    // General Information
    const arrivalDate = $("#arrivalDate").value.trim();
    const nights = parseInt($("#nights").value.trim());
    const adults = parseInt($("#adults").value.trim());
    const children = parseInt($("#children").value.trim());
    // Preferences
    const standard = $("#standard").value.trim();
    const business = $("#business").value.trim();
    const suite = $("#suite").value.trim();
    const king = $("#king").value.trim();
    const doubleDouble = $("#doubleDouble").value.trim();
    // const smoking = $("smoking").value.trim();
    // Contact Information
    const name = $("#name").value.trim();
    const email = $("#email").value.trim();
    const phoneNumber = $("#phoneNumber").value.trim();


    // Validate user entries
    // Verify values are not empty
    let errorMessage = "";

    if (arrivalDate == "") {
        errorMessage += "Arrival Date is required.\n";
        focusAndSelect("#arrivalDate");
    }

    if (name == "") {
        errorMessage += "Name is required.\n";
        focusAndSelect("#name");
    }

    if (email == "") {
        errorMessage += "Email is required.\n";
        focusAndSelect("#email");
    }

    // Email Pattern
    const emailPattern = /^[a-z]+\@[^\s]+\.[^\s]+$/;
    if (!emailPattern.test(email)) {
        errorMessage += "Email is not valid.\n"
        focusAndSelect("#email");
    }

    if (phoneNumber == "") {
        errorMessage += "Phone number is required.\n";
        focusAndSelect("#phoneNumber");
    }

    // Verify nights is numeric
    if (isNaN(nights).value || nights < 1) {
        errorMessage += "Nights must be a number.\n";
        focusAndSelect("#nights");
    }

    // Prevent submission if there's an error
    if (errorMessage != "") {
        alert(errorMessage);
        processEntries.preventDefault();
    }

};

// DOMContentLoaded event handler
document.addEventListener("DOMContentLoaded", () => {
    console.log("The DOM is ready!");
    $("#submit").addEventListener("click", processEntries); // Submit the form

    $("#arrivalDate").focus(); // Move cursor to arrivalDate on application start
});