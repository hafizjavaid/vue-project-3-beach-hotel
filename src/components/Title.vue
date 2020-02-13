<template>
  <div class="section-title">
    <h4>{{title}}</h4>
    <div></div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
/* Title */
.section-title {
  text-align: center;
  margin-bottom: 4rem;
}
.section-title h4 {
  font-size: 2rem;
  letter-spacing: var(--mainSpacing);
  text-transform: capitalize;
  margin-bottom: 1rem;
}
.section-title div {
  width: 5rem;
  height: 5px;
  margin: 0 auto;
  background: var(--primaryColor);
}
/* end of Title */
</style>