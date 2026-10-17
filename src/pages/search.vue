
<template>
  <div>
    <NavBar />

    <main class="results">
      <h1> Search results for "{{ term }}" </h1>
      <p>
        {{ matches.length }} articles found</p>

      <router-link v-for="article in matches"
        :key="article.slug"
        :to="'/article/' + article.slug"
        class="result"
      >
        <h2>
          {{ article.title }} </h2>
        <p>
          {{ article.summary }} </p>
        <small>
          {{ article.category }} </small>
      </router-link>

      <p v-if="matches.length === 0">
        No articles found. Try searching for something else.
      </p>
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import NavBar from '@/components/navbar.vue'
import FooterComponent from '@/components/footer.vue'
import { allArticles } from '@/data/articles'

export default {
  name: 'SearchResults',
  components: {
    NavBar,
    FooterComponent},

  computed: {
    term() {
      return this.$route.query.q || '' },

    matches() {
      const search = this.term.toLowerCase().trim()
      if (!search) return []
      return allArticles().filter(article => {
        const text = [
          article.title,
          article.summary,
          article.category,
          ...article.body ].join(' ').toLowerCase()

        return text.includes(search)
      })
    }}}
</script>

<style scoped>
.results {
  max-width: 950px;
  margin: 40px auto;
  padding: 20px;
  min-height: 55vh;}

.result {
  display: block;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  text-decoration: none;
  color: #333;}

.result h2,
.result small {
  color: #c30000;}
</style>

