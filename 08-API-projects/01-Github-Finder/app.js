// Instantiate Github
const github = new Github();
// Instantiate UI
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText) {
    // Make an HTTP call to GitHub
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert (via ui.js)

        // showAlert(message, bootstrap classes)
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show profile (via ui.js)
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
        ui.clearAlert(); // On next user input (before auto removed after a few seconds)
      }
    });
  } else {
    // Clear profile (via ui.js)
    ui.clearProfile();
  }
});
