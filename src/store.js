import Vuex from "vuex";
import { mainData } from "./data.js";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rooms: [],
    sortedRooms: [],
    featuredrooms: [],
    loading: true,
    room: [],
    type: "all",
    capacity: 1,
    price: 100,
    minPrice: 0,
    maxPrice: 600,
    size: 100,
    breakfast: false,
    pets: false
  },
  mutations: {
    SET_ROOMS(state, tempItems) {
      state.rooms = tempItems;
      state.sortedRooms = tempItems;
      //   state.sortedRooms = state.rooms;
      //   console.log(tempItems);
      let maxPrice = Math.max(...state.rooms.map(item => item.price));
      let maxSize = Math.max(...state.rooms.map(item => item.size));
      state.price = maxPrice;
      state.maxPrice = maxPrice;
      state.maxSize = maxSize;
    },
    SET_FEATURED(state, tempItems) {
      let featuredRooms = tempItems.filter(room => room.featured === true);
      state.featuredrooms = featuredRooms;
    },
    SET_ROOM(state, room) {
      state.room = room;
    },
    SET_TYPE(state, value) {
      state.type = value;
    },
    DO_FILTER(state, rooms) {
      state.sortedRooms = rooms;
    }
  },
  actions: {
    setRooms({ commit }) {
      let tempItems = mainData.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => {
          return image.fields.file.url;
        });

        let room = { ...item.fields, images, id };

        return room;
      });
      commit("SET_ROOMS", tempItems);
      commit("SET_FEATURED", tempItems);
    },
    setRoom({ commit }, id) {
      let tempItems = mainData.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => {
          return image.fields.file.url;
        });

        let room = { ...item.fields, images, id };

        return room;
      });
      let tempRooms = [...tempItems];
      const room = tempRooms.find(room => room.id === id);
      commit("SET_ROOM", room);
    },
    setType({ commit }, type) {
      commit("SET_TYPE", type);
      let tempItems = mainData.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => {
          return image.fields.file.url;
        });

        let room = { ...item.fields, images, id };

        return room;
      });

      let tempRooms = [...tempItems];
      if (type !== "all") {
        tempRooms = tempRooms.filter(room => room.type === type);
      }

      commit("DO_FILTER", tempRooms);
    },
    setCap({ commit, getters }, cap) {
      let tempItems = mainData.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => {
          return image.fields.file.url;
        });

        let room = { ...item.fields, images, id };

        return room;
      });

      let tempRooms = [...tempItems];

      let capacity = parseInt(cap);
      let price = getters.getPrice;
      let size = getters.getSize;

      if (capacity != 1) {
        tempRooms = tempRooms.filter(
          room =>
            room.capacity >= capacity &&
            room.price <= price &&
            room.size <= size
        );
      }
      commit("DO_FILTER", tempRooms);
    },
    setPrice({ commit }, pri) {
      let tempItems = mainData.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => {
          return image.fields.file.url;
        });

        let room = { ...item.fields, images, id };

        return room;
      });

      let tempRooms = [...tempItems];

      let price = parseInt(pri);

      tempRooms = tempRooms.filter(room => room.price <= price);

      commit("DO_FILTER", tempRooms);
    },
    setSize({ commit }, siz) {
      let tempItems = mainData.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => {
          return image.fields.file.url;
        });

        let room = { ...item.fields, images, id };

        return room;
      });

      let tempRooms = [...tempItems];

      let size = parseInt(siz);

      tempRooms = tempRooms.filter(room => room.size <= size);

      commit("DO_FILTER", tempRooms);
    }
  },
  getters: {
    getRooms: state => {
      return state.rooms;
    },
    getfeaturedRooms: state => {
      return state.featuredrooms;
    },
    getRoom: state => {
      return state.room;
    },
    getType: state => {
      return state.type;
    },
    getCap: state => {
      return state.capacity;
    },
    getsortedRooms: state => {
      return state.sortedRooms;
    },
    getPrice: state => {
      return state.price;
    },
    getSize: state => {
      return state.size;
    }
  }
});
