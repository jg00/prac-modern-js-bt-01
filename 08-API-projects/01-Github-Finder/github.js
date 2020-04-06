// See settings_template.js for btgithubfinder client info.

class Github {
  contructor() {
    this.client_id = btgithubfinder_client_id;
    this.client_secret = btgithubfinder_client_secret;
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    // Returning an object because we will also be returning the repos as well and not just the profile object.
    return { profile: profile };
  }
}
