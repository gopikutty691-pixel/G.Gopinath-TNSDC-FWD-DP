// Simple Form Validation

document.getElementById("contact-form").addEventListener("submit", function (event) {

    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {

        alert("Please fill out all fields.");

    } else {

        alert(`Thank you for your message, ${name}!`);

        // You can add form submission logic here (e.g., send an email or save data)

        document.getElementById("contact-form").reset(); // Reset form

    }

});