<template>
 <div class="wrapper">
  <div class="theme-wrapper theme-light color-scheme-default">
    <div class="window">
      <div class="header">
        <div class="header-title-wrapper">
          <i class="fa fa-free-code-camp" aria-hidden="true"></i>
          <div class="header-title">Media Lookup</div>
        </div>
        <div class="logout-button">
          <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
        </div>

      </div>
      <div class="page">
        <div class="sidebar">
          <i class="fa fa-var-address-book">Adressbook</i>
          <i class="fa fa-calendar-check-o" aria-hidden="true">Calendar</i>
          <i class="fa fa-tachometer" aria-hidden="true">Tachometer</i>
          <i class="fa fa-university" aria-hidden="true">University</i>
          <i class="fa fa-taxi" aria-hidden="true">Taxi</i>
          <i class="fa fa-envelope" aria-hidden="true">Envelope</i>
        </div>
        <div class="content">
          <div class="section">
            <div class="title">Main Page</div>
            <div class="sub-title">Finding all your media</div>
            <button class="button">LEARN MORE</button>
          </div>
          <div class="section">
            <MainTabs/>
            <NavBar/>
          </div>
        </div>
      </div>
    </div>
  </div>
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
<style lang="scss">
  @import "@/scss/_app.scss";
</style>