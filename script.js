//your JS code here. If required.
function displayAlert(event) {
  event.preventDefault(); // prevent form from submitting

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const emailId = document.getElementById("emailId").value;

  alert(`First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail ID: ${emailId}`);
}

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", displayAlert);