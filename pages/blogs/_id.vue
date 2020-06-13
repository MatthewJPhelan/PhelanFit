<template>
  <div>
    <client-only>
      <v-btn
        dark
        class="align-self-end fixed"
        @click="$router.go(-1)"
      >
        <v-icon>mdi-arrow-left-bold</v-icon>
        Go Back
      </v-btn>
      <div>
        <v-row no-gutters>
          <v-img
            :max-height="'calc(75vh - ' + $vuetify.application.top + 'px)'"
            :src="apiUrl + blog.image[0].url"
            gradient="to top right, rgba(69, 65, 94,.5), rgba(46, 50, 60, .8)"
          >
            <v-theme-provider dark>
              <v-container
                align="center"
                justify="center"
              >
                <v-row
                  class="white--text mx-auto"
                >
                  <v-col
                    class="white--text text-center"
                    cols="12"
                    tag="h1"
                  >
                    <div class="py-6" />
                    <span
                      :class="[$vuetify.breakpoint.mdAndDown ? 'display-3': 'display-4']"
                      class="font-weight-bold"
                    >
                      {{ blog.title }}
                    </span>

                    <div class="py-6" />

                    <span
                      :class="[$vuetify.breakpoint.mdAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                      {{ blog.subtitle }}
                    </span>
                  </v-col>
                </v-row>
                <div class="py-6" />
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
        <v-card
          class="mx-auto elevation-12 header-image-card"
          width="75%"
          outlined
        >
          <v-img
            :max-height="'calc(50vh - ' + $vuetify.application.top + 'px)'"
            :src="apiUrl + blog.image[0].url"
          />
        </v-card>
        <v-container>
          <v-row
            no-gutters
          >
            <v-col
              :align-self="center"
              :class="[$vuetify.breakpoint.mdAndDown ? 'blog-content--mobile' : 'blog-content']"
              class="font-weight-light"
            >
              {{ blog.content }}
            </v-col>
          </v-row>
          <div class="py-6" />
        </v-container>
        <!-- <div
          class="blog-header"
          :style="{ backgroundImage: `url(${apiUrl + blog.image[0].url})` }"
        >
          <a class="uk-margin" @click="$router.go(-1)"><span uk-icon="arrow-left" /></a>
          <div class="blog-header__title">
            {{ blog.title }}
          </div>
          <div class="blog-header__subtitle">
            {{ blog.subtitle }}
          </div>
          <div class="blog-header__image">
            <img :src="apiUrl + blog.image[0].url" alt="">
          </div>
        </div>
        <div class="blog-content">
          {{ blog.content }}
        </div> ##################-->

        <!-- <div class="uk-width-1-3@m"> -->
        <!-- // Left card displaying dishes -->
        <!-- <div v-for="dish in restaurant.dishes" :key="dish" class="uk-margin">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img :src="apiUrl + dish.image.url" alt="">
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">
                  {{ dish.name }} <span class="uk-badge">{{ dish.price }}€</span>
                </h3>
                <p>{{ dish.description }}</p>
              </div>
              <div class="uk-card-footer">
                <button class="uk-button uk-button-primary" @click="addToCart(dish)">
                  Add to cart
                </button>
              </div>
            </div>
          </div> -->
        <!-- </div> -->

        <!-- // Right card displaying you cart -->
        <!-- <div class="uk-width-expand@m"> -->
        <!-- // Call a Cart component -->
        <!-- <Cart />
        </div> -->
      </div>
    </client-only>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
// import Cart from '~/components/Cart.vue'
import blogQuery from '~/apollo/queries/blog/blog'

export default {
  // components: {
  //   Cart
  // },
  data () {
    return {
      blog: Object
    }
  },
  apollo: {
    blog: {
      prefetch: true,
      query: blogQuery,
      variables () {
        return { id: this.$route.params.id }
      }
    }
  },
  computed: {
    apiUrl () {
      return process.env.API_URL || 'http://localhost:1337'
    }
  },
  methods: {
    // ...mapMutations({
    //   addToCart: 'cart/add',
    //   removeFromCart: 'cart/remove'
    // })
  }
}
</script>

<style lang="scss">
  .fixed {
    position: fixed;
    z-index: 999;
  }
  .header-image-card {
    position: relative;
    top: -6vw;
  }
  .blog-content {
    font-size: 1.2em;
    max-width: 75rem;

    &--mobile {
      font-size: 1em;
    }
  }
</style>
