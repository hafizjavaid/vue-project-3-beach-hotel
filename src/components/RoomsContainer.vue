<template>
  <div>
    <Filterr :rooms="getRooms"></Filterr>
    <List :rooms="getsortedRooms"></List>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Filterr from "./RoomsFilter.vue";
import List from "./RoomsList.vue";
export default {
  components: {
    Filterr,
    List
  },
  computed: {
    ...mapGetters(["getRooms", "getsortedRooms"])
  }
};
</script>

<style>
</style>