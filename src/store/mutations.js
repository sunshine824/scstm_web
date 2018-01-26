import * as types from './mutation-types'

const mutations = {
  [types.SET_LOADING_STATE](state, flag) {
    state.loading = flag
  }
}

export default mutations
