<template>
<div class="sidebar">
    <div class="link"><img src="@/assets/icons/rezept.svg"/>Rezepte</div>
    <div class="link"><img src="@/assets/icons/film.svg"/>Filme</div>
    <div class="link"><img src="@/assets/icons/buch.svg"/>Bücher</div>
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
<style lang="scss">
  @import "@/scss/_app.scss";
</style>