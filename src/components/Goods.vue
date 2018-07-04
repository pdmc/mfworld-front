<template>
 <div>
  <div class="main_box">
      <img src="../../static/img/indexBG.jpg" alt="">
       <div class="tab">
            <img src="../../static/img/back.png" alt="" @click="back()">
            <!-- <img  src="/static/img/close.18ce7f6.png" alt="">  -->
            <span >物品</span>
       </div>
       <div class="main_content">
           <ul class="myUl clearfix" style="height:10.83rem" >
               <li v-for="(tmp,index) in getGoodsArr" :key="index" @click="useBlock(tmp)">
                   <img :src="tmp.img" alt="">
                   <p>{{tmp.name}}</p>
                   <p class="tili">+{{tmp.propnum}}体力</p>
                   <p class="num">X{{tmp.num}}</p>
               </li>
           </ul>       
       </div>
       <p class="click" >点击可使用物品</p>
  </div>
  <div class="v_code">
     <div class="v_content" :id="'a'+tmp.id" v-for="(tmp,index) in getGoodsArr" :key="index" style="display: none;">
         <div class="top clearfix">
             <img :src="tmp.img" alt="" >
         </div>
         <div class="m_content">
             <img src="../../static/img/close.png" alt="" style="width: 0.66rem;position: absolute;right: 11px;top: 12px;" @click="close()">
             <p>{{tmp.name}}</p>
             <p style="line-height: 0.55rem;" class="energy">+{{tmp.propnum}}体力</p>
             <p class="artical">使用后立即回复{{tmp.propnum}}点体力，体力上限最大为100，冷却时间6小时。</p>
             <p style="color:#737373;font-size:0.33rem;margin-top:0.48rem;margin-bottom:0.27rem">剩余数量：{{tmp.num}}</p>
             <div style="background:url(../../static/img/use.png);background-size:100% 100%;width:4.44rem;height:1.11rem;margin:0 auto">
                 <p style="height:1.11rem;line-height:1.11rem;color:#ffffff" @click="useProp(tmp,index)">使用</p>
             </div>
         </div>
     </div>
  </div>
 </div>
</template>

<script>
export default {
   data(){
       return{
         userInfo:"",
         user_id:"",
         physical:""
       }
   },
   computed:{
      getGoodsArr(){
        // 在vuex中获取数据
        // return this.$store.state.menuItems
        // 通过getters获取数据
        return this.$store.state.goodsArr
      },
    },
   created(){
   	  var that = this; 	  
   	  var userInfo= window.sessionStorage.getItem('userInfo'); 
			that.userInfo=JSON.parse(userInfo);
			if(that.userInfo){
							that.userInfo=JSON.parse(userInfo);
							that.user_id = that.userInfo.user_id;							
						}else{
							that.user_id = "";							
						}	
   	  that.$Get("/goods?user_id="+that.user_id,function(data){
   	  	  if(data.code == 203){
// 	  	  			alert("没有登录请登录"); 
   	  	  			mizhu.alert('温馨提示', '没有登录请登录');
     		    	that.$router.push('/Login');
   	  	  }else{
   	  	  	  var tili = 0;
// 	  	  	  that.$store.state.goodsArr = data.data;
   	  	  	  that.$store.commit("setGoodsArr",data.data);
   	  	  }
   	  })
   },

   methods:{
       back:function(){
//           window.history.go(-1);
  this.$router.push("/index")
             
       },
       begin:function(){
           $(".v_code").css("display","block");
       },
       close:function(){
           $(".v_code").css("display","none");
       },
       useBlock:function(tmp){
       	   var id = tmp.id
       	   $(".v_code").css("display","block");
       	   $("#a"+id).css("display","block"); 
       	   $("#a"+id).siblings().css("display","none");
       },
       useProp:function(tmp,index){
       	  var that = this;        
       	  var id = tmp.id;
       	  that.$Post("/use",{user_id:that.user_id,prop_id:id},function(data){       	  	    
       	  	  if(data.code == 202){
//   	  	  	alert("6小时后可再次使用");
				mizhu.alert('温馨提示', '6小时后可再次使用');
       	  	  }else{       	  	  	
       	  	  	that.$store.state.physical = data.data.physical;
       	  	  	window.sessionStorage.setItem("setPhysical",data.data.physical);
       	  	    that.$store.state.goodsArr[index].num-- ;  
       	  	    that.$store.commit("removeGoods")
       	  	  }
       	  });
       	  $(".v_code").css("display","none");
       }
   },
   mounted(){
   
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
.main_box>img{
    height: 100%;
    width: 100%;
    position: fixed;
}
.tab{
   background: #ffffff;
    height: 1.11rem;
    position: relative;
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
    background: #ffffff;
    border-radius: 0.2rem;
    margin: 0.27rem;
}
.main_content .myUl li{
  float: left;
  width:33%;
  font-size:0.41rem;
  text-align: center;
  padding-top: 0.83rem;
}
.main_content .myUl li img{
    width:1.66rem;
}
.main_content .myUl li .tili{
    font-size:0.27rem;
    background: #338CD6;
    width:2.22rem;
    height:0.55rem;
    color:#ffffff;
    margin:0 auto;
    line-height:0.55rem;
}
.main_content .myUl li .num{
    font-size:0.33rem;
    color:#737373;
}
.click{
    font-size:0.55rem;
    position: relative;
    color:#ffffff;
    text-align: center;
}
.v_code {
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.8);
}
.v_code > .v_content {
	
    text-align: center;
    position: absolute;
    background-color: #fff;
    z-index: 1;
    width: 7rem;
    height: 7rem;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    padding: 0.9rem 1rem 1.08rem;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    top: 3.28rem;
    position: absolute;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    left: 50%;
}
.top{
    width: 2rem;
    height: 2rem;
    background: #ffffff;
    margin: 0 auto;
    position: absolute;
    top: -20%;
    left: 33%;
    border-radius: 50%;
    padding: 0.2rem;
}
.top img{
    width:2rem;
    height:2rem;
}
.m_content p:first-of-type{
    font-size:0.41rem;
}
.energy{
    width:2.22rem;
    height:0.55rem;
    background: #338CD6;
    color:#ffffff;
    margin:0 auto;
    font-size:0.27rem;
    margin-bottom:0.41rem;
    margin-top:0.22rem;
}
.artical{
    color:#737373;
    font-size:0.33rem;
}
</style>
