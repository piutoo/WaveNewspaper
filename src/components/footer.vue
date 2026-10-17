<template>
  <footer class="footer">
    <div class="footer-links">
      <section>
        <h4> About Wave </h4>
        <p> A student news website built with Vue.js. </p>
        <router-link to="/home"> Latest stories </router-link>
      </section>

      <section>
        <h4>Contact</h4>
        <p>Questions or feedback?</p>
  
     <a href="mailto:larajmyers05@gmail.com?subject=Wave%20Newspaper%20enquiry">Contact Me</a>
      </section>

      <section>
        <h4>Account</h4>
        <router-link to="/login">Login / Account</router-link>
        <p><router-link to="/create">Write an article</router-link></p>
      </section>
    </div>

    <div class="footer-bar">© {{ new Date().getFullYear() }} Wave Newspaper</div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'}
  
</script>

<style scoped>
.footer {
  text-align: center;
  padding-top: 35px;
  background: #fafafa;}

.footer-links {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 25px;
  padding: 0 20px 30px;}

.footer section {
  max-width: 250px;}

.footer a {
  color: #a00000;}

.footer-bar {
  background: #a00000;
  color: white;
  padding: 14px;
  font-weight: bold;}
</style>
