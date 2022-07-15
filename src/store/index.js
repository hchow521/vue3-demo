import { createStore } from 'vuex'
import { isEqual } from 'lodash'
export default createStore({
  state: {
    pages: [],
    history: [],
    showTeleport: false,
    menuShow: true,
    tabs: {
    }
  },
  mutations: {
    SET_LIST({ tabs }, obj) {
      if (tabs[obj.key]) {
        !tabs[obj.key].list.includes(obj.value) && tabs[obj.key].list.unshift(obj.value)
        tabs[obj.key].id = obj.value
      } else {
        tabs[obj.key] = {
          list: [obj.value],
          id: obj.value
        }
      }
    },
    ADD_PAGE({ pages }, payload) {
      if (!pages.some(page => isEqual(page, payload))) {
        pages.push(payload)
      }
    },
    ADD_HISTORY({ history }, payload) {
      if (!history.some(val => isEqual(val,payload))) {
        history.push(payload)
      }
    },
    DEL_HISTORY({ history }, payload) {
      const index = history.findIndex(val => isEqual(val,payload))
      if (index > -1) {
        history.splice(index, 1)
      }
    },
    SET_TELEPORT(state, payload) {
      state.showTeleport = payload
    },
    TOGGLE_MENU(state) {
      state.menuShow = !state.menuShow
    }
  }
})