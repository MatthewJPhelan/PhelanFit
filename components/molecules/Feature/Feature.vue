<template>
  <section
    id="features"
    class="grey lighten-3"
  >
    <div class="py-6" />

    <v-container class="text-center">
      <h2 class="display-1 font-weight-bold mb-6">
        VUETIFY FEATURES
      </h2>

      <v-responsive
        class="mx-auto mb-6"
        width="56"
      >
        <v-divider class="mb-1" />

        <v-divider />
      </v-responsive>

      <v-row>
        <v-col
          v-for="({ icon, title, text }, i) in features"
          :key="i"
          cols="12"
          md="4"
        >
          <v-card
            id="object"
            class="py-12 px-4 feature-card"
            color="grey lighten-5 elevation-12"
            flat
          >
            <v-theme-provider dark>
              <div>
                <v-avatar
                  color="primary"
                  size="88"
                >
                  <v-icon
                    large
                    v-text="icon"
                  />
                </v-avatar>
              </div>
            </v-theme-provider>

            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              v-text="title"
            />

            <v-card-text
              class="subtitle-1"
              v-text="text"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12" />
  </section>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Carousel',
  data () {
    return {
      features: [
        {
          icon: 'mdi-account-group-outline',
          title: 'Vibrant Community',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam'
        },
        {
          icon: 'mdi-update',
          title: 'Frequent Updates',
          text: 'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.'
        },
        {
          icon: 'mdi-shield-outline',
          title: 'Long-term Support',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam'
        }
      ]
    }
  },
  mounted () {
    const windowWidth = $(window).width() - $('#object').width()
    const documentHeight = $(document).height() - $(window).height()

    $(function () {
      $(window).scroll(function () {
        const scrollPosition = $(window).scrollTop() - $(window).height()
        const objectPositionLeft = windowWidth * (scrollPosition / documentHeight)
        $('#object').css({
          left: objectPositionLeft
        })
      })
    })
  }
}

</script>

<style lang="scss" scoped>
.feature-card {
  border-radius: 0.5rem;
}
</style>
