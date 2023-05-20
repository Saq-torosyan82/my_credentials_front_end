import AuthProxy from '@/proxies/AuthProxy';
import router from '@/router'

export const login = ({ commit }, payload) => new Promise((resolve, reject) => {
    console.log("payload =", payload);
    (new AuthProxy())
      .login(payload)
      .then((response) => {
        commit('login', response.token);
        router.push('/dashboard');
        resolve();
      })
      .catch((e) => {
        reject(e.errors);
      });
  });

  export const logout = ({ commit }) => {
    (new AuthProxy())
      .logout()
      .finally(() => {
        localStorage.removeItem('pathToLoadAfterLogin');
        commit('logout');
        router.push('/');
      });
  };

export default {
    login,
    logout,
};