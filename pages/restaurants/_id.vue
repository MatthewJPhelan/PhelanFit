<template>
  <div>
    <a class="uk-button uk-button-primary uk-margin" @click="$router.go(-1)"><span uk-icon="arrow-left" /> go back</a>

    <client-only>
      <div uk-grid>
        <div class="uk-width-1-3@m">
          <!-- // Left card displaying dishes -->
          <div v-for="dish in restaurant.dishes" :key="dish" class="uk-margin">
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
          </div>
        </div>

        <!-- // Right card displaying you cart -->
        <div class="uk-width-expand@m">
          <!-- // Call a Cart component -->
          <Cart />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Cart from '~/components/Cart.vue'
import restaurantQuery from '~/apollo/queries/restaurant/restaurant'

export default {
  components: {
    Cart
  },
  data () {
    return {
      restaurant: Object
    }
  },
  apollo: {
    restaurant: {
      prefetch: true,
      query: restaurantQuery,
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
    ...mapMutations({
      addToCart: 'cart/add',
      removeFromCart: 'cart/remove'
    })
  }
}
</script>
