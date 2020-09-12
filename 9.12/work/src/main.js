import Vue from 'vue'
import App from './App.vue'
import Moment from "moment"
Vue.config.productionTip = false

Vue.filter('formatTime', function(value) {
    return Moment(value).format("MM-DD HH:mm:ss")
})


new Vue({
    render: h => h(App),
}).$mount('#app')