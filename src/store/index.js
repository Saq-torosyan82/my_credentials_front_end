import { createStore } from 'vuex';
import auth from './auth';

export default createStore({
    modules: {
        auth
    },
    mutations: {
        initializeStore(state) {
            if (localStorage.getItem("my_token")) {
                state.auth.authenticated = true;
            } else {
                state.auth.authenticated = false;
            }
        }
    },
    getters: {
        isAuthenticated(state) {
            return !!state.auth.authenticated;
        }
    }
})