<template>
    <div>
        <ul class="nav navbar-nav flex-row float-left">
            <li class="nav-item">
                <router-link class="nav-link pr-3" :to="{name: 'home'}">Home</router-link>
            </li>
            <li class="nav-item">
                <a class="btn btn-outline-primary" @click="logout">Logout</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "AuthNav",
        methods: {
            logout() {
                this.$store.commit('logout');
                this.$router.push({name: '/'});
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>