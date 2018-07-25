 <template>
  
    <div class="middle-index">
      <!--<img src="../../static/img/indexBG.jpg" alt="">-->
      <div class="tab">
          <img src="../../static/img/back.png" alt="" @click="close()">
          <!-- <img src="../../static/img/close.png" alt="" @click="close()"> -->
          <span>邀请码</span>
      </div>
      <div class="content">
         <div class="topC" style="margin-top:1.27rem;">
         	<div class="share" @click="showShare()">
            	<!--<img  src="../../static/img/fenxiang.png" alt="" >-->
            	<!--<p>分享</p>-->
            </div>
             <!--<img src="../../static/img/weilai.png" alt="">-->
             <!--<p>未来已来，你来不来</p>-->
         </div>
                        
         <div class="main_content">
             <p style="font-size:0.38rem;    padding-top: 0.55rem;">您的邀请码</p>
             <p id="selector"  style="font-size:1.66rem;color:#00A3FF">{{message}}</p>
             <p id="#copy" @click="copy()" v-clipboard:copy="message"  v-clipboard:error="onError" style="width:2.22rem;height:0.55rem;line-height:0.55rem;color:#ffffff;margin:0 auto;border-radius:0.05rem;font-size:0.33rem;background:#00A3FF">复制</p>
             
             <textarea  v-clipboard:copy="invite_url"  v-clipboard:error="onError" type="text"  v-model="invite_url" style="margin-top:0.3rem;width:75%;border: 1px solid gainsboro;text-align: center;line-height: 0.9rem;height:0.9rem;"/>
             <p  @click="copy()" v-clipboard:copy="invite_url"  v-clipboard:error="onError" style="width:2.22rem;height:0.55rem;line-height:0.55rem;color:#ffffff;margin:0 auto;border-radius:0.05rem;font-size:0.33rem;background:#00A3FF">复制</p>
             <p style="font-size:0.38rem;padding-top: 0.55rem;">剩余邀请次数{{fransNum}}次</p>
             <p style="font-size:0.33rem;color:#BBBBBB">每邀请一位好友注册登录，您将获得10点能量奖励</p>
             <img src="../../static/img/code.png" alt="" style="width:3.33rem;    padding-top: 1.11rem;">
             <p style="font-size:0.38rem;padding-bottom: 0.2rem;">扫码前往</p>
         </div>
      </div>
      <div class="hide_share" @click="closeShare()">
      </div>
      <div class="hide_message" >
      	  <p>复制成功</p>
      </div>
      

      
    </div>
</template>
<script>
	
export default {
    data () {
        return {
           userInfo:"",
//         invite_code : "",
           user_id:"",
           fransNum:"",
           message: '',
           invite_code:'',
           invite_url:"",
           url:""
          
           
        }
    },    

   created(){
   	
		var that = this;   		
   	    var userInfo= window.sessionStorage.getItem('userInfo'); 
// 	    that.url = window.location.href
   	    that.userInfo = JSON.parse(userInfo);
			if(that.userInfo){
				    
					that.userInfo=JSON.parse(userInfo);
					that.message = that.userInfo.invite_code;
					that.user_id = that.userInfo.user_id
			}else{
					that.message = "";	
					that.user_id =""
				}
		that.$Get("/invite?user_id="+that.user_id,function(data){
			 if(data.code == 200){
			 	that.fransNum = data.data.invite_num;
                that.invite_code = data.data.invite_code;
                
                that.$store.commit("setCode",data.data.invite_num);
                that.invite_url = "https://iontrum.pk4yo.com/register?"+data.data.invite_code;
                
			 }
		})
   },
//     beforeRouteEnter: (to, from, next) => {
    	
//      if(to.path == "/InviteFirend"&&(!sessionStorage.getItem('accessToken') || sessionStorage.getItem('accessToken')=='undefined')){
        	

//      		next({ path: '/register?'+this.invite_code})
        	
        	
//next({ path: '/register?'+123})

//      }
//  },
    methods: {
  	copy(){
		
        $(".hide_message").fadeIn();
        setTimeout(()=>{
        	$(".hide_message").fadeOut();
        },600)
  	},
  	copy1(){
		
        $(".hide_message").fadeIn();
        setTimeout(()=>{
        	$(".hide_message").fadeOut();
        },600)
  	},

	    onCopy: function (e) {
	      alert('You just copied: ' + e.text)
	    },
	    onError: function (e) {
	      alert('Failed to copy texts')
	    },
      
      
    	showShare(){ 
  	  	
//	  	$(".hide_share").css("display","block");
	  	
  	  },
  	  closeShare(){
  	  
  	  	$(".hide_share").css("display","none");
  	  	
  	  },
      close:function(){
          window.history.go(-1);
      },
    
    }
}
</script>

<style scoped>
ul li{
    list-style: none;
}
.hide_message{
	width:2.4rem;
	height:2.4rem;
	background: rgba(0,0,0,0.5);
	border-radius: 0.14rem;
	position: fixed;
	left:50%;
	top:30.5%;
	display: none;
	-webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    transform:translate(-50%,-50%);
	
}
.hide_message>p{
	color: #fff;
	font-size: 0.33rem;
	text-align: center;
    line-height: 2.4rem;
}
   .share{
	
    position: absolute;
    right: 0.55rem;
    top: 1.66rem;
}
.share>img{
	width:0.66rem;
    display: inherit;
}
.share>p{
	color: #fff;
	font-size: 0.13rem;
}
  .clearfix:after {
			display: block;
			content: '';
			clear: both;
			width: 0px;
			height: 0px;
 }
.middle-index{
	background: url(../../static/img/bjimg.jpg) no-repeat;
}
.middle-index>img{
/*    height: 100%;
    width: 100%;
    position: fixed;*/
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
.content{
    /*background: url(../../static/img/bg.jpg);*/
    background-size: 100% 100%;
    height: 15rem;
    width: 100%;
    position: relative;
    text-align: center;
    padding-bottom: 2.2rem;
    padding-top: 1.1rem;
}
.topC{
    /*text-align: center;*/
        /*margin-bottom: 0.55rem;*/
}
.topC img{
    /*width:6.66rem;*/
    /*margin-top:0.2rem;*/
}
.topC p{
    /*font-size: 0.33rem;*/
    /*color:#ffffff;*/
}
.main_content{
    background: #ffffff;
    width:8.88rem;
    margin:0 auto;
    border-radius: 0.2rem;
    padding-bottom: 1rem;
}
.hide_share{
	width: 100%;
    height: 100%;
    background: url(../../static/img/fximg.png) top left;
    background-size: 100% 100%;
    display: none;
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    z-index: 10001;
    /*background-color: rgba(0,0,0,0.8);*/
}
</style>


