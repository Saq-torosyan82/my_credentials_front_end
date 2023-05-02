<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <NavBar />

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <Main />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Main from "@/components/Main";

export default {
  name: "App",
  components: {
    NavBar,
    Main
  },
  props: {
  },
  mounted() {
    this.$store.commit('initializeStore');
  }
}
</script>
