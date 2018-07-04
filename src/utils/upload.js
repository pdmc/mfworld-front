/**
 * 常用函数库插件
 */
require('qiniu-js/dist/qiniu.js');
var Upload = {};
Upload.install = function (Vue, options) {


    // 4. 添加事例方法
    //数字转成汉字对应
    Vue.prototype.$upload = (option, callback) => {
            var that = this;
            var uploader = Qiniu.uploader({
                runtimes: 'html5,flash,html4',      // 上传模式，依次退化
                browse_button: option.browse_button,         // 上传选择的点选按钮，必需
                // 在初始化时，uptoken，uptoken_url，uptoken_func三个参数中必须有一个被设置
                // 切如果提供了多个，其优先级为uptoken > uptoken_url > uptoken_func
                // 其中uptoken是直接提供上传凭证，uptoken_url是提供了获取上传凭证的地址，如果需要定制获取uptoken的过程则可以设置uptoken_func
                uptoken : option.uptoken, // uptoken是上传凭证，由其他程序生成
                //uptoken_url: '/uptoken',         // Ajax请求uptoken的Url，强烈建议设置（服务端提供）
                // uptoken_func: function(){    // 在需要获取uptoken时，该方法会被调用

                // },
                multi_selection: false,     // 设置一次只能选择一个文件
                get_new_uptoken: true,             // 设置上传文件的时候是否每次都重新获取新的uptoken
                // downtoken_url: '/downtoken',
                // Ajax请求downToken的Url，私有空间时使用，JS-SDK将向该地址POST文件的key和domain，服务端返回的JSON必须包含url字段，url值为该文件的下载地址
                unique_names: false,              // 默认false，key为文件名。若开启该选项，JS-SDK会为每个文件自动生成key（文件名）
                save_key: false,                  // 默认false。若在服务端生成uptoken的上传策略中指定了sava_key，则开启，SDK在前端将不对key进行任何处理
                domain: option.domain,     // bucket域名，下载资源时用到，必需
                container: option.container,             // 上传区域DOM ID，默认是browser_button的父元素
                max_file_size: option.max_file_size,             // 最大文件体积限制
                flash_swf_url: 'path/of/plupload/Moxie.swf',  //引入flash，相对路径
                max_retries: 3,                     // 上传失败最大重试次数
                dragdrop: false,                     // 开启可拖曳上传
                drop_element: 'container',          // 拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                chunk_size: '4mb',                  // 分块上传时，每块的体积
                auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
                //x_vars : {
                //    查看自定义变量
                //    'time' : function(up,file) {
                //        var time = (new Date()).getTime();
                        // do something with 'time'
                //        return time;
                //    },
                //    'size' : function(up,file) {
                //        var size = file.size;
                        // do something with 'size'
                //        return size;
                //    }
                //},
                // 可以使用该参数来限制上传文件的类型，大小等，该参数以对象的形式传入，它包括三个属性：
                filters : option.filters,
                init: {
                    'FilesAdded': function(up, files) {
                        plupload.each(files, function(file) {
                            // 文件添加进队列后，处理相关的事情
                        });
                    },
                    'BeforeUpload': function(up, file) {
                         // 每个文件上传前，处理相关的事情
                        var loading = weui.loading('上传中...', {
                                className: 'custom-classname'
                            });
                    },
                    'UploadProgress': function(up, file) {
                         // 每个文件上传时，处理相关的事情
                        // var loading = weui.loading('上传中' + file.percent, {
                        //         className: 'custom-classname'
                        //     });
                        // loading.hide();
                        //  console.log(file.percent)
                    },
                    'FileUploaded': function(up, file, info) {
                         // 每个文件上传成功后，处理相关的事情
                         // 其中info是文件上传成功后，服务端返回的json，形式如：
                         // {
                         //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                         //    "key": "gogopher.jpg"
                         //  }
                        var loading = weui.loading('上传中...', {
                                className: 'custom-classname'
                            }).hide();
                         // 查看简单反馈
                        var domain = up.getOption('domain');
                        var res = JSON.parse(info.response);
                        var url = domain +"/"+ res.key; //获取上传成功后的文件的Url

                        callback(up, file, url);
                    },
                    'Error': function(up, err, errTip) {
                         //上传出错时，处理相关的事情
                         console.log(err)
                         console.log(errTip)
                         //that.$alert('上传提示!', errTip)
                         weui.alert(errTip);
                    },
                    'UploadComplete': function() {
                         //队列文件处理完毕后，处理相关的事情
                    },
                    'Key': function(up, file) {
                      // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                      // 该配置必须要在unique_names: false，save_key: false时才生效
                        var myDate = new Date();
                        var date = myDate.getFullYear() + '/' +  (myDate.getMonth() + 1) + '/' + myDate.getDate(); 
                        var upFileName = file.name;
                        var index1=upFileName.lastIndexOf(".");
                        var index2=upFileName.length;
                        var suffix=upFileName.substring(index1+1,index2);//后缀名
                        var key = date + '/' + Date.parse(new Date()) + '.' + suffix;
                        return key
                    }
                }
            });
            return uploader;
            // domain为七牛空间对应的域名，选择某个空间后，可通过 空间设置->基本设置->域名设置 查看获取
            // uploader为一个plupload对象，继承了所有plupload的方法
    }
}
module.exports = Upload;