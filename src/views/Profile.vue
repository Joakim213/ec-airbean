<template>
  <div class="wrapper">
    <Register v-if="visible" v-on:tracker="tracker" />
    <div class="drone">
      <p>Ordernummer: {{ orderNr }}</p>
      <img src="../assets/graphics/drone.svg" alt="" />
      <h1>Din beställning är på väg!</h1>
      <div>{{ eta }} minuter</div>
    </div>
    <router-link to="/"><button>Brew me more...</button></router-link>

    <Loader v-if="loading" />
    <div class="timer">{{ timerCount }}</div>
  </div>
</template>

<script>
import Register from "@/components/Register.vue";
import Loader from "@/components/Loader.vue";
import * as API from "@/api";
import { generateOrderNr, generateETA } from "@/assets/backend/utils/utils.js";

export default {
  name: "profile",
  components: { Register, Loader },
  data() {
    return {
      visible: true,
      loading: true,
      users: [],
      orderNr: "",
      eta: 0,
      timerCount: 2,
    };
  },

  methods: {
    tracker() {
      this.orderNr = generateOrderNr();
      this.eta = generateETA();
      this.visible = false;
    },
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else {
          this.loading = false;
        }
      },
      immediate: true,
    },
  },

  async mounted() {
    const users = await API.fetchUsers();
    this.users = users;
    // this.loading = false;

    // jag har vilat den här raden så du ser att den
    // ska vara här om jag hade haft ett riktigt API,
    // fejkar en loading med watcher-koden ovan istl
  },
};
</script>

<style scoped>
.wrapper {
  background-color: rgb(235, 119, 84);
  margin: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.drone {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
}

.drone > div {
  font-weight: bold;
}

.timer {
  color: rgb(235, 119, 84);
}
</style>