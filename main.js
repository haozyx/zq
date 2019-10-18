import Vue from 'vue'
import App from './App'

import Request from './plugins/request/js/index'
Vue.prototype.$http = Request()

Vue.prototype.webUrl = 'https://yohaoyun.com/ycxq/m/'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
