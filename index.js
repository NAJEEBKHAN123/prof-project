document.getElementById("submitButton").addEventListener("click", function() {
    var form = document.getElementById("myForm");
    if (form.checkValidity()) {
        // If the form is valid, you can submit the data here
        alert("Form submitted successfully!");
    } else {
        // If the form is invalid, you can handle it here (e.g., show error messages)
        alert("Please fill in all required fields.");
    }
});

