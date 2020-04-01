// Library - ES5

// Constructor that will hold a XHR object.
function easyHTTP() {
  this.http = new XMLHttpRequest(); // Now instead of const xhr = new XMLHttpRequest() we use 'this' to refer to the object created from this constructor function object.
}

// Prototype methods - Only need this code one time.

// GET - method that will do all the AJAX steps below
easyHTTP.prototype.get = function(url, callback) {
  /*
    Async code below. Once the async operation retrieves the data, call 
    the callback function and pass to it the data.
  */

  this.http.open("GET", url, true);

  // let self = this;
  this.http.onload = function() {
    if (this.http.status === 200) {
      // console.log(this.http.responseText);
      // return this.http.responseText; // Will return undefined

      callback(null, this.http.responseText); // Make first param represent any errors.
    } else {
      callback("Error: " + this.http.status);
    }
  }.bind(this);

  this.http.send();
};

// POST

// PUT

// DELETE
