import { SET_LEVEL, ADD_ITEM, SET_CHECKED, SET_INDEX } from "./mutation-types";
import { GET_TODO } from "./action-types";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const axios = require("axios");

export default new Vuex.Store({
  state: {
    level: "all",
    index: 0,
    items: []
  },
  mutations: {
    [SET_LEVEL](state, payload) {
      state.level = payload;
    },
    [SET_CHECKED](state, payload) {
      state.items[payload.index].checked = payload.checked;
    },
    [SET_INDEX](state, payload) {
      state.index = payload;
    },
    [GET_TODO](state,payload) {
      state.items.push(...payload);
      state.index = state.items.length + 1;
    }
  },
  actions: {
    [GET_TODO](context) {
      axios
        .get("http://localhost:3001/todos")
        .then(res => {
          context.commit(GET_TODO,res.data);
        })
        .catch(error => {
          alert(error);
        });
    },
    [ADD_ITEM]({commit,state} , payload) {
      const newItem = {
        text: payload,
        checked: false,
        id: state.index
      };
      return axios
        .post("http://localhost:3001/todos", newItem)
        .then(() => {
          commit(GET_TODO,[newItem]);
        })
        .catch(error => {
          alert(error);
        });
    }
  }
});
