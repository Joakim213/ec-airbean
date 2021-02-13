<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header><h1>Din beställning</h1></header>
      <div class="wrapper">
        <li
          class="cart"
          v-for="item in this.$root.orderArray"
          :key="item.id"
          v-bind:cartItems="item"
          v-on:plus="addToOrder(item)"
          v-on:minus="minusOnOrder(item)"
        >
          <h2>{{ item.title }}</h2>

          <aside>
            <div class="add">
              <img
                src="../assets/graphics/arrow-up.svg"
                @click="addToOrder(item)"
              />
            </div>
            {{ item.amount }}
            <div class="less">
              <img
                src="../assets/graphics/arrow-down.svg"
                @click="minusOnOrder(item)"
              />
            </div>
          </aside>

          <p>{{ item.price * item.amount }} kr</p>
        </li>
        <div class="total">
          <h1>Total {{ total }} kr</h1>
          <p>inkl moms + drönarleverans</p>
        </div>
        <router-link to="/profile"><button>Take my money!</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    total() {
      return this.$root.orderArray.reduce((acc, item) => acc + item.price, 0);
    },
  },

  methods: {
    addToOrder(theCoffee) {
      let clickedCoffee = this.$root.orderArray.find(
        (element) => element.title == theCoffee.title
      );
      if (clickedCoffee) {
        clickedCoffee.amount += 1;
        clickedCoffee.price += theCoffee.price;
      }
    },

    minusOnOrder(theCoffee) {
      let clickedCoffee = this.$root.orderArray.find(
        (element) => element.title == theCoffee.title
      );

      if (clickedCoffee) {
        clickedCoffee.amount -= 1;
        clickedCoffee.price -= theCoffee.price;
      }
    },
  },
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
  background: #ffffff;
  overflow-x: auto;
  width: 60%;
  height: 80%;
  border-radius: 5px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  margin-left: 20px;
}

.total > p {
  display: block;
  margin-block-start: 0em;
}
li {
  list-style: none;
}

aside {
  margin-left: 20px;
}

img {
  cursor: pointer;
}
button {
  font-size: medium;
  padding: 0.5rem;
  width: 40%;
}
</style>