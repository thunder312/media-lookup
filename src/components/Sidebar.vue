<template>
<div class="sidebar">
    <router-link to="/" class="link"><img src="@/assets/icons/home.svg"/>Home</router-link>
    <router-link to="/receipts" class="link"><img src="@/assets/icons/rezept.svg"/>Rezepte</router-link>
    <router-link to="/movies" class="link"><img src="@/assets/icons/film.svg"/>Filme</router-link>
    <router-link to="/books" class="link"><img src="@/assets/icons/buch.svg"/>Bücher</router-link>
  </div>
</template>
<script>
export default {
    // eslint-disable-next-line
  name: 'Sidebar',
  components: {},
  props: {
    msg: String
  }
}
</script>