// This will run when the page loads
console.log("ScentSymphony site is running!");

// Example: enquiry form validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill in all fields before submitting.");
    return false; // stops form submission
  }

  alert("✅ Thank you, your enquiry has been submitted!");
  return true; // allows form to submit
}
