<template>
  <div>
    <Intro v-if="show" @click="show = false" />

    <div class="cart">
      <img src="../assets/graphics/bag.svg" @click="cartVisability" />
      <p>{{ amount }}</p>
    </div>

    <h1>Meny</h1>

    <Menu
      v-for="coffee in this.$root.coffeeMenu"
      :key="coffee.id"
      v-bind:coffeeList="coffee"
      v-on:added="addToOrder(coffee)"
    />
    <ShoppingCart v-if="showCart" />
  </div>
</template>

<script>
import Intro from "@/components/Intro";
import Menu from "../components/Menu.vue";
import ShoppingCart from "../components/ShoppingCart.vue";

export default {
  components: {
    Menu,
    ShoppingCart,
    Intro,
  },

  data() {
    return {
      amount: 0,
      showCart: false,
      show: true,
    };
  },

  methods: {
    addToOrder(theCoffee) {
      let clickedCoffee = this.$root.orderArray.find(
        (element) => element.title == theCoffee.title
      );
      if (clickedCoffee) {
        clickedCoffee.amount += 1;
        clickedCoffee.price += theCoffee.price;
      } else {
        this.$root.orderArray.push({
          title: theCoffee.title,
          price: theCoffee.price,
          amount: 1,
        });
      }
      this.amount += 1;
    },

    cartVisability() {
      this.showCart = !this.showCart;
    },

    async mounted() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
h1 {
  color: rgb(46, 42, 38);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart {
  background-color: rgb(46, 42, 38);
  width: 5%;
  height: 5%;
  position: absolute;
  left: 87%;
  top: 3%;
  cursor: pointer;
  padding: 15px;
  border-radius: 100%;
}

p {
  position: absolute;
  top: 0%;
  left: 57%;
  font-size: 20px;
  background-color: rgb(235, 119, 84);
  color: powderblue;
  padding: 5px;
  border-radius: 100%;
  margin: 0;
}
</style>