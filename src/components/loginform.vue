<template>
  <form class="login-form">
    <h2>Login</h2>
    <input type="email" placeholder="Email"/>
    <input type="password" placeholder="Password"/>
    <button type="submit"> Login </button>
  </form>
</template>

<script>
export default {
  name: "LoginForm",};
</script>

<style scoped>
.login-form {
  gap: 1rem;}
</style>
