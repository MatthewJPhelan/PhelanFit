<template>
  <div>
    <!-- // Search input to filters blogs -->
    <form class="uk-search uk-search-large uk-align-center uk-margin">
      <span uk-search-icon />
      <input v-model="query" class="uk-search-input" type="search" placeholder="Search...">
    </form>

    <!-- // blog cards -->
    <div v-for="blog in filteredList" :key="blog.name" class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin" uk-grid>
      <div class="uk-card-media-left uk-cover-container">
        <img :src="apiUrl + blog.image[0].url" alt="" uk-cover>
        <canvas width="600" height="400" />
      </div>
      <div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">
            {{ blog.title }}
          </h3>
          <p>{{ blog.subtitle }}</p>
          <!-- // Link to the blog using router-link -->
          <router-link :to="{ name: 'blogs-id', params: { id: blog.id }}" tag="a" class="uk-button uk-button-primary">
            See blog
          </router-link>
        </div>
      </div>
    </div>

    <!-- // If no blogs have been found -->
    <div v-if="filteredList.length == 0" class="uk-container uk-container-center uk-text-center">
      <img src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png" height="800" width="800">
      <p>No blogs found</p>
    </div>
  </div>
</template>

<script>
// Import the blogs query
import blogQuery from '~/apollo/queries/blog/blogs'
export default {
  data () {
    return {
      // Initialize an empty blogs variabkle
      blogs: [],
      query: ''
    }
  },
  apollo: {
    blogs: {
      prefetch: true,
      query: blogQuery
    }
  },
  computed: {
    // Search system
    filteredList () {
      return this.blogs.filter((blog) => {
        return blog.title.toLowerCase().includes(this.query.toLowerCase())
      })
    },
    apiUrl () {
      return this.$store.getters['environment/API_URL']
    }
  }
}
</script>
