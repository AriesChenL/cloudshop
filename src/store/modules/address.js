const state = {
    defaultAddressId: 0,
    address: [
        {
            id: 0,
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        },
        {
            id: 1,
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
        return state.address.length-1;
    },
    getDefaultAddressId(state){
        state.address.forEach((addres, index)=>{
            if (addres.id == state.defaultAddressId){
                state.defaultAddressId = index
            }
        })

        return state.defaultAddressId
    },
    getDefaultAddress(state){
        return state.address[state.defaultAddressId]
    },
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
    setDefaultAddressId(state, defaultAddressId){
        state.defaultAddressId = defaultAddressId
    },
    removeAddress(state, id){
        if(id === state.defaultAddressId){
            state.defaultAddressId = 0
            state.address.splice(id, 1)
        }else {
            state.address.splice(id, 1)
        }
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
