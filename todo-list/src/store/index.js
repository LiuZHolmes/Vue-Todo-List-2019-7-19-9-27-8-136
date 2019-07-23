import { SET_LEVEL, ADD_ITEM, SET_CHECKED, SET_INDEX} from "./mutation-types";
import { GET_TODO } from "./action-types"
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const axios = require("axios");

export default new Vuex.Store({
  state: {
    level: 'all',
    index: 0,
    items: [
    ]
  },
  mutations: {
    [ADD_ITEM](state, payload) {
      state.items.push({
        text: payload,
        checked: false,
        id: state.index
      });
      state.index++;
    },
    [SET_LEVEL](state, payload) {
      state.level = payload;
    },
    [SET_CHECKED](state, payload) {
      state.items[payload.index].checked = payload.checked;
    },
    [SET_INDEX](state,payload) {
      state.index = payload;
    },
    [GET_TODO](state) {
      axios
        .get('http://localhost:3001/todos')
        .then(res => {
          state.items = res.data;
        })
        .catch(error => {
          alert(error);
        });
    }
  },
  actions: {
    [GET_TODO] (context) {
      context.commit(GET_TODO);
    }
  },
  getters: {
    getItems: state => {
      return state.items
    }
  }
})