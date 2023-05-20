export default {
    login(state, token) {
        state.authenticated = true;
        localStorage.setItem("my_token", token);
    },
    logout(state) {
        state.authenticated = false;
        localStorage.removeItem("my_token");
    },
};