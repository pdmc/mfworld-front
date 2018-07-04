<template>
   <div>
    <div class="main_box">
        <img src="../../static/img/indexBG.jpg" alt="">
        <div class="tab">
                <img src="../../static/img/back.png" alt="" @click="back()">
                <!-- <img  src="/static/img/close.18ce7f6.png" alt="">  -->
                <span >成就</span>                
        </div>
        <div class="acheiveContent">
           <div class="achieve_user">
                <img src="../../static/img/logo.jpg" alt="">
                <img src="../../static/img/man.png" alt="" v-if="type==0">
                <img src="../../static/img/girl.png" alt="" v-else>                    
            </div>
            <p class="your_name">{{userName}}</p>
            <!--<div class="share" @click="showShare()">-->
            	<!--<img  src="../../static/img/fenxiang.png" alt="" >-->
            	<!--<p>分享</p>-->
            <!--</div>-->
            
           <div id="myChart" style="width: 6.66rem; height: 8rem;margin:0 auto;color:#FFFFFF;"></div>   
           <div class="reveal">
               <p class="alllist">总场次：{{all}}</p>
               <p class="alllist">胜率：{{win}}%</p>
               <ul class="revealUl clearfix">
                   <li v-for="(tmp,index) in cate" :key="tmp.index">{{tmp.name}} : {{tmp.win_num}}</li>
               </ul>
           </div>
           <div class="winning">
               <div class="winning_item" v-for="(tmp,index) in task" :id="'a'+tmp.id" >
                   <p>{{tmp.name}}</p>
                   <div class="item_center">
                       <p>{{tmp.type==1?"连续":""}}获得{{tmp.name}}</p>
                       <p>能量+{{tmp.reward}}</p>
                   </div>
                   <p class="item_last">{{tmp.winnum}}/{{tmp.num}}</p>
               </div>
           </div>
        </div> 
        
    </div>
	<div class="hide_share" @click="closeShare()">
		<!--<div class="close_share" @click="closeShare()">X</div>-->
<!--		<ul class="share_list">
			<li><a href="#"><img src="../../static/img/share_facebook.png" alt="" /></a></li>
			<li><a href="#"><img src="../../static/img/share_steemit.png" alt="" /></a></li>
			<li><a href="#"><img src="../../static/img/share_twitter.png" alt="" /></a></li>
			<li @click="wxShare()"><a href="#"><img src="../../static/img/share_WeChat.png" alt="" /></a></li>
		</ul>		-->	
	</div>
   </div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/radar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
  
  data() {
    return {
     type:0,
     userInfo:"",
     cate:[],
     sum:"",
     win:"",
	 wav:[],
	 task:[],
	 arr: [],
	 userName:"",
	 all:"",
	 appId:""
    }
  },
  created(){
  	 var that = this;
  	 var userInfo= window.sessionStorage.getItem('userInfo'); 
			that.userInfo=JSON.parse(userInfo);
			if(that.userInfo){
							that.userInfo=JSON.parse(userInfo);
							that.user_id = that.userInfo.user_id;
							that.userName = that.userInfo.user_nick
						}else{
							that.user_id = ""
							that.userName =""
						}	  	 
  	 that.$Get("/achievement?user_id="+that.user_id,function(data){
  	 	    if(data.code == 202){
  	 	    	that.cate = data.data.cate;
	  	 		that.all = data.data.all;
	  	 		that.win = data.data.win; 
	  	 		that.task = data.data.task;
	  	 		that.task.forEach((tmp)=>{
	  	 			if(tmp.iswin == 1 && tmp.winnum ==tmp.num){ 	 				
	  	 				var id = tmp.id;
	  	 				setTimeout(()=>{
	  	 					$("#a"+id).children().css("color","#BBB");
	  	 					$("#a"+id).children().children().css("color","#BBB");
	  	 					$("#a"+id).children(".item_last").html("已达成") 	 					
	  	 				}) 	 			 
	  	 			}
	  	 		});
	  	 		that.cate.forEach((tmp)=>{
	  				that.wav.push(tmp.win_num);
	  				that.arr.push({text :tmp.name,max:100})
	  	 		})  	 	
		 		that.drawLine();	
	  	 	    }else{
	  	 	    	
	  	 	    	that.all = 0;
	  	 	    	that.win = 0;
                    that.arr =[
                {text : '', max  : 100},
                {text : '', max  : 100},
                {text : '', max  : 100},
                {text : '', max  : 100},
                {text : '', max  : 100},
                {text : '', max  : 100}
            ];
            	that.task = data.data.task;
				that.drawLine();
	  	 	    }
  	 		 		
  	 })   
  },
  mounted() {
 
  }, 
  methods:{
  	  showShare(){ 
  	  		  	$(".hide_share").css("display","block");
  	  	
/*  	  	var that =this;
  	  	that.$Get("/share",function(data){
  	  		that.appId = data.data.appId;
  	  		that.timestamp = data.data.timestamp;
  	  		that.nonceStr = data.data.nonceStr;
  	  		that.signature = data.data.signature;
	  		
  	  	})
  	  	

var imgUrl = "https://s0.2mdn.net/5004300/2-shanghai_300x250_crazysales_switzerland_chin_6113.jpg";  //图片LOGO注意必须是绝对路径
var lineLink = "www.baidu.com";   //网站网址，必须是绝对路径
var descContent = '抓中带回家！'; //分享给朋友或朋友圈时的文字简介
var shareTitle = '跟我一起玩即得免费抓取机会~~';  //分享title
var appid = that.appId; //apiID，可留空

wx.config({
    debug: false,
    appId: appid,
    timestamp: that.timestamp,
    nonceStr: that.nonceStr,
    signature: that.signature,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});

wx.ready(function(){
  //console.log("ok");
  wx_share(shareTitle,lineLink,imgUrl,descContent);
});

wx.error(function(res){
    //console.log(res);
});

function wx_share(title, link, imgurl, desc) {
  //朋友圈
  wx.onMenuShareTimeline({
    title: title,
    link: link,
    imgUrl: imgurl,
    success: function() {
      // 用户确认分享后执行的回调函数
    },
    cancel: function() {
      // 用户取消分享后执行的回调函数
    }
  });
  //微信好友
  wx.onMenuShareAppMessage({
    title: title,
    desc: desc,
    link: link,
    imgUrl: imgurl,
    type: 'link', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function() {
      // 用户确认分享后执行的回调函数
    },
    cancel: function() {
      // 用户取消分享后执行的回调函数
    }
  });

  //qq
  wx.onMenuShareQQ({
    title: title, // 分享标题
    desc: desc, // 分享描述
    link: link, // 分享链接
    imgUrl: imgurl, // 分享图标
    success: function() {
      // 用户确认分享后执行的回调函数
    },
    cancel: function() {
      // 用户取消分享后执行的回调函数
    }
  });
  // qq空间
  wx.onMenuShareQZone({
    title: title, // 分享标题
    desc: desc, // 分享描述
    link: link, // 分享链接
    imgUrl: imgurl, // 分享图标
    success: function() {
      // 用户确认分享后执行的回调函数
    },
    cancel: function() {
      // 用户取消分享后执行的回调函数
    }
  });
}*/
	  	
  	  },
  	  closeShare(){
  	  
  	  	$(".hide_share").css("display","none");
  	  	
  	  },
  	  wxShare(){
  	  },  	   	   	  
      back:function(){
             window.history.go(-1);
        },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'));
      
      // 绘制图表
      myChart.setOption({
        title : {
      
    },
    tooltip : {
        trigger: 'axis'
    },
    // legend: {
    //     x : 'center',
    //     // data:['罗纳尔多','舍普琴科']
    // },
    renderAsImage:
        "../../static/img/dati.png"
    ,
    toolbox: {
        // show : true,
        // feature : {
        //     mark : {show: true},
        //     dataView : {show: true, readOnly: false},
        //     restore : {show: true},
        //     saveAsImage : {show: true}
        // }
          show : true,
                  feature : {
                     mark : {show: false},
                      dataView : {show: false, readOnly: false},
                    restore : {show: false},
                     saveAsImage : {show: false}
        },
    },
    calculable : true,
    polar : [
        {   
            name:{
                 show: true, // 是否显示工艺等文字
                // formatter: null,
        /*        textStyle:{
                          color: 'rgb(238, 197, 102)'
                },*/
                textStyle: {
                color: 'rgb(238, 197, 102)',
                borderRadius: 3,
                padding: [3, 5]
            },
            
       /*     formatter: (text) => {
                text = text.replace(/\S{2}/g, function(match) {
                 
                    return match + '\n'
                })
                return text
            },*/
                
            },
        //     splitArea: {
        //     areaStyle: {
        //         color: ['#B8D3E4', '#96C5E3', '#7DB5DA', '#72ACD1']
        //     }
        // },
        indicator :this.arr
        /* [
                {text : '娱乐', max  : 100},
                {text : '人文', max  : 100},
                {text : '艺术', max  : 100},
                {text : '流行', max  : 100},
                {text : '常识', max  : 100},
                {text : '科学', max  : 100}
            ],*/,
            // axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            //                 show: false,
            //                 textStyle: {      
            //                     color: ['#00A3FF'] // 坐标轴刻度文字的样式
            //                 }
            //             },
            splitArea : {
                            show : true,   
                            areaStyle : {
                                opactiy:0,
                                color: ["transparent"],
                              
                                  // 图表背景网格的颜色
                                
                            }
                        },
            // splitLine : {
            //                 show : true,
            //                 lineStyle : {
            //                     width : 1,
            //                     color : '#FFFFFF' // 图表背景网格线的颜色
            //                 }
            //             },
            center: ['50%', '50%'],
            radius: '80%',
            splitNumber: 4,
            shape: 'circle',
        }
    ],
    series : [
        {
            name: '成就',
            type: 'radar',
             symbol: "none", // 去掉图表中各个图区域的边框线拐点
            itemStyle: {
      
                normal: {
                      lineStyle: {
                                color :"#87cefa",
                                width : 2
                            },
                    areaStyle: {
                        color:"#00A3FF",
                                type: 'default'
                    }
                }
            },
            
            data : [
                {
                 value :this.wav,
//                  value: [120, 118, 130, 100, 99, 70],
                    //  itemStyle: {
                    //                 normal: {
                    //                     areaStyle: {
                    //                         type: 'default',
                    //                         color: "#FFFFFF" // 图表中各个图区域的颜色
                    //                     }
                    //                 }
                    //             },
                    // name : '成就'
                }
            ]
        }
    ]
      });
    }
  },
  updated() {  
        window.scroll(0, 0);  
    } 
}
</script>



<style scoped>
ul li{
    list-style: none;
}
  .clearfix:after {
			display: block;
			content: '';
			clear: both;
			width: 0px;
			height: 0px;
 }
 .active{
 	background: red;
 }
.main_box>img{
    height: 100%;
    width: 100%;
    position: fixed;
}
.tab{
   background: #ffffff;
    height: 1.11rem;
    position: fixed;
	top: 0px;
	z-index: 1000;
    width: 100%;
    line-height: 1.11rem;
}
.tab img{
        width: 0.66rem;
        margin-top: 0.22rem;
    	margin-left: 0.25rem;
}
.tab span{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    font-size: 0.44rem;
}
/* #myChart{
    background: url(../../static/img/dati.png);
    background-size:300px 500px;
} */
.achieve_user {
    width: 1.25rem;
    height: 1.25rem;
    position: relative;
    padding-top: 0.1rem;
    padding-left: 0.1rem;
    padding-bottom: 0.1rem;
    padding-right: 0.1rem;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 50%;
}
.achieve_user  img:first-of-type {
   height: 1.25rem;
    border-radius: 50%;
    width: 1.25rem;
    margin: 0 auto;
    display: inline-block;
    position: absolute;
    left: 50%;
    /* top: 50%; */
    transform: translate(-50%);
}
.achieve_user img:last-of-type {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0.44rem;
}
.acheiveContent{
    padding-top:0.625rem;
    margin-top: 1.1rem
}
.share{	
    position: absolute;
    right: 0.55rem;
    top: 1.66rem;
}
.share>img{
	width:0.66rem;
    display: inherit;
}
.share>p{
	color: #fff;
	font-size: 0.13rem;
}

.your_name{
    position: relative;
    font-size: 0.38rem;
    color: #FFFFFF;
    text-align: center;
}
.alllist{
    width:6.94rem;
    height:0.69rem;
    background: #00A3FF;
    font-size:0.33rem;
    color:#FFFFFF;
    margin: 0 auto;
    border-radius: 0.2rem;
    text-align: center;
    line-height: 0.69rem;
    margin-bottom: 0.27rem;
}
.reveal{
    position: relative;
}
.revealUl{
    width:6.94rem;
    margin: 0 auto;
}
.revealUl li{
    width:3.33rem;
    height:0.69rem;
    background: #00A3FF;
    font-size:0.33rem;
    color:#FFFFFF;
    line-height: 0.69rem;
    border-radius: 0.2rem;
    float: left;
    text-align: center;
    margin-bottom: 0.27rem;
}
.revealUl li:nth-child(2n){
    float: right
}
.winning{
    position: relative;
    margin-top: 1rem;
}
.winning_item{
    width:8.33rem;
    height:1.38rem;
    background: #FFFFFF;
    border-radius: 0.2rem;
    margin:0 auto;
    margin-bottom: 0.2rem;
}
.winning_item>p:first-of-type{
    padding-left: 0.2rem;
    float: left;
    width: 37%;
    font-size: 0.55rem;
    color: #FF9800;
    line-height: 1.38rem;
}
.item_center{
  float: left;
    width: 36%;
    padding-top: 0.2rem;
}
.item_center p:first-of-type{
    font-size:0.33rem;
    color:#737373;
}
.item_center p:last-of-type{
    font-size:0.33rem;
    color:#00A3FF;
}
.winning_item p.item_last{
    width: 20%;
    float: right;
    font-size: 0.41rem;
    color: #000000;
    line-height: 1.38rem;
    text-align: right;
    padding-right: 0.2rem;
}

.hide_share{
	width: 100%;
    height: 100%;
    background: url(../../static/img/fximg.png) top left;
    background-size: 100% 100%;
    display: none;
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    z-index:10001
    /*background-color: rgba(0,0,0,0.8);*/
}
/*.share_list{
	width:100%;
	height:3rem;
	background: #fff;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	
}*/
/*.share_list li a img{
	width:2.5rem;
	height:2.5rem
}*/
/*.close_share{
	color: #fff;
	position: absolute;
	right:0.5rem;
	top:0.3rem;
}*/

</style>


