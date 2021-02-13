<template>
  <section class="background rounded-top">
    <div class="nav">
      <img src="../assets/graphics/navicon.svg" @click="visible" />
      <Navigation
        v-if="showNav"
        v-on:visible="visible"
        v-on:meny="$emit(`meny`)"
        v-on:about="$emit(`about`)"
      />
    </div>
  </section>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  name: "Header",
  components: { Navigation },
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    visible() {
      this.showNav = !this.showNav;
    },
  },
};
</script>



<style scoped>
.background {
  background-image: url("../assets/graphics/graphics-header.svg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 210px;
}

.nav {
  background-color: rgb(255, 252, 249);
  width: 5%;
  height: 5%;
  position: relative;
  top: 50%;
  left: 5%;
  cursor: pointer;
  padding: 10px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 50%;
}
</style>