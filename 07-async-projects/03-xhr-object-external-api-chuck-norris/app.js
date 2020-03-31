document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;
  let url = `http://api.icndb.com/jokes/random/`;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = "";
      if (response.type === "success") {
        if (Array.isArray(response.value)) {
          response.value.forEach(function(joke) {
            output += `<li>${joke.joke}</li>`;
          }, this);
        } else {
          output = `<li>${response.value.joke}</li>`;
        }
      } else {
        output += "<li>Something wen wrong</li>";
      }

      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}
