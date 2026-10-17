<template>
  <div class="article-card">
    <h3>Article</h3>
    <p>This is an article</p>

    <router-link :to="'/article/'">Read more</router-link>
  </div>
</template>

<script>
export default {
  name: "ArticleCard"};
</script>

<style scoped>
.article-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
</style>

