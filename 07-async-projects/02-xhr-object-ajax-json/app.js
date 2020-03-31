document.getElementById("button1").addEventListener("click", loadCustomer);
document.getElementById("button2").addEventListener("click", loadCustomers);

// Load Customer
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "./customer.json", true);

  // .readyState = 3 for Spinners
  // xhr.onprogress = function() {
  //   console.log(this.readyState);
  // };

  // .readyState = 4
  xhr.onload = function(e) {
    // readyState
    // console.log(e.target.readyState);
    // console.log(this.readyState);

    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);

      let output = `<ul>`;
      for (let item in customer) {
        output += `<li>${item}: ${customer[item]}</li>`;
      }
      output += `</ul>`;

      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}

// Load Customers
function loadCustomers(e) {
  document.getElementById("customers").innerHTML = ``;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "./customers.json", true);

  xhr.onload = function(e) {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);

      customers.forEach(function(customer) {
        let output = `<ul>`;
        for (let item in customer) {
          output += `<li>${item}: ${customer[item]}</li>`;
        }
        output += `</ul>`;
        document.getElementById("customers").innerHTML += output;
      });
    }
  };

  xhr.send();
}
