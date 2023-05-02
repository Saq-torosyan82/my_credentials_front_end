import { createStore } from 'vuex';
import auth from './auth';

export default createStore({
    modules: {
        auth
    },
    mutations: {
        initializeStore(state) {
            if (localStorage.getItem("email")) {
                state.auth.email = localStorage.getItem("email");
            } else {
                state.auth.email = "";
            }
        }
    },
})