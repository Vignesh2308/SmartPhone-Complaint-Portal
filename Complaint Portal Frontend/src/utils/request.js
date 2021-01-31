import 'whatwg-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  // if (response.status >= 200 && response.status < 300) {
    return response;
  // } else if (response.statusText.includes('Invalid mime type')) {
  //   // window.location.href = LOGIN;
  // } else {
  //   response.json().then(object => {
  //     if (object.message.includes('Invalid mime type')) {
  //       // window.location.href = LOGIN;
  //     }
  //   });
  }

//   const error = new Error(response.statusText);
//   error.response = response;
//   throw error;
// }

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to 'fetch'
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  // if (!options.headers.authToken && url.includes('login')) {
  //   return fetch(url, options)
  //     .then(checkStatus)
  //     .then(parseJSON);
  // } else if (!options.headers.authToken || options.headers.authToken == undefined) {
  //   window.location.href = LOGIN;
  // } else if (options.headers.authToken) {
    return fetch(url, options)
      .then(checkStatus)
      .then(parseJSON)
      .catch(error => {
      });
  // }
}
