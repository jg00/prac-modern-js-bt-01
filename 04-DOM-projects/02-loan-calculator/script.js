// Event listeners
document.querySelector("#loan-form").addEventListener("submit", e => {
  // Hide results
  document.getElementById("results").style.display = "none";

  // Show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  const amount = document.querySelector("#amount");
  const interest = document.querySelector("#interest");
  const years = document.querySelector("#years");
  const monthlyPayment = document.querySelector("#monthly-payment");
  const totalPayment = document.querySelector("#total-payment");
  const totalInterest = document.querySelector("#total-interest");

  const principal = parseFloat(amount.value); // (a)
  const calculatedInterest = parseFloat(interest.value) / 100 / 12; // (r)
  const calculatedPayments = parseFloat(years.value) * 12;

  /*
    https://www.thebalance.com/loan-payment-calculations-315564
    Amortized Loan Payment Formula

    Calculate your monthly payment (p) 
    using your principal balance or total loan amount (a), 
    periodic interest rate (r), which is your annual rate divided by the number of payment periods, 
    and your total number of payment periods (n)

    Monthly payment: a/{[(1+r)^n]-1}/[r(1+r)^n]=p
  */

  // Calculate Monthly
  const x = Math.pow(1 + calculatedInterest, calculatedPayments); // x = [(1+r)^n]
  const monthly = (principal * (calculatedInterest * x)) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    // Show results
    document.getElementById("results").style.display = "block";

    // Hide loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers.");
  }
}

// Show Error
function showError(error) {
  // Hide results
  document.getElementById("results").style.display = "none";

  // Show loader
  document.getElementById("loading").style.display = "none";

  // Create error element
  const errorDiv = document.createElement("div");

  // Get elements
  const card = document.querySelector(".card"); // parent element
  const heading = document.querySelector(".heading"); // child element

  // Add Bootstrap class
  errorDiv.className = "alert alert-danger";

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  // parentElement.insertBefore(newChild, refChild);
  card.insertBefore(errorDiv, heading);

  // Clear error after a few seconds
  window.setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
  // errorDiv.style.display = "none";

  document.querySelector(".alert").remove();
}
