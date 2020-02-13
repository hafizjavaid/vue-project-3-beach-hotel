import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes.js";
import store from "./store.js";
import ckEditor from "ckeditor4-vue";

Vue.use(ckEditor);

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
