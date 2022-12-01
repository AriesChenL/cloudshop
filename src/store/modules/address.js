const state = {
    address: [
        {
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
            isDefault: true,
        },
        {
            id: '2',
            name: '李四',
            tel: '1310000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
    ],
}
const getters = {
    getAddList(state) {
        return state.address;
    },
    getMaxId(state){
        return state.address.length;
    }
}
const actions = {}
const mutations = {
    setAddress(state, address) {
        state.address.push(address)
    },
    updateAddress(state, address) {
        state.address[address.id-1].name = address.name
        state.address[address.id-1].tel = address.tel
        state.address[address.id-1].address = address.address
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
