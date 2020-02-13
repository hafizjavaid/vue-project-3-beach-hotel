<template>
  <header :class="hero">
    <slot name="banner"></slot>
  </header>
</template>

<script>
export default {
  props: ["hero"]
};
</script>

<style scoped>
.defaultHero,
.roomsHero {
  min-height: calc(100vh - 66px);
  background: url("../images/defaultBcg.jpeg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  /* z-index: 10000; */
}
.roomsHero {
  background-image: url("../images/room-2.jpeg");
  min-height: 60vh;
}
/* End of Hero */
</style>