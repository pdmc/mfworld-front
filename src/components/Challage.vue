<template>
 <div>
  <div class="main_box">
      <img src="../../static/img/indexBG.jpg" alt=""> 
      <div class="title_box">
        <p>第{{num}}/10题</p>
        <div class="title_float clearfix" style="    width: 99%;margin: 0 auto;">
           <div style="float:left;color:#ffffff;font-size:0.3rem;padding: 0 0.2rem;">0</div>
            <div class="progress-out" id="div1" style="float:left">
                <div class="percent-show"><span style="color:transparent">0</span></div>
                <div class="progress-in" style="border-radius:10px;width:60%">
                <span style="font-size: 0.2rem;position: absolute;right: 0;padding-right: 10px;padding: 0 0.2rem;"> {{number}}</span>
                </div>
            </div>
            <span style="float:left;color:#ffffff;font-size:0.3rem;padding: 0 0.2rem;">36</span>
        </div> 
        <p class="second">{{codemessage}}</p>
        
      </div>
      <div class="homework">
         <p class="subject">
             <!--《韩非子·说林下》记载:“齐罚鲁，索馋鼎，鲁以其雁往。齐人曰: ‘雁也，’鲁人曰：‘真也。’”所记载的“雁”指的是什么？-->
             {{name}}
         </p>
         <ul class="answer">
             <li v-for="(tmp,index) in answer" :key="index" :id="'a'+tmp.id" @click="select(tmp)">{{tmp.name}}</li>
         </ul>
      </div>
  </div>

 </div>
</template>

<script>

export default {
   data(){
       return{
         number:0,
         userInfo:"",
         name:"",
         answer:"",
//       answer:[{"id":1,"name":"飞走"},{"id":2,"name":"大雁"},{"id":3,"name":"已经"},{"id":4,"name":"假的"}],
         num:1,
         codemessage:10,
         timer:"",
         id:"",
         correct:"",
         timer2:"",
         timer3:"",
         a:"",
         success:"",
         num2:1,
         href:"",
         num3:1,
         log:"",
         
       }
   },
   /*beforeRouterLeave(to,from,next){
   	  alert("离开了")
   },*/
   created(){

//			第一次载入的数据渲染		  
     			var that = this;
     			
		        var userInfo= window.sessionStorage.getItem('userInfo'); 
				that.userInfo=JSON.parse(userInfo);
     		    function getPost(){ 		    	 
						if(that.userInfo){
							that.userInfo=JSON.parse(userInfo);
						}else{
							that.userInfo = ""
						}
     		    	   that.$Post('/answer',{user_id:that.userInfo.user_id, num:that.num}, function(data){

     		    	   if(data.code == 201){
//   		    	   	    alert("体力不足")
							mizhu.alert('温馨提示', '体力不足');
     		    	   	    clearInterval(that.timer)
     		    	   	    that.$router.push('/accelerate');
     		    	   }else if(data.code == 209){
//   		    	   	    alert("没有登录请登录")
							mizhu.alert('温馨提示', '没有登录请登录');
     		    	   	    clearInterval(that.timer)
     		    	   	    that.$router.push('/Login');
     		    	   }
     		    	   	
                       that.id = data.data.id;
                       that.name = data.data.name;  
                       window.sessionStorage.setItem('num2', that.num);
                       window.sessionStorage.setItem('ti_id',that.id)
                       
                 	   that.answer = JSON.parse(data.data.xuan);
				   		var res = [];
						for (var i = 0, len = that.answer.length; i < len; i++) {
						  // 随机叫个
						  var randomIndex = Math.floor(Math.random() * that.answer.length);
						  // 出列到新队伍
						  res[i] = that.answer[randomIndex];
						  // 出来了不能继续叫了哦
						 that.answer.splice(randomIndex, 1); 
						}
						that.answer = res;
						  });
     		    }
//			    getPost();
			    window.sessionStorage.setItem('num', that.num);
			    
			    
			     
		    
		  if(window.sessionStorage.getItem('num')==1 && 0<window.sessionStorage.getItem('num2')<10&&window.sessionStorage.getItem('num2')!==null){
//                当前的num
                  that.num2 =parseInt(window.sessionStorage.getItem('num2'))

                  window.sessionStorage.setItem('log',"a1")
//                当前num  位num2+1 刷新后获取下一题
                  that.num= parseInt(window.sessionStorage.getItem('num2'))+1
                 
                   that.log= window.sessionStorage.getItem('log') 
                   
//                 获取题的id
                    that.id =parseInt(window.sessionStorage.getItem('ti_id'))
              
                  if(that.number !== NaN){
                  	 that.number = parseInt(window.sessionStorage.getItem('number'))
                  }
                  if(!that.number){

                  	that.number = 0
                  }
               		
                  if(that.log){
                 	    	that.$Post('/correct',{user_id:that.userInfo.user_id, num:that.num2,id:that.id,user_nick:that.userInfo.user_nick,time:0,correct:""}, 
							function(data){ 
								that.num2 =parseInt(window.sessionStorage.setItem('num2',that.num))
								window.sessionStorage.setItem("setPhysical",data.data.physical);
								
						 });       					
                  }
                 	that.$Post('/answer',{user_id:that.userInfo.user_id, num:that.num}, function(data){                  
                  		that.id = data.data.id;     
                  		window.sessionStorage.setItem('ti_id', that.id);
                        that.name = data.data.name;                        
                 	    that.answer = JSON.parse(data.data.xuan)
             	    
					 	  }); 
                   
						if(that.num>10){
				      	    			clearInterval(that.timer)
				      	    			clearInterval(that.a)
				      	    			clearInterval(that.timer2)
				      	    			clearInterval(that.timer3)
										that.$router.push('/ChallageFailure')
				      	    		
						}
						if(that.num == 10){
				      	    	if(that.success == 1){
				      	    		setTimeout(()=>{
				      	    			clearInterval(that.timer)
				      	    			clearInterval(that.a)
				      	    			clearInterval(that.timer2)
				      	    			clearInterval(that.timer3)
				      	    			that.$router.push('/ChallageSuccess')
				      	    		},10000)
				      	    	}else{
				      	    		setTimeout(()=>{
							  			clearInterval(that.timer)				      	    		
				      	    			clearInterval(that.a)	
				      	    			clearInterval(that.timer2)
				      	    			clearInterval(that.timer3)
				      	    			that.$router.push('/ChallageFailure')
				      	    		},10000)
				      	    	}
							  	
							  }
						
						  
   	    }

//				不点击答案的情况下 每10s跳到下一题
//              setTimeout(()=>{
                	 	getPost()
						that.timer = setInterval(()=>{	
							console.log("========created里面的setInterval定时器========")
							that.codemessage--;	
                        	if(that.codemessage==0){                      	
                        	that.codemessage = 10;
                        	that.num++;	
                        	that.$Post('/correct',{user_id:that.userInfo.user_id, num:that.num2,id:that.id,user_nick:that.userInfo.user_nick,time:0,correct:""}, 
							function(data){ 								
//								window.sessionStorage.setItem("setPhysical",data.data.physical);
							
						 });       					
                        	
                        	
							 getPost()
							
				
							
  						    if(that.num == 10){  						    
				      	    	if(that.success == 1){
				      	    		
				      	setTimeout(()=>{
				      		
				      	    that.$Post('/correct',{user_id:that.userInfo.user_id, num:10,id:that.id,user_nick:that.userInfo.user_nick,time:0,correct:""}, 
								function(data){ 								
								window.sessionStorage.setItem("setPhysical",data.data.physical);								
						 }); 
				      	    			clearInterval(that.timer)
				      	    			clearInterval(that.a)
				      	    			clearInterval(that.timer2)
				      	    			clearInterval(that.timer3)
				      	    			that.$router.push('/ChallageSuccess')
				      	    		},9000)
				      	    	}else{
				      	    								  		
						setTimeout(()=>{	
							
							that.$Post('/correct',{user_id:that.userInfo.user_id, num:10,id:that.id,user_nick:that.userInfo.user_nick,time:0,correct:""}, 
								function(data){ 								
								window.sessionStorage.setItem("setPhysical",data.data.physical);								
						 }); 
							  			clearInterval(that.timer)				      	    		
				      	    			clearInterval(that.a)	
				      	    			clearInterval(that.timer2)
				      	    			clearInterval(that.timer3)
				      	    			that.$router.push('/ChallageFailure')
				      	    		},9000)
				      	    	}
							  	
							  } 
	
                     	   }
                       
						 },1000);	
						 
						 if(that.num>10){
				      	    			clearInterval(that.timer)
				      	    			clearInterval(that.a)
				      	    			clearInterval(that.timer2)
				      	    			clearInterval(that.timer3)
//										
																}
//								},1000)
                
              
   },
   methods:{

   	 tiaozhuan:function(){
        this.$router.push('/ChallageFailure');
     },
//   点击答案事件
     select:function(tmp){
     	
       var that = this;
	   that.correct = tmp.name;
	  $(".answer li").removeClass("disabled");
//	  点击之后执行以下代码
      function setTime(){
//    	清除不点击的定时器	
//      cleartimer()
      	clearInterval(that.timer);
//    	点击后两秒请求新数据
 	    setTimeout(()=>{ 	    	
 	    	clearInterval(that.timer);
 	    	$(".answer li").removeClass("disabled");
	 		that.num++;
	 		window.sessionStorage.setItem('num2', that.num);	 		
			that.$Post('/answer',{user_id:that.userInfo.user_id, num:that.num}, function(data){
               that.id = data.data.id;
               window.sessionStorage.setItem('ti_id', that.id);
               that.name = data.data.name;
               that.answer = JSON.parse(data.data.xuan)
               that.codemessage = 10;
               var res = [];
				for (var i = 0, len = that.answer.length; i < len; i++) {
				  // 随机叫个
				  var randomIndex = Math.floor(Math.random() * that.answer.length);
				  // 出列到新队伍
				  res[i] = that.answer[randomIndex];
				  // 出来了不能继续叫了哦
				 that.answer.splice(randomIndex, 1); 
				}
				that.answer = res;
             
//             停止2s开始倒计时
               that.a = setTimeout(()=>{
               	
//      		开始倒计时				
                that.timer2 = setInterval(()=>{                	
                	console.log("========点击事件定时器========")
                	that.timer3 = that.timer2               
               	    that.codemessage--;	
               	    if(that.codemessage == 0){
               	  			that.codemessage = 10;
                        	that.num++;	                         	
                            that.$Post('/answer',{user_id:that.userInfo.user_id, num:that.num}, function(data){                  
                      		that.id = data.data.id;
	                        that.name = data.data.name;
//	                        that.success = data.data.success;	                        
	                 	    that.answer = JSON.parse(data.data.xuan)	                 	  
					   		var res = [];
							for (var i = 0, len = that.answer.length; i < len; i++) {
							  // 随机叫个
							  var randomIndex = Math.floor(Math.random() * that.answer.length);
							  // 出列到新队伍
							  res[i] = that.answer[randomIndex];
							  // 出来了不能继续叫了哦
							 that.answer.splice(randomIndex, 1); 
							}
							that.answer = res;
							  }); 	
							 
							  if(that.num-1<10){
							  	
								that.$Post('/correct',{user_id:that.userInfo.user_id, num:that.num-1,id:that.id,user_nick:that.userInfo.user_nick,time:0,correct:""}, 
								function(data){ 
									
						 }); 
							  }
							  
							  
						if(that.num-1 == 10){
				       /*     alert("执行的里面的num=10")
      	    				that.$Post('/correct',{user_id:that.userInfo.user_id, num:9,id:that.id,user_nick:that.userInfo.user_nick,time:0,correct:""}, 
								function(data){
									alert("执行的第10个里面的")
								})*/
								
      	    		   		
//    	    		setTimeout(()=>{
      	    			that.$Post('/correct',{user_id:that.userInfo.user_id, num:10,id:that.id,user_nick:that.userInfo.user_nick,time:0,correct:""}, 
								function(data){ 	
									window.sessionStorage.setItem("setPhysical",data.data.physical);
									that.success = data.data.success;
									
									clearInterval(that.timer)
				      	    		clearInterval(that.timer2)
				      	    		clearInterval(that.timer3)
				      	    		clearInterval(that.a)
				      	    		window.sessionStorage.removeItem("num")
				   	  				window.sessionStorage.removeItem("num2")
				   	  				window.sessionStorage.removeItem("number")
				   	  				if(that.success == 1){
				   	  					
				   	  					that.$router.push('/ChallageSuccess')
				   	  				}else{
				   	  					
				   	  					that.$router.push('/ChallageFailure')
				   	  				}
				   	  				
				   	  				
						 }); 
						that.num = 10
//    	    		},0)			  		
      	    
      	    		  	
			  }
							  

										  
               	                 }     
//             	                 		10s倒计时
			

//			10s倒计时
                },1000);
                
               /* if(that.num == 10){
				
      	    		  alert("执行的外边的num===10")
      	    		  that.$Post('/correct',{user_id:that.userInfo.user_id, num:10,id:that.id,user_nick:that.userInfo.user_nick,time:0,correct:""}, 
								function(data){
									alert("执行的第10个外外外面的")
								})
      	    		   		
      	    		setTimeout(()=>{
      	    			that.$Post('/correct',{user_id:that.userInfo.user_id, num:10,id:that.id,user_nick:that.userInfo.user_nick,time:0,correct:""}, 
								function(data){ 	
									window.sessionStorage.setItem("setPhysical",data.data.physical);
									that.success = data.data.success;
									
									clearInterval(that.timer)
				      	    		clearInterval(that.timer2)
				      	    		clearInterval(that.timer3)
				      	    		clearInterval(that.a)
				      	    		window.sessionStorage.removeItem("num")
				   	  				window.sessionStorage.removeItem("num2")
				   	  				window.sessionStorage.removeItem("number")
				   	  				if(that.success == 1){
				   	  					
				   	  					that.$router.push('/ChallageSuccess')
				   	  				}else{
				   	  					
				   	  					that.$router.push('/ChallageFailure')
				   	  				}
				   	  				
				   	  				
						 }); 
						
      	    		},9000)			  		
      	    
      	    		  	
			  }*/
                
                
/*				if(that.num>10){
  	    			clearInterval(that.timer)
  	    			clearInterval(that.a)
  	    			clearInterval(that.timer2)
  	    			clearInterval(that.timer3)
//										
											}*/
//                停止1s开始倒计时  
               },1000)
         	});
      	    $(".answer li").removeClass("active")
      	    $(".answer li").removeClass("false");
			
          },2000)

         }

       var id="a"+tmp.id;
	   that.$Post('/correct',{user_id:that.userInfo.user_id, num:that.num,id:that.id,user_nick:that.userInfo.user_nick,time:that.codemessage,correct:that.correct}, function(data){
			 that.flag = data.data.flag;
			 that.correct = data.data.correct;
			 that.success = data.data.success;	
			 if(that.num<10){
			 	that.number += parseInt(data.data.score);
			 }else if(that.num==10){			 	
			 	that.number = parseInt(data.data.score);			 	
			 	that.$store.state.physical = data.data.physical;
			 	window.sessionStorage.setItem("setPhysical",data.data.physical);
			 }			
	  		window.sessionStorage.setItem('number', that.number);			 	
			if(that.num == 10){
      	    	if(that.success == 1){
      	    		
    	    		clearInterval(that.timer)
      	    		clearInterval(that.timer2)
      	    		clearInterval(that.timer3)
      	    		clearInterval(that.a)
      	    		window.sessionStorage.removeItem("num")
   	  				window.sessionStorage.removeItem("num2")
   	  				window.sessionStorage.removeItem("number")
      	    		setTimeout(()=>{
      	    			clearInterval(that.timer)
	      	    		clearInterval(that.timer2)
	      	    		clearInterval(that.timer3)
      	    			that.$router.push('/ChallageSuccess')
      	    		},2000)
			  		
      	    	}else{      	    		
      	    		clearInterval(that.timer)
      	    		clearInterval(that.timer2)
      	    		clearInterval(that.timer3)
      	    		clearInterval(that.a)
      	    		window.sessionStorage.removeItem("num")
   	  				window.sessionStorage.removeItem("num2")
   	  				window.sessionStorage.removeItem("number")
      	    		setTimeout(()=>{
      	    			clearInterval(that.timer)
	      	    		clearInterval(that.timer2)
	      	    		clearInterval(that.timer3)
      	    			that.$router.push('/ChallageFailure')
      	    		},2000)
			  		
      	    	}
			  	
			  }
//	答对的情况
	 if(that.flag === 1){
		  
         $("#"+id).attr("class","active");
         $(".answer li").addClass("disabled");
  			 setTime()
  			 clearInterval(that.timer)
  			 clearInterval(that.timer2)
  			 clearInterval(that.timer3)
  			 clearTimeout(that.a)			  
       	}else{
//  答错的情况
          $("#"+id).attr("class","false");          
          that.answer.forEach(function(data){
       			if(that.correct == data.name){      				
       				$("#a"+data.id).attr("class","active");
       			}      			
       		})
        $(".answer li").addClass("disabled");         
          setTime()
          clearInterval(that.timer)
          clearInterval(that.timer2)
          clearInterval(that.timer3)
          clearInterval(that.a)
		      }			
				})

     }
   },
    watch:{
  $route(to,from){
    
  }
},
   beforeUpdate(){
	   var that = this;
//     var self=this;
       var left=that.number;
     
       var mypercent=parseInt((that.number/36)*100);
       $("#div1").myProgress({speed: 1000, percent:mypercent, width: "8.33rem", height: "16px"});
       $(".percent-show>span").css({"position":"absolute","left":left+'%',"color":"transparent"});
        $(".percent-show").css({"left":left+'%'});


   	   
   },
   mounted(){
   	   
   },
   beforeDestroy(){

   },
   destroyed() {
   	    var that = this;
        window.sessionStorage.removeItem("num")
		window.sessionStorage.removeItem("num2")
		window.sessionStorage.removeItem("number")		         
  		  	 clearInterval(that.timer)
  			 clearInterval(that.timer2)
  			 clearInterval(that.timer3)
  			 clearTimeout(that.a)
 },
 
 


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
  .main_pay{
     display: none;
 } 
.main_box>img{
    height: 100%;
    width: 100%;
    position: fixed;
}
.title_box{
    background: url('../../static/img/datibg.png');
    background-size:100% 100%; 
    width:100%;
    height:3.33rem;
    position: relative;
}
.progress-out {
    position: relative;
    border: 3px solid #ffffff;
    background-color: #fff;
    margin:0 auto;
    border-radius: 10px;
    overflow: hidden;
}
.percent-show {
    position: absolute;
    /* width: 100%; */
    height: 100%;
    top: 0;
    left: 0;
    color: #000;
    text-align: center;
    z-index: 2;
}
.progress-in {
    border-radius: 10px;
    position: relative;
    height: 100%;
    width: 0%;
    border: none;
    background-color: #00A3FF;
    background-image: linear-gradient(top, #00A3FF 0%, #00A3FF 40%, #00A3FF 100%);
    background-image: -webkit-linear-gradient(top, #00A3FF 0%, #00A3FF 40%, #00A3FF 100%);
    background-image: -moz-linear-gradient(top, #00A3FF 0%, #00A3FF 40%, #00A3FF 100%);
    background-image: -o-linear-gradient(top, #00A3FF 0%, #00A3FF 40%, #00A3FF 100%);
    background-image: -ms-linear-gradient(top, #00A3FF 0%, #00A3FF 40%, #00A3FF 100%);
    text-align: center;
    color: #fff;
    z-index: 1;
}
.direction-left {
    left: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
}
.title_box p:first-of-type{
    position: relative;
    color:#ffffff;
    font-size:0.38rem;
    text-align: center;
    padding-top:0.2rem;
}
.second{
    position: absolute;
    left: 50%;
    bottom: 0.2rem;
    transform: translate(-50%);
    color: #ffffff;
    font-size: 0.83rem;
}
.homework{
    position: relative;
    color:#ffffff;
    text-align: center;
    padding: 0.55rem;
}
.subject{
    font-size:0.5rem;
    padding-bottom: 0.55rem;
}
.answer li{
    background:url(../../static/img/unselect.png);
    background-size:100% 100%;
    height:1.66rem;
    width:100%; 
    font-size: 0.55rem;
    line-height: 1.66rem;
    margin-bottom: 0.55rem;
}
.active{
   background:url(../../static/img/true.png) !important;
   background-size:100% 100% !important;
   height: 1.66rem !important;
    width: 100% !important;
}
.false{
  background:url(../../static/img/false.png) !important;
   background-size:100% 100% !important;
   height: 1.66rem !important;
    width: 100% !important;  
}
</style>
      	    

