<template>
   <div>
    <div class="main_box">
        <img src="../../static/img/indexBG.jpg" alt="">
        <div class="tab">
                <img src="../../static/img/back.png" alt="" @click="back()">
                <!-- <img  src="/static/img/close.18ce7f6.png" alt="">  -->
                <span >排行榜</span>
        </div>
        <div class="world_rank">
           <ul class="rankUl clearfix">
               <li class="disabled"  @click="chose(index)" v-for="(item,index) in list" :key="index" v-bind:class="{item:index==selectItem}">{{item.name}}</li>
           </ul>
           <div class="world">
               <ul class="myItem">
					<li class="clearfix" v-for="(tmp,index) in userList"> 
                        <div class="user">
                           <img src="../../static/img/logo.jpg" alt="">
                           <img src="../../static/img/man.png" alt="" v-if="tmp.user_sex == 1">
                           <img src="../../static/img/girl.png" alt="" v-else>
                        </div>
                        <div class="userName">
                            <p class="nick">{{tmp.user_nick}}</p>
                            <p>总胜场:{{tmp.num}}</p>
                        </div>
                        <div class="paiming">
                            <p>NO.{{index+1}}</p>
                            <p>IONTRUM世界排名</p>
                        </div>
                   </li>
               </ul>
           </div>
           <div class="friend">
               <ul class="myItem">
                   <li class="clearfix"> 
                        <div class="user">
                           <img src="../../static/img/logo.jpg" alt="">
                           <img src="../../static/img/man.png" alt="" v-if="type==0">
                           <img src="../../static/img/girl.png" alt="" v-else>
                        </div>
                        <div class="userName">
                            <p>用户的名字</p>
                            <p>总胜场:15217</p>
                        </div>
                        <div class="paiming">
                            <p>NO.1</p>
                            <p>IONTRUM世界排名</p>
                        </div>
                   </li>
                   <li class="clearfix"> 
                        <div class="user">
                           <img src="../../static/img/logo.jpg" alt="">
                           <img src="../../static/img/man.png" alt="" v-if="type==1">
                           <img src="../../static/img/girl.png" alt="" v-else>
                        </div>
                        <div class="userName">
                            <p>用户的名字</p>
                            <p>总胜场:15217</p>
                        </div>
                        <div class="paiming">
                            <p>NO.2</p>
                            <p>IONTRUM世界排名</p>
                        </div>
                   </li>
               </ul>
           </div>
           <div class="bottom">
               <p>当前我的世界排名：{{myRanking}}</p>
           </div>
        </div>
    </div>

   </div>
</template>

<script>
export default {
  data() {
    return {
       list:[{"name":"世界排名"},{"name":"|"},{"name":"好友排名"}],
       selectItem:0,
       type:0,
       userInfo:"",
       user_id:"",
       userList:"",
       myRanking:"",
//     sex_arr:[]
    }
  },
  created(){
  	 var that = this;
  	 var userInfo = window.sessionStorage.getItem("userInfo");
  	 that.userInfo = JSON.parse(userInfo);
  	 if(that.userInfo){
  	 	that.userInfo = JSON.parse(userInfo);
  	 	that.user_id = that.userInfo.user_id;
  	 }else{
  	 	that.user_id=""
  	 }
  	 that.$Get("/rankings",function(data){
  	 	that.userList = data.data;
  	 	that.userList.forEach(function(res,index){ 
  	 		
//	 		that.sex_arr.push(res.user_sex);
//	 		console.log(that.sex_arr)
  	 		if(res.user_id == that.user_id){
  	 			that.myRanking = index+1	 			
  	 		}
  	 	})
  	 })
  },
  mounted(){
 		var userInfo= window.sessionStorage.getItem('userInfo'); 
        this.userInfo=JSON.parse(userInfo);
        this.type=this.userInfo.user_sex;
  }, 
  methods:{
      back:function(){
             window.history.go(-1);
        },
     chose:function(index){
         this.selectItem=index;
         if(index==2){
             $(".friend").css("display","block");
             $(".world").css("display","none");
         }else if(index==0){
             $(".friend").css("display","none");
             $(".world").css("display","block");
         }
     }
  }
}
</script>

<style scoped>
.disabled{
pointer-events:none; 
}
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
 .nick{
 	width: 3.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
        margin-left: 0.25rem;
    	margin-top: 0.22rem;
}
.tab span{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    font-size: 0.44rem;
}
.world_rank{
    position: relative;
    margin-top: 1.1rem;
}
.rankUl li{
  float: left;
  font-size:0.438rem;
  color:#767676;
}
.rankUl{
    padding-top:0.83rem;
    width: 50%;
    margin: 0 auto;
    padding-bottom: 0.55rem;
}
.rankUl li:first-of-type{
    text-align: right;
    width:37%;
    height: 0.9rem;
}
.rankUl li:last-of-type{
    text-align: left;
    width: 36%;
    height: 0.9rem;
}
.rankUl li:nth-child(2n){
    padding: 0 0.6rem;
}
.rankUl .item:first-of-type{
	text-align: center;
    color:#ffffff;
    border-bottom: 2px solid #ffffff;
}
.rankUl .item:last-of-type{
	    text-align: center;
    color:#ffffff;
    border-bottom: 2px solid #ffffff;
}
.myItem li{
    background: url(../../static/img/rank.png);
    background-size: 100% 100%;
    width:9.44rem;
    height:2.22rem;
    margin:0 auto;
    margin-bottom: 0.2rem;
}
.myItem li div{
    float: left;
}
.user{
    width:1.25rem;
    height:1.25rem;
    position: relative;
    padding-top:0.48rem;
    padding-left:0.48rem;
}
.user img:first-of-type{
    height: 1.25rem;
    border-radius: 50%;
}
.user img:last-of-type {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0.44rem;
}
.userName{
    padding-left:0.2rem;
}
.userName p:first-of-type{
    padding-top:0.48rem;
    color:#101010;
    font-size:0.38rem;
}
.userName p:last-of-type{
    color:#FF9800;
    font-size:0.38rem;
}
.myItem li .paiming{
    float:right;
    padding-top: 0.48rem;
    color:#ffffff;
    padding-right: 0.48rem;
}
.paiming p:first-of-type{
  font-size: 0.73rem;
    height: 0.83rem;
    text-align: right;
}
.paiming p:last-of-type{
  font-size:0.38rem;
  color:#BEC2C9;
}
.bottom{
 position: fixed;
 bottom:0;
 background: #ffffff;
 height:1.11rem;
 line-height: 1.11rem;
 text-align: center;
 font-size:0.38rem;
 color:#737373;
 width:100%;
 margin:0 auto;
}
.friend{
    display: none;
}

.myItem li:last-child{
	margin-bottom: 1.35rem;
}
</style>


