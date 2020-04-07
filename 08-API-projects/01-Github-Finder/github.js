// See settings_template.js for btgithubfinder client info.

class Github {
  contructor() {
    this.client_id = btgithubfinder_client_id;
    this.client_secret = btgithubfinder_client_secret;
  }

  async getUser(user) {
    let url = new URL(`https://api.github.com/users/${user}`);
    let params = {
      client_id: btgithubfinder_client_id,
      client_secret: btgithubfinder_client_secret,
    };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    const profileResponse = await fetch(url);

    // GitHub deprecating API authentication through query parameters
    // const profileResponse = await fetch(
    //   `https://api.github.com/users/${user}?client_id="${this.client_id}"&client_secret="${this.client_secret}"`
    // );

    const profile = await profileResponse.json();

    // Returning an object because we will also be returning the repos as well and not just the profile object.
    return { profile: profile };
  }
}
