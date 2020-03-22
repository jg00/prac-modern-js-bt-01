// Event listeners
document
  .querySelector("#loan-form")
  .addEventListener("submit", calculateResults);

// Calculate Results
function calculateResults(e) {
  const amount = document.querySelector("#amount");
  const interest = document.querySelector("#interest");
  const years = document.querySelector("#years");
  const monthlyPayment = document.querySelector("#monthly-payment");
  const totalPayment = document.querySelector("#total-payment");
  const totalInterest = document.querySelector("#total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  /* 

    Monthly Payment

    Total Payment

    interest / (years * 12) * amount

    Total Interest

  */

  e.preventDefault();
}
