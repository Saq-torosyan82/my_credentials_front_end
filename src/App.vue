<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <NavBar :is-auth="isAuth" />

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <Main :is-auth="isAuth" />
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
    isAuth: {
      type: Boolean,
      default: true,
    }
  }
}
</script>
