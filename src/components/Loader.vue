<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="wrapper">
        <img src="@/assets/graphics/loader.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loader",
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: rgba(20, 11, 11, 0.616);
  color: rgb(250, 245, 239);
  overflow-x: auto;
  width: 80%;
  height: 80%;
  border-radius: 5px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>