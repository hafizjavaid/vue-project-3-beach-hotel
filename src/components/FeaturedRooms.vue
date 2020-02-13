<template>
  <section class="featured-rooms">
    <Title :title="title"></Title>
    <div class="featured-rooms-center">
      <Room v-for="room in getfeaturedRooms" :key="room.id" :room="room"></Room>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
// import Loading from "./Loading.vue";
import Room from "./Room.vue";
import Title from "./Title.vue";
export default {
  // mounted(){
  //  this.$store.dispatch("checkMount");
  // },
  computed: {
    ...mapGetters(["getfeaturedRooms"])
  },
  components: {
    // Loading,
    Room,
    Title
  },
  data() {
    return {
      title: "featured rooms"
    };
  }
};
</script>

<style scoped>
/* featured rooms */

.featured-rooms {
  padding: 5rem 0;
}
.featured-rooms-center {
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 40px;
}
@media screen and (min-width: 776px) {
  .featured-rooms-center {
    width: 90vw;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }
}
@media screen and (min-width: 992px) {
  .featured-rooms-center {
    width: 95vw;
    max-width: 1170px;
  }
}
/* end pf featured rooms */
</style>