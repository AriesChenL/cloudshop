const state = {
    username: ''
}
const getters = {
    isLogin(state) {
        return state.id !== 0
    }
}
const actions = {}
const mutations = {
    setUser(state, user) {
        state.username = user.username
    },
    logout (state) {
        state.username = ''
    }

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
