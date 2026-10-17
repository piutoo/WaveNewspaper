<template>
  <div>
    <NavBar />
    <img class="banner" src="@/assets/1newspaper.jpg" alt="Newspapers" />
    <h1 class="heading">TOP STORIES</h1>

    <main class="cards">
      <router-link
        v-for="a in stories"
        :key="a.slug"
        :to="'/article/' + a.slug"
        class="card"
      >
        <img :src="a.image" :alt="a.title" />
        <div class="content">
          <small>{{ a.category }}</small>
          <h2>{{ a.title }}</h2>
          <p>{{ a.summary }}</p>
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
  components: { NavBar, FooterComponent },
  computed: {
    // every article, including ones made on the Create page
    stories() {
      return allArticles()
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.heading {
  text-align: center;
  color: #c30000;
  margin: 30px;
}

.cards {
  max-width: 1150px;
  margin: 20px auto 60px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 22px;
}

.card {
  color: #222;
  text-decoration: none;
  background: #f2f2f2;
  border-radius: 9px;
  overflow: hidden;
  box-shadow: 0 2px 9px #0001;
}

.card img {
  width: 100%;
  height: 195px;
  object-fit: cover;
}

.content {
  padding: 18px;
}

.content small,
.content span {
  color: #b00000;
  font-weight: bold;
}

.content h2 {
  font-size: 21px;
}

.content p {
  line-height: 1.5;
}
</style>
