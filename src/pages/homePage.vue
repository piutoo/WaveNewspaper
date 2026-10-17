
<template>
  <div>
    <NavBar />

    <img class="banner" src="@/assets/1newspaper.jpg" alt="Newspapers">

    <h1> TOP STORIES </h1>

    <main class="cards">
      <router-link v-for="article in stories"
        :key="article.slug"
        :to="'/article/' + article.slug"
        class="card"
      >
        <img  v-if="article.image"
          :src="article.image"
          :alt="article.title"
        >

        <div class="content">
          <small>{{ article.category }}</small>
          <h2>{{ article.title }}</h2>
          <p>{{ article.summary }}</p>
          <span>Read story →</span>
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
  name: 'HomePage',
  components: {
    NavBar,
    FooterComponent },

  computed: {
    stories() {
      return allArticles()
    }
  }}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 250px;
  object-fit: cover;}

h1 {
  text-align: center;
  color: #c30000;
  margin: 30px;}

.cards {
  max-width: 1150px;
  margin: 20px auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 20px;}

.card {
  color: #222;
  text-decoration: none;
  background: #f2f2f2;
  border-radius: 9px;
  overflow: hidden;}

.card img {
  width: 100%;
  height: 195px;
  object-fit: cover;}

.content {
  padding: 18px;}

.content small,
.content span {
  color: #b00000;
  font-weight: bold;}

.content h2 {
  font-size: 21px;}

.content p {
  line-height: 1.5;}
</style>
