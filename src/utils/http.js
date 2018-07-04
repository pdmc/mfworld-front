/**
 * http Ajax 请求插件封装
 */
var Http = {};
Http.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.$et = function () {
        // 逻辑..
    },
    // 2. 添加全局资源
    Vue.directive('my-direive', {
        bind (el, binding, vnode, oldVnode) {
        // 逻辑...
        }
    }),
    //登录信息
    Vue.prototype.$accessToken = () => {
        var accessToken = window.sessionStorage.getItem('accessToken');
        if(accessToken == null){
            accessToken = '';
        }
        return  accessToken;
    },
    Vue.prototype.$userInfo = () => {
        return JSON.parse(window.sessionStorage.getItem('userInfo'));
    },
    Vue.prototype.$userAuth = () => {
        return JSON.parse(window.sessionStorage.getItem('userAuth'));
    },
    // 3. 注入组件
    Vue.mixin({
        created: function () {
            //配置axios
            // var instance = this.$axios.create({
            //     baseURL:'https://star.yinxiaolong.greencheng.com/'
            // });
            //this.$axios.defaults.baseURL = window.location.protocol + '//' + window.location.hostname;
            this.$axios.defaults.baseURL = options.config.API_HOST;
            //this.$axios.defaults.headers.common['Author'] = 'adfadf';
            //设置自定义header

            //this.$axios.defaults.headers.sign = this.$accessToken;
            //this.$axios.defaults.headers.common = {'access-token': window.sessionStorage.getItem('accessToken')};
            this.$axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            this.$axios.defaults.timeout = 30000;
        },
        methods: {
            $Request: function(method, url, data, headers, callback, isLoding){
                var that = this;
                var isLoding = arguments[2] === false ? false : true;
                if(isLoding){
                    var loading = weui.loading('loading', {
                        className: 'custom-classname'
                    });
                }
                //拼接heder
                var header = this.$setHeader();
                for(var i in headers){
                    header[i] = headers[i];
                }
                console.log(header);
                var config = {
                        //请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
                        url: url,
                        method: method, // default
                        // 请求头信息
                        headers: header,
                        //parameter参数
                        params: {
                            ID: 12345
                        },
                        //post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
                        data: data, 
                        //设置超时时间
                        timeout: 10000000,
                    };
                    this.$axios.request(config).then(function (response) {
                        if(isLoding){
                            loading.hide();
                        }
                        that.$Exception(response, callback);
                    }).catch(function (error) {
                        loading.hide();
                        that.$alert(error.response.data.message, '错误提示！');
                        console.log(error);
                        return false;
                    });

            },
            //ajax get请求
            $Get: function (url, callback, isLoding) {
            	
                var that = this;
                var isLoding = arguments[2] === false ? false : true;
                if(isLoding){
                    var loading = weui.loading('loading', {
                        className: 'custom-classname'
                    });
                }
                var result = null;
                this.$axios.get(url, 
             
                    // {
                    //     timeout: 5000,
                    //    headers: this.$setHeader(),
                    // },
                )
				.then(function (response) {
					if(isLoding){
						loading.hide();
					}
					
					that.$Exception(response, callback);
				})
				// .catch(function (error) {
				// 	// alert(error);
				// 	// console.log(error);
				// 	that.$alert(error.response.data.message, '错误提示！');
				// });
                return result;
            },
            //POST请求
            $Post: function(url, data, callback, isLoding){
                var that = this;
                //加载动画
                var isLoding = arguments[2] === false ? false : true;
                if(isLoding){
                    var loading = weui.loading('loading', {
                        className: 'custom-classname'
                    });
                }
                var result = null;
                this.$axios.post(
                    url,
                    options.qs.stringify(data), 
                    // {
                    //     timeout: 5000,
                    //    headers: this.$setHeader(),
                    // }
                ).then(function (response) {
                
                    if(isLoding){
                        loading.hide();
                    }
                    that.$Exception(response, callback);
                }).catch(function (error) {
                
                
                    loading.hide();
                    that.$alert(error.response.data.message, '错误提示！');
                    console.log(error);
                    return false;
                });
                
            },
            $Delete: function(url, data, callback, isLoding){
                var that = this;
                //加载动画
                 var isLoding = arguments[2] === false ? false : true;
                 if(isLoding){
                     var loading = weui.loading('loading', {
                         className: 'custom-classname'
                     });
                }
                var header=this.$setHeader();
                var result = null;
                this.$axios.delete(
                    url,
                    // {headers: header},
                    {
                        timeout: 5000,
                        headers: header,
                  
                    },
                    options.qs.stringify(data), 
                    
                    // {
                    //     timeout: 5000,
                    //     headers: header,
                  
                    // },
                  
                ).then(function (response) {
                    if(isLoding){
                        loading.hide();
                    }
                    that.$Exception(response, callback);
                }).catch(function (error) {
                    loading.hide();
                    // that.$alert(error, '错误提示11！');
                    that.$Exception(response, callback);
                    return false;
                });
                
            },
            $Put: function(url, data, callback, isLoding){
                var that = this;
                //加载动画
                var isLoding = arguments[2] === false ? false : true;
                if(isLoding){
                    var loading = weui.loading('loading', {
                        className: 'custom-classname'
                    });
                }
                var result = null;
                this.$axios.put(
                    url,
                    options.qs.stringify(data),
                  
                    {
                       timeout: 5000,
                       headers: this.$setHeader(),
                    }
                  
                ).then(function (response) {
                
                    if(isLoding){
                        loading.hide();
                    }
                    that.$Exception(response, callback);
                }).catch(function (error) {
                
                
                    loading.hide();
                    that.$alert(error.response.data.message, '错误提示11！');
                    console.log(error);
                    return false;
                });
                
            },
            //异常处理方法
            $Exception: function(response, callback){
                console.log(response);
                return callback(response.data); 
                // if(response.status == 200){ //请求成功
                	
                //     return callback(response.data.data); 
                // } else if(response.status == 201){ //请求成功
                //     return callback(response.data.data); 
                // } else if(response.status == 204){ //请求成功
                //     return callback(response.data.data); 
                // }else if(response.status == 209){
                //     return callback(response.data.data); //请求成功
                // }else if(response.status == 400){ //参数错误
                // 	return callback(response.data.data); 
                //     this.$alert(response.data.message, '错误提示3！');
                //     return false;
                // }else if(response.status == 401){ //需要登录
                //     //清除本地信息
                    
                //     window.sessionStorage.removeItem('userInfo');
                //     window.sessionStorage.removeItem('accessToken');
                    
                //     return callback(response.data.data); 
                //     this.$alert(response.data.message, '错误提示2！');
                //     //this.$router.push({path: '/login'})
                //     return false;
                // }else if(response.status == 403){ //需要登录
                //     return callback(response.data.data); 
                // }else if(response.status == 210){
                //     return callback(response.data); //登录失败
                // }
            },
            $setHeader: function(){
                var accessToken = this.$accessToken();
               //加密算法
                // var validate = new Array();
                // validate.push(accessToken);
                // validate.push(options.config.APP_TYPE);
                // validate.push(options.config.DEVICE_CODE);
                // validate.push(options.config.SECRET);
                // validate.push(options.config.VERSION);
                // var auth = validate.join('_');
                // auth = options.md5(auth);
                // auth = auth.substring(5, 30);
                // var sign = options.md5(options.config.SALT + '_' + auth);
                //发送header头
                var headers = {
                    // 'App-Type': options.config.APP_TYPE,
                    // 'Device-Code': "sssssss",
                    // 'Sign': sign,
                    'Access-Token': accessToken,
                    // 'Version': options.config.VERSION,
                    
                
                }
                return headers;
            },      
        }
    })

}
module.exports = Http;
