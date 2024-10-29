document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
      // Prevent form submission
      event.preventDefault();
      
      // Validate form fields
      const name = document.getElementById("YourName").value.trim();
      const email = document.getElementById("YourEmail").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("yourMessage").value.trim();
  
      // Regex for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      let isValid = true;
      let errorMessage = "";
  
      if (name === "") {
        errorMessage += "Name is required.\n";
        isValid = false;
      }
  
      if (email === "" || !emailRegex.test(email)) {
        errorMessage += "Please enter a valid email address.\n";
        isValid = false;
      }
  
      if (message === "") {
        errorMessage += "Message is required.\n";
        isValid = false;
      }
  
      if (isValid) {
        alert("Form submitted successfully!");
        form.submit();
      } else {
        alert(errorMessage);
      }
    });
  });
  