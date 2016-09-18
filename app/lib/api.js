const BASE_URL = "https://a208h8fgml.execute-api.us-east-1.amazonaws.com/dev/"
const DIAGNOSIS_PATH = "diagnosis"

class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = 'http://www.recipepuppy.com'
    const url = BASE_URL //`${host}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers()
    return fetch(url, options).then( resp => {
      let json = resp.json();
      console.log("response json", json);
      if (resp.ok) {
        return json
      }
      return json.then(err => {throw err});
    }).then( json => json.results );
  }
}
export default Api
