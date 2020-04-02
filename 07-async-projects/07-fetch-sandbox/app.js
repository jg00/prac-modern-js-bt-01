document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJson);

document.getElementById("button3").addEventListener("click", getExternal);

function getText() {
  fetch("test.txt")
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
      document.getElementById("output").innerHTML = `${data}`;
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

function getJson() {
  fetch("posts.json")
    .then(function(res) {
      if (!res.ok) {
        throw new Error(res.error);
      }
      return res.json();
    })
    .then(function(data) {
      let output = "";
      data.forEach(
        function(item) {
          output += `<li>${item.title} ${item.body}</li>`;
        }.bind(this)
      );

      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log("Error:", err);
    });
}

function getExternal() {
  fetch("http://api.github.com/users")
    .then(function(res) {
      // if (!res.ok) {
      //   throw new Error(res.error);
      // }
      // return res.json();

      return res;
    })
    .then(handleErrors)
    .then(function(data) {
      console.log(data);
      let output = "";
      data.forEach(
        function(item) {
          output += `<li>${item.login} <img style="width:100px;display:block" src="${item.avatar_url}"></img></li>`;
        }.bind(this)
      );

      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log("Error:", err);
    });
}

function handleErrors(res) {
  // console.log(res);
  if (!res.ok) throw new Error(res.error);

  return res.json();
}
