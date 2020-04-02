/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author jg
 * @license MIT
 *
 */

class EasyHTTP {
  // Make an HTTP GET Request
  get(url) {
    // Note that fetc(url) returns a Promise by default (either a resolve() or a reject().
    // We can still use new Promise but not needed.
    // return new Promise((resolve, reject) => {
    return fetch(url)
      .then(res => res.json())
      .then(data => data)
      .catch(err => ("Custom error:", err));
    // .then(data => resolve(data))
    // .catch(err => reject(err));
    // });
  }

  // Make an HTTP POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data)) // returns the new data added
        .catch(err => reject(err));
    });
  }

  // Make an HTTP PUT Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data)) // returns the updated data
        .catch(err => reject(err));
    });
  }

  // Make an HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(() => resolve("Resouce Deleted.")) // resolve(data) will just return an empty string.
        .catch(err => reject(err));
    });
  }
}
