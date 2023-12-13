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
          <ToolBar/>
        <div class="content">
          <router-view></router-view> <!-- Reperäsentaion der über den Link gewählten Seite -->
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import LinkBar from './components/LinkBar.vue'
import ToolBar from './components/ToolBar.vue'

export default {
  name: 'App',
  components: {
    LinkBar, ToolBar
  }
}
</script>
<style lang="scss">
  @import "@/scss/_app.scss";
</style>
