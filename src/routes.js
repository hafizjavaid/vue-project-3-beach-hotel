import Home from "./components/pages/Home.vue";
import Rooms from "./components/pages/Rooms.vue";
import Singleroom from "./components/pages/Singleroom.vue";
import Default from "./components/pages/Default.vue";
import Write from "./components/pages/Write.vue";

export const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/rooms",
    component: Rooms
  },
  {
    path: "/rooms/:id",
    component: Singleroom
  },

  {
    path: "/write",
    component: Write
  },
  {
    path: "*",
    component: Default
  }
];
