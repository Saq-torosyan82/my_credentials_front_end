<template>
    <div id="login">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form @submit.prevent="login" id="login-form" class="form">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">E Mail:</label><br>
                                <input type="email" class="form-control" v-model="email">
                            </div>
                            <div class="form-group mt-2">
                                <label for="password" class="text-info">Password:</label><br>
                                <input type="password" class="form-control" v-model="password">
                            </div>
                            <div class="form-group mt-2">
                                <button type="submit" class="btn btn-info btn-md">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login', {email: this.email, password: this.password});
        }
    }
}
</script>

<style scoped>
#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 320px;
  border: 1px solid #9C9C9C;
  background-color: #EAEAEA;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
  margin-top: -85px;
}
</style>