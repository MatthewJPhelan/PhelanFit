<template>
  <div
    class="overflow-hidden"
    color="primary"
  >
    <v-bottom-navigation
      v-model="activeBtn"
      color="indigo"
      dark
    >
      <v-btn href="https://www.instagram.com/mattyjphelan">
        <span>Instagram</span>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>

      <v-btn href="https://www.facebook.com/mattyjphelan">
        <span>Facebook</span>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>

      <v-btn href="https://www.youtube.com/channel/UC9nZVZabpccsJfR2MdjgwTg?view_as=subscriber">
        <span>Youtube</span>
        <v-icon>mdi-youtube</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeBtn: 1
    }
  }
}
</script>
