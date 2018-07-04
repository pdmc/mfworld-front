<template>
  <div class="main_box">
      <img src="../../static/img/indexBG.jpg" alt="">
       <div  class="tab">
            <img src="/static/img/back.9fbd588.png" alt="" @click="back()">
             <img style="margin-left:0px" src="/static/img/close.18ce7f6.png" alt="" @click="close()">  
            <!--<span >彩钻记录</span>-->
       </div>
       <div class="main_content">
         <div class="Cbanner" style="height:2.16rem">
             <p>快速提升能量，加速获取彩钻</p>
             <p>能量值越高，获取的彩钻越多</p>
         </div>
         <div class="menu_c clearfix">
             <ul class="menu_ul clearfix">
                 <li>知识就是力量，答题提升能量</li>
                 <li @click="rule()"><img src="../../static/img/help.png" alt="" style="vertical-align:middle"></li>
             </ul>
             <div class="menu_list clearfix" style="background:#ffffff;padding-top:0.34rem;">
                 <ul class="mylogo">
                     <li>
                        <img src="../../static/img/logo.jpg" alt="">
                        <!--<img src="../../static/img/man.png" alt="">-->
                        <img src="../../static/img/man.png" alt="" v-if="type==1">
                        <img src="../../static/img/girl.png" alt="" v-else>
                     </li>
                 </ul>
                 <div class="my_energy clearfix">
                     <div class="my_top">
                         <span>{{userName}}</span>
                         <span>{{getPhysical}}/100</span>
                     </div>
                     <div class="progress" style="position:relative">
                        <progress :value='$store.state.physical' max='100'></progress>
                     </div>
                     <p style="font-size:0.27rem;color:#101010;text-align: left;">体力每5分钟回复1点，体力回复满格后将不再回复</p>
                 </div>
                 <p style="color: #101010;font-size: 0.38rem;padding-top: 0.7rem;">体力</p>
             </div>
             <div class="challage" style="background:#ffffff;position:relative;height:2.5rem" @click="challageBegin()">
                 <img src="../../static/img/challage.png" alt="">
                 <p>开始挑战将消耗30点体力</p>
             </div>
             <ul class="menu_li clearfix">
                 <li @click="goods()">
                     <img src="../../static/img/beg.png" alt="">
                     物品
                 </li>
                 <li @click="goods_store()">
                     <img src="../../static/img/house.png" alt="">
                     道具商店
                 </li>
                 <li @click="achieve()">
                     <img src="../../static/img/jiangbei.png" alt="">
                     成就
                 </li>
                 <li @click="rank()">
                     <img src="../../static/img/book.png" alt="">
                     排行榜
                 </li>
             </ul>
         </div>
         <div class="task">
           <p>定期任务</p>
           <ul class="taskUl clearfix flexBox" style="margin-left:-5px;">
               <li class="ul_task solo pding" @click="toFirend">
                   <ul class="taskul" style="margin-left:5px;">
                       <li style="height:1.38rem">
                           <img src="../../static/img/invite.png" alt="">
                       </li>
                       <li>
                           <p>邀请码 {{invite_code}}</p>
                       </li>
                       <li>
                           <p id="frans">+100能量</p>
                       </li>
                   </ul>
               </li>
               <li class="ul_task solo pding">
                   <ul class="taskul solo" style="border-left: 1px solid #E5E5E5;border-right: 1px solid #E5E5E5;padding-left:0.13rem;padding-right:0.13rem;">
                       <li style="height:1.38rem">
                           <img src="../../static/img/login.png" alt="">
                       </li>
                       <li>
                           <p>登录获取能量</p>
                       </li>
                       <li>
                           <p>已完成</p>
                       </li>
                   </ul>
               </li>
               <li class="ul_task solo pding"  >
                   <ul class="taskul" style="border-left: 1px solid #E5E5E5;border-right: 1px solid #E5E5E5;">
                   
                   </ul>
               </li>
           </ul>
         </div>
         <div class="personal_task">
            <p>独家任务</p>
            <ul class="taskUl clearfix flexBox" style="background:#ffffff;border-top: 1px solid #E5E5E5">
               <li class="ul_task pding">
                   <ul class="taskul solo">
                       <li style="height: 1.38rem;">
                           <img src="../../static/img/meiyoyo.png" alt="">
                       </li>
                       <li>
                           <p>即将开放</p>
                       </li>
                       <li>
                           <p>+10能量</p>
                       </li>
                   </ul>
               </li>
               <li class="ul_task pding" >
                   <ul class="taskul solo" style="border-left:1px solid #E5E5E5 ;border-right:1px solid #E5E5E5 ;padding:0 0.13rem">
                       <li style="height: 1.38rem;">
                           <img src="../../static/img/zhuabei.png" alt="">
                       </li>
                       <li>
                           <p>即将开放</p>
                       </li>
                       <li>
                           <p>+20能量</p>
                       </li>
                   </ul>
               </li>
               <!--<li class="ul_task pding">
                   <ul class="taskul solo">
                       <li style="height: 1.38rem;">
                           <img src="../../static/img/UABN.png" alt="">
                       </li>
                       <li>
                           <p>即将开放</p>
                       </li>
                       <li>
                           <p>+5能量</p>
                       </li>
                   </ul>
               </li>-->
               <li class="ul_task pding">
                   <ul class="taskul solo">
                       <p style="font-size:0.38rem;line-height: 3.05rem;">敬请期待</p>
                   </ul>
               </li>
               
           </ul>
           <ul class="taskUl clearfix flexBox" style="background:#ffffff;border-top: 1px solid #E5E5E5" >
           		  <li class="ul_task pding">
                   <ul class="taskul solo">
                       <!--<li style="height: 1.38rem;">
                           <img src="../../static/img/solo.png" alt="">
                       </li>
                       <li>
                           <p>即将开放</p>
                       </li>
                       <li>
                           <p>+10能量</p>
                       </li>-->
                   </ul>
               </li>
               <li class="ul_task pding" >
               	<ul class="taskul solo" style="border-left:1px solid #E5E5E5 ;border-right:1px solid #E5E5E5 ;padding:0 0.13rem">
                   <!--<p style="font-size:0.38rem;line-height: 3.05rem;">敬请期待</p>-->
                   </ul>
               </li>
               <li class="ul_task pding"> 
               		<ul class="taskul solo">
               		</ul>
               </li>
           </ul>
         </div>
       </div>
      
  </div>
</template>

<script>
export default {
   data(){
       return{
//       progress:"10",
         userInfo:"",
         user_id:"",
         fransNum:"",
         invite_code:"",
         type:""
       }
   },
   created(){   
   	    var that = this;
   	    var userInfo= window.sessionStorage.getItem('userInfo'); 
   	    var getPhysical = window.sessionStorage.getItem("setPhysical");
				that.userInfo=JSON.parse(userInfo);   	    
   	    if(that.userInfo){   	    	   
   	    	   that.user_id = that.userInfo.user_id;
   	    	   that.userName = that.userInfo.user_nick;
   	    	   that.invite_code = that.userInfo.invite_code;
   	    	   if(getPhysical){   	    	   	     
   	    	   	     that.$store.state.physical = getPhysical;  	    	   	    
   	    	   }
   	    }else{
   	    	that.user_id = "";
   	    	that.userName ="";
   	    	that.invite_code = "";	
   	    }
   	    
   	    that.$Get("/physical?user_id="+that.user_id,function(data){   	    		
   	    		that.$store.commit("setPhysical",data.data.physical);
   	    		that.fransNum = data.data.num;
   	    		if(data.data.num == 0){
   	    			  $("#frans").html("已完成");
   	    			  $("#frans").css("background","#CACACA")
   	    		}
   	    })

        
   },
   computed:{
   	    getPhysical(){
        return this.$store.state.physical
      },
   },
   methods:{
   	    toFirend:function(){
   	    	this.$router.push('/InviteFirend');
   	    },
       challageBegin:function(){
       	   var that = this;
       	   that.$Get("/ti?user_id="+that.user_id,function(data){
       	   	   if(data.code == 201){
//     	   	   	  alert("体力不足");
									mizhu.alert('温馨提示', '体力不足');
       	   	   	  return
       	   	   }else{
       	   	   	that.$router.push('/begin');
       	   	   }
       	   })
//         this.$router.push('/begin');
       },
       rank:function(){
           this.$router.push('/rank');
       },
       achieve:function(){
           this.$router.push('/achieve');
       },
       back:function(){
//           window.history.go(-1);
						this.$router.push('/index');
        },
       rule:function(){
           this.$router.push('/rule');
       },
       close:function(){
       		this.$router.push('/index');
       },
       goods:function(){
           this.$router.push('/goods');
       },
       goods_store:function(){
       	   
         this.$router.push('/good_store');
       }
   },
   mounted(){
     $("progress").attr("value",this.progress);
        
        var userInfo= window.sessionStorage.getItem('userInfo'); 
        this.userInfo=JSON.parse(userInfo);
        this.type=this.userInfo.user_sex;

        
   },
   destroyed(){
   	
   }
}

</script>

<style scoped>
ul li{
    list-style: none;
}
 .pding{
 	 padding-top:0.27rem;
 	 padding-bottom: 0.27rem;
 }
 .flexBox{
 	 display: flex;
 	 justify-content: space-around;
 }
  .clearfix:after {
			display: block;
			content: '';
			clear: both;
			width: 0px;
			height: 0px;
 }
.main_box>img{
    height: 100%;
    width: 100%;
    position: fixed;
}
.tab{
    background: #ffffff;
    height: 1.11rem;
    /*position: relative;*/
    position:fixed;
    width: 100%;
    line-height: 1.11rem;
    top: 0px;
    z-index: 1000;
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
    text-align: center;
    margin-top:1.1rem;
}
.Cbanner p:first-of-type{
    font-size:0.5rem;
    padding-top: 0.4rem;
}
.Cbanner p:last-of-type{
   font-size:0.33rem;
}
.menu_c{
    background: #e5e5e5;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
}
.menu_ul{
    border-bottom: 1px solid #f1f1f1;
    padding: 0 0.27rem;
    background: #ffffff;
}
.menu_ul li{
  float: left;
  color: #101010;
  height: 1.11rem;
  font-size:0.44rem;
  line-height: 1.11rem;
}
.menu_ul li:last-of-type{
    float:right;
}
.menu_ul li img{
    width:0.66rem;
}
.mylogo img:first-of-type{
     height:1.5rem;
      border-radius: 50%;
}
.mylogo img:last-of-type{
    position: absolute;
    bottom: 26px;
    right: 9px;
    width: 0.44rem;
}
::-ms-fill{
    background:#f1f1f1;
}
::-moz-progress-bar{
    background:#00A3FF;
 }
::-webkit-progress-bar{
    background:#f1f1f1;
 }
::-webkit-progress-value{
    background:#00A3FF;
 }
.mylogo{
    position: relative;
    height: 2.2rem;
    /* width: 2.2rem; */
    float: left;
    width: 20%;
}
.my_top{
    color:#101010;
   font-size:0.38rem;
    text-align: left;
}
.my_energy{
    width: 70%;
    float: left;
    padding-top: 0.27rem;
}
.my_top span:last-of-type{
    float: right;
}
.progress{
    border-radius: 11px;
    margin-bottom:0;
    height:0.27rem;
}
.progress>progress{
    width: 100%;
    -webkit-appearance: none;
    background: #ffffff;
    position: absolute;
    left: 0;
    height:0.27rem;
}
.progress-bar{
    background-color: #00A3FF;
}
.challage img{
    width:9.44rem;
    height:2.5rem;
}
.challage p{
    position: absolute;
    font-size: 0.25rem;
    bottom: 0;
    color: #101010;
    margin: 0 auto;
    text-align: center;
    left: 50%;
    transform: translate(-50%);
}
.menu_li{
    background: #ffffff;
    padding-top: 0.2rem;
}
.menu_li li{
    float: left;
    width:25%;
    color:#101010;
    font-size:0.38rem;
    padding-bottom: 0.3rem;
}
.menu_li li img{
    width:1.66rem;
    display: block;
    margin: 0 auto;
    margin-bottom: 0.1rem;
}
.taskUI{
	 width:3.05rem;
  height:3.05rem;
}
.taskUl li{
  float: left;
 
}
.taskul img{
    width:2.77rem;
    height:1.38rem;
}
.task{
    background: #ffffff;
    color:#101010;
}
.task>p{
    font-size:0.44rem;
    height:1.11rem;
    line-height: 1.11rem;
    padding: 0 0.27rem;
    border-bottom:0.014rem solid #E5E5E5;
    text-align: left;
}
.personal_task{
    background: #f1f1f1;
    color: #101010;
    padding-top: 0.2rem;
}
.personal_task>p{
    font-size:0.44rem;
    height:1.11rem;
    line-height: 1.11rem;
    padding: 0 0.27rem;
    /*border-bottom:1px solid #f1f1f1;*/
    text-align: left;
    background: #ffffff;
}
.taskul li:nth-child(2n){
    font-size:0.27rem;
    color:#737373;
    margin: 0.2rem 0;
}
.taskul li{
    float:none;
}
.taskul li:last-of-type p{
    width:2.22rem;
    height:0.55rem;
    color:#ffffff;
    background: #00A3FF;
    font-size:0.27rem;
    margin:0 auto;
    line-height: 0.55rem;
}
.taskul.solo li:last-of-type p{
    width:2.22rem;
    height:0.55rem;
    color:#ffffff;
    background: #CACACA;
    font-size:0.27rem;
    margin:0 auto;
}
.solo{
	width:3.05rem;
    height:3.05rem;
}
.ul_task{
    
    
}

</style>
