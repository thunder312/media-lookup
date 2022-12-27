<template>
<div class="linkbar">
    <router-link to="/" class="link"><img class="image" src="@/assets/icons/home.svg"/>Home</router-link>
    <router-link to="/receipts" class="link"><img class="image" src="@/assets/icons/rezept.svg"/>Rezepte</router-link>
    <router-link to="/movies" class="link"><img class="image" src="@/assets/icons/film.svg"/>Filme</router-link>
    <router-link to="/books" class="link"><img class="image" src="@/assets/icons/buch.svg"/>Bücher</router-link>
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