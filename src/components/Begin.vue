<template>
 <div>
  <div class="main_box">
      <img src="../../static/img/indexBG.jpg" alt=""> 
      <div class="dao">
          <p>倒计时</p>
          <p>准备</p>
          <p>{{num}}</p>
      </div>
  </div>

 </div>
</template>

<script>
export default {
   data(){
       return{
          num:5,
          timer:""
       }
   },
   methods:{
      dao:function(){
          
      }
   },
   mounted(){
       var self=this;
    self.timer =  setInterval(function(){
              self.num--;
                
   	  			console.log("====g=====")
              if(self.num==0){
              	window.sessionStorage.removeItem("num")
   	  			window.sessionStorage.removeItem("num2")
   	  			window.sessionStorage.removeItem("num3")
   	  			window.sessionStorage.removeItem("number")
   	  			window.sessionStorage.removeItem("log")
   	  			clearInterval(self.timer)
                  self.$router.push('/Challage');
              }
     },1000);
   },
    destroyed: function () {
          
  		  clearInterval(this.timer)
 },
   watch:{
       
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
  .main_pay{
     display: none;
 } 
.main_box>img{
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
.dao p:first-of-type{
    font-size:1.11rem;
}
.dao p:nth-child(2n){
     font-size:0.55rem;
}
.dao p:last-of-type{
     font-size:2.77rem;
}
</style>
