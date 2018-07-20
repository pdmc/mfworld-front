 <template>  
    <div class="middle-index" style="padding-bottom: 1.6rem;">
      <!--<img src="../../static/img/indexBG.jpg" alt="">-->
      <div class="tab1">
          <div class="tabLeft inline clearfix">
              <img src="../../static/img/laba.png" alt="">
              <span>公告：</span>
          </div>
          <div class="tabRight box clearfix">
            <div class="winBox">
                <ul class="scroll">
                    <li><a href="#">欢迎来到IONTRUM!</a></li>
                    <li><a href="#">欢迎来到IONTRUM!</a></li>
                    <li><a href="#">欢迎来到IONTRUM!</a></li>
                </ul>
            </div>
           </div>
      </div>
      <div class="content">

         <ul class="contentUl">
             <li>
                 <img src="../../static/img/cai.png" alt="" @click="caizuan()">
                 <span>彩钻&nbsp;{{$store.state.ucolor || 0}}</span>
             </li>
             <li>
                 <img src="../../static/img/neng.png" alt="" @click="energy1()">
                 <span>能量&nbsp;{{$store.state.energy || 0}}</span>
             </li>

             <div stylel="margin-left:5rem" class="logo" @click="my_account()">
                     <img src="../../static/img/logo.jpg" alt="">
                     <img src="../../static/img/man.png" alt="" v-if="type==1">
                     <img src="../../static/img/girl.png" alt="" v-else>
             </div>
         </ul>

          <div class="search-box">
            <div class="form-group">
                 <input type="text" class="form-control" v-model="searchText" placeholder="搜索" @keyup.enter="exec_search">
                 <span class="right" @click="exec_search"><img src="../../static/img/zoom-icon.png"></span>
            </div>
          </div>

         <div class="center clearfix">
			<div id="water" style="width:2.77rem;height:2.77rem;background-position-y:0px;" class="box_center">
				<img style="width:2.79rem;height:2.79rem;display: inline-block;" src="../../static/img/home_mirailatoken_01.png" alt="" />
			</div>
			<p style="fontSize:0.33rem;color: #AAA;">48小时未收取，将停止生产新的彩钻</p>
			<p style="fontSize:0.33rem;color: #2060B5">当前</p>
			<p id="pColor"  style="fontSize:0.61rem;color: #2060B5">{{$store.state.num}}</p>
			<span class="center_btn" style="background: #2060B5;" @click="getColor()">立即收取</span>
			
         </div>
      </div>
      <div class="main clearfix" style="position:relative;width:9.44rem;margin:0 auto;">
          <div class="intro clearfix">


             <ul class="ul_box clearfix">
                <li  @click="invite()"><img style="border-left:none" src="../../static/img/home_P15_CN.jpg" alt="" /></li>
                <li @click="nengliangtishen()"><img src="../../static/img/home_P14_CN.jpg" alt="" /></li>
                <li @click="jingcai()"><img src="../../static/img/home_P13_CN.jpg" alt="" /></li>
                <li @click="caizuanjingpai()"><img src="../../static/img/home_P12_CN.jpg" alt="" /></li>
            </ul>
            
            <p style="font-size:0.5rem;color:#AAA;text-align:center;line-height: 1.11rem;margin-top:0.55rem;margin-bottom: 0.27rem;;" v-if="$store.state.isShow">热门竞猜</p>
            <!-- <p @click="jingcai()" style="background:url(../../static/img/jingca.png);background-size:100% 100%;width:9.44rem;height:1.66rem;line-height: 1.66rem; text-align: center;color:#ffffff;font-size:0.5rem">
                   彩钻竞猜
            </p> -->
            <div class="clear"></div>
            
                                  
          </div>
          
          
      </div>
      <div class="clear"></div>
      <div id="box_foot">			
			<!--<guess></guess>-->
			<template>
  
    <div class="middle-index">
      
      <div style="background:#ffffff">

        <div class="content1">

            <div class="guess">
               <div class="coming" v-for="(tmp,index) in coming">
                    <div class="guessList" >
                        <div class="last clearfix">
                            <span style="color: #fff;">进行中</span>
                            <span v-if="tmp.zshu==1">倒计时:{{tmp.create_time}}</span>
                            <span v-else>倒计时:00:00:00:00</span>
                            <p>投注截止时间：{{tmp.close_time}}</p> 
                            <div class="clear"></div>
                            <p>{{tmp.title}}</p>
                        </div>
                        
                        <div class="xiazhu" style="padding:0.53rem;border-bottom: 1px solid #F2F2F2">
                            <ul class="xiazhuli clearfix" style="width: 108%;margin: 0 auto;">
                                <li>{{tmp.option_one}}</li>
                                <li>{{tmp.option_two}}</li>
                            </ul>
                            <div class="another clearfix">
                                <div class="blue" @click="blue(index,tmp.id)">
                                    <p>下注</p>
                                    <!--<span style="font-size: 0.27rem;display: block;margin-top: 0.2rem;">赔率{{tmp.odds1}}</span>-->
                                </div>
                                <div class="progress" @click="xiaHide()">
                                    <span>支持率{{tmp.support1}}%</span>
                                    <div class="progressP "  >
                                    	<p v-if="isShow[index] == 1" style="width:100%;background: gainsboro;"></p>
                                    	<template v-else="isShow[index] == 0">
	                                        <p :id="'pro'+index" v-bind:style="{width:tmp.support1+'%'}"></p>
	                                        <p class="successTwo" v-bind:style="{width:tmp.support2+'%'}"></p>
                                        </template>
                                        
                                    </div>
                                    <span>支持率{{tmp.support2}}%</span>
                                    <p style="font-size: 0.27rem;margin-top: 0.2rem;text-align: center;">奖池 {{tmp.option_all_total}} 彩钻</p>
                                </div>
                                <div class="yellow" @click="yellow(index,tmp.id)">
                                    <p>下注</p>
                                    <!--<span style="font-size: 0.27rem;display: block;margin-top: 0.2rem;"><span style="font-size: 0.27rem;display: block;margin-top: 0.2rem;">赔率{{tmp.odds2}}</span></span>-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottomXia"  v-bind:class="{active:index==type1}" :id="'one'+index">
                        <div class="xiaLeft">
                            <p class="xiabg" @click="reduce()">-</p>
                            <p class="number">{{size}}</p>
                            <p class="xiabg" @click="add(index)">+</p>
                            <p class="xiabg" style="font-size:0.2rem" @click="max()">MAX</p>
                        </div>
                        <div class="xiaRight">
                            <p @click="xiazhu(tmp.id,tmp.option_one,index)" v-if="sureXiazhu==1">下注</p>
                            <p style="background:#BBBBBB;" v-else>下注</p>
                        </div> 
                    </div>
                    <div class="bottomXia" v-bind:class="{active:index==selectItem}" :id="'two'+index">
                        <div class="xiaLeft">
                            <p class="xiabg" style="background:#FF9800;"  @click="reduce()">-</p>
                            <p class="number">{{size}}</p>
                            <p class="xiabg" style="background:#FF9800;" @click="add(index)">+</p>
                            <p class="xiabg" style="font-size:0.2rem;background:#FF9800;" @click="max()">MAX</p>
                        </div>
                        <div class="xiaRight">
                            <p style="background:#FF9800;" @click="xiazhu(tmp.id,tmp.option_two,index)" v-if="sureXiazhu==1">下注</p>
                            <p style="background:#BBBBBB;" v-else>下注</p>
                        </div> 
                    </div>
                    <div class="code" v-bind:class="{active:index==mycode}">
                        <p style="text-align: center;">已达最大下注彩钻</p>
                        <!-- <p @click="sure()">确定</p> -->
                    </div>
                    <div class="xzhuSuccess" v-bind:class="{active:index==myxzhu}">
                        <p style="text-align: center">您确定要下注吗？</p>
                        <span style="text-align: center" @click="quxiao()">取消</span>
                        <span style="text-align: center" @click="sure(tmp.id,index)">确定</span>
                    </div>
               </div>
               
               
            </div>
        </div>
      </div>
    </div>
</template>
      </div>

      
    </div>
</template>
<script>
import guess from '@/components/IndexGuessCaizuan'

$(function() {
//	
/*  clearInterval(timer)
   var num = 0;  
   var timer = "";
    function goLeft() {
        //750是根据你给的尺寸，可变的
        if (num == -300) {
            num = 0;
        }
        num -= 1;
        $(".scroll").css({
            left: num
        })
        console.log(num)
    }
    //设置滚动速度
    timer = setInterval(goLeft, 9);    
console.log(this)*/
    
})
export default {
    data () {
        return {
          searchText: "",

           userInfo:"",
           type:"",
           user_id:"",
           perce:"",
           coming:[],
           timer:"",
           arrTimer:[],
           
           
           number:"",
           type1:-1,
           selectItem:-1,
           come:0,
        //    waiting:"",
           coming:[],
           mywaiting:[],
           ago:[],
           no:[],
        //    close_time:[],
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
           isShow:[]
        }
    },
    components:{
      guess
    },
    created(){    
    	  
  var num = 0;
   
   
 
    function goLeft() {
        //750是根据你给的尺寸，可变的
        if (num == -300) {
            num = 0;
        }
        num -= 1;
        $(".scroll").css({
            left: num
        })
//      console.log(num)
    }
    //设置滚动速度
    this.timer = setInterval(goLeft, 20000);    
    this.arrTimer.push(this.timer)
//  console.log(this.arrTimer)

    	
    	
    	
    	
      var that = this;
      var userInfo = window.sessionStorage.getItem("userInfo");
      var newColor = window.sessionStorage.getItem("newColor");
      var newEnergy= window.sessionStorage.getItem("newEnergy");
      that.userInfo = JSON.parse(userInfo);    
      if(that.userInfo){
      	that.userInfo = JSON.parse(userInfo);
      	that.user_id = that.userInfo.user_id;
//    	that.$store.state.color = that.userInfo.color;     	     	      		
      		that.$store.state.ucolor = that.userInfo.ucolor;
      		that.$store.state.energy = parseInt(that.userInfo.energy);
      		if(newEnergy){
      			that.$store.state.energy = newEnergy
      		}
      		if(newColor){      			
      			that.$store.state.ucolor = newColor
      		}
      	
      }else if(that.$store.state.energy === null || that.$store.state.ucolor === null){
      	    that.energy = 0,
      		that.ucolor = 0 
      }else{
      	that.userInfo = ''
      	that.$store.state.physical = 0;
      	that.user_id = "",
      	that.energy = 0,
      	that.ucolor = 0 
      }
      
     that.$Get("/refresh?user_id="+that.user_id,function(data){    
     	  
     	   	that.$store.commit("setColor",data.data.color);
      	   that.$store.commit("setNumber",data.data.num.num);  
      	   
      	   that.perce = data.data.num.perce;
      	
      	   if(data.data.num === "0.00000"){
						$("#pColor").addClass("disabled")
      	    			$("#pColor").html("0.00000");
      	   				$(".center_btn").css("background","#C0C0C0");
      	         	   
      	   }else{
      	   	$("#pColor").removeClass("disabled");
      	   }
		   $("#water").css("backgroundPositionY",-that.perce+"px")
      	   window.sessionStorage.setItem("newColor",data.data.color);
      	   window.sessionStorage.setItem("newEnergy",data.data.energy);  
      	   var newColor = window.sessionStorage.getItem("newColor");
           var newEnergy= window.sessionStorage.getItem("newEnergy");
      	   if(newEnergy){
      			that.$store.state.energy = newEnergy
      		}
      		if(newColor){      			
      			that.$store.state.ucolor = newColor
      		}
      	      
      	   
      	   
      	   
      	  if(data.data.guess.now){
		   	  	that.$store.state.isShow =true
		   	  }
           var now=data.data.guess.now;
           var data=data.data.guess;
           for(var key in data){
            if(data[key].status==1){
                let obj=data[key];
                that.coming.push(data[key]);
                var clsetime=data[key].close_time-now;//倒计时
                var close_time=data[key].close_time;//结束时间
                that.isShow.push(0);
				if(!data[key].support1 && !data[key].support2){
					that.isShow[key] = 1;
				}
                
                if(clsetime>=0){
                    obj.zshu=1;
                    that.countDown(clsetime,key);//倒计时
                    that.endTime(close_time,key);//结束时间
                }else{
                   obj.zshu=2;
                   that.endTime(close_time,key);
                }
                
            }else if(data[key].status==2){
                // console.log(key);
                that.mywaiting.push(data[key]);
                var closetime=data[key].close_time;
                // console.log(closetime);
                //console.log(key);
                that.wait(closetime,key);
            }else if(data[key].status==3){
                var clotime=data[key].close_time;
                that.ago.push(data[key]);
                that.already(clotime,key);
            }else{
                that.no.push(data[key]);
            }
        } 
      	   
      	         	      
      	      
      })    
    },
    methods: {
    exec_search: function(){
      let that = this, data = {'searchText': that.searchText};
      
      if(that.searchText){
        console.log(that.searchText)
        that.$router.push({name: 'SearchFrame', query: data});
      }
    },     	
      getColor:function(){     	  
      	 var that = this; 
      	 var val = $("#pColor").html()
      	 if(val>0){
      	 	that.$Post("/collect",{user_id:that.user_id,color:that.$store.state.num},function(data){
      	 		if(data.code == 202){
      	 			mizhu.alert('温馨提示', '收取失败');
      	 		}else{
      	 			that.$store.commit("setuColor",data.data.color)
      	 	   		 window.sessionStorage.setItem("newColor",data.data.color)
      	 		}     	 	    
      	 	});
			$("#pColor").html("0.00000");
			$(".center_btn").css("background","#C0C0C0");
			$("#water").css("backgroundPositionY","0px");
      	 }else{
    	 	return false
      	 }
      	   
      },
      caizuanjingpai:function(){
         this.$router.push('/herald');
        },
      nengliangtishen:function(){
           this.$router.push('/accelerate');
      },
      jingcai:function(){
         this.$router.push('/guessCaizuan'); 
      },
      help:function(){
          this.$router.push('/help');
      },
      caizuan:function(){
           this.$router.push('/caizuan');
      },
      energy1:function(){      	 	
      	 	this.$router.push('/energy');
      },
      my_account:function(){
          this.$router.push('/my_account');
      },
      invite:function(){
            this.$router.push('/InviteFirend');
      },
      
      
      
      
      
      xiaHide:function(){
      
//    		if($(".bottomXia").hasClass("article")){
      				$(".bottomXia").removeClass("active")

//    		}
    	   
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
//           	alert("您的余额不足");
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
             	that.coming[index].option_all_total = data.data.option_all_total;
             	that.coming[index].support1 = data.data.support1;
             	that.coming[index].support2 = data.data.support2;
             	that.isShow[index] = 0
             }
            
          });
        }
      },
      close:function(){
          window.history.go(-1);
          
      },
      blue:function(index,id){
      	
         let that=this;
         that.type1=index;
         that.selectItem=-1;
         if(!$(".bottomXia").hasClass("article")){
         	 $("#one"+index).addClass("active")
         }
        
         that.sureXiazhu=1;
         that.$Post('/max',{id:id,user_id:that.user_id},function(data){
             that.size= Number(data.data.size);
             that.color= Number(data.data.color);
         });
      },
      yellow:function(index,id){
        let that=this;
        that.selectItem=index;
        that.type1=-1;
        that.sureXiazhu=1;
        if(!$(".bottomXia").hasClass("article")){
         	 $("#two"+index).addClass("active")
         }
        that.$Post('/max',{id:id,user_id:that.user_id},function(data){
            that.size= Number(data.data.size);
            that.color= Number(data.data.color);
         });
      },
    
      countDown:function(times,i){
        let that=this;
        var timer=null;
        // console.log(i);
        
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
        
        timer=setInterval(function(){
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
            times--;
        },1000);
        if(times<=0){
          
            clearInterval(timer);
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
          let that=this;
          var timess=times*1000;
          var date = new Date(timess);
          var  Y = date.getFullYear() + '-';
          var   M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
          var   D = date.getDate() + ' ';
          var h = date.getHours() + ':';
          var  m = date.getMinutes() + ':';
          var s = date.getSeconds();
          //console.log(that.mywaiting); 
       
          that.mywaiting[i].closetime=Y+M+D+h+m+s;
          //that.mywaiting[0].closetime=Y+M+D+h+m+s;
      },
      already:function(times,ii){
        //  console.log(ii);
         
          var alllength=this.idLength.length+this.waitLength.length;
          var i=ii-alllength;
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
          //console.log(that.mywaiting); 
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
           	that.sureXiazhu=1;
              that.size+=0.1;
              that.size=Number(that.size.toFixed(1));
           }
      },
      reduce:function(){
        if(this.size<=0.1){
            return false;
        }else{
        	  this.sureXiazhu=1;
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
      
      
      
      
      
    },
    mounted(){
        var userInfo= window.sessionStorage.getItem('userInfo'); 
        this.userInfo=JSON.parse(userInfo);
        this.type=this.userInfo.user_sex;
//      console.log(this.userInfo); 
    },
    
    destroyed() {
		clearInterval(this.timer)
 },
}
</script>

<style scoped>
.search-box{text-align: center;padding-bottom: 0.4em;}
.search-box input{width: 80%;height: 3.3em;line-height: 3.3em;border-radius: 1.3em;border:1px solid #ccc;text-indent: 0.9em;}
.search-box .right{vertical-align: bottom !important;width: 1em;display: inline-block;margin-left: -1.5em;text-align: center;}
.search-box .right img{width: 0.9em;}
.disabled{
	pointer-events:none; 
}
#jingcai{
		height:1.66rem;
		text-align: center;
		line-height: 1.66rem;
		color: #fff;
		font-size:0.5rem;
		background: url(../../static/img/jingca.png)no-repeat;
		background-size: 100% 100%;
		
	}
.clear{
	clear:both;/*清浮动 voerflow:hidden也可用来清浮动一般放在浮动盒的父级*/
}
#box_foot{
	width:100%;
	margin-top: 2.6rem
}
.box_center{
	background: url(../../static/img/home_mirailatoken_00.gif) no-repeat;
	background-size: 100% 200%;
	margin:0 auto;
	
}	
.center_btn{
	width:3.33rem;
	height:0.83rem;
	
	border-radius: 1.38rem;
	display: inline-block;
	color: #fff;
	font-size:0.38rem;
	line-height:0.83rem;
}
	
	
ul li{
    list-style: none;
}
 .content_box{

  }
 .content_box>li{
 	 display: none;
  	 position: absolute;
  	 left:3rem;
  	 top:2rem;
  	 animation: action 5s linear infinite;
 }
 .content_box>li>img{
 	width:1.11rem;
 	display: block;
 }
 .content_box>li>p{	
 	font-size: 0.28rem;
 	text-align: center;
 	color:#fff;
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
.middle-index{
	/*background: url(../../static/img/indexBG.jpg)no-repeat;*/
	background-size:100% 100%;
	
}
.tab1{
    height:0.88rem;
    width:100%;
    background: url(../../static/img/indexBG.jpg)no-repeat;
}
.tabLeft{
    height:0.88rem;
    color:#ffffff;
    font-size: 0.33rem;
    width:20%;
    padding:0.11rem;
    float: left;
    position: absolute;
}
.tabLeft img{
     height:0.7rem;
     vertical-align: middle;
}
.winBox {
    /* width:300px; */
	height:0.88rem;
	overflow:hidden;
	position:relative;
    /*width:75%;*/
}
.scroll {
	/*width的大小是根据下面li的长度和多少个li而定的，需注意！*/
	width:600px;
	position:absolute;
	left:0px;
	top:0px;
}
.scroll li {
	 width:300px; 
	float:left;
	line-height:0.88rem;
	text-align:center;

}
.scroll li a{
    color:#ffffff;
    font-size: 0.33rem;
    display: block;
}
.tabRight{
    float: right;
    width:80%;
}
.content{
/*    background: url(../../static/img/index_banner.jpg) no-repeat;
    background-size:100% 100%;  */ 
    height:13.33rem;
    width:100%;
    position: relative;
        background: #fff;
}
.contentUl{
    padding:0 0.27rem;
    padding-top:0.3rem;
    
    background-size: 100%;
    padding-bottom: 0.05rem;
}
.contentUl li{
    height:0.66rem;
    font-size:0.41rem;
    color:#4B4B4B;
    font-family: Roboto;
    font-weight: 600;
    margin-bottom:0.22rem;
}
.contentUl li img{
    height:0.66rem;
    vertical-align: top;
}
.help{
    position: absolute;
    top: 0;
    right: 0;
    padding-right: 0.27rem;
}
.help img{
    height:0.66rem;
}
/*.center span:first-of-type{
    background: url(../../static/img/guang.png) no-repeat;
    background-size:100% 100%;   
    height:4.44rem;
    display: block;
    margin: 0 auto;
   width:4.44rem;
}*/
/*.center span:last-of-type{
    background: url(../../static/img/scheng.png) no-repeat;
    background-size:100% 100%;   
    height:2.22rem;
    display: block;
    margin: 0 auto;
   width:2.22rem;
   position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}*/
.center{
	width:5.55rem;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}
.font{
    position: absolute;
    color: #ffffff;
    text-align: center;
    top: 50%;
    right: 15px;
}
.font p:first-of-type{
    font-size: 0.5rem;
}
.font p:last-of-type{
    font-size: 0.33rem;
}
.intro{
   
    background-size:100% 100%;   
    height:3.33rem;
    display: block;
    margin: 0 auto;
    width:9.44rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.logo img:first-of-type{
  height:0.83rem;
  border-radius: 50%;
}
.logo img:last-of-type{
    position: absolute;
    bottom: 0.27rem;
    right: -0.15rem;
    width: 0.44rem;
     
}
.logo{
    position: relative;
   
    /* width: 2.2rem; */
    float: left;
    margin-left: 8.5rem;
    margin-top: -1.8rem;
}
.geren{
   color: #ffffff;
   font-size: 0.38rem;
   padding:0.47rem;
}
.code{
        text-align: right;
}
.code img{
        width: 0.88rem;
        padding-right: 0.33rem;
    padding-bottom: 0.33rem;
}
.ul_box{
	 display: flex;
    justify-content: space-around;
    border-bottom: 1px solid gainsboro;
     border-top: 1px solid gainsboro;
}
.ul_box li{
     width: 2.5rem;
    height: 2.5rem;
    float: left;
    color: blue;
    font-size: 0.5rem;
    line-height: 2.5rem;
    text-align: center;
   
}
.ul_box img{
	width:1.94rem;
	vertical-align: middle;
	border-left: 1px solid gainsboro;
	padding-left: 7px;
    padding-right: 7px;
}
.ul_box li:first-of-type{
     /*background: url(../../static/img/blue.png) no-repeat;*/
    background-size:100% 100%;  
}
.ul_box li:last-of-type{
     /*background: url(../../static/img/pink.png) no-repeat;*/
    background-size:100% 100%;  
}
.list{
    background: #ffffff;
    border-radius: 0.2rem;
    width:9.44rem;
    margin-bottom: 2rem;
}
.title ul{
    height:1.11rem;
    color:#101010;
    font-size: 0.44rem;
    line-height: 1.11rem;
    padding:0 0.30rem;
}
.title ul li{
    float: left;
}
.title ul li:last-of-type{
    float: right;
}
.list_content.title ul{
  border-bottom:1px solid #F2F2F2;
}
#gavinPlay{
    /* background:color url x y repeat 图片来自百度图片，按需要更换 */
    background: url("../../static/img/guang.png") center no-repeat;
    /* background-size:auto auto || cover 代表以宽或高填满元素背景 */
    background-size:cover;
    /* 随便设置宽高值，测试 */
    width:200px;
    height:200px;
    /* 设置默认样式，开启3d硬件加速 */
    -webkit-transform:translate3d(0,0,0);
    -moz-transform:translate3d(0,0,0);
    transform:translate3d(0,0,0);
    /* 设置动画，animation:动画名称 动画播放时长单位秒或微秒 动画播放的速度曲线linear为匀速 动画播放次数infinite为循环播放; */
    -webkit-animation:play 3s linear infinite;
    -moz-animation:play 3s linear infinite;
    animation:play 3s linear infinite;
}
@-webkit-keyframes play{
    0%  {
        /*
        水平翻转
        
        -webkit-transform:rotateY(0deg);
        
        垂直翻转
        -webkit-transform:rotateX(0deg);
        顺时针旋转 */
        -webkit-transform:rotate(0deg);
        /* 逆时针旋转
        -webkit-transform:rotate(0deg);
       /*
    }
    100% {
        /* 水平翻转
        -webkit-transform:rotateY(360deg);
        /* 垂直翻转
        -webkit-transform:rotateX(360deg);
        顺时针旋转 */
        -webkit-transform:rotate(360deg);
        /* 逆时针旋转
        -webkit-transform:rotate(-360deg);
        */
    }
}
@-moz-keyframes play{
    0%  {/*
        -moz-transform:rotateY(0deg);
        
        -moz-transform:rotateX(0deg);*/
        -moz-transform:rotate(0deg);
        /*-moz-transform:rotate(0deg);
        */
    }
    100% {/*
        -moz-transform:rotateY(360deg);
        /*
        -moz-transform:rotateX(360deg); */
        -moz-transform:rotate(360deg);
        /* -moz-transform:rotate(-360deg);
        */
    }
}
@keyframes play{
    0%  {/*
        transform:rotateY(0deg);
        /*
        transform:rotateX(0deg); */
        transform:rotate(0deg);
         /*transform:rotate(0deg);
        */
    }
    100% { /*
        transform:rotateY(360deg);
        /*
        transform:rotateX(360deg);*/
        transform:rotate(360deg);
        /* transform:rotate(-360deg);
        */
    }
}


@keyframes action {

from {

transform: rotate(0deg) translate(0.2rem,0.2rem) rotate(0deg);

}

to {

transform: rotate(360deg) translate(0.2rem,0.2rem) rotate(-360deg);

}

}






   ::-webkit-scrollbar{width:0px}
   #category-head{
    width:100%;
    display: inline;
    white-space: nowrap;
    overflow-x:scroll;
    float:left;
    overflow-y:hidden;
    background: #ffffff;
    height:1.18rem;
    line-height: 0.7rem;
    }
#category-head li{
    display:inline-block;
    width:2.22rem;
    font-size: 0.44rem;
    float: left;
    line-height: 1rem;
}
.guessList{
    /*background: url(../../static/img/jingcaibg.png);*/
    background-size:100% 100%;
    width:9.4rem;
    /* height: 6.66rem; */
    margin:0 auto;
    color:#4B4B4B 100%;
}
.guess{
    padding-top:0.2rem;
}
.last{
    padding:0.27rem;
    border-radius: 0.13rem;
    background: #F2F2F2;
    
}
.last span:first-of-type{
    display: inline-block;
    font-size:0.38rem;
    width:2.22rem;
    height:0.69rem;
    line-height: 0.69rem;
    float: left;
    background: #FF4081;
    text-align: center;
}
.last span:last-of-type{
	line-height: 0.69rem;
    font-size:0.38rem;
    float: left;
    display: inline-block;
    padding-left: 0.22rem;
    height:0.69rem;
}
.last p:first-of-type{
    float: left;
    font-size:0.27rem;
    margin-top: 0.14rem;
    margin-bottom: 0.14rem;
 
}
.last p:last-of-type{
    float: left;
    font-size:0.44rem;
    text-align: left;
    font-weight: 600;
     font-family: Roboto; 
    color: #4B4B4B
}
.xiazhuli li{
    float: left;
    font-size:0.33rem;
    width: 3rem;
    text-align: center;
    margin-left: -0.68rem;
}
.xiazhuli li:last-of-type{
    float: right;
}
.blue{
    width:20%;
    background: #00A3FF;
    width:1.66rem;
    height:1.66rem;
    border-radius: 50%;
}
.blue p{
    font-size: 0.33rem;
    height: 1.38rem;
    line-height: 1.38rem;
    background: #ffffff;
    border-radius: 50%;
    width: 1.38rem;
    margin: auto;
    margin-top: 0.14rem;
    color: #00A3FF;
     text-align: center
}
.progress{
    width:60%;
    margin-top: 0.2rem;
}
.progressP{
    width:101%;
    position: relative;
    top: 0.05rem;
    left: -0.04rem;
}
.progressP p:first-of-type{
    width: 60%;
    height: 0.41rem;
    background: #00A3FF;
    float: left;
    margin-bottom: 0.1rem;
}
.progressP p:last-of-type{
    background: #FF9800;
    height: 0.41rem;
    width: 40%;
    float: left;
}
.yellow{
    width:20%;
    background: #FF9800;
    width:1.66rem;
    height:1.66rem;
    border-radius: 50%;
}
.yellow p{
    font-size: 0.33rem;
    height: 1.38rem;
    line-height: 1.38rem;
    background: #ffffff;
    border-radius: 50%;
    width: 1.38rem;
    margin: auto;
    margin-top: 0.14rem;
    color: #FF9800;
        text-align: center
}
.another div{
  float: left;
}
.progress span{
    display: block;
}
.progress span:first-of-type{
    text-align: left;
    font-size:0.25rem;
    color: #00A3FF;
    /*position: relative;
    top: -0.13rem;*/
}
.progress span:last-of-type{
    text-align: right;
    color: #FF9800;
    font-size:0.25rem;
}
.bottomXia{
    display: none;
    width:9.44rem;
    height:1.11rem;
    background: #ffffff;
    margin:0 auto;
    margin-top: 0.1rem;
    border-radius: 0.2rem;
}
.xiaLeft{
    float: left;
    width:68%;
    line-height: 1.11rem;
}
.xiaLeft p{
    float: left;
    text-align: center;
}
.xiabg{
    width:0.83rem;
    height:0.83rem;
    background: #00A3FF;
    border-radius: 50%;
    line-height: 0.83rem;
    margin: 0.1rem;
    color:#ffffff;
    font-size: 0.6rem;
}
.number{
    width:2.77rem;
    height:0.83rem;
    background: #E5E5E5;
    border-radius: 0.2rem;
    margin-top:0.15rem;
    line-height:0.83rem;
    font-size:0.6rem;
}
.xiaRight p{
    width:2.77rem;
    height:0.83rem;
    background: #00A3FF;
    font-size:0.38rem;
    border-radius: 0.2rem;
    color:#ffffff;
    line-height: 0.83rem;
    text-align: center;   
}
.xiaRight{
    float: right;
    margin-top: 0.15rem;
    margin-right: 0.1rem;
}
.coming,.waiting,.ago{
    margin-bottom:0.27rem;
}
/* .active{
    display: block;
} */
.code{
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    background: #ffffff;
    height: 1.3rem;
    width: 4rem;
    line-height: 1.3rem;
    border-radius: 0.3rem;
    border: 1px solid deepskyblue;
}
.code>p{
    font-size: 0.44rem;
}
.coming{
    position: relative;
}

.xzhuSuccess{
    display: none;
    position: absolute;
    top: 27%;
    left: 50%;
    transform: translate(-50%);
    width: 5.5rem;
    background: #ffffff;
    border-radius: 0.3rem;
    height: 2.2rem;
    border: 0.013rem solid deepskyblue;
}
.xzhuSuccess p{
    font-size: 0.4rem;
    height: 1rem;
    line-height: 1rem;
}
.xzhuSuccess span:first-of-type{
/*    font-size: 0.4rem;
    display: block;
    float: left;
    width: 50%;
    text-align: center;
    height: 1rem;
    line-height: 1rem;*/
       font-size: 0.4rem;
    display: block;
    float: left;
    width: 25%;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    background-color: #DE5923;
    color: #fff;
    border-radius: 2px;
    text-decoration: none;
    margin: 10px 10px 0px 10px;
    width: 60px;
    height: 26px;
    line-height: 26px;
}
.xzhuSuccess span:last-of-type{
/*    font-size: 0.4rem;
    display: block;
    width: 50%;
    float: right;
    height: 1rem;
    line-height: 1rem;*/
       font-size: 0.4rem;
    display: block;
    float: right;
    width: 25%;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    background-color: #DE5923;
    color: #fff;
    border-radius: 2px;
    text-decoration: none;
    margin: 10px 10px 0px 10px;
    width: 60px;
    height: 26px;
    line-height: 26px;
}
.active{
    display: block;
}
.blue p.win{
    border: 2px solid red;
    position: absolute;
    top: -1px;
    background: transparent;
    color: red;
    font-size: 0.7rem;
    height: 1.38rem;
    left: 4%;
       
}
.yellow p.win{
    border: 2px solid red;
    position: absolute;
    top: -1px;
    background: transparent;
    color: red;
    font-size: 0.7rem;
    height: 1.38rem;
    left: 4%;
}
</style>


