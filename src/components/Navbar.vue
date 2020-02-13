<template>
  <nav class="navbar">
    <div class="nav-center">
      <div class="nav-header">
        <router-link to="/">
          <h1>Beach Resort</h1>
        </router-link>
        <button class="nav-btn" type="button" @click="handleToggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <ul :class="isOpen ? 'nav-links show-nav': 'nav-links'">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/rooms">Rooms</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// import imag from "../images/logo.svg";
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    handleToggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.75rem 2rem;
  background: var(--offWhite);
  z-index: 1;
}
.nav-header {
  display: flex;
  justify-content: space-between;
}
.nav-header h1 {
  color: black !important;
  border-bottom: none !important;
  font-size: 2em !important;
  line-height: 1;
  margin-bottom: 0 !important;
}
.nav-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}
.nav-icon {
  font-size: 1.5rem;
  color: var(--primaryColor);
}
.nav-links {
  height: 0;
  overflow: hidden;
  transition: var(--mainTransition);
  list-style-type: none;
}
.nav-links a {
  display: block;
  text-decoration: none !important;
  padding: 1rem 0;
  color: var(--mainBlack);
  transition: var(--mainTransition);
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: var(--mainSpacing);
}
.nav-links a:hover {
  color: var(--primaryColor);
}

.show-nav {
  height: 100px;
}
@media screen and (min-width: 768px) {
  .nav-btn {
    display: none;
  }
  .nav-center {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
  }
  .nav-links {
    height: auto;
    display: flex;
    margin-left: 4rem;
  }
  .nav-links a {
    margin: 0 1rem;
    padding: 0.5rem 0;
  }
}
/* end of navbar */
</style>