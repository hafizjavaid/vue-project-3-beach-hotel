<template>
  <div>
    <Hero :hero="hero">
      <Banner slot="banner">
        <h1>{{title}}</h1>
        <div></div>
        <router-link to="/" class="btn-primary">return home</router-link>
      </Banner>
    </Hero>

    <RoomContainer></RoomContainer>
  </div>
</template>

<script>
import Hero from "../Hero.vue";
import Banner from "../Banner.vue";
import RoomContainer from "../RoomsContainer.vue";

export default {
  components: {
    Hero,
    Banner,
    RoomContainer
  },
  data() {
    return {
      hero: "roomsHero",
      title: "our rooms"
    };
  }
};
</script>

<style>
</style>