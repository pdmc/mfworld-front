 <template>  
    <div class="middle-index">
      <img src="../../static/img/indexBG.jpg" alt="">
      <div class="tab">
          <div class="tabLeft inline clearfix">
              <img src="../../static/img/laba.png" alt="">
              <span>公告：</span>
          </div>
          <div class="tabRight box clearfix">
            <div class="winBox">
                <ul class="scroll">
                    <li><a href="#">这是一个通知公告，请注意</a></li>
                    <li><a href="#">这是一个通知公告，请注意</a></li>
                    <li><a href="#">这是一个通知公告，请注意</a></li>
                </ul>
            </div>
           </div>
      </div>
      <div class="content">

         <ul class="contentUl">
             <li>
                 <img src="../../static/img/cai.png" alt="" @click="caizuan()">
                 <span>彩钻&nbsp;{{$store.state.ucolor}}</span>
             </li>
             <li>
                 <img src="../../static/img/neng.png" alt="" @click="energy1()">
                 <span>能量&nbsp;{{$store.state.energy}}</span>
             </li>
         </ul>
         <div class="help clearfix">
             <img src="../../static/img/help.png" alt="" @click="help()">
         </div>
         <ul class="content_box" >
      	 	<li @click="getColor()">
      	 		<img src="../../static/img/czcj.png" alt="" />
      	 		<p>{{$store.state.num}}</p>
      	 	</li>
      	 </ul>
         <div class="center clearfix">
             <span id="gavinPlay"></span>
             <span></span>
             <div class="font">
                <p>彩钻生长中</p>
                <p>彩钻48小时未领取将停止生长</p>
            </div>
         </div>
      </div>
      <div class="main clearfix" style="position:relative;width:9.44rem;margin:0 auto">
          <div class="intro clearfix">
             <div class="message clearfix">
                 <div class="logo" @click="my_account()">
                     <img src="../../static/img/logo.jpg" alt="">
                     <img src="../../static/img/man.png" alt="" v-if="type==1">
                     <img src="../../static/img/girl.png" alt="" v-else>
                 </div>
                 <div class="geren">
                     <p>{{userInfo.user_nick}}</p>
                     <p>{{userInfo.mobile}}</p>
                 </div>
             </div>
             <div class="code" style="height:1.11rem" @click="invite()">
                 <img src="../../static/img/er.png" alt="">
             </div>
             <ul class="ul_box clearfix">
                <li @click="nengliangtishen()">能量提升</li>
                <li @click="caizuanjingpai()">彩钻竞拍</li>
            </ul>
            <p style="font-size:0.66rem;color:#FFFFFF;text-align:center;padding: 0.3rem;" @click="jingcai()">热门竞猜</p>
            <!-- <p @click="jingcai()" style="background:url(../../static/img/jingca.png);background-size:100% 100%;width:9.44rem;height:1.66rem;line-height: 1.66rem; text-align: center;color:#ffffff;font-size:0.5rem">
                   彩钻竞猜
            </p> -->
            <div class="list">
                <!-- <div style="padding:0.13rem">
                    <div class="title">
                        <ul>
                            <li style="font-size:0.5rem">排行榜</li>
                            <li style="font-size:0.33rem">排行榜1小时更新一次</li>
                        </ul>
                        <ul style="background:#E5E5E5">
                            <li>名次</li>
                            <li>能量</li>
                        </ul>
                    </div>
                    <div class="list_content title">
                        <ul>
                            <li>soga</li>
                            <li>2015</li>
                        </ul>
                        <ul>
                            <li>soga</li>
                            <li>2015</li>
                        </ul>
                        <ul>
                            <li>soga</li>
                            <li>2015</li>
                        </ul>
                        <ul>
                            <li>soga</li>
                            <li>2015</li>
                        </ul>
                        <ul>
                            <li>soga</li>
                            <li>2015</li>
                        </ul>
                        <ul>
                            <li>soga</li>
                            <li>2015</li>
                        </ul>
                    </div>
                </div> -->
            </div>
          </div>
          
      </div>
    </div>
</template>
<script>
$(function() {
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
    }
    //设置滚动速度
    var timer = setInterval(goLeft, 9);
})
export default {
    data () {
        return {
           userInfo:"",
           type:"",
           user_id:""
        }
    },
    created(){
      var that = this;
      var userInfo = window.sessionStorage.getItem("userInfo");
      var newColor = window.sessionStorage.getItem("newColor");
      var newEnergy= window.sessionStorage.getItem("newEnergy");
      that.userInfo = JSON.parse(userInfo);    
      if(that.userInfo){
      	that.userInfo = JSON.parse(userInfo);
      	that.user_id = that.userInfo.user_id;
      	that.$store.state.color = that.userInfo.color;     	
      	if(that.userInfo){       		
      		that.$store.state.ucolor = that.userInfo.ucolor;
      		that.$store.state.energy = parseInt(that.userInfo.energy);
      		if(newEnergy){
      			that.$store.state.energy = newEnergy
      		}
      		if(newColor){      			
      			that.$store.state.ucolor = newColor
      		}
      	} else{      		
      		that.$store.state.ucolor = newColor
      	}
      }else{      	
      	that.userInfo = ''
      	that.$store.state.physical = 0;
      	that.user_id = "",
      	that.energy = 0
      }
      that.$Get("/refresh?user_id="+that.user_id,function(data){     	
      	   that.$store.commit("setColor",data.data.color);
      	   that.$store.commit("setNumber",data.data.num); 
      	   if(data.data.num !== "0.00000"){
                $(".content_box li").css("display","block")
      	   };
      	   window.sessionStorage.setItem("newColor",data.data.color);
      	   window.sessionStorage.setItem("newEnergy",data.data.energy);
      })      
    },
    methods: {
      getColor:function(){     	  
      	 var that = this;     	
      	 if(that.$store.state.num>0){
      	 	that.$Post("/collect",{user_id:that.user_id,color:that.$store.state.num},function(data){     	 	    
      	 	    that.$store.commit("setuColor",data.data.color)
      	 	     window.sessionStorage.setItem("newColor",data.data.color)
      	 	});
      	 	$(".content_box li").css("display","none")
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
      }
    },
    mounted(){
        var userInfo= window.sessionStorage.getItem('userInfo'); 
        this.userInfo=JSON.parse(userInfo);
        this.type=this.userInfo.user_sex;
        console.log(this.userInfo); 
    }
}
</script>

<style scoped>
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
.tab{
    height:0.88rem;
    width:100%;
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
    width:75%;
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
    background: url(../../static/img/index_banner.jpg) no-repeat;
    background-size:100% 100%;   
    height:13.33rem;
    width:100%;
    position: relative;
}
.contentUl{
    padding:0 0.27rem;
    padding-top:0.3rem;
}
.contentUl li{
    height:0.66rem;
    font-size:0.41rem;
    color:#ffffff;
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
.center span:first-of-type{
    background: url(../../static/img/guang.png) no-repeat;
    background-size:100% 100%;   
    height:4.44rem;
    display: block;
    margin: 0 auto;
   width:4.44rem;
}
.center span:last-of-type{
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
}
.center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
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
    background: url(../../static/img/bgperison.png) no-repeat;
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
  height:2rem;
  border-radius: 50%;
}
.logo img:last-of-type{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0.44rem;
}
.logo{
    position: relative;
    height: 2rem;
    /* width: 2.2rem; */
    float: left;
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
.ul_box li{
  width:4.72rem;
  height:1.66rem;
  float: left;
      color: #ffffff;
    font-size: 0.5rem;
    line-height: 1.66rem;
    text-align: center;
}
.ul_box li:first-of-type{
     background: url(../../static/img/blue.png) no-repeat;
    background-size:100% 100%;  
}
.ul_box li:last-of-type{
     background: url(../../static/img/pink.png) no-repeat;
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
</style>


