 <template>
 <div class="middle-box text-center">
    <div  class="tab">
        <img src="/static/img/back.9fbd588.png" alt="" @click="back()">
        <!-- <img  src="/static/img/close.18ce7f6.png" alt="">  -->
        <span >设置</span>
    </div>
    <div style="background:#ffffff" class="reg clearfix">
        <ul class="logUl clearfix">
            <li>当前账号</li>
            <li>{{userInfo.mobile}}</li>
        </ul>
        <ul class="logUl clearfix">
            <li>居民代号</li>
            <li>{{userInfo.user_nick}}</li>
        </ul>
        <ul class="logUl clearfix">
            <li>版本号</li>
            <li>1.01</li>
        </ul>
        <!--<ul class="logUl clearfix">-->
            <!--<li>联系我们</li>-->
            <!--<li>400</li>-->
        <!--</ul>-->
    </div>
    <div class="login">
            <p @click="logout()">退出登录</p>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            selectItem:0,
            sex:[{"sex":"女"},{"sex":"男"}],
            mobile: '',
            password: '',
            code:'',
            name:'',
            yanzhengma:"",
            userInfo:""
        }
    },
    methods: {
       back:function(){
            window.history.go(-1);
       },
      logout:function(){
           var that = this;
            that.$Post('loginout',{user_id: that.userInfo.user_id} ,function(data){
                window.sessionStorage.removeItem('userInfo');
                window.sessionStorage.removeItem('accessToken');
                that.$router.push({path: '/login'});
            }); 
      }
    },
    mounted(){
        var userInfo= window.sessionStorage.getItem('userInfo'); 
        this.userInfo=JSON.parse(userInfo);
        console.log(this.userInfo); 
    }
}
</script>

<style scoped>
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
.active{
  color:#ffffff;
}
  .clearfix:after {
			display: block;
			content: '';
			clear: both;
			width: 0px;
			height: 0px;
 }
.middle-box{
    height: 100%;
    width: 100%;
    position: fixed;
    background: url(../../static/img/indexBG.jpg) no-repeat;
    background-size:100% 100%; 
}
.title{
    padding-top:2.22rem;
}
.title h2{
   text-align: center;
    font-size: 0.5rem;
    margin: 0 auto;
    color:#ffffff;
}
ul li{
    list-style: none;
}
.logUl{
    height:1.11rem;
    line-height: 1.11rem;
    padding: 0 0.2rem;
    border: 1px solid #f1f1f1;
}
.logUl li{
  float: left;
}
.logUl li:last-of-type{
    float:right;
    font-size:0.38rem;
    color:#737373;
}
.logUl li:first-of-type{
    font-size:0.44rem;
}
.login{
    padding-top:3.66rem;
}
.login p{
    width:5.38rem;
    height:1.25rem;
    margin: 0 auto;
    text-align: center;
    font-size: 0.44rem;
    color:#ffffff;
    border:1px solid #ffffff;
    line-height: 1.25rem;
    border-radius: 0.3rem;
}
</style>


