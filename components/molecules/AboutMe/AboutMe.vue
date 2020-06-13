<template>
  <section id="about-me">
    <v-container class="text-center">
      <h2 class="display-1 font-weight-bold mb-3 text-uppercase">
        {{ about.title }}
      </h2>

      <v-responsive
        class="mx-auto mb-1"
        width="56"
      >
        <v-divider class="mb-1" />

        <v-divider />
      </v-responsive>

      <v-responsive
        class="mx-auto title text-error font-weight-light mb-8"
        max-width="720"
        color="error"
      >
        {{ about.description }}
      </v-responsive>

      <v-avatar
        class="elevation-12 mb-12"
        size="128"
      >
        <v-img :src="apiUrl + about.avatar.url" />
      </v-avatar>

      <div />

      <v-btn
        color="grey"
        :href="about.ctaLink"
        outlined
        large
      >
        <span class="grey--text text--darken-1 font-weight-bold">
          {{ about.ctaText }}
        </span>
      </v-btn>
    </v-container>

    <div class="py-12" />
  </section>
</template>

<script>
// Import the restaurants query
import aboutQuery from '~/apollo/queries/about/about'

export default {
  data () {
    return {
      // Initialize an empty restaurants variabkle
      about: '',
      query: ''
    }
  },
  apollo: {
    about: {
      prefetch: true,
      query: aboutQuery
    }
  },
  computed: {
    apiUrl () {
      return this.$store.getters['environment/API_URL']
    }
  }
}
</script>
