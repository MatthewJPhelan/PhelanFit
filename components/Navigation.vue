<template>
  <client-only>
    <v-navigation-drawer
      v-model="drawer"
      :app="app"
      :mini-variant="miniVariant"
      :permanent="permanent"
      :floating="floating"
      :mobile-break-point="mobileBreakPoint"
      color="white"
      fixed
    >
      <v-list-item v-if="user" two-line :class="miniVariant">
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg">
        </v-list-item-avatar>

        <v-list-item-content class="uk-margin-left">
          <v-list-item-title>{{ user.username }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <div v-else>
        <v-img
          v-if="!miniVariant"
          class="uk-padding-small"
        >
          <Logo />
        </v-img>
        <v-img
          v-else
          class="uk-padding-small"
        >
          <LogoSmall />
        </v-img>
      </div>

      <v-list
        shaped
        nav
        class="py-0"
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list
          shaped
          nav
          class="py-0"
        >
          <!-- if logged in -->
          <v-list-item
            v-if="user"
            link
            @click="logout"
          >
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- If logged out -->
          <div v-else>
            <v-list-item
              link
              to="/users/signin"
            >
              <v-list-item-icon>
                <v-icon>mdi-account-outline</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Signin</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              link
              to="/users/register"
            >
              <v-list-item-icon>
                <v-icon>mdi-account-plus</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Signup</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list>
      </template>
    </v-navigation-drawer>
  </client-only>
</template>

<script>
import { mapMutations } from 'vuex'
import Logo from './atoms/Logo/Logo'
import LogoSmall from './atoms/Logo/LogoSmall'

export default {
  components: {
    Logo,
    LogoSmall
  },
  data () {
    return {
      drawer: true,
      app: true,
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard', to: '/' },
        { title: 'Blogs', icon: 'mdi-image', to: '/restaurants' },
        { title: 'About', icon: 'mdi-help-box', to: '/about' }
      ],
      permanent: true,
      floating: true,
      mobileBreakPoint: 860
    }
  },
  computed: {
    // Set your username thanks to your getter
    user () {
      return this.$store.getters['auth/user']
    },
    miniVariant () {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  methods: {
    // Define your needed mutations, here: auth/logout
    ...mapMutations({
      logout: 'auth/logout'
    })
  }
}
</script>

<style lang="scss">
.v-icon {
    &::before {
        margin-right: 16px;
    }
}
.v-list-item__title {
    overflow: initial;
}
</style>
