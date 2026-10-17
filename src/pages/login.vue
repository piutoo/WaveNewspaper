
<template>
  <div>
    <NavBar />

    <main class="wrap">
      <form v-if="!user" class="panel" @submit.prevent="submit">
        <h1>
          {{ register ? 'Create Account' : 'Login' }}</h1>
        <p> Log in to write and create articles. </p>

        <input  v-if="register" v-model="name"
          placeholder="Your name"
          required
          minlength="2" >

        <input v-model="email"
          type="email"
          placeholder="Email"
          required >

        <input v-model="password"
          type="password"
          placeholder="Password (at least 8 characters)"
          required
          minlength="8" >

        <p v-if="error" class="error">
          {{ error }} </p>

        <button type="submit">
          {{ register ? 'Register' : 'Login' }}
        </button>

        <button
          type="button"
          class="switch"
          @click="register = !register; error = ''" >
          {{ register ? 'Already have an account? Login' : 'Create an account' }}
        </button>

        <small>
          Demo only, ccounts are saved in your browser.
        </small>
      </form>

      <div v-else class="panel">
        <h1>Welcome, {{ user.name }}</h1>
        <p>You are logged in.</p>

        <router-link to="/create">Create an article</router-link>

        <button @click="logout">Log out</button>
      </div>
    </main>

    <FooterComponent />
  </div>
</template>

<script>
import NavBar from '@/components/navbar.vue'
import FooterComponent from '@/components/footer.vue'

export default {
  name: 'LoginPage',

  components: {
    NavBar,
    FooterComponent
  },

  data() {
    return {
      register: false,
      name: '',
      email: '',
      password: '',
      error: '',
      user: JSON.parse(localStorage.getItem('wave_user') || 'null')
    }},

  methods: {
    async hash(text) {
      const data = new TextEncoder().encode(text)
      const result = await crypto.subtle.digest('SHA-256', data)

      return Array.from(new Uint8Array(result))
        .map(x => x.toString(16).padStart(2, '0'))
        .join('')  },

    async submit() {
      this.error = ''

      const email = this.email.trim().toLowerCase()
      const accounts = JSON.parse(localStorage.getItem('wave_accounts') || '{}')
      const password = await this.hash(this.password)

      if (this.register) {
        if (accounts[email]) {
          this.error = 'Email already registered.'
          return
        }

        accounts[email] = {
          name: this.name.trim(),
          hash: password }

        localStorage.setItem('wave_accounts', JSON.stringify(accounts))
      } else {
        if (!accounts[email] || accounts[email].hash !== password) {
          this.error = 'Incorrect email or password.'
          return
        }  }

      this.user = {
        name: accounts[email].name,
        email: email }

      localStorage.setItem('wave_user', JSON.stringify(this.user))
      this.$router.push('/home') },

    logout() {
      localStorage.removeItem('wave_user')
      this.user = null
      this.$router.go(0)
    }
  }}
</script>

<style scoped>
.wrap {
  min-height: 65vh;
  background: url('~@/assets/newspaper.jpg') center/cover;
  display: grid;
  place-items: center;
  padding: 40px 15px;}

.panel {
  background: #fffffff0;
  padding: 30px;
  max-width: 400px;
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 13px;}

input {
  padding: 12px;
  border: 1px solid #bbb;
  border-radius: 5px;}

button {
  background: #c30000;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;}

.switch {
  background: #eee;
  color: #a00000;}

.error {
  color: #b00000;}

small {
  color: #666;
  line-height: 1.5;}
</style>
