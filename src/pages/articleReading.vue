
<template>
  <div>
    <NavBar />

    <main class="article">
      <div v-if="article">
        <img v-if="article.image" :src="article.image" />

        <p class="category">
          {{ article.category }} · Wave Newspaper </p>
        <h1>
        {{ article.title }}</h1>
        <h3>
        {{ article.summary }}</h3>

        <p v-for="(paragraph, i) in article.body" :key="i">
          {{ paragraph }}
        </p>

        <router-link to="/home">← Back to top stories</router-link>
      </div>

      <div v-else>
        <h1>Article not found</h1>
        <router-link to="/home">Back home</router-link>
      </div>
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import NavBar from '@/components/navbar.vue'
import FooterComponent from '@/components/footer.vue'
import { allArticles } from '@/data/articles'

export default {
  name: 'ArticlePage',
  components: {
    NavBar,
    FooterComponent },

  computed: {
    article() {
      return allArticles().find(a => a.slug === this.$route.params.slug)
    }
  }}
  
</script>

<style scoped>
.article {
  max-width: 850px;
  margin: 35px auto;
  padding: 20px;
  line-height: 1.8;}

img {
  width: 100%;
  max-height: 380px;
  object-fit: cover;
  border-radius: 8px;}

h1 {
  font-size: 36px;}

.category,
a {
  color: #c30000;}

h3 {
  color: #555;
  font-size: 20px;}
</style>

