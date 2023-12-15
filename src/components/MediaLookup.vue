<template>
  <div class="section">
    <div class="title">Hauptseite</div>
  <div class="sub-section">
    <GoogleApiTester msg="Google APIs example - oAuth2"></GoogleApiTester>
  </div>
  </div>
</template>
<script>
import GoogleApiTester from './GoogleApiTester.vue'
export default {
  name: 'MediaLookup',
  components: {GoogleApiTester},
  props: {
    msg: String
  }
}
</script>