 <template>
  
    <div class="middle-index">
      
      <div style="background:#ffffff">

        <div class="content">

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
                                    <p style="font-size: 0.27rem;margin-top: 0.2rem;">奖池 {{tmp.option_all_total}} 彩钻</p>
                                </div>
                                <div class="yellow" @click="yellow(index,tmp.id)">
                                    <p>下注</p>
                                    <!--<span style="font-size: 0.27rem;display: block;margin-top: 0.2rem;"><span style="font-size: 0.27rem;display: block;margin-top: 0.2rem;">赔率{{tmp.odds2}}</span></span>-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottomXia"  v-bind:class="{active:index==type}" :id="'one'+index">
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
                        <p>您的积分不足</p>
                        <!-- <p @click="sure()">确定</p> -->
                    </div>
                    <div class="xzhuSuccess" v-bind:class="{active:index==myxzhu}">
                        <p>您确定要下注吗？</p>
                        <span @click="quxiao()">取消</span>
                        <span @click="sure(tmp.id,index)">确定</span>
                    </div>
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
		   that.$Get("/refresh?user_id="+that.user_id, function(data){
/*		   	  console.log(data.data.guess)
		   	  console.log(data.data.guess.now)
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
        }*/
        });
    },
    methods: {
    	
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
         that.type=index;
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
        that.type=-1;
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
    },
    mounted(){
//      let that = this;
          

        
    }
}
</script>

<style scoped>

 .clear{ height:0px;font-size:0;clear:both;}
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

.middle-index>img{
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
.content{
   
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    position: relative;
    text-align: center;
    
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
    height: 1.5rem;
    width: 3.5rem;
    line-height: 1.5rem;
    border-radius: 0.3rem;
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
    top: 31%;
    left: 50%;
    transform: translate(-50%);
    width: 5rem;
    background: #ffffff;
    border-radius: 0.3rem;
    height: 2rem;
}
.xzhuSuccess p{
    font-size: 0.4rem;
    height: 1rem;
    line-height: 1rem;
}
.xzhuSuccess span:first-of-type{
    font-size: 0.4rem;
    display: block;
    float: left;
    width: 50%;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
}
.xzhuSuccess span:last-of-type{
    font-size: 0.4rem;
    display: block;
    width: 50%;
    float: right;
    height: 1rem;
    line-height: 1rem;
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


