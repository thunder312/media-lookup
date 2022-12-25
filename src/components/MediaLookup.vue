<template>
 <div class="wrapper">
  <div class="theme-wrapper theme-light color-scheme-orange">
    <div class="window">
      <div class="header">
        <div class="header-title-wrapper">
          <i class="fa-regular fa-free-code-camp" aria-hidden="true"></i>
          <div class="header-title">Media Lookup</div>
        </div>

      </div>
      <div class="page">
        <div class="sidebar">
          <div class="link"><img src="@/assets/icons/rezept.svg"/>Rezepte</div>
          <div class="link"><img src="@/assets/icons/film.svg"/>Filme</div>
          <div class="link"><img src="@/assets/icons/buch.svg"/>Bücher</div>
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