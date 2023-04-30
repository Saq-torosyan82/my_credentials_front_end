<template>
    <div>
        <nav
            class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
        >
            <div class="container">
                <a
                    class="navbar-brand float-left"
                    target="_blank"
                >
                    My Credentials
                </a>

                <AuthNav v-if="isAuth" />
                <NotAuthNav v-else />
            </div>
        </nav>
    </div>
</template>

<script>
import AuthNav from "@/components/elements/navigations/AuthNav";
import NotAuthNav from "@/components/elements/navigations/NotAuthNav";

export default {
    name: "NavBar",
    components: {
        AuthNav,
        NotAuthNav
    },
    props: {
        isAuth: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>