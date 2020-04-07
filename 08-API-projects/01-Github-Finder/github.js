// See settings_template.js for btgithubfinder client info.

class Github {
  constructor() {
    this.client_id = btgithubfinder_client_id;
    this.client_secret = btgithubfinder_client_secret;
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    let url_user = new URL(`https://api.github.com/users/${user}`);
    let url_user_repos = new URL(`https://api.github.com/users/${user}/repos`);

    let params = {
      client_id: this.client_id,
      client_secret: this.client_secret,
    };

    // url_user params
    Object.keys(params).forEach((key) =>
      url_user.searchParams.append(key, params[key])
    );

    // url_user_repos params
    Object.keys(params).forEach((key) =>
      url_user_repos.searchParams.append(key, params[key])
    );
    url_user_repos.searchParams.append("per_page", this.repos_count);
    url_user_repos.searchParams.append("sort", this.repos_sort);

    const profileResponse = await fetch(url_user);
    const reposResponse = await fetch(url_user_repos);

    // GitHub deprecating API authentication through query parameters
    // const profileResponse = await fetch(
    //   `https://api.github.com/users/${user}?client_id="${this.client_id}"&client_secret="${this.client_secret}"`
    // );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    // Returning an object because we will also be returning the repos as well and not just the profile object.
    return { profile: profile, repos: repos };
  }
}
