import * as types from './mutation-types'

// Mutation 裡面的方法必須是同步的
const mutations = {
    [types.INCREMENT] (state) {
        state.count++
    },

    [types.ADD] (state, value) {
        state.count += value
    }
};

export default mutations
