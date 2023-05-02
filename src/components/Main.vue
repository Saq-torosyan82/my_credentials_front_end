<template>
    <div>
        <Dashboard v-if="$store.state.auth.email" />

        <div v-else class="inner-block">
          <router-view />
        </div>
    </div>
</template>

<script>
import Dashboard from "@/components/Dashboard";

export default {
    name: "Main",
    components: {
        Dashboard
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