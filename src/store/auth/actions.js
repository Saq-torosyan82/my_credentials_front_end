import AuthProxy from '@/proxies/AuthProxy';
import router from '@/router'

export const login = ({ commit }, payload) => new Promise((resolve, reject) => {
    console.log("payload =", payload);
    (new AuthProxy())
      .login(payload)
      .then((response) => {
        console.log("response =", response)
        console.log("router =", router)
        commit('login', response.token);
        router.push('/dashboard');

        resolve();
      })
      .catch((e) => {
        reject(e.errors);
      });
  });

export default {
    login,
};