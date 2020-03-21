import * as types from './mutation-types'

const increment = function ({commit}) {
    commit(types.INCREMENT)
};

const add = function ({commit}, value) {
    console.log(value)
    commit(types.ADD, value)
};

const actions = {
    increment,
    add,
};

export default actions