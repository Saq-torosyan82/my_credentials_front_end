<template>
    <div>
        <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item">
                <router-link class="nav-link pr-3" :to="{name: 'login'}">Sign in</router-link>
            </li>
            <li class="nav-item">
                <router-link class="btn btn-outline-primary" :to="{name: 'signup'}">Sign up</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NotAuthNav",
    }
</script>

<style lang="scss" scoped>

</style>