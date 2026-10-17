<template>
  <div>
    <NavBar />
    <img class="banner" src="@/assets/1newspaper.jpg" alt="Newspaper banner" />
    <h1>
      {{ category.toUpperCase() }}</h1>

    <main class="cards">
      <router-link  v-for="a in stories"
        :key="a.slug"
        :to="'/article/' + a.slug"
        class="card" >
        <img v-if="a.image" :src="a.image" :alt="a.title"/>
        
        <div>
          <h2>
            {{ a.title }} </h2>
          <p>
            {{ a.summary }} </p>
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
  components: { NavBar, FooterComponent },
  data() {
    return {
      category: 'Politics'
    }},
  computed: {
    // only show articles in this category
    stories() {
      return allArticles().filter(a => a.category === this.category)
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
  margin: 30px auto 60px;
  padding: 0 20px;
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
