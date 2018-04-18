import { polyfill } from 'es6-promise';
import { Observable } from 'rxjs/Observable';
import Axios from 'axios';

export default class API {
  static headers(options) {
    let requestHeaders = {};

    if (options.json) {
      requestHeaders['Content-Type'] = 'application/json';
    }

    if (options.token) {
      requestHeaders['Authorization'] = `Token ${options.token}`;
    }

    if (options.multipart) {
      requestHeaders['Content-Type'] = `multipart/form-data;`
    }

    return requestHeaders;
  }

  static client(options) {
    return Axios.create({
      baseURL: 'http://api.fixer.io/',
      timeout: options.timeout || 30000,
      headers: API.headers(options),
    });
  }

  static get(url, options) {
    const apiClient = API.client(options);
    return Observable.from(apiClient.get(url));
  }

  static post(url, params, options) {
    const data = params ? JSON.stringify(params) : null;
    const apiClient = API.client(options);
    return Observable.from(apiClient.post(url, data));
  }

  static put(url, params, options) {
    const data = params ? JSON.stringify(params) : null;
    const apiClient = API.client(options);
    return Observable.from(apiClient.put(url, data));
  }

  static delete(url, params, options) {
    const data = params ? JSON.stringify(params) : null;
    const apiClient = API.client(options);
    return Observable.from(apiClient.delete(url, data));
  }
}
