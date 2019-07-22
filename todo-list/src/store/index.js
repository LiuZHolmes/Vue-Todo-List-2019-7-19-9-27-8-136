import { SET_LEVEL, ADD_ITEM } from "./mutation-types";
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      level: 'all',
      items: [
        {
          text: "Hello world",
          checked: false,
          editing: false,
          hovering: false
        }
      ]
    },
    mutations: {
      [ADD_ITEM] (state,payload) {
        state.items.push({
            text: payload,
            checked: false,
            editing: false,
            hovering: false
          });
      },
      [SET_LEVEL] (state,payload) {
        state.level = payload;
      }
    }
  })