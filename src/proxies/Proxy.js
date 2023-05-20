import axios from 'axios';

class BaseProxy {
  /**
   * The constructor of the BaseProxy.
   *
   * @param {string} endpoint   The endpoint being used.
   * @param {Object} parameters The parameters for the request.
   */
  constructor(endpoint = '', parameters = {}) {
    this.endpoint = endpoint;
    this.parameters = parameters;
    this.$axios = axios;
    this.$axios.defaults.withCredentials = true;
    this.$axios.defaults.baseURL = process.env.VUE_APP_API_LOCATION;
    this.$axios.defaults.headers.common.Accept = 'application/json';

    if (localStorage.getItem("my_token")) {
      this.$axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("my_token")}`;
    }


  }

  /**
   * Method used to set the query parameters.
   *
   * @param {Object} parameters The given parameters.
   *
   * @returns {BaseProxy} The instance of the proxy.
   */
  setParameters(parameters) {
    Object.keys(parameters).forEach((key) => {
      this.parameters[key] = parameters[key];
    });

    return this;
  }

  /**
   * Method used to set a single parameter.
   *
   * @param {string} parameter The given parameter.
   * @param {*} value The value to be set.
   *
   * @returns {BaseProxy} The instance of the proxy.
   */
  setParameter(parameter, value) {
    this.parameters[parameter] = value;

    return this;
  }

  /**
   * Method used to remove all the parameters.
   *
   * @param {Array} parameters The given parameters.
   *
   * @returns {BaseProxy} The instance of the proxy.
   */
  removeParameters(parameters) {
    parameters.forEach((parameter) => {
      delete this.parameters[parameter];
    });

    return this;
  }

  /**
   * Method used to remove a single parameter.
   *
   * @param {string} parameter The given parameter.
   *
   * @returns {BaseProxy} The instance of the proxy.
   */
  removeParameter(parameter) {
    delete this.parameters[parameter];

    return this;
  }

  /**
   * The method used to perform an AJAX-request.
   *
   * @param {string}      requestType The request type.
   * @param {string}      url         The URL for the request.
   * @param {Object|null} data        The data to be send with the request.
   * @param {Object} options          The options.
   *
   * @returns {Promise} The result in a promise.
   */
  submit(requestType, url, data = null, options = {}) {
    console.log('submit');
    console.log('requestType =', requestType);
    console.log('url =', url);
    console.log('data =', data);
    console.log('options =', options);
    const clearedUrl = url.replace(/\/$/, '');
    console.log('clearedUrl =', clearedUrl);
    console.log('getParameterString =', this.getParameterString());
    console.log('this.$axiosdefaults.baseURL =', this.$axios.defaults.baseURL);
    return new Promise((resolve, reject) => {
      this.$axios[requestType](clearedUrl + this.getParameterString(), data, options)
        .then((response) => {
          resolve(response.data);
        })
        .catch(({ response }) => {
          if (response) {
            reject(response.data);
          } else {
            reject();
          }
        });
    });
  }

  /**
   * Method used to fetch all items from the API.
   *
   * @returns {Promise} The result in a promise.
   */
  all() {
    return this.submit('get', `/${this.endpoint}`);
  }

  /**
   * Method used to fetch all items from json.
   *
   * @returns {Promise} The result in a promise.
   */
  getJson() {
    return this.submit('get', `${this.endpoint}`);
  }

  /**
   * Method used to fetch a single item from the API.
   *
   * @param {int|string} id The given identifier.
   *
   * @returns {Promise} The result in a promise.
   */
  find(id) {
    return this.submit('get', `/${this.endpoint}/${id}`);
  }

  /**
   * Method used to create an item.
   *
   * @param {Object} item The given item.
   * @param {Object} options The options.
   *
   * @returns {Promise} The result in a promise.
   */
  create(item, options = {}) {
    return this.submit('post', `/${this.endpoint}`, item, options);
  }

  /**
   * Method used to update an item.
   *
   * @param {int}    id   The given identifier.
   * @param {Object} item The given item.
   *
   * @returns {Promise} The result in a promise.
   */
  update(id, item) {
    return this.submit('put', `/${this.endpoint}/${id}`, item);
  }

  /**
   * Method used to update single field an item.
   *
   * @param {int}    id   The given identifier.
   * @param {String} filed The given field.
   * @param {string|number} value The given value.
   *
   * @returns {Promise} The result in a promise.
   */
  updateField(id, field, value) {
    const data = { [field]: value };
    return this.submit('patch', `/${this.endpoint}/${id}`, data);
  }

  /**
   * Method used to destroy an item.
   *
   * @param {int} id The given identifier.
   *
   * @returns {Promise} The result in a promise.
   */
  destroy(id) {
    return this.submit('delete', `/${this.endpoint}/${id}`);
  }

  /**
   * Method used to transform a parameters object to a parameters string.
   *
   * @returns {string} The parameter string.
   */
  getParameterString() {
    const keys = Object.keys(this.parameters);
    const parameterStrings = keys
      .filter((key) => !!this.parameters[key] || this.parameters[key] === 0)
      .map((key) => `${key}=${this.parameters[key]}`);

    return parameterStrings.length === 0 ? '' : `?${parameterStrings.join('&')}`;
  }
}

export default BaseProxy;
