<template>
  <div class="position">
    <div class="wrapper">
      <img src="../assets/graphics/intro-graphic-left.svg" class="left" />
      <div class="center">
        <img
          src="../assets/graphics/airbean-landing.svg"
          class="logo"
          @click="$emit('click')"
        />
      </div>
      <img src="../assets/graphics/intro-graphic-right.svg" class="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.wrapper {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: rgb(51, 160, 127);
  margin: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
.left {
  grid-column-start: 1;
}
.right {
  grid-column-start: 4;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  cursor: pointer;
}
</style>
