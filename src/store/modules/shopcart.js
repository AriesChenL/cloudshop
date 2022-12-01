const state = {
    carCountNum: 0
}
const getters = {

    getCarCountNum(state) {
        return state.carCountNum
    },
}

const actions = {}

const mutations = {

    addCarCountNum(state) {
        state.carCountNum++
    },
    reduceCarCountNum(state) {
        if (state.carCountNum !== 0) {
            state.carCountNum--
        }
    },
    reduceCarCountNumByNum(state, num) {
        if (state.carCountNum + num !== 0) {
            state.carCountNum -= num
        }
    },
    addCarCountNumByNum(state, num) {
        state.carCountNum += num

    },
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
