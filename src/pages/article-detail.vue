<template>
  <div>
    <NavBar />

    <main class="create">
      <h1>Create Article</h1>

      <p v-if="!user">Please <router-link to="/login">log in</router-link> to publish an article.</p>

      <form v-else @submit.prevent="publish">
        <label>
          Title
          <input v-model.trim="title" required minlength="8" />
        </label>

        <label>
          Category
          <select v-model="category">
            <option>World</option>
            <option>Politics</option>
            <option>Climate</option>
          </select>
        </label>

        <label>
          Summary
          <textarea v-model.trim="summary" required minlength="20"></textarea>
        </label>

        <label>
          Article content
          <textarea v-model.trim="body" required minlength="50" rows="9"></textarea>
        </label>

        <button>Publish article</button>
      </form>
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import NavBar from '@/components/navbar.vue'
import FooterComponent from '@/components/footer.vue'

export default {
  components: { NavBar, FooterComponent },
  data() {
    return {
      user: JSON.parse(localStorage.getItem('wave_user') || 'null'),
      title: '',
      category: 'World',
      summary: '',
      body: ''
    }
  },
  methods: {
    // saves the new article in localStorage, then opens it
    publish() {
      const saved = JSON.parse(localStorage.getItem('wave_articles') || '[]')
      const slug = 'reader-' + Date.now()

      saved.unshift({
        slug,
        title: this.title,
        category: this.category,
        summary: this.summary,
        // a blank line in the textarea starts a new paragraph
        body: this.body.split(/\n\s*\n/).filter(Boolean),
        image: null
      })

      localStorage.setItem('wave_articles', JSON.stringify(saved))
      this.$router.push('/article/' + slug)
    }
  }
}
</script>

<style scoped>
.create {
  max-width: 720px;
  margin: 35px auto 70px;
  padding: 25px;
  background: #f7f7f7;
  border-radius: 8px;
  min-height: 45vh;
}

.create h1 {
  color: #c30000;
}

.create form {
  display: grid;
  gap: 17px;
}

.create label {
  display: grid;
  gap: 7px;
  font-weight: bold;
}

.create input,
.create select,
.create textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font: inherit;
}

.create button {
  padding: 13px;
  color: white;
  background: #c30000;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
}
</style>
