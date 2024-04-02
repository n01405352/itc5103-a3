"use strict";

const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    // Get user's entries
    // General Information
    const arrivalDate = $("#arrivalDate").value;
    const nights = parseInt($("#nights").value);
    const adults = parseInt($("#adults").value);
    const children = parseInt($("#children").value);
    // Preferences
    const standard = $("#standard").value;
    const business = $("#business").value;
    const suite = $("#suite").value;
    const king = $("#king").value;
    const doubleDouble = $("#doubleDouble").value;
    // const smoking = $("smoking").value;
    // Contact Information
    const name = $("#name").value;
    const email = $("#email").value;
    const phoneNumber = $("#phoneNumber").value;



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

document.addEventListener("DOMContentLoaded", () => {
    console.log("The DOM is ready!");
    $("#submit").addEventListener("click", processEntries);

    $("#arrivalDate").focus(); // Move cursor to arrivalDate on application start
});