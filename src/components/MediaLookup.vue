<template>
  <div>
    <h1>{{ msg }}</h1>
    <div><MainTabs /></div>
    <div><NavBar /></div>
    <a href="#">Tester</a>
  </div>
</template>

<script>
import MainTabs from '@/components/MainTabs';
import NavBar from '@/components/Navbar';
export default {
  name: 'MediaLookup',
  components: {MainTabs, NavBar},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../assets/css/mediaLookup.css';
</style>
