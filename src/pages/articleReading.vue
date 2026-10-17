<template>
  <div>
    <NavBar />

    <main v-if="article" class="article">
      <img v-if="article.image" :src="article.image" :alt="article.title" />
      <p class="category">{{ article.category }} · Wave Newspaper</p>
      <h1>{{ article.title }}</h1>
      <p class="summary">{{ article.summary }}</p>
      <p v-for="(paragraph, i) in article.body" :key="i">{{ paragraph }}</p>
      <router-link to="/home">← Back to top stories</router-link>
    </main>

    <main v-else class="article">
      <h1>Article not found</h1>
      <router-link to="/home">Back home</router-link>
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import NavBar from '@/components/navbar.vue'
import FooterComponent from '@/components/footer.vue'
import { allArticles } from '@/data/articles'

export default {
  components: { NavBar, FooterComponent },
  computed: {
    // find the article whose slug matches the url, or null if there isn't one
    article() {
      return allArticles().find(a => a.slug === this.$route.params.slug) || null
    }
  }
}
</script>

<style scoped>
.article {
  max-width: 850px;
  margin: 35px auto 70px;
  padding: 0 20px;
  line-height: 1.8;
}

.article img {
  width: 100%;
  max-height: 380px;
  object-fit: cover;
  border-radius: 8px;
}

.article h1 {
  font-size: clamp(28px, 4vw, 44px);
  line-height: 1.2;
}

.category,
.article a {
  color: #c30000;
}

.summary {
  font-size: 20px;
  font-weight: bold;
  color: #555;
}
</style>
