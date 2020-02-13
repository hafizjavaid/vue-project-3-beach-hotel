<template>
  <Hero :hero="hero">
    <Banner slot="banner">
      <h1>{{title}}</h1>
      <div></div>
      <p>{{subtitle}}</p>
      <router-link to="/" class="btn-primary">return home</router-link>
    </Banner>
  </Hero>
</template>

<script>
import Hero from "../Hero.vue";
import Banner from "../Banner.vue";
export default {
  components: {
    Hero,
    Banner
  },
  data() {
    return {
      hero: "defaultHero",
      title: "404",
      subtitle: "Page not found"
    };
  }
};
</script>

<style>
</style>