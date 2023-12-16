<template>
  <div class="section">
    <div class="title">Hauptseite</div>
  <div class="sub-section">
    <GoogleLoginButton></GoogleLoginButton>
  </div>
  </div>
</template>
<script>
import GoogleLoginButton from './GoogleLoginButton.vue'
export default {
  name: 'MediaLookup',
  components: {GoogleLoginButton},
  props: {
    msg: String
  }
}
</script>