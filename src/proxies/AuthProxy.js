import Proxy from './Proxy';

class AuthProxy extends Proxy {
  /**
   * The constructor for the ArtistProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters = {}) {
    super('', parameters);
  }

  /**
   * Method used to login.
   *
   * @param {String} username The username.
   * @param {String} password The password.
   *
   * @returns {Promise} The result in a promise.
   */
  login({ email, password }) {
    console.log('email =', email);
    console.log('password = ', password);
    const data = {
      email,
      password,
    };
    return this.submit('post', `${this.endpoint}/login`, data);
  }

  /**
   * Method used to logout.
   *
   * @returns {Promise} The result in a promise.
   */
  logout() {
    return this.submit('post', `${this.endpoint}/logout`);
  }

  /**
   * Method used to register the user.
   *
   * @param {Object} data The register data.
   *
   * @returns {Promise} The result in a promise.
   */
  register(data) {
    return this.submit('post', `${this.endpoint}/register`, data);
  }

  forgotPassword(data) {
    return this.submit('post', `${this.endpoint}/forgot-password`, data);
  }

  createPassword(data) {
    return this.submit('post', `${this.endpoint}/reset-password`, data);
  }
}

export default AuthProxy;
