<template>
    <div>
        <ul class="nav navbar-nav flex-row float-left">
            <li class="nav-item">
                <router-link class="nav-link pr-3" :to="{name: 'home'}">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="btn btn-outline-primary" to="/">Logout</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "AuthNav",
    }
</script>

<style lang="scss" scoped>

</style>