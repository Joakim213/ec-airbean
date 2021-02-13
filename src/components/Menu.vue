<template>
  <div class="">
    <li class="meny">
      <div class="col1">
        <button @click="$emit(`added`)">+</button>
      </div>
      <section class="col2">
        <h2>{{ coffeeList.title }}</h2>
        {{ coffeeList.desc }}
      </section>
      <aside class="col3">
        {{ coffeeList.price }}
      </aside>
    </li>
  </div>
</template>

<script>
export default {
  props: { coffeeList: Object },
};
</script>

<style scoped>
.meny {
  color: rgb(46, 42, 38);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
</style>