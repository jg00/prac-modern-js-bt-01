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
        console.log("HERE", data.profile.message);
      } else {
        // Show profile (via ui.js)
        // console.log("THERE", data.profile);
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear profile (via ui.js)
    console.log("CLEAR PROFILE");
  }
});
