<template>
  <nav class="navbar">
    <router-link class="logo" to="/home">Wave Newspaper</router-link>

    <div class="links">
      <router-link to="/home">Home</router-link>
      <router-link to="/politics">Politics</router-link>
      <router-link to="/world">World</router-link>
      <router-link to="/climate">Climate</router-link>
      <router-link to="/create">Create article</router-link>
      <router-link to="/login">{{ loggedIn ? 'Account' : 'Login' }}</router-link>
    </div>

    <form class="search" @submit.prevent="search">
      <input v-model="query" aria-label="Search articles" placeholder="Search articles..." required />
      <button type="submit">Search</button>
    </form>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      // true if someone is logged in (their details are saved in localStorage)
      loggedIn: !!localStorage.getItem('wave_user')
    }
  },
  methods: {
    // go to the search page and put the typed word in the url
    search() {
      this.$router.push({ path: '/search', query: { q: this.query.trim() } })
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
  padding: 18px 4%;
  border-bottom: 1px solid #ddd;
  background: white;
}

.logo {
  font-size: 25px;
  font-weight: 800;
  color: #c30000;
  text-decoration: none;
  white-space: nowrap;
}

.links {
  display: flex;
  flex: 1;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
}

.links a {
  color: #333;
  text-decoration: none;
}

.links a.router-link-active {
  color: #c30000;
  font-weight: bold;
}

.search {
  display: flex;
  gap: 5px;
}

.search input {
  padding: 9px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 180px;
}

.search button {
  background: #c30000;
  color: white;
  border: 0;
  border-radius: 5px;
  padding: 9px 12px;
  cursor: pointer;
}

@media (max-width: 600px) {
  .search {
    width: 100%;
  }

  .search input {
    max-width: none;
    flex: 1;
  }
}
</style>
