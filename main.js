import Vue from 'vue'
import App from './App'


Vue.prototype.webUrl = 'https://zlhq123.cn/todozq/m/'
// Vue.prototype.webUrl = 'http://localhost:8085/todozq/m/'

Vue.prototype.getGlobalUser = function(){
	var userobj = uni.getStorageSync('zqglobalUser');
	if(userobj!=null && userobj!=''&&userobj!=undefined){
		return userobj;
	}else{
		return null;
	}
}


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
