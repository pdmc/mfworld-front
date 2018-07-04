/**
 * 全局过滤器
 */
 // 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
export function formatDate(time,format) {
    if(parseInt(time) == 0 || isNaN(parseInt(time))){
       return '';
    }
    var times = new Date(parseInt(time + '000'));
    var year = times.getFullYear().toString(); 
    var month = times.getMonth()+1; 
    var day = times.getDate(); 
    var hour = times.getHours(); 
    var minute = times.getMinutes(); 
    var second = times.getSeconds(); 
    var o = {   
        "M+" : month,                 //月份   
        "d+" : day,                    //日   
        "h+" : hour,                   //小时   
        "m+" : minute,                 //分   
        "s+" : second                //秒   
        // "q+" : Math.floor((date.getMonth()+3)/3), //季度   
        // "S"  : date.getMilliseconds()             //毫秒   
      };   
    if(/(y+)/.test(format)) { 
       format=format.replace(RegExp.$1, year.substr(4 - RegExp.$1.length));  
    } 
    for(var k in o)   
    if(new RegExp("("+ k +")").test(format)){  
        format = format.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
    }  
    return format;
}
export function gender(gender){
    gender = parseInt(gender);
    var list = ['', '男', '女'];
    return list[gender];
}
export function numberToChina(num){
    var china = "零,一,二,三,四,五,六,七,八,九,十";
    var chinaArray = china.split(',');
    return chinaArray[num];
}