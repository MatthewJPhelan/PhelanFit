<template>
  <div>
    <LandingHeader />
    <AboutMe />
    <Feature />
  </div>
</template>

<script>
import LandingHeader from '../components/molecules/LandingHeader/LandingHeader'
import AboutMe from '../components/molecules/AboutMe/AboutMe'
import Feature from '../components/molecules/Feature/Feature'

export default {
  components: {
    LandingHeader,
    AboutMe,
    Feature
  }
}
</script>
