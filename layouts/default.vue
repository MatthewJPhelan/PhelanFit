<template>
  <v-app>
    <Navigation />
    <div class="website-main">
      <!-- // This is where all yours pages will be -->
      <nuxt />
      <BottomNavigation />
    </div>
  </v-app>
</template>

<script>
// Import your new Header component
import Navigation from '~/components/Navigation.vue'
import BottomNavigation from '~/components/molecules/BottomNavigation/BottomNavigation'
export default {
  components: {
    Navigation,
    BottomNavigation
  }
}
</script>

<style lang="scss">

.website-main {
  margin-top: 16px;
  margin-right: 16px;
  margin-left: 64px;
}

@media only screen and (min-width: 960px) {
  .website-main {
    margin-left: 264px;
  }
}
</style>
