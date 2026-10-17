
<template>
  <div>
    <NavBar />
    <main class="create">
      <h1>Create Article</h1>

      <p v-if="!user">
        Please <router-link to="/login"> log in </router-link> to publish an article.
      </p>
      
      <form v-else @submit.prevent="publish">
        <label>Title</label>
        <input v-model="title" required minlength="8" />

        <label> Category </label>
        <select v-model="category">
          <option> World </option>
          <option> Politics </option>
          <option> Climate </option>
          
        </select>

        <label>Summary</label>
        <textarea v-model="summary" required minlength="20"></textarea>

        <label>Article Content</label>
        <textarea v-model="body" required minlength="50" rows="9"></textarea>

        <button type="submit">Publish Article</button>
      </form>
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import NavBar from '@/components/navbar.vue'
import FooterComponent from '@/components/footer.vue'

export default {
  name: 'CreateArticle',
  components: {
    NavBar,
    FooterComponent },
  data() {
    return {
      user: JSON.parse(localStorage.getItem('wave_user') || 'null'),
      title: '',
      category: 'World',
      summary: '',
      body: ''
    } },

  methods: {
    publish() {
      // Get saved articles
      const articles = JSON.parse(localStorage.getItem('wave_articles') || '[]')
      const slug = 'reader-' + Date.now()
      // Add new article
      articles.unshift({
        slug: slug,
        title: this.title,
        category: this.category,
        summary: this.summary,
        body: this.body.split('\n\n'),
        image: null
      })
      // Save article
      localStorage.setItem('wave_articles', JSON.stringify(articles))
      // Open article page
      this.$router.push('/article/' + slug)
      
    }
  }}
</script>

<style scoped>
.create {
  max-width: 720px;
  margin: 35px auto;
  padding: 25px;
  background: #f7f7f7;
  border-radius: 8px;
  min-height: 45vh;}

h1 {
  color: #c30000;}

form {
  display: grid;
  gap: 15px;}

label {
  font-weight: bold;}

input,
select,
textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font: inherit;}

button {
  padding: 13px;
  background: #c30000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;}
</style>

