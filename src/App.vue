<template>
  <div v-if="$store.state.auth.email">
      <HeaderNav />
      <router-view />
  </div>
  <div v-else>
      <Login />
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
import Login from "@/components/Login";

export default {
  name: "App",
  components: {
    HeaderNav,
    Login
  },
  props: {
  },
  mounted() {
    this.$store.commit('initializeStore');
  }
}
</script>
