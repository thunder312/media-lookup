<template>
<div class="linkbar">
    <router-link to="/" @click="this.emitter.emit('category', 'home')" class="link"><img class="image" src="@/assets/icons/home.svg"/>Home</router-link>

    <router-link to="/receipts" @click="this.emitter.emit('category', 'receipts')" class="link" active-class="receipts" 
      :class="{active: $route.matched.some(({ name }) => name === 'subcategory')}">
      <img class="image" src="@/assets/icons/rezept.svg"/>Rezepte
    </router-link>

    <router-link to="/films" @click="this.emitter.emit('category', 'films')" class="link" active-class="films" 
      :class="{active: $route.matched.some(({ name }) => name === 'subcategory')}">
      <img class="image" src="@/assets/icons/film.svg"/>Filme
    </router-link>

    <router-link to="/books" @click="this.emitter.emit('category', 'books')" class="link" active-class="books" 
      :class="{active: $route.matched.some(({ name }) => name === 'subcategory')}">
      <img class="image" src="@/assets/icons/buch.svg"/>Bücher
    </router-link>

  </div>
</template>
<script>
export default {
    // eslint-disable-next-line
  name: 'LinkBar',
  components: {},
  props: {
    msg: String
  }
}
</script>