/**
 * 常用函数库插件
 */
var Library = {};
Library.install = function (Vue, options) {
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
    // 3. 注入组件
    Vue.mixin({
        created: function () {

        },
        methods: {
            // $getAccessToken: function(){
            //     return  window.sessionStorage.getItem('accessToken');
            // },
            // $getUserInfo: function(){
            //     return  JSON.parse(sessionStorage.getItem('userInfo'));
            // },
        }
    })
    //弹窗提示
    Vue.prototype.$alert = function (title, callback){ 
        weui.alert(title, callback);
    },
    //确认弹窗提示
    Vue.prototype.$confirm = function (content, confirm, cancel){ 
            weui.confirm(content, confirm, cancel);
    },
    // 4. 添加事例方法
    //数字转成汉字对应
    Vue.prototype.$numberToChina = function (num) {
        var china = "零,一,二,三,四,五,六,七,八,九,十";
        var chinaArray = china.split(',');
        return chinaArray[num];
    },
    //一维数组去重
    Vue.prototype.$arrayUnique = function(arr) {
        var result = [], hash = {};
        for (var i = 0, elem; (elem = arr[i]) != null; i++) {
            if (!hash[elem]) {
                result.push(elem);
                hash[elem] = true;
            }
        }
        return result;            
    },
            //在url中添加参数
    Vue.prototype.$setUrlParam = function(url, param, value){
        var uri = url.split('?');
        (uri.length != 2) ? query = '' : query = uri[1];
        var host = uri[0];
        var p = new RegExp("(^|&"+param+")=[^&]*");
        if(p.test(query)){
            query = query.replace(p,"$1="+value);
            host  =  host + '?'+query;
        }else{
            if(query == ''){
                host = host + '?'+param+'='+value;
            }else{
                host  = host + '?'+query+'&'+param+'='+value;
            }
        }  
        return host;  
    },
    //获取url参数
    Vue.prototype.$getUrlParam = function (param) { 
        var reg = new RegExp('(^|&)' + param + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    },
    Vue.prototype.$parseURL =  function(url) {  
        var a =  document.createElement('a');  
        a.href = url;  
        return {  
            source: url,  
            protocol: a.protocol.replace(':',''),  
            host: a.hostname,  
            port: a.port,  
            query: a.search,  
            params: (function(){  
             var ret = {},  
                 seg = a.search.replace(/^\?/,'').split('&'),  
                 len = seg.length, i = 0, s;  
             for (;i<len;i++) {  
                 if (!seg[i]) { continue; }  
                 s = seg[i].split('=');  
                 ret[s[0]] = s[1];  
             }  
            }),
            file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
            hash: a.hash.replace('#',''),
            path: a.pathname.replace(/^([^\/])/,'/$1'),
            relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
            segments: a.pathname.replace(/^\//,'').split('/')
        }
    },
    //滚动条在y轴上的滚动距离
    Vue.prototype.$getScrollTop = function(){
　　    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
　　    if(document.body){
    　　　　bodyScrollTop = document.body.scrollTop;
    　　}
    　　if(document.documentElement){
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    },
    //获取文档的总高度
    Vue.prototype.$getScrollHeight = function(){
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if(document.body){
            bodyScrollHeight = document.body.scrollHeight;
        }
        if(document.documentElement){
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    },
    //浏览器窗口的高度
    Vue.prototype.$getWindowHeight = function(){
        var windowHeight = 0;
        if(document.compatMode == "CSS1Compat"){
            windowHeight = document.documentElement.clientHeight;
        }else{
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    },
    //判断对象是否为空
    Vue.prototype.$isEmptyObject = function (obj){  
        var i;  
        for (i in obj){  
            return !1;
        }  
        return !0  
    },
    //判断对象是否为空
    Vue.prototype.$empty = function (value){
        var type;
        if(value == null) { // 等同于 value === undefined || value === null
            return true;
        }
        type = Object.prototype.toString.call(value).slice(8, -1);
        switch(type){
            case 'String':
                if(value.trim().length == 0){
                    return true; 
                }
            case 'Array':
                return !value.length;
            case 'Object':
                for(var k in value){
                    return false;
                } 
            default:
                return false; // 其他对象均视作非空
        }

    },
    Vue.prototype.$uEditor = function (id){
        return UE.getEditor(id);
    }, 
 
    Vue.prototype.$KindEditor = function (id){ 
          
        var options = {
                height: '400px',
                themeType: 'simple',
                basePath: '/static/lib/kindeditor/',
                themesPath: '/static/lib/kindeditor/themes/',
                pluginsPath: '/static/lib/kindeditor/plugins/',
                cssPath : '/static/lib/kindeditor/themes/default/default.css',
                filterMode : true,
                autoHeightMode: true,
                filePostName: 'images',
                extraFileUploadParams:{
                    'type' : 'editor',
                },
                items:[
                    'source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'code', 'cut', 'copy', 'paste',
                    'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
                    'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
                    'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
                    'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
                    'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'multiimage',
                    'insertfile', 'table', 'hr', 'pagebreak',
                    'anchor', 'link', 'unlink', '|'
                ],
                // afterUpload: function(url){
                //     console.log(url)
                //     alert(url)
                // },  
                uploadJson: 'http://api.hss.zhiheworld.com/common/upload/images',
        };
        var editor = KindEditor.create(id , options);
        return editor; 
    } 
}
module.exports = Library;