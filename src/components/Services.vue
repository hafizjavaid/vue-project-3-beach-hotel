<template>
  <div class="services">
    <Title :title="title"></Title>
    <section class="services">
      <div class="services-center">
        <Service v-for="service in services" :key="service.id" :service="service"></Service>
      </div>
    </section>
  </div>
</template>

<script>
import Title from "./Title.vue";
import Service from "./Service.vue";
export default {
  components: {
    Title,
    Service
  },
  data() {
    return {
      title: "services",
      services: [
        {
          icon: `<i class="fas fa-cocktail"></i>`,
          id: 1,
          title: "Free cocktails",
          info:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, praesentium."
        },
        {
          icon: `<i class="fas fa-hiking"></i>`,
          title: "Endless Hiking",
          id: 2,
          info:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, praesentium."
        },
        {
          icon: `<i class="fas fa-shuttle-van"></i>`,
          title: "Free shuttle",
          id: 3,
          info:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, praesentium."
        },
        {
          icon: `<i class="fas fa-beer"></i>`,
          title: "Stronng Beer",
          id: 4,
          info:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, praesentium."
        }
      ]
    };
  }
};
</script>

<style scoped>
.services {
  padding: 5rem 0;
}
.services {
  background: var(--darkGrey);
  text-align: center;
}
.services-center {
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 50px;
}
@media screen and (min-width: 992px) {
  .services-center {
    width: 95vw;
    max-width: 1170px;
  }
}

@media screen and (min-width: 1200px) {
  .services p {
    width: 100%;
  }
}
</style>