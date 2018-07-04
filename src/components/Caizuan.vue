.main_content<template>
  <div class="main_box">
      <!--<img src="/static/img/indexBG.02118f7.jpg" alt="">-->
      	<span style="background: #e5e5e5;"></span>
       <div  class="tab">
            <img src="/static/img/back.9fbd588.png" alt="" @click="back()">
            <!-- <img  src="/static/img/close.18ce7f6.png" alt="">  -->
            <span >彩钻记录</span>
       </div>
       <div class="main_content">
         <div class="c_banner">
             <p>彩钻总数</p>
             <p>{{$store.state.ucolor}}</p>
             <p @click="tuihuan()">兑换 <img src="/static/img/comein.png" alt=""></p>
         </div>
         <div class="m_content">
             <div class="dongjie">
                 <span>冻结彩钻</span>
                 <span style="padding-left:0.3rem">0</span>
             </div>
             <div class="qkllink">
             	    <span>我的区块链地址:</span>
             	    <span  class="p1">{{$store.state.qkllink}}</span>
             </div>
             
             <div class="intro">
                 <p>彩钻简介</p>
                 <p>彩钻是基于个人在IONTRUM活动产生的奖励，可以用于在空间内的消费与兑换等。
                    48小时不领取彩钻将暂停生产。
                    彩钻总量有限，且每2年产出量减少一半，随着时间的推移获取难度越来越大，前期参与更有优势。
                 </p>
             </div>
             <div class="list">
                 <p style="padding:0;font-size:0.44rem">收支记录</p>
                 <ul class="clearfix" v-for="(tmp,index) in colorList" :key="index">
                     <li>
                         <p>{{tmp.name}}</p>
                         <p>{{parseInt(tmp.create_time)*1000 | gettime}}</p>
                     </li>
                     <li>{{tmp.is_true==1?"+":"-"}}{{tmp.value}}</li>
                </ul>
<!--                 <ul class="clearfix">
                     <li>
                         <p>日常领取</p>
                         <p>2018-03-28 10:00</p>
                     </li>
                     <li>+0.04563</li>
                 </ul>-->
             </div>
         </div>
       </div>
  </div>
</template>

<script>
export default {
   data(){
       return{
           colorList:""
       }
   },
   filters: {
			gettime:function (t){
			    var _time=new Date(t);
			    var   year=_time.getFullYear();//2017
			    var   month=_time.getMonth()+1;//7
			    month = month < 10 ? ('0' + month) : month
			    var   date=_time.getDate();//10
			     date = date < 10 ? ('0' + date) : date
			    var   hour=_time.getHours();//10
			    hour = hour < 10 ? ('0' + hour) : hour
			    var   minute=_time.getMinutes();//56
			    minute = minute < 10 ? ('0' + minute) : minute
			    var   second=_time.getSeconds();//15
			     second = second < 10 ? ('0' + second) : second
			    return   year+"年"+month+"月"+date+"日   "+hour+":"+minute+":"+second;//这里自己按自己需要的格式拼接
			}
			   },
	created(){
      var that = this;
      var userInfo = window.sessionStorage.getItem("userInfo");
      var newColor = window.sessionStorage.getItem("newColor");
      that.userInfo = JSON.parse(userInfo);    
      if(that.userInfo){
      	that.userInfo = JSON.parse(userInfo);
      	that.user_id = that.userInfo.user_id;
      	if(that.userInfo.ucolor){       		
      		that.$store.state.ucolor = that.userInfo.ucolor;
      		if(newColor){      			
      			that.$store.state.ucolor = newColor
      		}
      	} else{      		
      		that.$store.state.ucolor = newColor
      	}
      }else{      	
      	that.user_id = "";
      
      }

			that.$Get("/colorlog?user_id="+that.user_id,function(data){
    		if(data.code == 200){	
    			  
    			  that.colorList = data.data;
             
    			  that.colorList.forEach(function(data,index){
    			  	
    			  	if(data.color){
    			  	  that.$store.state.ucolor = data.color;
    			  	   window.sessionStorage.setItem("newColor",data.color);    			  	     			  
    			  	}	else if(data.addr){    			  			
    			  		that.$store.commit("setQkllink",data.addr);
    			  		that.colorList.splice(index-1,2)
    			  	}
    			  })

    		}else if(data.code ==201){
//  			alert("没有登录请登录");
mizhu.alert('温馨提示', '没有登录请登录');
    			that.$router.push("/login")
    		}
    		    		
    	})
      
    },
   methods:{
       back:function(){
             window.history.go(-1);
       },
       tuihuan:function(){
           this.$router.push('/herald');
       }
   }
}
</script>

<style scoped>
ul li{
    list-style: none;
}
   .p1{
   	 width: 100%;  
    height: auto;  
    word-wrap:break-word;  
    word-break:break-all;  
    overflow: hidden;
    display: inline-block;
    line-height: 18px;  
   }
  .clearfix:after {
			display: block;
			content: '';
			clear: both;
			width: 0px;
			height: 0px;
 }
.main_box>span{
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
        margin-left: 0.25rem;
    margin-top: 0.22rem;
}
.tab span{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    font-size: 0.44rem;
}
.main_content{
    position: relative;
    color:#ffffff;
    margin-top: 1.1rem;
}
.c_banner{
        text-align: center;
        background: url(../../static/img/bjimg.jpg)no-repeat;
        background-size: 100% ;
}
.c_banner p:first-of-type{
    font-size:0.33rem;
    padding-top:0.55rem;
}
.c_banner p:nth-child(2n){
    font-size:32px;
    /* text-align: right; */
}
.c_banner p:last-of-type{
    font-size:0.33rem;
   text-align: right;
    padding-bottom: 0.2rem;
}
.c_banner p:last-of-type img{
    height: 0.5rem;
    vertical-align: middle;
    padding-right:0.2rem;
}
.m_content{
    background: #e5e5e5;
    color:#101010;
       padding-bottom: 1.3rem;
}
.dongjie{
    background: #ffffff;
    padding:0 0.27rem;
   height:1.11rem;
   line-height: 1.11rem;
   font-size: 0.44rem;
   
}
.qkllink{
	 background: #ffffff;
   padding:0 0.27rem;
   height:2.21rem;
   line-height: 1.11rem;
   font-size: 0.44rem;
}
.intro{
     background: #ffffff;
     margin-top: 0.27rem;
     padding:0 0.27rem;
}
.intro p:first-of-type{
    font-size: 0.44rem;
   height:1.11rem;
   line-height: 1.11rem;
   border-bottom:1px solid #e5e5e5;
}
.intro p:last-of-type{
   font-size: 0.333rem; 
   padding: 0.27rem 0;
}
.list{
   background: #ffffff;
     margin-top: 0.27rem;
     padding:0 0.27rem; 
}
.list ul{
    border-bottom:1px solid #e5e5e5;
}
.list>p{
    font-size: 0.44rem;
   height:1.11rem;
   line-height: 1.11rem;
   border-bottom:1px solid #e5e5e5;
}
.list ul li{
    float: left;
    height: 1.2rem;
    line-height: 0.6rem;
}
.list ul li p:first-of-type{
    font-size:0.388rem;
}
.list ul li p:last-of-type{
    font-size:0.27rem;
}
.list ul li:last-of-type{
    float:right;
    line-height: 1.2rem;
    font-size:0.63rem;
    color:#FF4081;
}
</style>
