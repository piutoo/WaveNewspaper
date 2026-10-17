<template>
  <div>
    <NavBar />

    <main class="results">
      <h1>Search results for “{{ term }}”</h1>
      <p>{{ matches.length }} article(s) found</p>

      <router-link
        class="result"
        v-for="a in matches"
        :key="a.slug"
        :to="'/article/' + a.slug">
        <h2>{{ a.title }}</h2>
        <p>{{ a.summary }}</p>
        <small>{{ a.category }} →</small>
      </router-link>

      <p v-if="!matches.length"> Try a different keyword, such as climate, budget or world. </p>
    </main>
    <FooterComponent/>
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
    FooterComponent
  },
  computed: {
   
    term() {
      return String(this.$route.query.q || '').trim()
    },
    matches() {
      const q = this.term.toLowerCase()
      if (!q) return []

      return allArticles().filter(a =>
        [a.title, a.summary, a.category, ...a.body].join(' ').toLowerCase().includes(q)
      )}
  }}
</script>

<style scoped>
.results {
  max-width: 950px;
  margin: 40px auto;
  min-height: 55vh;
  padding: 0 20px;}

.result {
  display: block;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding: 15px 0;}

.result h2,
.result small {
  color: #c30000;}
</style>
