export default {
    login(state, email) {
        state.email = email;
        localStorage.setItem("email", email);
    },
    logout(state) {
        state.email = "";
        localStorage.removeItem("email");
    },
};