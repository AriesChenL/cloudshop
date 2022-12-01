const state = {
    orderList:[
        {
            id: 0,
            createTime: '',
            isPay: 'false',
            isDel: 'false',
            num: 0,
            payPrice: 0
        },
    ]
}
const getters = {
    getAddList(state) {
        return state.orderList;
    },
    getMaxId(state){
        return state.orderList.length-1
    }
}
const actions = {}
const mutations = {
    setOrder(state, order) {
        state.orderList.push(order)
    },
    updateAddress(state, order) {
        state.orderList[order.id].id = order.id
        state.orderList[order.id].isDel = order.isDel
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
