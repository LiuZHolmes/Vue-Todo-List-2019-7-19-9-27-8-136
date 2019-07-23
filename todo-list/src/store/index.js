import { SET_LEVEL, ADD_ITEM, SET_CHECKED, SET_INDEX} from "./mutation-types";
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    level: 'all',
    index: 0,
    items: [
      {
        text: "Hello world",
        checked: false
      }
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
    }
  }
})