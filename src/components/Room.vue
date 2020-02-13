<template>
  <article class="room">
    <div class="img-container">
      <img :src="room.images[0]" alt />
      <div class="price-top">
        <h6>${{room.price}}</h6>
        <p>per Height</p>
      </div>
      <button class="btn-primary room-link" @click="setRoom(room.id)">
        <router-link :to="`/rooms/${room.id}`">Featured</router-link>
      </button>
    </div>
    <p class="room-info">{{room.name}}</p>
  </article>
</template>

<script>
export default {
  props: ["room"],
  computed: {},

  methods: {
    setRoom(id) {
      this.$store.dispatch("setRoom", id);
    }
  }
};
</script>

<style scoped>
/* room */
.room {
  /* box-shadow: var(--lightShadow); */
  transition: var(--mainTransition);
  cursor: pointer;
}
.room:hover {
  /* box-shadow: var(--darkShadow); */
  box-shadow: 0px 0px 5px #444;
}

.img-container {
  position: relative;
}
.img-container img {
  width: 100%;
  display: block;
  transition: var(--mainTransition);
}
.price-top {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  color: var(--mainWhite);
  padding: 0.3rem 0.6rem 0.5rem;
  border-bottom-right-radius: 1rem;
  font-size: 0.5rem;
  text-align: center;
  transition: var(--mainTransition);
}
.price-top h6 {
  margin-bottom: 0;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: var(--mainSpacing);
}
.room-link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: scale(0);
  transition: all 0.3s linear;
}
.img-container:hover {
  background: rgba(0, 0, 0, 0.8);
}
.img-container:hover img {
  opacity: 0.3;
}
.img-container:hover .price-top {
  opacity: 0;
}
.img-container:hover .room-link {
  transform: translate(-50%, -50%) scale(1);
}
.room-info {
  background: var(--darkGrey);
  text-transform: capitalize;
  padding: 0.5rem 0;
  text-align: center;
  font-weight: 700;
  letter-spacing: var(--mainSpacing);
}
button {
  text-decoration: none;
  border-bottom: none;
}
/* end of room  */
</style>