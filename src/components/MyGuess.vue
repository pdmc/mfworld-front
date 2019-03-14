

 <template>
 	<div class="middle-index">
 		<div style="background:#ffffff">
 			<div class="tab">
            	<img src="../../static/img/back.png" alt="" @click="close()">
            	<span>我的竞猜</span>
        	</div>
        	        <div class="content" style="margin-top:2.4rem">
            <ul class="flex-layout category-head clearfix" id="category-head" style="width: 100%;position: fixed;top:1.1rem;left:0;background: #fff;z-index: 1000;border-bottom: 0.013rem solid gainsboro;
    border-top: 0.013rem solid gainsboro;" >
                    <!--<li class="flex" style="color:#00A3FF">全部</li>
                    <li class="flex" >世界杯</li>
                    <li class="flex" >热门</li>-->
                    <li @click="chose(item,index)" v-for="(item,index) in list" :key="index" class="flex" ><span v-bind:class="{item:index==thisItem}">{{item.name}}</span></li>
            </ul>
            <div class="comming" v-for="(tmp,index) in coming">
            	<div class="box_con">
	            	<div class="box_con_coming">
	            		<span class="icon">进行中</span><span class="djs">倒计时:{{tmp.create_time}}</span>
	            		<p class="jzsj">截止投注时间:{{tmp.close_time}}</p>
	            		<p class="subject">{{tmp.title}}</p>
	            	</div>
            	</div>
	            <div style="margin-top:0.25rem">
	            		<p style="fontSize:0.38rem;margin-left:0.41rem">我已投注<br /> {{tmp.color_value}}个彩钻{{"押 : "+tmp.correct}}</p>
	            		<!--<p style="fontSize:0.38rem;color: #BBB;margin-left:0.41rem">我已投注<br /> 000个MISS币压</p>-->
	            </div>           	
            </div>
            
            <div class="waiting" v-for="(tmp,index) in  mywaiting">
            	<div class="box_con">
	            	<div class="box_con_coming">
	            		<span  class="icon2">待开奖</span>
	            		<p class="jzsj">截止投注时间: {{tmp.closetime}}</p>
	            		<p class="subject">{{tmp.title}}</p>
	            	</div>
            	</div>
	            <div style="margin-top:0.25rem">
	            		<p style="fontSize:0.38rem;margin-left:0.41rem">我已投注<br /> {{tmp.color_value}}个彩钻{{"押 : "+tmp.correct}}</p>
	            		<!--<p style="fontSize:0.38rem;color: #BBB;margin-left:0.41rem">我已投注<br /> 000个MISS币压</p>-->
	            </div>           	
            </div> 
            
            <div class="ago"  v-for="(tmp,index) in ago" :key="index">
            	<div class="box_con">
	            	<div class="box_con_coming">
	            		<span  class="icon2">已开奖</span><span :id="'res'+index"  class="djs" style="margin-left:5rem">{{qqq[index]}}</span>
	            		<!--<span  class="icon2">已开奖</span><span :id="'res'+index" ref="sp" class="djs" style="margin-left:5rem">{{tmp.color_win==0.00000?"未猜中":"+"+tmp.color_win}}</span>-->
	            		<p class="jzsj">截止投注时间: {{tmp.close_time}}</p>
	            		<p class="subject">{{tmp.title}}</p>
	            	</div>
            	</div>
	            <div style="margin-top:0.25rem">
	            		<p style="fontSize:0.38rem;margin-left:0.41rem">我已投注<br /> {{tmp.color_value}}个彩钻{{"押 : "+tmp.correct}}</p>
	            		<!--<p style="fontSize:0.38rem;color: #BBB;margin-left:0.41rem">我已投注<br /> 000个MISS币压</p>-->
	            </div>           	
            </div> 
                  
        </div>
 		</div>
 	</div>
 </template>

<script>
export default {
    data () {
        return {
           number:"",
           type:-1,
           selectItem:-1,
           come:0,    
           user_id:"",
           coming:[],
           mywaiting:[],
           ago:[],
           no:[],
           dato:"",
           uptime:[],
           zshu:0,
           size:0.1,
           color:0,
           mycode:-1,
           myxzhu:-1,
           sureXiazhu:1,
           mytitle:"",
           idLength:[],
           waitLength:[],
           user_id:"",
           list:[],
           thisItem:0,
           timer:null,
           tim:[],
           list:[{"name":"全部"},{"name":"进行中"},{"name":"猜中"},{"name":"未猜中"}],
           qqq:[]
        }
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
		/*that.$Get('/guesslog?user_id='+that.user_id, function(data){
			
		})*/
    },

    methods: {
    	chose:function(item,index){ 
    		var that = this;
    		that.tim.forEach(function(res){
      	 	clearInterval(res);
      	 	})
    		that.thisItem=index;
    		var id = item.id;
    		that.idLength=[],
    		that.waitLength=[],
           that.coming=[];
           that.mywaiting=[];
           that.ago=[];
           if(!that.create_time){
           	that.create_time = null
           }
           if(!that.closetime){
           	that.closetime = null
           }
           
           if(index == 0){ 
           	
           		 that.getData(); 
           	
//         	  that.$router.go(0)
           	 
           }else if(index == 1){
    	   
         	
         	that.$Get("/conduct?user_id="+that.user_id,function(data){
			         	   var now=data.data.now;
				           var data=data.data;
				         
							var arr = []
				         	for(var key in data){       
				         		
							if(data[key] == now){
					           		return
					           	}
				            if(data[key].guess.status == 1){
				            	
				                let obj=data[key].guess;
				//              console.log(arr)               
				                that.coming.push(data[key].guess);                			
				                that.coming[key].color_value = data[key].color_value;
				                that.coming[key].correct = data[key].correct;
				                var clsetime=data[key].guess.close_time-now;//倒计时
				                var close_time=data[key].guess.close_time;//结束时间
				       		
				
				                if(clsetime>=0){
				                    obj.zshu=1;
				                    
				                    that.countDown(clsetime,key);//倒计时
				                    that.endTime(close_time,key);//结束时间
				                }else{
				                   obj.zshu=2;
				                   that.endTime(close_time,key);
				                }
				                
				            }}
				         	
				         	
				         	
         		
         	})
    		
    		}else if(index ==2){
    			that.qqq=[];
    			that.$Get("/result?user_id="+that.user_id+"&status=1",function(data){
    				       var now=data.data.now;
				           var data=data.data;
    						
				         	for(var key in data){ 
				         	   var clotime=data[key].guess.close_time;
				                that.ago.push(data[key].guess);
				                that.ago[key].correct = (data[key].correct);
				                that.already(clotime,key);
				                var res = data[key].guess.color_win
                				that.qqq.push(res)
				         	}
    			})
    		}else if(index ==3){
    			that.qqq=[];
    			that.$Get("/result?user_id="+that.user_id+"&status=2",function(data){
    				       var now=data.data.now;
				           var data=data.data;
    						
				         	for(var key in data){ 				         		
				         	   var clotime=data[key].guess.close_time;
				                that.ago.push(data[key].guess);
				                that.ago[key].correct = (data[key].correct);
												                
				                that.already(clotime,key);
                				if(data[key].guess.result == 2){
                				that.qqq.push("未猜中")
                				}
				         	}
    			})
    		}
    		
    		
    	},
		quxiao:function(){
         this.myxzhu=-1;
        },
      sure:function(id,index){
          let that=this;
          that.myxzhu=-1;
          if(that.color<=0){
              that.sureXiazhu=2;
              return false;
          }else{
          let mysize=that.size;
          let mycorrect=that.mytitle;
          that.$Post('/bets',{id:id,correct:mycorrect,user_id:that.user_id,color:mysize,type:1},function(data){
             console.log(data);
             if(data.code =="201"){
//           	alert("您的余额不足")
				mizhu.alert('温馨提示', '您的余额不足');
             }else if(data.code =="202"){
//           	alert("超过次数")
				mizhu.alert('温馨提示', '超过次数');
             }else if(data.code =="203"){
//           	alert("操作失败")
				mizhu.alert('温馨提示', '操作失败');
             }else if(data.code =="200"){
//           	alert("下注成功")
				mizhu.alert('温馨提示', '下注成功');
             }
          });
        }
      },

      close:function(){
          window.history.go(-1);
      },

      blue:function(index,id){
         let that=this;
         that.type=index;
         that.selectItem=-1;
         that.sureXiazhu=1;
         that.$Post('/max',{id:id,user_id:that.user_id},function(data){
             that.size= Number(data.data.size);
             that.color= Number(data.data.color);
         });
      },
      yellow:function(index,id){
        let that=this;
        that.selectItem=index;
        that.type=-1;
        that.sureXiazhu=1;
        that.$Post('/max',{id:id,user_id:that.user_id},function(data){
            that.size= Number(data.data.size);
             that.color= Number(data.data.color);
         });
      },
    
      countDown:function(times,i){
//    	alert(times+"-----"+i)
        let that=this;
        that.timer=null;
        
        
        var daojishi="";
            var day=0,
            hour=0,
            minute=0,
            second=0;//时间默认值
            if(times > 0){
                   that.zshu=1;
                    day = Math.floor(times / (60 * 60 * 24));
                    hour = Math.floor(times / (60 * 60)) - (day * 24);
                    minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
                    second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (day <= 9) day = '0' + day;
            if (hour <= 9) hour = '0' + hour;
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            //
            daojishi=day+":"+hour+":"+minute+":"+second+"";
            that.coming[i].create_time=daojishi;
        // console.log(i);
        that.timer=setInterval(function(){
            var daojishi="";
            var day=0,
            hour=0,
            minute=0,
            second=0;//时间默认值
            if(times > 0){
                   that.zshu=1;
                    day = Math.floor(times / (60 * 60 * 24));
                    hour = Math.floor(times / (60 * 60)) - (day * 24);
                    minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
                    second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (day <= 9) day = '0' + day;
            if (hour <= 9) hour = '0' + hour;
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            //           
            daojishi=day+":"+hour+":"+minute+":"+second+"";
//          console.log
            
            that.coming[i].create_time=daojishi;
//           console.dir(that.coming)
            times--;
        },1000);
        that.tim.push(that.timer)
       
        if(times<=0){
          
            clearInterval(that.timer);
        }
 			
      
    },
      endTime:function(times,i){
          
          this.idLength.push(i);
          //console.log(this.idLength);
          let that=this;
          var timess=times*1000;
          var date = new Date(timess);
          var  Y = date.getFullYear() + '-';
          var   M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
          var   D = date.getDate() + ' ';
          var h = date.getHours() + ':';
          var  m = date.getMinutes() + ':';
          var s = date.getSeconds(); 
           M = M < 10 ? ('0' + M) : M;
           D= D < 10 ? ('0' + D) : D;
           h = h < 10 ? ('0' + h) : h;
           m = m < 10 ? ('0' + m) : m;
           s = s < 10 ? ('0' + s) : s;
          //console.log(that.coming[i]);
         that.coming[i].close_time=Y+M+D+h+m+s;
         
             //that.waiting[i].close_time=Y+M+D+h+m+s;
      },
      wait:function(times,ii){
        // console.log(ii);
        //  for(var )
        
         this.waitLength.push(ii);
         // console.log(this.idLength.length);
          var i=ii-this.idLength.length;
    
          //console.log(i);
         if(ii>0){
   			
    			var i=ii-this.idLength.length;   
    		}else{
    				var i =0		
    		}
//        alert("iiiii"+ii)
          let that=this;
          var timess=times*1000;
          var date = new Date(timess);
          var  Y = date.getFullYear() + '-';
          var   M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
          var   D = date.getDate() + ' ';
          var h = date.getHours() + ':';
          var  m = date.getMinutes() + ':';
          var s = date.getSeconds();
           M = M < 10 ? ('0' + M) : M;
           D= D < 10 ? ('0' + D) : D;
           h = h < 10 ? ('0' + h) : h;
           m = m < 10 ? ('0' + m) : m;
           s = s < 10 ? ('0' + s) : s;
          //console.log(that.mywaiting); 
//        if(i>0){var i =0}
//alert("-------||||"+i)
          that.mywaiting[i].closetime=Y+M+D+h+m+s;
          //that.mywaiting[0].closetime=Y+M+D+h+m+s;
      },
      already:function(times,ii){
        //  console.log(ii);
         
          var alllength=this.idLength.length+this.waitLength.length;
//        alert("idLength"+this.idLength.length+"waitLength"+this.waitLength.length)
                    	               	
    		if(ii>0){
    				
    			var i=ii-alllength;
    		}else{
    			 var i =0  		
    		}
//      alert("iiiii"+ii)
        //   console.log(alllength);
          let that=this;
          var timess=times*1000;
          var date = new Date(timess);
          var  Y = date.getFullYear() + '-';
          var   M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
          var   D = date.getDate() + ' ';
          var h = date.getHours() + ':';
          var  m = date.getMinutes() + ':';
          var s = date.getSeconds();
           M = M < 10 ? ('0' + M) : M;
           D= D < 10 ? ('0' + D) : D;
           h = h < 10 ? ('0' + h) : h;
           m = m < 10 ? ('0' + m) : m;
           s = s < 10 ? ('0' + s) : s;
          //console.log(that.mywaiting); 
//       alert("-------||||"+i)
           that.ago[i].close_time=Y+M+D+h+m+s;
          //that.mywaiting[i].closetime=Y+M+D+h+m+s;
          //that.mywaiting[0].closetime=Y+M+D+h+m+s;
      },
      add:function(index){
           let that=this;
           if(that.size>=that.color){
               that.mycode=index;
               setTimeout(function(){
                 that.mycode=-1;
               },1500);
               that.sureXiazhu=2;
               return  false;
           }else{
              that.size+=0.1;
              that.size=Number(that.size.toFixed(1));
           }
      },
      reduce:function(){
        if(this.size<=0.1){
            return false;
        }else{
              this.size-=0.1;
              this.size=Number(this.size.toFixed(1));
        }
      },
      max:function(){
        let that=this;
        that.size=that.color;
      },
      xiazhu:function(id,title,index){
  
         let that=this;
         console.log(title);
         that.mytitle=title;
         if(that.color<=0){
            that.myxzhu=-1;
            that.sureXiazhu=0;
            that.mycode=index;
               setTimeout(function(){
                 that.mycode=-1;
               },1500);
         }else{
         that.myxzhu=index;
      }},
      setStyle:function(){
         $(".successOne").css("width","100%");
      },
      getData:function(){
      	let that = this;        
        that.$Get('/guesslog?user_id='+that.user_id, function(data){
/*        	if(data.code == "201"){
        		alert("没有登录请登录")    		    
     		    that.$router.push('/Login');
        	}      */ 
//         that.list = data.data.cate
			
           var now=data.data.now;
           var data=data.data;
//         console.log(data)
			var arr = []
           for(var key in data){   
           	if(data[key] == now){
           		return
           	}
   
            if(data[key].guess.status==1){
                let obj=data[key].guess;
//              console.log(arr)          

                that.coming.push(data[key].guess);                
//              that.coming[key].color_value = data[key].color_value;
				that.coming[key].correct = data[key].correct;
                console.dir("========"+that.coming)
                var clsetime=data[key].guess.close_time-now;//倒计时
                var close_time=data[key].guess.close_time;//结束时间
//       		console.dir(that.coming)

                if(clsetime>=0){
                    obj.zshu=1;
                    
                    that.countDown(clsetime,key);//倒计时
                    that.endTime(close_time,key);//结束时间
                }else{
                   obj.zshu=2;
                   that.endTime(close_time,key);
                }
                
            }else if(data[key].guess.status==2){
//                 console.log(key);
//              alert("wit")
				
                that.mywaiting.push(data[key].guess);
              	var i = key - that.idLength.length;
              	that.mywaiting[i].correct = (data[key].correct);
//              that.mywaiting[key].color_value = data[key].color_value;
                var closetime=data[key].guess.close_time;
//                 console.log(closetime);
//                console.log(key);
                that.wait(closetime,key);
                
            }else if(data[key].guess.status==3){
                                          

                if(data[key].guess.result == 1){
                	
                	var clotime=data[key].guess.close_time;
	                that.ago.push(data[key].guess);
	                that.already(clotime,key);  
                		 var alllength=that.idLength.length+that.waitLength.length;
                   		 var i=key-alllength;
                   		 that.ago[i].correct = (data[key].correct);
						 var res = data[key].guess.color_win;
                    	 that.qqq.push(res);

                }else if(data[key].guess.result == 2){ 
                	var clotime=data[key].guess.close_time;
	                that.ago.push(data[key].guess);
	                that.already(clotime,key);  
                		var alllength=that.idLength.length+that.waitLength.length;
                   		var i=key-alllength;
                   		that.ago[i].correct = (data[key].correct);
						var res2 = "未猜中";
						that.qqq.push(res2)
//					console.log("2222222"+that.qqq)
                 
          	
                }
                 
            }else{
                that.no.push(data[key].guess);
            }
        }
      });
        
    }
		,
		
//    }
    },
    mounted(){
         this.getData()
        
    }


}
</script>

<style scoped>


ul li{
    list-style: none;
}
   .item{
   	 color: #2060B5;
   	 border-bottom:1px solid #2060B5;
   	 padding-bottom: 0.1rem;
   }
  .clearfix:after {
			display: block;
			content: '';
			clear: both;
			width: 0px;
			height: 0px;
 }

.middle-index>img{
    height: 100%;
    width: 100%;
    position: fixed;
}
.tab{
   background: #ffffff;
    height: 1.25rem;
     position: fixed;
		    top: 0px;
		    z-index: 1000;
    width: 100%;
    line-height: 1.11rem;
    border-bottom: 0.013rem solid gainsboro;
}
.tab img{
        width: 0.66rem;
        margin-left: 0.25rem;
    margin-top: 0.22rem;
}
.tab span:first-of-type{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    font-size: 0.44rem;
}
.tab span:last-of-type{
    float: right;
    font-size:0.44rem;
    padding-right: 0.2rem;
}
.flex{
	text-align: center;
}
#category-head li{
    display:inline-block;
    width:2.22rem;
    font-size: 0.44rem;
    float: left;
    line-height: 1rem;
}


.box_con_coming{
	width:9.7rem;
	background: #F2F2F2;
	margin:0 auto;
	padding-bottom: 0.14rem;
	border-radius: 0.13rem;
}
.icon{
	width:2.22rem;
	height:0.69rem;
	display: inline-block;
	font-size: 0.33rem;
	background: #FF4081 100%;
	text-align: center;
	color: #fff;
	line-height: 0.69rem;
	margin-left:0.41rem;
	margin-right:0.2rem;
}
.icon2{
	width:2.22rem;
	height:0.69rem;
	display: inline-block;
	font-size: 0.33rem;
	background: #BBBBBB 100%;
	text-align: center;
	color: #fff;
	line-height: 0.69rem;
	margin-left:0.41rem;
	margin-right:0.2rem;
}
.djs{
	font-size: 0.38rem;	
}
.jzsj{
	font-size: 0.27rem;
	margin-left:0.41rem;
	margin-top: 0.14rem;
    margin-bottom: 0.14rem;
}
.subject{
	font-size:0.44rem;
	margin-left:0.41rem;
	

    text-align: left;
    font-weight: 600;
    font-family: Roboto;
    color: #4B4B4B;
	
}
</style>


