 <template>
  
    <div class="middle-index">
      <img src="../../static/img/indexBG.jpg" alt="">
      <div class="tab">
          <img src="../../static/img/back.png" alt="" @click="close()">
          <!-- <img src="../../static/img/close.png" alt="" @click="close()"> -->
          <span>城市居民</span>
      </div>
      <div class="content">
         <div class="main_content" style="padding:0 0.55rem">
             <div class="account">            	
                 <img style="left:30px;" src="../../static/img/help.png" alt="" @click="help()">       
                 <img src="../../static/img/shezhi.png" alt="" @click="logout()">
                <div class="logo">
                     <img src="../../static/img/logo.jpg" alt="">
                     <img src="../../static/img/man.png" alt="" v-if="type==1">
                     <img src="../../static/img/girl.png" alt="" v-else>
                </div>
                <p style="width:1.94rem;height:0.40rem;line-height:0.4rem;font-size:0.27rem;background:#3B5B85;margin: 0 auto;color:#ffffff">城市居民</p>
                <p style="font-size:0.5rem;margin-top: 0.1rem;">{{userInfo.user_nick}}</p>
                <p style="font-size:0.44rem;color:#737373">{{userInfo.mobile}}</p>
                <ul class="account_ul">
                    <li @click="caizuan()">
                        <img src="../../static/img/caichan.png" alt="">
                        我的资产
                    </li>
                    <li @click="jiasu()">
                        <img src="../../static/img/jiasu.png" alt="">
                        加速彩钻
                    </li>
                </ul>
            </div>
            <div class="main_list">
                <ul>
                    <li>
                        <p>{{all}}</p>
                        <p>彩钻总产值</p>
                    </li>
                    <li>
                        <p>{{num}}</p>
                        <p>彩钻昨日产值</p>
                    </li>
                </ul>
            </div>
            <div class="city_intro">
                <p>城市发展</p>
                <ul style="text-align:left">
                    <li>
                        <ul class="flot clearfix">
                            <li>
                                <img src="../../static/img/cicle.png" alt="">
                            </li>
                            <li>
                                <p>搭建IONTRUM
                                </p>
                                <p>搭建IONTRUM，让居民入住，提供彩钻奖励。</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class="flot clearfix">
                            <li>
                                <img src="../../static/img/cicle.png" alt="">
                            </li>
                            <li>
                                <p>引进城市商业</p>
                                <p>引进合作的企业，为IONTRUM居民提供各方面的服务。</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class="flot clearfix">
                            <li>
                                <img src="../../static/img/cicle.png" alt="">
                            </li>
                            <li>
                                <p>提供去中心话价值交换服务</p>
                                <p>让交易公平公正的进行。</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
         </div>
      </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
           type:"",
           userInfo:"",
           user_id:"",
           all:"",
           num:''
        }
    },
    created(){
    	var that = this;
    	var userInfo = window.sessionStorage.getItem("userInfo");
    	that.userInfo = JSON.parse(userInfo);
    	if(that.userInfo){
    		that.userInfo = JSON.parse(userInfo);
    		that.user_id = that.userInfo.user_id;    		
    	}else{
    		that.user_id = ""
    	}
    	that.$Get("/info?user_id="+that.user_id,function(data){
    		if(data.code == 200){
    			that.all = data.data.all;
    			that.num = data.data.num;
    		}else if(data.code ==201){
//  			alert("没有登录请登录");
				mizhu.alert('温馨提示', '没有登录请登录');
    			that.$router.push("/login")
    		}
    		    		
    	})
    },
    methods: {
      close:function(){
          this.$router.push('/index');
      },
      logout:function(){
          this.$router.push('/logout');
      },
      caizuan:function(){
          this.$router.push('/caizuan');
      },
      jiasu:function(){
          this.$router.push('/accelerate');
      },
      help:function(){
          this.$router.push('/help');
      },
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
}
.logo img:first-of-type{
      height:1.66rem;
      border-radius: 1.5rem;
       margin-top: 0.3rem;
}
.logo img:last-of-type{
    position: absolute;
    bottom: 7px;
    right: 0;
    width: 0.44rem;
}
.logo{
    position: relative;
    height: 2.2rem;
    width: 2rem;
    margin: 0 auto;
}
.account{
    background: #ffffff;
    height:5.83rem;
    margin-top: 0.2rem;
    border-radius: 0.2em;
}
.account_ul{
    height:1.11rem;
    line-height: 1.11rem;
}
.account_ul li{
    float: left;
    width:49%;
    font-size: 0.44rem;
}
.account_ul li img{
    width:0.66rem;
    vertical-align: middle;
}
.account>img{
     width:0.66rem;
    position: absolute;
    right: 32px;
    top: 10px;
}
.main_list{
    background: #ffffff;
    padding:0.55rem;
    margin-top: 0.2rem;
    border-radius: 0.2em;
}
ul li:first-of-type{
    border-right:1px solid #f1f1f1;
}
.main_list ul{
    height:1.11rem;
}
.main_list ul li{
    float: left;
    width:49%;
}
.main_list ul li p:first-of-type{
    font-size: 0.44rem;
}
.main_list ul li p:last-of-type{
    font-size: 0.38rem;
}
.city_intro{
   background: #ffffff;
    padding:0.55rem;
    margin-top: 0.2rem;
    border-radius: 0.2em; 
}
.city_intro>p{
 line-height: 0.66rem;
  margin:0 auto;
  width: 4.16rem;
  height:0.66rem;
  background: #1E60B9;
  font-size: 0.38rem;
  color:#ffffff;
  border-radius: 0.2rem;
  margin-bottom: 0.55rem;
}
.flot li{
  float: left;
}
.flot img{
    width:0.33rem;
    vertical-align: top;
    margin-top: 0.1rem;
}
.flot li p:first-of-type{
    color:#2060B5 ;
    font-size: 0.44rem;
}
.flot li p:last-of-type{
    color:#737373 ;
    font-size: 0.33rem;
}
.flot li:first-of-type{
    width: 5%;
}
.flot li:last-of-type{
    width:90%;
}
</style>


