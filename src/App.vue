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
          <Sidebar/>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>
<style lang="scss">
  @import "@/scss/_app.scss";
</style>
