document.addEventListener('DOMContentLoaded', function() {
    // Get the card number input field element and the error text element
    const cardNumberInput = document.getElementById('card-number');
    const errorText = document.getElementById('errorText');
  
    // Function to validate the card number using a regular expression
    function validateCardNumber() {
      const cardNumber = cardNumberInput.value.trim();
  
      // Regular expression to check if the card number contains only digits and is 16 digits long
      const cardNumberRegex = /^\d{16}$/;
  
      if (!cardNumberRegex.test(cardNumber)) {
        errorText.textContent = "Invalid card number (16 digits)";
        cardNumberInput.setCustomValidity("Invalid card number");
      } else {
        errorText.textContent = "";
        cardNumberInput.setCustomValidity("");
      }
    }
  
    // Add event listener to the card number input to validate the input on input change
    cardNumberInput.addEventListener('input', validateCardNumber);
  
    // Add event listener to the form to validate the input on form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      validateCardNumber(); // Validate the card number before form submission
      if (!form.checkValidity()) {
        event.preventDefault(); // Prevent form submission if the input is invalid
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Get the expiry date input field element and the error text element
    const expiryDateInput = document.getElementById('expiry-date');
    const errorMsg = document.getElementById('errorMsg');
  
    // Function to validate the expiry date using a regular expression
    function validateExpiryDate() {
      const expiryDate = expiryDateInput.value.trim();
  
      // Regular expression to check if the expiry date follows the format MM/YY or MM/YYYY
      const expiryDateRegex = /^(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/;
  
      if (!expiryDateRegex.test(expiryDate)) {
        errorMsg.textContent = "Invalid expiry date (MM/YY)";
        expiryDateInput.setCustomValidity("Invalid expiry date");
      } else {
        errorMsg.textContent = "";
        expiryDateInput.setCustomValidity("");
      }
    }
  
    // Add event listener to the expiry date input to validate the input on input change
    expiryDateInput.addEventListener('input', validateExpiryDate);
  
    // Add event listener to the form to validate the input on form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      validateExpiryDate(); // Validate the expiry date before form submission
      if (!form.checkValidity()) {
        event.preventDefault(); // Prevent form submission if the input is invalid
      }
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    // Get the CVV input field element and the error message element
    const cvvInput = document.getElementById('cvv');
    const errorMsg = document.getElementById('ErrorMsg');
  
    // Function to validate the CVV using a regular expression
    function validateCVV() {
      const cvv = cvvInput.value.trim();
  
      // Regular expression to check if the CVV contains only 3 or 4 digits
      const cvvRegex = /^\d{3,4}$/;
  
      if (!cvvRegex.test(cvv)) {
        errorMsg.textContent = "Invalid CVV 3 or 4 digits)";
        cvvInput.setCustomValidity("Invalid CVV");
      } else {
        errorMsg.textContent = "";
        cvvInput.setCustomValidity("");
      }
    }
  
    // Add event listener to the CVV input to validate the input on input change
    cvvInput.addEventListener('input', validateCVV);
  
    // Add event listener to the form to validate the input on form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      validateCVV(); // Validate the CVV before form submission
      if (!form.checkValidity()) {
        event.preventDefault(); // Prevent form submission if the input is invalid
      }
    });
  });
  // JavaScript code to enable the button when all required fields are filled
  document.addEventListener('DOMContentLoaded', function() {
    // Get the form and the "Continue to purchase" button elements
    const form = document.querySelector('form');
    const continueButton = document.getElementById('continue');
  
    // Function to check if all required fields are filled
    function checkFormValidity() {
      const requiredFields = form.querySelectorAll('[required]');
      let isFormValid = true;
  
      // Check each required field for its validity
      requiredFields.forEach(field => {
        if (!field.validity.valid) {
          isFormValid = false;
        }
      });
  
      // Enable or disable the "Continue to purchase" button based on form validity
      continueButton.disabled = !isFormValid;
    }
  
    // Add event listeners to form elements to validate the form on input change
    const formElements = form.elements;
    for (let i = 0; i < formElements.length; i++) {
      const field = formElements[i];
      field.addEventListener('input', checkFormValidity);
    }
      // Add event listener to the form to validate the form on form submission
      form.addEventListener('submit', function(event) {
        checkFormValidity(); // Validate the form before form submission
        if (!form.checkValidity()) {
          event.preventDefault(); // Prevent form submission if the form is invalid
        }
      });
    });
   
    
    const confirmationLink = document.getElementById("confirmationLink");
    
    // Add click event listeners to disable each link separately
   

  confirmationLink.addEventListener("click", function(event) {
      event.preventDefault();
  });
  function UpdateSummary(){
    const disdate = document.getElementById("displayDate");
    const tim = document.getElementById("Time");
    const nhv = document.getElementById("normal-hours-value");
    const phv = document.getElementById("peak-hours-value");
    const slad = document.getElementById('SumSlAd');
    const slch = document.getElementById('SumSlCh');
    const fad = document.getElementById('SumFAd');
    const fch = document.getElementById('SumFCh');
    const inf = document.getElementById('SumInfant');
    const total = document.getElementById('total');
    const fname = document.getElementById('fnamel');
    const pho = document.getElementById('phone1');
    const emai = document.getElementById('email1');
    const gend = document.getElementById('gend1');
  
    disdate.innerText = localStorage.getItem('date');
    tim.innerText = localStorage.getItem('Time');
    nhv.innerText = localStorage.getItem('ndura');
    phv.innerText = localStorage.getItem('pdura');
    slad.innerText = localStorage.getItem('slAD');
    slch.innerText = localStorage.getItem('SlCH');
    fad.innerText = localStorage.getItem('FAd');
    fch.innerText = localStorage.getItem('FCh');
    inf.innerText = localStorage.getItem('Inf');
    total.innerText = localStorage.getItem('total');
    fname.innerText = localStorage.getItem('name');
    pho.innerText = localStorage.getItem('phone');
    emai.innerText = localStorage.getItem('email');
    gend.innerText = localStorage.getItem('gender');
  }
  window.addEventListener("load", UpdateSummary);
  