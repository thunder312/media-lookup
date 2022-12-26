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
          <MediaLookup/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import MediaLookup from './components/MediaLookup.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    MediaLookup
  }
}
</script>
