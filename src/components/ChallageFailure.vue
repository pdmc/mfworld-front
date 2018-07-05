<template>

  <div class="main">
      <img src="../../static/img/indexBG.jpg" alt=""> 
      <div  class="tab">
             <img  src="/static/img/close.png" alt="" @click="back()"> 
       </div>
      <div class="failure">
          <div class="failure_title" style="margin-bottom: 1.38rem;">
              <p>挑战失败</p>
              <p>再接再厉</p>
          </div>
          <div class="failure_button">
              <p  @click="onem()">再次挑战</p>
              <p  @click="leave()">离开</p>
          </div>
      </div>
  </div>


</template>

<script>
export default {
   data(){
       return{
       
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
					},
   methods: {
    back:function(){
//          window.history.go(-1);
			 this.$router.push('/index');
        },
    onem:function(){
    		var that = this;
        that.$router.push('/begin');       
       	   that.$Get("/ti?user_id="+that.user_id,function(data){
       	   	   if(data.code == 201){    	   	   	  
									mizhu.alert('温馨提示', '体力不足');
       	   	   	  that.$router.push('/index');
       	   	   }else{
       	   	   	that.$router.push('/begin');
       	   	   }})
    },
    leave:function(){
        
        this.$router.push('/accelerate');
    }
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

.main>img{
    height: 100%;
    width: 100%;
    position: fixed;
}
.dao{
    position: relative;
    text-align: center;
    color:#ffffff;
    padding-top: 4.44rem;
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
.failure{
    position: relative;
    color:#ffffff;
    text-align: center;
    padding-top: 3.33rem;
}
.failure_title p:first-of-type{
  font-size:1.11rem;
}
.failure_title p:last-of-type{
  font-size:0.55rem;
}
.failure_button p{
    width:5.83rem;
    height:1.25rem;
    border:1px solid #ffffff;
    font-size:0.55rem;
    line-height: 1.25rem;
    margin: 0 auto;
    border-radius: 0.4rem;
    margin-bottom:0.55rem;
}
</style>
