<template>
  <div>
    <NavBar />

    <main class="wrap">
      <!-- login / register form (shown when nobody is logged in) -->
      <form v-if="!user" class="panel" @submit.prevent="submit">
        <h1>{{ register ? 'Create account' : 'Login' }}</h1>
        <p>Log in to write and publish articles.</p>

        <input v-if="register" v-model.trim="name" placeholder="Your name" required minlength="2" />
        <input v-model.trim="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password (at least 8 characters)" required minlength="8" />

        <p v-if="error" class="error" role="alert">{{ error }}</p>

        <button>{{ register ? 'Register' : 'Login' }}</button>
        <button class="switch" type="button" @click="register = !register; error = ''">
          {{ register ? 'Already registered? Log in' : 'New here? Create account' }}
        </button>

        <small>This is a demo. Accounts are only saved in your browser, so please don't use a real password.</small>
      </form>

      <!-- shown when someone is already logged in -->
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
  components: { NavBar, FooterComponent },
  data() {
    return {
      register: false,
      name: '',
      email: '',
      password: '',
      error: '',
      user: JSON.parse(localStorage.getItem('wave_user') || 'null')
    }
  },
  methods: {
    // turns the password into a SHA-256 hash so the plain password isn't stored
    async hash(text) {
      const data = new TextEncoder().encode(text)
      const digest = await crypto.subtle.digest('SHA-256', data)
      return Array.from(new Uint8Array(digest))
        .map(x => x.toString(16).padStart(2, '0'))
        .join('')
    },

    async submit() {
      this.error = ''
      const email = this.email.toLowerCase()
      const accounts = JSON.parse(localStorage.getItem('wave_accounts') || '{}')
      const hash = await this.hash(this.password)

      if (this.register) {
        // make a new account
        if (accounts[email]) {
          this.error = 'This email is already registered.'
          return
        }
        accounts[email] = { name: this.name, hash }
        localStorage.setItem('wave_accounts', JSON.stringify(accounts))
      } else if (!accounts[email] || accounts[email].hash !== hash) {
        // log in with an existing account
        this.error = 'Incorrect email or password.'
        return
      }

      this.user = { name: accounts[email].name, email }
      localStorage.setItem('wave_user', JSON.stringify(this.user))
      this.$router.push('/home')
    },

    logout() {
      localStorage.removeItem('wave_user')
      this.user = null
      this.$router.go(0)
    }
  }
}
</script>

<style scoped>
.wrap {
  min-height: 65vh;
  background: url('~@/assets/newspaper.jpg') center/cover;
  display: grid;
  place-items: center;
  padding: 40px 15px;
}

.panel {
  background: #fffffff0;
  padding: 30px;
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.panel input {
  padding: 12px;
  border: 1px solid #bbb;
  border-radius: 5px;
}

.panel button {
  background: #c30000;
  color: white;
  border: 0;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
}

.panel .switch {
  background: #eee;
  color: #a00000;
}

.error {
  color: #b00000;
}

.panel small {
  color: #666;
  line-height: 1.5;
}
</style>
