<template>
  <div>
    <div class="uk-child-width-1-2@m uk-grid">
      <div>
        <!-- // Nice image to make this app more beautiful -->
        <div class="uk-card uk-card-default uk-card-small uk-card-body">
          <img src="https://assets-ouch.icons8.com/preview/294/e25a0374-0657-45d5-98d9-2408473a744c.png" height="500" width="500" class="uk-align-center" alt="">
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-large uk-card-body">
          <form @submit.stop.prevent="handleSubmit">
            <fieldset class="uk-fieldset">
              <legend class="uk-legend">
                Register
              </legend>

              <div class="uk-margin">
                <label class="uk-form-label">Username</label>
                <input v-model="username" class="uk-input" type="text" placeholder="pbocuse">
              </div>

              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Email</label>
                <input v-model="email" class="uk-input" type="email" placeholder="paul.bocuse@gmail.com">
              </div>

              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Password</label>
                <input v-model="password" class="uk-input" type="password">
              </div>

              <div class="uk-margin">
                <button class="uk-button uk-button-primary uk-width-1-1" :disabled="loading" type="submit">
                  Submit
                </button>
              </div>

              <div class="uk-margin">
                <p>
                  Already have an account?
                  <router-link :to="{ name: 'users-signin'}">
                    Login
                  </router-link>
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import mapMutations in order to call mutations from your store
import { mapMutations } from 'vuex'
import strapi from '~/utils/Strapi'

export default {
  data () {
    return {
      email: '',
      password: '',
      username: '',
      loading: false
    }
  },
  methods: {
    // Method that will register your users
    async handleSubmit () {
      try {
        this.loading = true
        const response = await strapi.register(
          this.username,
          this.email,
          this.password
        )
        this.loading = false
        // Call your setUser mutation from your auth.js store file
        this.setUser(response.user)
        this.$router.push('/')
      } catch (err) {
        this.loading = false
        alert(err.message || 'An error occurred.')
      }
    },
    // Define all your needed mutations, here: auth/setUser
    ...mapMutations({
      setUser: 'auth/setUser'
    })
  }
}
</script>
