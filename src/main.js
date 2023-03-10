import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from "@/store";
import auth from './auth.js'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(auth)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
