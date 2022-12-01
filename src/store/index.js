import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import shopcart from './modules/shopcart'
import address from './modules/address'
import order from "./modules/order";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        shopcart,
        address,
        order
    }
})
