document.getElementById("button1").addEventListener("click", getText);

function getText() {
  fetch("test2.txt")
    .then(function(res) {
      // console.log(res.text()); // Promise {<pending>}
      // console.log(res.ok); // With fetch api you have to check res.ok and accordingly throw an error to invoke .catch.

      // Invoke .catch
      if (!res.ok) {
        throw new Error(res.error);
      }

      return res.text();
    })

    .then(function(data) {
      console.log(data);
    })

    .catch(function(err) {
      console.log("Caught error: ", err);
    });
}

/*
  Note:
  - Why is it that when fetch('test2.txt') file is changed the above code still jumps to the .then(function(data))?
  - The .catch() is not invoked.

  - With fetch API (unlike axios), if there is an http error, it will not fire off .catch automatically. 
    You have to check the response and throw an error yourself.
*/
