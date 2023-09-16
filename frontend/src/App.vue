<template>
  <div class="wrapper">
  <div class="theme-wrapper theme-light color-scheme-orange">
    <div class="window">
      <div class="header">
        <div class="header-title-wrapper">
          <div class="header-title">Medien Suche</div>
        </div>
      </div>
      <div class="page">
          <LinkBar/>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import LinkBar from './components/LinkBar.vue'

export default {
  name: 'App',
  components: {
    LinkBar
  }
}
</script>
<style lang="scss">
  @import "@/scss/_app.scss";
</style>
