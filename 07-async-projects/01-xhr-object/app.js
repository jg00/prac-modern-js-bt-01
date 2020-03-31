document.getElementById("button").addEventListener("click", loadData);

// AJAX request with XmlHttpRequest (XHR) Object.
// No page reloads.  Data pull happening behind the scenes.
function loadData(e) {
  // Create an XHR object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open("Get", "data.txt", true);

  // console.log("READYSTATE", xhr.readyState); // 1

  // Optional - Used for spinners/loaders
  xhr.onprogress = function() {
    console.log("READYSTATE", xhr.readyState); // At his point .onprogress is at readyState 3 (processing request)
  };

  // Define what to do once ready (readyState 4)
  xhr.onload = function() {
    console.log("READYSTATE", xhr.readyState); // At this point .onload already represents readyState 4.  Meaning by the time .onload runs we are already at readyState 4.

    // 'this' refers to the xhr object
    if (this.status === 200) {
      // console.log(this.responseText); // Data from the file returned

      document.getElementById(
        "output"
      ).innerHTML = `<h4>${this.responseText}</h4>`;
      // .appendChild(document.createTextNode(this.responseText)); // works
    }
  };

  /*
    // Older syntax before .onload() method became available we had to do below first (ie .onreadystatechange) and check we are at step 4.
    xhr.onreadystatechange = function() {
      console.log("READYSTATE", xhr.readyState); // When .onreadystatechange runs it goes through 1, 2, 3, 4 states and this is why we have to check for .readyState === 4.

      if (this.status === 200 && this.readyState === 4) {
        console.log(this.responseText);
      }
    };
  */

  // Handle error
  xhr.onerror = function() {
    console.log("Request error");
  };

  // Need to send to execute
  xhr.send();

  /*
    readyState Values
    0: request not initialized 
    1: server connection established
    2: request received 
    3: processing request 
    4: request finished and response is ready
  */

  /*
    HTTP Statuses
    200: OK
    403: Forbidden
    404: Page not found
  */
}
