 <template>
 <div class="middle-box text-center clearfix" style="height:100%">
     <img src="../../static/img/indexBG.jpg" alt="" style="position:absolute;width:100%;">
    <div style="width:8.33rem;margin:0 auto;position:absolute;left: 50%;transform: translate(-50%);">
        <div class="title">
            <h2>Welcome  to IONTRUM</h2>
            <h2>欢迎来到IONTRUM</h2>
        </div>
    
        <div class="form-group" style="padding-top:1.86rem">
            <span style="border-right: 1px solid #BBBBBB; */">+86</span>   
             <input type="text" class="form-control" v-model="mobile" placeholder="手机号" required="" style="width: 42%;">
             <span style="color:red">{{mobilemessage}}</span>
        </div>
        <div class="form-group">
                <input type="password" class="form-control" v-model="password" placeholder="密码" required="" style="padding:0 0.23rem">
                <span style="color:red">{{pwdmessage}}</span>
        </div>  
        
        <div class="click">
            <a @click="forgot()">忘记密码</a>
            <a @click="register()">快速注册</a>
        </div> 
        <div class="login">
            <p @click="login()">登录</p>
        </div>
    		
       
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            mobile: '',
            password: '',
            mobilemessage:"",
            pwdmessage:''
        }
    },
    created(){
    	if(this.$store.state.isLogin == 0){
   	    	window.sessionStorage.removeItem("setPhysical")
   	    }
    },
    computed:{
      
      isLogin(){
        return this.$store.state.isLogin
      }
    },
    methods: {
      register:function(){
          this.$router.push('register');
      },
      forgot:function(){
          this.$router.push('/forget_password');
      },
      gotoIndex:function(){
          this.$router.push('index');
      },
      login:function(){
           
            var that = this;
            var reg=/^[1][3578][0-9]{9}$/;
            if(that.mobile==""){
                that.mobilemessage="手机号不能为空";
            }else{
                  that.mobilemessage="";
                  that.pwdmessage="";
               if(reg.test(that.mobile)&&that.password!==""){
                  
                   that.$Post('/login' ,{mobile: that.mobile, pwd: that.password,login_type:2}, function(data){
                       //console.log(data);
                       if(data.code=="210"){
                           that.mobile="";
                           that.password="";
//                         alert("登录失败");                         
							mizhu.alert('温馨提示', '登录失败');
                       }else if(data.code=="211"){
//                     	   alert("与以太坊交互失败"); 
							mizhu.alert('温馨提示', '与以太坊交互失败');
                       	   that.$router.push('/login');
                       }
                       else{
                            that.mobile="";
                          that.password="";                          
                          window.sessionStorage.setItem('accessToken', data.data.token);
                          window.sessionStorage.setItem('userInfo', JSON.stringify(data.data)); 
//                        window.sessionStorage.setItem('isLogin', true)
						  that.$router.push('index');
                          that.$store.commit('changeLogin',1)   
                       }
                       
                    
                    }); 
               }else if(that.password==""){
                     that.pwdmessage="密码不能为空";
               }else{
                    that.mobilemessage="号码格式错误";
               }
            }
           
        
      }
    }
}
</script>

<style scoped>
  .clearfix:after {
			display: block;
			content: '';
			clear: both;
			width: 0px;
			height: 0px;
 }
.middle-box{
    /* height: 100%;
    width: 100%;
    position: fixed;
    background: url(../../static/img/bg.jpg) no-repeat;
    background-size:100% 100%;  */
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
.form-group{
    width:8.33rem;
    margin:0 auto;
    border-bottom:1px solid #BBBBBB;
}
.form-group input{
	color: #fff;
    height:1rem;
    margin:0 auto;
    border: none;
    display:inline-block;
    background: transparent;
    font-size: .4rem;
}
.form-group span{
    font-size: 0.38rem;
    color:#ffffff;
    padding:0 0.23rem;
    /*border-right:1px solid #8958B8;*/
}
.form-group input::-webkit-input-placeholder{
         font-size: 0.38rem;  
        color: #BBBBBB;
}
.form-group input:focus{
    border:none;
    outline: none;
}
.click{
    padding-top:0.41rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}
.click a{
    color:#ffffff;
    font-size:0.38rem;
    border-bottom:1px solid #ffffff;
    
}
/* .click p:first-of-type{
    float: left;
}
.click p:last-of-type{
    float: right;
} */
.login{
    padding-top:1.66rem;
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
/*input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    background-color:transparent !important;
    background-image: none !important;
    color: rgb(0, 0, 0) !important;
}*/
	input:-webkit-autofill {
 -webkit-text-fill-color: #fff !important;
 transition: background-color 5000s ease-in-out 0s;
}
</style>


