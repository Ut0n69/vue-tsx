import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export enum Types {
  ADD_ITEM = 'add_item',
  DELETE_ITEM = 'delete_item'
}

export default new Vuex.Store({
  state: {
    list: ['Milk', 'Cocoa', 'Coffee']
  },
  mutations: {
    [Types.ADD_ITEM]: (state, item) => {
      state.list.unshift(item)
    },
    [Types.DELETE_ITEM]: (state, index) => {
      state.list.splice(index, 1)
    }
  }
})
