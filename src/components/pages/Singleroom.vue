<template>
  <div>
    <Hero :hero="hero">
      <Banner slot="banner">
        <h1>{{getRoom.name}}</h1>
        <div></div>

        <router-link to="/rooms" class="btn-primary">Back To Rooms</router-link>
      </Banner>
    </Hero>
    <section class="single-room">
      <div class="single-room-images">
        <img :src="getRoom.images[0]" alt />
        <img :src="getRoom.images[1]" alt />
        <img :src="getRoom.images[2]" alt />
      </div>
      <div class="single-room-info">
        <article class="desc">
          <h3>Details</h3>
          <p>{{getRoom.description}}</p>
        </article>
        <article class="info">
          <h3>Info</h3>
          <h6>price : ${{getRoom.price}}</h6>
          <h6>size : ${{getRoom.size}} SQFT</h6>
          <h6 v-if="getRoom.capacity > 1">{{getRoom.capacity}} people</h6>
          <h6 v-else>{{getRoom.capacity}} person</h6>
          <h6 v-if="getRoom.pets">Pets Allowed</h6>
          <h6 v-else>No Pets Allowed</h6>
          <h6 v-if="getRoom.breakfast">Free breakfast included</h6>
        </article>
      </div>
    </section>
    <section class="room-extras">
      <h6>Extras</h6>
      <ul class="extras">
        <li>-{{getRoom.extras[0]}}</li>
        <li>-{{getRoom.extras[1]}}</li>
        <li>-{{getRoom.extras[2]}}</li>
        <li>-{{getRoom.extras[3]}}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Hero from "../Hero.vue";
import Banner from "../Banner.vue";
export default {
  components: {
    Hero,
    Banner
  },
  data() {
    return {
      hero: "roomsHero"

      // id: this.$route.params.id,
      // rooms: getRooms
    };
  },
  computed: {
    ...mapGetters(["getRoom"])
  }
};
</script>

<style scoped>
/* single room*/

.single-room {
  padding: 5rem 0 0 0;
}
.single-room-images {
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 50px;
}
.single-room-images img {
  width: 100%;
  display: block;
}
.single-room-info {
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr;
  margin: 2rem auto;
}
.desc,
.info {
  margin: 1rem 0;
}
.desc h3 {
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
}
.desc p {
  line-height: 1.5;
}
.info h3,
.info h6 {
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
}

.info h6 {
  font-weight: 300;
}
.room-extras {
  width: 80vw;
  margin: 0 auto 3rem auto;
}
.room-extras h6 {
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
}
.extras {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
}
@media screen and (min-width: 992px) {
  .single-room-images,
  .single-room-info,
  .room-extras {
    width: 95vw;
    max-width: 1170px;
  }
  .single-room-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
  .info {
    padding-left: 3rem;
  }
}
/* end of single room*/
</style>