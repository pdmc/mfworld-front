// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {store} from './store/store.js'

//ajax插件
import axios from 'axios';
//格式化ajax数据
import qs from 'qs';
//md5插件
import md5 from 'js-md5';
//配置文件
import * as config from './utils/config';
//复制粘贴邀请码
import VueClipboard from 'vue-clipboard2'
 
 
 


Vue.config.debug = true;
Vue.prototype.$axios = axios;
axios.defaults.withCredentials=true;

//ajax请求插件
import http from "./utils/http";
Vue.use(http, {qs: qs, md5: md5, config: config});
//复制粘贴
Vue.use(VueClipboard)

Vue.config.productionTip = false;

//var userInfo = window.sessionStorage.getItem('userInfo');


//全局守卫

router.beforeEach((to,form,next)=>{
      
//console.log(to.path.indexOf("?"))

//当前页面不是login 并且 没有token的情况下 执行
if(to.path =='/login' || to.path =='/' || to.path =='/register' ||to.path == "/forget_password" ){
				next()
}
/*else if(to.path == "/InviteFirend"&&(!sessionStorage.getItem('accessToken') || sessionStorage.getItem('accessToken')=='undefined')){   
	
	next({ path: '/register?'+store.state.code})
//	next({ path: '/register'})
		
		}*/
	else if ((to.path!='/login')&&(to.path != "/invitefirend")&&(to.path != "/resigter")&&(!sessionStorage.getItem('accessToken') || sessionStorage.getItem('accessToken')=='undefined')) {
		   mizhu.alert('温馨提示', '没有登陆请先登录');		   
           next({ path: '/login'})

	
       } else {
          next()

      }
	
	
})


/*router.beforeEach((to, from, next) => {//  '/'是登陆页面的路由
 if (to.path == '/login' || to.path =='/register') {
sessionStorage.removeItem('isLogin');
	next()
 }
 var user = JSON.parse(sessionStorage.getItem('isLogin'));
 if (!user && to.path != '/login') {
 	alert("没有登录，请登录")
  next({ path: '/login' })
 } else {
  next()
 }
})
     */ 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
