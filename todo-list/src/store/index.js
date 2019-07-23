import {
  SET_LEVEL,
  ADD_ITEM,
  SET_CHECKED,
  SET_INDEX,
  GET_TODO,
  DELETE_ITEM,
  SET_TEXT
} from "./const-types";
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
      state.items[payload].checked = payload.checked;
    },
    [SET_INDEX](state, payload) {
      state.index = payload;
    },
    [GET_TODO](state, payload) {
      state.items.push(...payload);
      state.index = state.items.length;
    },
    [DELETE_ITEM](state,payload) {
      const index = state.items.findIndex(x => x.id === payload.id);
      Vue.set(state.items,index,payload);
    }
  },
  actions: {
    [GET_TODO](context) {
      axios
        .get("http://localhost:3001/todos")
        .then(res => {
          context.commit(GET_TODO, res.data);
        })
        .catch(error => {
          alert(error);
        });
    },
    [ADD_ITEM]({ commit, state }, payload) {
      const newItem = {
        id: state.index,
        text: payload,
        checked: false,
        status: "active"
      };
      axios
        .post("http://localhost:3001/todos", newItem)
        .then(() => {
          commit(GET_TODO, [newItem]);
        })
        .catch(error => {
          alert(error);
        });
    },
    [SET_CHECKED]({state},payload) {
      let newItem = state.items.filter(x => x.id === payload.id)[0];
      newItem.checked = payload.checked;
      axios
        .put("http://localhost:3001/todos/" + newItem.id, newItem)
        .then()
        .catch(error => {
          alert(error);
        });
    },
    [SET_TEXT]({state},payload) {
      let newItem = state.items.filter(x => x.id === payload.id)[0];
      newItem.text = payload.text;
      axios
        .put("http://localhost:3001/todos/" + newItem.id, newItem)
        .then()
        .catch(error => {
          alert(error);
        });
    },
    [DELETE_ITEM]({commit,state},payload) {
      let newItem = state.items.filter(x => x.id === payload.id)[0];
      newItem.status = "inactive";
      axios
        .put("http://localhost:3001/todos/" + newItem.id, newItem)
        .then( () => commit(DELETE_ITEM,newItem))
        .catch(error => {
          alert(error);
        });
    }
  },
  getters: {
    activeItems: state => {
      return state.items.filter(x => x.status === "active");
    }
  }
});
