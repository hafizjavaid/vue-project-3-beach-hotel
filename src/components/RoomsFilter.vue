<template>
  <section class="filter-container">
    <Title :title="title"></Title>
    <form action class="filter-form">
      <!-- Set type -->
      <div class="form-group">
        <label for="type">room type</label>
        <select name="type" id="type" class="form-control" @change="handleType" :value="getType">
          <option value="all">All</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="family">Family</option>
          <option value="presidential">Presidential</option>
        </select>
      </div>
      <!-- Set type -->
      <!-- Set Guest -->
      <div class="form-group">
        <label for="capacity">Guests</label>
        <select
          name="capacity"
          id="capacity"
          class="form-control"
          @change="handleCap"
          :value="getCap"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="10">10</option>
        </select>
      </div>
      <!-- Set Guest -->
      <!-- Set Price -->
      <!-- <div class="form-group">
        <label for="price">Price {{getPrice}}</label>
        <input
          type="range"
          name="price"
          :min="gminPrice"
          :max="gmaxPrice"
          :value="getPrice"
          @change="handlePri"
          class="form-control"
        />
      </div>-->
      <div class="form-group">
        <label for="price">Price</label>
        <select name="price" id="price" class="form-control" @change="handlePri" :value="getPrice">
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
        </select>
      </div>
      <!-- Set Sizee -->
      <!-- <div class="form-group">
        <label for="size">Room Size</label>
        <div class="size-inputs">
          <input
            type="number"
            class="size-input"
            name="minSize"
            id="size"
            :value="getmiSize"
            @change="handleminSize"
          />
          <input
            type="number"
            class="size-input"
            name="maxSize"
            id="size"
            :value="getmaxSize"
            @change="handlemaxSize"
          />
        </div>
      </div>-->
      <div class="form-group">
        <label for="size">Size</label>
        <select name="size" id="size" class="form-control" @change="handleSize" :value="getSize">
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
          <option value="700">700</option>
          <option value="800">800</option>
          <option value="900">900</option>
          <option value="1000">1000</option>
        </select>
      </div>
      <!-- Set Sizee -->
    </form>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Title from "./Title.vue";
export default {
  props: ["rooms"],
  data() {
    return {
      title: "searh rooms",
      trooms: this.rooms
    };
  },
  components: {
    Title
  },
  methods: {
    handleType(event) {
      this.$store.dispatch("setType", event.target.value);

      // this.$store.dispatch("doFilter", this.rooms, event.target.value);
      // alert(this.rooms);
    },
    handleCap(event) {
      this.$store.dispatch("setCap", event.target.value);
    },
    handlePri(event) {
      this.$store.dispatch("setPrice", event.target.value);
    },
    handleSize(event) {
      this.$store.dispatch("setSize", event.target.value);
    }
  },
  computed: {
    ...mapGetters(["getType", "getRooms", "getCap", "getPrice", "getSize"])
  },
  actions: {}
};
</script>

<style scoped>
/*  rooms fitler*/
.filter-container {
  padding: 5rem 0;
}
.filter-form {
  width: 60vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 40px;
}
.form-group {
  text-transform: capitalize;
}
.form-group label {
  display: block;
  letter-spacing: var(--mainSpacing);
  margin-bottom: 0.5rem;
}
.form-control {
  width: 100%;
  background: transparent;
  font-size: 1rem;
}
.size-inputs {
  display: flex;
}
.size-input {
  width: 40%;
  padding: 0.2rem;
  border: 1px solid var(--mainBlack);
  border-radius: 0.3rem;
  margin-right: 0.3rem;
}
.single-extra label {
  display: inline-block;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}
@media screen and (min-width: 776px) {
  .filter-form {
    width: 70vw;
  }
}
@media screen and (min-width: 992px) {
  .filter-form {
    width: 95vw;
    max-width: 1170px;
  }
}
/* end of rooms fitler*/
</style>