<template>
 <div>
  <div class="main_box">
      <img src="../../static/img/indexBG.jpg" alt="">
       <div class="tab">
            <img src="../../static/img/back.png" alt="" @click="back()">
            <!-- <img  src="/static/img/close.18ce7f6.png" alt="">  -->
            <span @click="aaa()">道具商店</span>
       </div>
       <div class="main_goods">
          <div class="store clearfix" :id="'b'+tmp.id" v-for="(tmp,index) in propArr" :key="index">
              <div class="store_logo" style="width:20%">
                  <img :src="tmp.img" alt="">
              </div>
              <div class="store_intro" style="width:47%;padding-top:0.25rem;">
                  <p :id="'pname'+tmp.id" >{{tmp.name}}</p>
                  <p :id="'pprice'+tmp.id" >￥{{tmp.price}}</p>
                  <p :id="'pdescribe'+tmp.id">{{tmp.describe}}</p>
              </div>
              <div class="store_czuo" style="width:32%;padding-top:0.55rem;">
                  <img src="../../static/img/reduce.png" alt="" @click="tmp.total_num>0?tmp.total_num--:0">
                  <input type="text" disabled="disabled" v-model="tmp.total_num<0?0:tmp.total_num">
                  <img src="../../static/img/add.png" alt="" @click="tmp.total_num<999?tmp.total_num++:0">
              </div>
          </div>

       </div>
       <div class="pay">
          <ul style="padding:0.17rem" class="clearfix">
            <li style="color:#FF9800;font-size:0.55rem">￥{{getTotal.totalPrice}}</li>
            <li style="float:right;color:#2060B5;font-size:0.55rem" @click="pay()">支付购买</li>
          </ul>   
        </div>    
  </div>
 	
  <div class="main_pay">
  	<div id="box"></div>
      <img src="../../static/img/indexBG.jpg" alt="">
       <div class="tab">
            <img src="../../static/img/back.png" alt="" @click="myback()">
            <!-- <img  src="/static/img/close.18ce7f6.png" alt="">  -->
            <span >支付方式</span>
       </div> 
       <div class="pay_content" style="position:relative">
           <div class="prize">
               <p>支付金额 <span style="color:#FF9800">￥{{getTotal.totalPrice}}</span></p>
           </div>
           <div class="prize" @click="aLipay()">
               <img src="../../static/img/zhifubao.png" alt="">
               <p>支付宝支付</p>
               <img src="../../static/img/come.png" alt="" style="float:right; width: 0.66rem;padding-top: 0.5rem;" @click="success()">
           </div>
           
           <div class="prize prize_a"  @click="apay()">          
               <img src="../../static/img/weiixn.png" alt="">
               <p>微信支付</p>
               <img src="../../static/img/come.png" alt="" style="float:right; width: 0.66rem;padding-top: 0.5rem;" >
           </div>
       </div>
  </div>
 </div>
</template>
<script>
	
		
	
</script>
<script>
export default {
   data(){
       return{
/*        value:0,
          mid_value:0,
          tao_value:0,
          allpay:0,*/
        
          url:"",
          propArr:[],
		  userInfo:"",
		  type:1,
		  div:"",
		  allPirce:null,
		  list:"",
		  arr:"",
		  newObj:"",
		  wxCode:""
  
       }
   },
   
   created(){
		var that = this;   		
   	    var userInfo= window.sessionStorage.getItem('userInfo'); 
		that.userInfo=JSON.parse(userInfo);
         that.$Get('/prop', function(data){                  
             that.propArr = data.data;                          
         })     
   },
   computed:{
//		计算属性	       
         getTotal:function(){
         		var that = this;
                var totalPrice=0;  
                var arr = []
                var obj = {}
/*                 that.newObj = that.propArr.filter(function(value){
                	return value.total_num>0;
                
                })*/
//              console.log(arr)
                
                for(var i=0;i<that.propArr.length;i++){
                	if(that.propArr[i].total_num>0){             		   
                           arr.push({id:that.propArr[i].id,num:that.propArr[i].total_num})            		   
                	}
               	
			        totalPrice+=that.propArr[i].price*that.propArr[i].total_num
                    var n=totalPrice.toFixed(2)
                    that.allPirce = n   
     
             }    
                that.newObj = arr

         return {totalPrice:that.allPirce}
         }
        
         
         
        
       },   
   methods:{
   	aaa:function(){
//mizhu.alert('', '这是alert效果');




   	},
       gotoIndex:function(){
           this.$router.push('/index');
       },
       pay:function(){
       		
           $(".main_box").css("display","none");
           $(".main_pay").css("display","block");
           /*var that = this;
            var userInfo= window.sessionStorage.getItem('userInfo'); 
			that.userInfo=JSON.parse(userInfo);
			if(that.userInfo){
							that.userInfo=JSON.parse(userInfo);
						}else{
							that.userInfo = ""
						}			      		
		   that.$Post('/wxpay',{user_id:that.userInfo.user_id,type:2,prop:that.newObj}, 
		   function(data){
		    	 that.url = data.data;
		    	 that.wxCode = data.code;	    	 
		   })*/
       },
       aLipay:function(){
       		var that = this;  
           $(".main_box").css("display","none");
           $(".main_pay").css("display","block");
			var userInfo= window.sessionStorage.getItem('userInfo'); 
			that.userInfo=JSON.parse(userInfo);
			if(that.userInfo){
							that.userInfo=JSON.parse(userInfo);
						}else{
							that.userInfo = ""
						}
 			that.$Post('/pay',{user_id:that.userInfo.user_id,type:1,prop:that.newObj}, 
		   function(data){
		   	   if(data.code == 202){
		   	   			alert("没有登录请登录");   	
     		    	   	that.$router.push('/Login');
		   	   }else if(data.code == 207){
		   	   		alert("没有买任何商品")   
		   	   		$(".main_box").css("display","block");
     		    	$(".main_pay").css("display","none");
		   	   }else{
		   	   	that.div = data.data
				$("#box").html(that.div)
		   	   }		   	   		   	
		   })		  
       },
       apay:function(){
       		var that =this;  
            var userInfo= window.sessionStorage.getItem('userInfo'); 
			that.userInfo=JSON.parse(userInfo);
			if(that.userInfo){
							that.userInfo=JSON.parse(userInfo);
						}else{
							that.userInfo = ""
						}			      		
		   that.$Post('/wxpay',{user_id:that.userInfo.user_id,type:2,prop:that.newObj}, 
		   function(data){
		    	that.url = data.data;
		    	that.wxCode = data.code;	 
		    	if(that.wxCode ==202){
	       			alert("没有登录请登录")   	
	     		    that.$router.push('/Login');    		    
		       		}else if(that.wxCode == 207){
				   	   		alert("没有买任何商品")   	
		     		    	$(".main_box").css("display","block");
		     		    	$(".main_pay").css("display","none");
				   	}else{
		       			window.location.href = that.url
		       		}
		   })

       },
       back:function(){
//           window.history.go(-1);
			this.$router.push("/index")
             
       },
       myback:function(){
           $(".main_box").css("display","block");
           $(".main_pay").css("display","none");
       },

       success:function(){
          $(".success").css("display","block");
          $(".main_pay").css("display","none");
       },

   },
   mounted(){
     this.allpay=this.value+this.mid_value+this.tao_value;
   },
   watch:{
   	 propArr:function(value){
   		
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
  .main_pay{
     display: none;
 } 
.main_box>img{
    height: 100%;
    width: 100%;
    position: fixed;
}
.main_pay>img{
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
.main_goods{
    position: relative;
    border-radius: 0.2rem;
    margin: 0.27rem;
    padding-bottom: 100px;
}
.store{
    background: #ffffff;
    width:9.44rem;
    height: 2.77rem;
    border-radius: 0.3rem;
    margin-bottom: 0.2rem;
}
.store div{
    float: left;
}
.store_logo img{
  width:1.66rem;
  padding-top: 0.35rem;
  padding-left: 0.1rem;
}
.store_intro p:first-of-type{
    font-size:0.416rem;
    color:#101010;
}
.store_intro p:nth-child(2n){
    font-size:0.416rem;
    color:#FF9800;
}
.store_intro p:last-of-type{
    font-size:0.305rem;
    color:#737373;
}
.store_czuo{
	height:30px;
	line-height: 30px;
}
.store_czuo img{
    /* width:0.83rem; */
     width:0.77rem;
         /*margin-top: 0.1rem;*/
    vertical-align:middle;
}
.store_czuo input{
    width: 0.83rem;
    background: #E5E5E5;
    border: none;
    height: 0.83rem;
    border-radius: 20%;
    text-align: center;
    vertical-align:middle;
}
.pay{
    position: fixed;
    background: #ffffff;
    width: 100%;
    bottom: 0;
}
.pay ul li{
    float: left;
}
.prize{
    background: #ffffff;
    margin: 0.2rem;
    border-radius: 0.2rem;
    height: 1.66rem;
    padding: 0 0.27rem;
}
/*.prize_a{
	display: block;
}*/
.prize p{
    font-size:0.41rem;
    color:#101010;
    line-height: 1.66rem;
    float: left;
}
.prize img{
    width:1.11rem;
    float: left;
    padding-top: 0.27rem;
    padding-right: 0.27rem;
}
.pay_success{
    position: relative;
    color:#ffffff;
    padding-top: 3.33rem;
    text-align: center;
}
.pay_success p:first-of-type{
    font-size:0.5rem;
}
.pay_success p:nth-child(2n){
      font-size:0.88rem;
      padding-bottom: 2.22rem;
}
.pay_success p:last-of-type{
    width:5.83rem;
    height:1.25rem;
    border:1px solid #ffffff;
    border-radius: 0.4rem;
    margin: 0 auto;
    font-size:0.44rem;
    line-height: 1.25rem;
}
.success{
    display: none;
}
.success>img{
    height: 100%;
    width: 100%;
    position: fixed;
}
</style>
