<template>
  <div>
    <div class="empty-search" v-if="rooms.length===0">
      <h3>unfortunately no rooms matched your search parameters</h3>
    </div>
    <section class="roomslist" v-else>
      <div class="roomslist-center">
        <Room v-for="room in rooms" :key="room.id" :room="room"></Room>
      </div>
    </section>
  </div>
</template>

<script>
import Room from "./Room.vue";
export default {
  props: ["rooms"],
  components: {
    Room
  }
};
</script>

<style scoped>
/* roomlist */
.roomslist {
  padding: 5rem 0;
}
.roomslist-center {
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 30px;
}

@media screen and (min-width: 776px) {
  .roomslist-center {
    width: 90vw;
  }
}
@media screen and (min-width: 992px) {
  .roomslist-center {
    width: 95vw;
    max-width: 1170px;
  }
}
/* end of roomlist */
</style>