<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  background-color: rgb(240, 224, 225);
}
#app {
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-family: "Work Sans", Tahoma, Geneva, Verdana, sans-serif;
}

// @import "~bootstrap/dist/css/bootstrap.css";
</style>
