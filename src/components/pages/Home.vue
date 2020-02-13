<template>
  <div>
    <Hero :hero="hero">
      <Banner slot="banner">
        <h1>{{ title }}</h1>
        <div></div>
        <p>{{ subtitle }}</p>
        <router-link to="/rooms" class="btn-primary">Our Rooms</router-link>
      </Banner>
    </Hero>
    <Services></Services>
    <Feature />
    <br />
    <br />
    <br />
    <!-- <ckeditor :config="editorConfig" :value="editorData"></ckeditor> -->

    <br />
    <br />
    <br />
  </div>
</template>

<script>
import Hero from "../Hero.vue";
import Banner from "../Banner.vue";
import Services from "../Services.vue";
import Feature from "../FeaturedRooms.vue";
export default {
  components: {
    Hero,
    Banner,
    Services,
    Feature
  },
  data() {
    return {
      hero: "defaultHero",
      title: "Luxurious rooms",
      subtitle: "delux rooms starting at $299"
    };
  }
};
</script>
<style scoped>
ckeditor {
  margin: 5rem auto;
}
</style>
