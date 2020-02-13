<template>
  <article class="service">
    <span v-html="service.icon"></span>
    <h6>{{service.title}}</h6>
    <p>{{service.info}}</p>
  </article>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  props: ["service"],
  computed: {
    // ...mapGetters(["getRooms"])
  },
  created() {
    this.$store.dispatch("setRooms");
  }
};
</script>

<style scoped>
.service {
  background: #fff;
  padding: 1.5rem;
  transition: all 0.3s linear;
  cursor: pointer;
}
.service:hover {
  box-shadow: 0px 0px 5px #555;
}
.service span {
  display: inline-block;
  color: var(--primaryColor);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.services h6 {
  letter-spacing: var(--mainSpacing);
}
.services p {
  width: 80%;
  margin: 0 auto;
}
</style>