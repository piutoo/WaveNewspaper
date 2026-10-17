
<template>
  <div>
    <NavBar />
    <img class="banner" src="@/assets/1newspaper.jpg" alt="Newspaper banner">

    <h1> Climate </h1>

    <main class="cards">
      <router-link v-for="article in stories"
        :key="article.slug"
        :to="'/article/' + article.slug"
        class="card"
      >
        <img v-if="article.image" :src="article.image" :alt="article.title">

        <div>
          <h2>
            {{ article.title }} </h2>
          <p>
            {{ article.summary }} </p>
          <strong> Read article </strong>
        </div>
      </router-link>
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import NavBar from '@/components/navbar.vue'
import FooterComponent from '@/components/footer.vue'
import { allArticles } from '@/data/articles'

export default {
  name: 'ClimatePage',
  components: {
    NavBar,
    FooterComponent },

  computed: {
    stories() {
      return allArticles().filter(article => article.category === 'Climate')
    }
  }}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 240px;
  object-fit: cover;}

h1 {
  text-align: center;
  color: #c30000;
  font-size: 40px;}

.cards {
  max-width: 1050px;
  min-height: 40vh;
  margin: 30px auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;}

.card {
  background: #eee;
  color: #222;
  text-decoration: none;
  border-radius: 8px;
  overflow: hidden;}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;}

.card div {
  padding: 18px;}

.card strong {
  color: #c30000;}
</style>

