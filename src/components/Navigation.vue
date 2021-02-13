<template>
  <section class="grid">
    <header class="close">
      <img src="../assets/graphics/close.svg" @click="$emit(`visible`)" />
    </header>
    <div class="nav">
      <router-link to="/">Meny</router-link><br />
      <router-link to="/About">Vårt Kaffe</router-link><br />
      <router-link to="*" class="link"> Min Profil</router-link><br />
      <router-link to="*" class="link"> Orderstatus</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
.grid {
  display: grid;
  background-color: rgb(46, 42, 38);
  height: 700px;
  width: 400px;
  position: absolute;
  top: 0;
  left: 0%;
  border-radius: 5px;
}
.close {
  background-color: rgb(255, 252, 249);
  width: 5%;
  height: 5%;
  top: 5%;
  left: 5%;
  cursor: pointer;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 50%;
}

.nav {
  display: block;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: 20px;
  justify-content: space-between;
  font-size: 4rem;
}

.nav > a {
  color: rgb(255, 252, 249);
  text-decoration: none;
}

.link {
}
</style> 