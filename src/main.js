import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Toast from "./components/common/toast/index.js"
// import './mock/mock'

// Vue.use(Toast);

new Vue({
    el: '#app',
    render: h => h(App),
    router
})