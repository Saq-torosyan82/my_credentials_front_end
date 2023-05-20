<template>
    <header class="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-info">My Credentials</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="navbar-nav">
            <div class="nav-item text-nowrap">
                <a class="nav-link px-3 text-info" href="#" @click.prevent="logout">Sign out</a>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: "HeaderNav",
    methods: {
        logout() {
            this.$store.dispatch('logout');
            this.$store.commit('logout');
            this.$router.push({name: '/'});
        }
    }
}
</script>

<style scoped>
header {
    background-color: #EAEAEA;
}
</style>