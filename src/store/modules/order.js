const state = {
    orderList:[
        // {
        //     id: Number,
        //     createTime: String,
        //     isPay: String,
        //     isDel: String,
        //     num: Number,
        //     payPrice: Number
        //     otherInfo: String,
        //     address: {}
        // },
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
    removeOrder(state, id){
        state.orderList.splice(id, 1)
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
