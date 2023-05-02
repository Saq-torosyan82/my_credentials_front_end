<template>
  <div v-if="$store.state.auth.email">
      <HeaderNav />
      <Dashboard />
  </div>
  <div v-else>
      <Login />
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";

export default {
  name: "App",
  components: {
    HeaderNav,
    Dashboard,
    Login
  },
  props: {
  },
  mounted() {
    this.$store.commit('initializeStore');
  }
}
</script>
