<template>
 <div class="middle-box text-center">
    <div  class="tab">
        <img src="/static/img/back.9fbd588.png" alt="" @click="back()">
        <!-- <img  src="/static/img/close.18ce7f6.png" alt="">  -->
        <span >注册</span>
    </div>
    <div style="width:8.33rem;margin:0 auto;padding-top:3.08rem;" class="reg" >
    
        <div class="form-group">
            <input type="text" class="form-control" v-model="mobile" placeholder="请输入手机号" required="" style="padding:0 0.23rem">
            <span style="color:red;font-size:0.38rem">{{mobilemessage}}</span>
        </div>
        <div class="form-group">
            <input type="password" class="form-control" v-model="code" placeholder="短信验证码" required="" style="padding:0 0.23rem;width:60%">
            <span @click="requirecode()" v-if="type==1">获取验证码</span>
            <span  v-else>{{codemessage}}</span>
        </div>  
        <div class="form-group">
            <input type="password" class="form-control" v-model="password" placeholder="请输入密码" required="" style="padding:0 0.23rem">
        </div> 
         <div class="form-group">
            <input type="yanzhengma" class="form-control" v-model="yanzhengma" placeholder="邀请码" required="" style="padding:0 0.23rem">
        </div> 
        <div class="xieyi" @click="kai()">
            <input type="checkbox" style="background: transparent;vertical-align: middle;" checked="true">我已阅读并同意《用户服务协议》
        </div> 
        <div class="login">
            <p @click="next()">下一步</p>
        </div>
    </div>
    <div class="name" style="width:8.33rem;margin:0 auto;padding-top:3.08rem;">

        <div class="form-group">
            <input type="text" class="form-control"    v-model="name" placeholder="你的名字" required="" ref="count" style="padding:0 0.23rem">
        </div>
        <div class="note">
            <p>设置您的名称，作为在未来世界中的代号，名称设定后暂时无法修改</p>
        </div>
        <div class="sex">
            <span>性别</span>
            <ul>
                <li v-for="(tmp,index) in sex" :key="index" @click="toColor(index,tmp.id)" v-bind:class="{active:index==selectItem}">{{tmp.sex}}</li>
            </ul>
        </div>
         <div class="login" style="padding-top:2.73rem">
            <p @click="end()">完成</p>
        </div>
    </div>
    
    <div class="box" style="display: none;">
    <div class="protocol" >
    	<div  class="top">
            <img @click="guan()"  style="float: right;margin-right: 0.25rem;" src="/static/img/close.18ce7f6.png" alt="" >
       </div>
    	<p> Iontrum用户服务协议<br />
    		欢迎使用 “Iontrum”服务（以下简称：本服务），本服务是北京帕可福优科技有限公司（以下简称 “Iontrum”）基于区块链技术为用户 (以下或称 “您 ”)提供的创建 “Iontrum”私钥、使用 “Iontrum”平台等相关服务。 为了保障您的权益，请在使用本服务前，详细阅读本协议的所有内容，特别是加粗部分。当您通过网络页面点击确认并进行下一步操作时，即视为您已充分理解并同意接受本协议及其项下规则。

本协议构成您与Iontrum达成的协议，具有法律效力。

第一条   定义
1、Iontrum服务：指由Iontrum基于区块链技术为您提供的创建私钥、加密储存数字资产和信息数据等服务。
2、彩钻：指Iontrum数字信息生态下基于区块链技术的原生数字资产。它的产生与Iontrum数字信息数量、用户行为直接相关，彩钻的产生总数是恒定的，每日发放数量根据用户对空间的贡献动态变化，彩钻每2小时分配一次。
3、能量：是指用户获取彩钻的影响因子，能量越高，获得的彩钻越多。每日确定发放彩钻总数 C与用户活动有关，用户每日挖取到的彩钻数 = C*该用户当前能量值 /所有用户能量值之和。

第二条    服务规则
1 、您明确知悉，本服务涉及Iontrum相关软件包括但不限于所有权、知识产权等一切权利归Iontrum所有。用户在享受本服务时，应当受本协议以及软件及服务相关的具体服务条款、操作规则的约束。

2 、用户资格：
仅当您符合下列条件之一时，才能申请成为Iontrum用户并使用本服务：
1 ）年满十八周岁，并具有完全民事权利能力和完全民事行为能力的自然人；
2 ）未满十八周岁，但其法定监护人予以书面同意的自然人；
3 ）根据中华人民共和国或设立地法律、法规和 / 或规章成立并合法存在的公司、社团组织和其他组织。
无民事行为能力人、限制民事行为能力人以及无经营或特定经营资格的组织不当注册为本服务用户或超过其民事权利或行为能力范围使用本服务的，其与本服务之间的协议自始无效，Iontrum一经发现，有权立即注销该用户使用Iontrum及相关服务的资格且无需承担任何责任，并有权追究其（或其法定监护人）使用本服务所产生的相关法律责任。

3、注册：
1）您在使用 “Iontrum”之前，必须先行注册，并填写注册资料，取得Iontrum账号、密码。  
2）Iontrum账号注册资料包括但不限于您的账号名称、头像、密码、注册或更新Iontrum账号时输入的所有信息。  
您在注册Iontrum账号时承诺遵守法律法规、社会主义制度、国家利益、公民合法权益、公共秩序、社会道德风尚和信息真实性等七条底线，不得在Iontrum账号注册资料中出现违法和不良信息，且您保证在注册和使用账号时， 不得有以下情形：
（ 1 ）违反宪法或法律法规规定的；
（ 2 ）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；
（ 3 ）损害国家荣誉和利益的，损害公共利益的；
（ 4 ）煽动民族仇恨、民族歧视，破坏民族团结的；
（ 5 ）破坏国家宗教政策，宣扬邪教和封建迷信的；
（ 6 ）散布谣言，扰乱社会秩序，破坏社会稳定的
（ 7 ）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；
（ 8 ）侮辱或者诽谤他人，侵害他人合法权益的；
（ 9 ）含有法律、行政法规禁止的其他内容的。
3）您成功注册Iontrum账号以后。根据相关法律、法规规定以及考虑到Iontrum产品服务的重要性，您同意：
（ 1 ）在注册Iontrum账号时提交有效身份信息进行实名认证；
（ 2 ）提供及时、详尽及准确的账户注册资料；
（ 3 ）不断更新注册资料，符合及时、详尽准确的要求，除法律法规规定外，对注册Iontrum账号时填写的身份证件信息不能随意修改。
4 ）如果您提供任何不真实、不准确、不完整或不能反映当前情况的资料的，或Iontrum公司有合理理由怀疑该等资料不真实、不准确、不完整或不能反映当前情况的，Iontrum公司保留停止您使用本服务的权利，如因您资料的不真实、不准确、不完整或不能反映当前情况而给Iontrum公司或其关联公司造成损失的，您应负责赔偿。若您以虚假信息骗取账号注册或账号头像、个人简介等注册资料存在违法和不良信息的，Iontrum有权采取通知限期改正、暂停使用、注销登记等措施。对于冒用关联机构或社会名人注册账号名称的，Iontrum公司有权注销该账号，并向政府主管部门进行报告。Iontrum有权对您的Iontrum账户进行安全性管理，包括但不限于采取限制、冻结、注销用户账户措施。

4、您在Iontrum中创建Iontrum账户，Iontrum会帮助您生成对应的区块链账户地址及私钥，地址和私钥具有唯一性，私钥可以用于特定情形下的收付彩钻等用途。

5、您知悉，您基于Iontrum区块链所获得的区块链账户地址及相关私钥为您本人所有，您应妥善保管您的区块链账户地址及相关私钥， 您的账户信息、私钥均储存于区块链中，不会被获取 / 储存 / 备份于Iontrum服务器中，区块链账户地址与相关私钥不得更改，如您不慎丢失账户地址或私钥，将无法通过Iontrum找回，您将自行承担相关损失。

6 、 Iontrum禁止用户违反Iontrum使用规则私自赠与、借用、租用、转让或售卖任何区块链账户地址或相关私钥。您基于Iontrum账户所进行的所有登入、兑换或相关使用行为，均视为您本人操作，代表您的真实意思表示，Iontrum不对其产生的后果承担任何责任。

7 、本服务为Iontrum基于区块链技术及Iontrum区块链向您提供的技术服务，Iontrum将采取合理技术措施保证Iontrum区块链的正常运行及安全保障。 您应确保在使用Iontrum服务过程中不得违反任何法律、法规及相关规定或侵害任何第三人的合法权益，Iontrum对您使用Iontrum服务所产生的任何后果不承担任何责任。

8 、 Iontrum有权制定或调整彩钻的使用规则，具体彩钻的发放、获取、兑换等相关规则以Iontrum页面展示为准。

9、用户可通过本服务提供的区块链加密技术记录并保护用户的数字信息数据，同时Iontrum可以帮助您提供相关数字信息数据的查询功能，您可根据自身意愿将个人数字信息数据开放给其他Iontrum用户进行查询。为鼓励用户更好的保护个人数字信息数据，发现并拓展个人数字信息数据的价值，Iontrum会根据相关服务规则对您的数据信息保存及共享查询行为奖励能量值、彩钻或其他收益奖励。 您通过Iontrum保存并加密的数字信息数据归您本人所有，除非经您明确授权，Iontrum不会收集、储存或使用您的任何数字信息数据，亦不对您向任何第三方提供个人数字信息数据所产生的后果承担责任。

10 、 您不得利用彩钻进行融资或从事彩钻与法定货币、 “ 虚拟货币 ” 相互之间的兑换业务，不得买卖或作为中央对手方买卖彩钻，不得为彩钻提供定价、信息中介等法律法规、监管政策禁止的任何活动，否则Iontrum有权不经用户同意，立即单方注销该用户的Iontrum账户并停止向用户继续提供服务，因此而给用户造成的任何损失，由该用户自行承担。

11 、 Iontrum有权就本服务向您收取一定的手续费或服务费，具体以Iontrum页面公示为准。

12 、 您同意Iontrum有权基于司法、监管部门、监督机构的要求或自身业务原因，暂停、中断或终止向您提供全部或者部分本服务。

三、法律责任与免责
1 、Iontrum对其所有服务将尽力维护其安全性及方便性，但对服务中非因Iontrum过错所产生的信息（包括但不限于用户发布 / 储存的信息、账户地址、数字资产数量、信息数据等）删除或储存失败不承担任何责任。

2 、使用本服务涉及到互联网服务，可能会受到各个环节不稳定因素的影响，存在因不可抗力 ( 包括但不限于战争、地震、雷击、水灾、火灾、政府行为、电信部门技术管制 ) 、计算机病毒、黑客攻击、系统不稳定、用户所在位置、用户关机以及其他任何网络、技术、通信线路等原因造成的服务中断或不能满足用户要求的风险，用户须明白并自行承担以上风险，Iontrum不承担任何责任。

3 、用户因第三方如电信运营商部门的通讯线路故障、技术问题、网络、电脑故障、系统不稳定性及其他各种不可抗力 ( 包括但不限於战争、地震、雷击、水灾、火灾、政府行为、电信部门技术管制 ) 原因而遭受的经济损失，Iontrum不承担任何责任。

4 、因用户违反本协议或相关的服务条款的规定，导致或产生Iontrum或其合作公司、关联方遭受任何第三方主张的任何索赔、要求或损失的（包括合理的诉讼费用和律师费用），您应承担赔偿责任。

四、其他
1 、 您同意，Iontrum有权随时对本协议内容进行调整和补充，Iontrum将以网页公告等方式对该等变更予以公布。变更后的条款自公布之日起生效。若您在本协议变更的条款生效后，仍继续使用本服务的，则视为接受该等变更，若您不同意的，您有权终止本协议并停止使用本服务。

2、本协议适用中华人民共和国法律并据其解释。

3 、 因本协议引起的或与本协议有关的争议，Iontrum可与您协商解决。协商不成的，任何一方均有权向北京市海淀区人民法院提起诉讼解决。</p>
	<div  class="agree" >
            <span>我已阅读并同意《用户服务协议》</span>
      </div>
    </div>
    </div>
</div>
</template>
<script>

	
export default {
    data () {
        return {
            selectItem:0,
            sex:[{"sex":"女",id:"2"},{"sex":"男",id:"1"}],
            mobile: '',
            password: '',
            code:'',
            name:'',
            yanzhengma:"",
            codemessage:60,
            type:1,
            mobilemessage:"",
            mysex:"女",
//          invite:""
        }
    },
    watch:{   //watch()监听某个值（双向绑定）的变化，从而达到change事件监听的效果
                name:{
                    handler:function(){
                        var _this = this;
                        
                        var _sum = 20; //字体限制为100个
                       
                        _this.$refs.count.setAttribute("maxlength",_sum);
                        var reg = /[\u4e00-\u9fa5]{1}/g;            //中文
                        var notReg = /\w{1}/g;                      //非中文
	                    var resultCn = _this.$refs.count.value.match(reg);
	                    var resultEn = _this.$refs.count.value.match(notReg);
	                    
	                if(resultCn){
                       _sum= _sum- (resultCn.length*2);
                    }
                    if(resultEn){

                        _sum= _sum- resultEn.length;
                    }
                    
                    if(_sum<=0){

                 	    var finalLen = _this.$refs.count.value.length+_sum;
                        var value =  _this.$refs.count.value.substring(0,finalLen);
                        _this.$refs.count.setAttribute("maxlength",_sum);
//                  
                        _this.name =value

                    }
                       
                    },
                    deep:true
                }
            },
    created:function(){
    	var that = this;
    	var userInfo= window.sessionStorage.getItem('userInfo'); 
   	    that.userInfo = JSON.parse(userInfo);
			if(that.userInfo){
				    
					that.userInfo=JSON.parse(userInfo);
					that.invite_code = that.userInfo.invite_code;
					that.user_id = that.userInfo.user_id
//					alert(that.invite_code)
			}else{
					that.invite_code = "";	
					that.user_id =""
				}
//		alert(window.location.href.split("?")[1]);
		that.yanzhengma = window.location.href.split("?")[1]
    },
    methods: {
    	guan:function(){
    		$(".box").fadeOut(1000)
    	},
    	kai:function(){
    		$(".box").fadeIn(1000)
    	},
       back:function(){
            window.history.go(-1);
       },
       next:function(){
       		var that = this;
//          var reg=/^[1][3578][0-9]{9}$/;
 			var reg=/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
            if(that.mobile==""){
//              alert("手机号不能为空");
   				mizhu.alert('温馨提示', '手机号不能为空');
                return false;
            }else if(that.password==""){
//                alert("密码不能为空");
                     mizhu.alert('温馨提示', '密码不能为空');
                  return false;
               }
            $(".name").css("display","block");
            $(".reg").css("display","none");
       },
       toColor:function(index,id){
            this.selectItem=index;
            this.mysex=id;    
       },
       end:function(){
            var that = this;
            if(that.name == ""){
//          	alert("请输入您的昵称");
				mizhu.alert('温馨提示', '请输入您的昵称');
            	return false;
            }
            that.$Post('/signup' ,{mobile: that.mobile,code:that.code,pwd:that.password,user_name:that.name,sex:that.mysex,invite_code:that.yanzhengma}, function(data){
                        console.log(data);
                        if(data.code=="207"){
                            that.$router.push('/login');
                        }else if(data.code=="213"){
//                      	alert("请您输入正确格式的密码");
                        	mizhu.alert('温馨提示', '请您输入正确格式的密码');
                        }else if(data.code=="210"){
                        	alert("该手机号已经被注册");
//                      	mizhu.alert('温馨提示', '该手机号已经被注册');
                        }else if(data.code=="209"){
//                      	alert("您的名称不能为空");
                        	mizhu.alert('温馨提示', '您的名称不能为空');
                        }else if(data.code=="204"){
//                      	alert("您的性别不能为空");
                        	mizhu.alert('温馨提示', '您的性别不能为空');
                        }else if(data.code=="214"){
//                      	alert("请先获取验证码");
                        	mizhu.alert('温馨提示', '请先获取验证码');
                        }else if(data.code=="216"){
//                      	alert("名字不能为空");
                        	mizhu.alert('温馨提示', '名字不能为空');
                        }else if(data.code=="217"){
//                      	alert("性别不能为空");
                        	mizhu.alert('温馨提示', '性别不能为空');
                        }else if(data.code=="218"){
//                      	alert("以太坊交互失败");
                        	mizhu.alert('温馨提示', '以太坊交互失败');
                        }else if(data.code=="220"){
//                      	alert("输入的邀请码有误");
                        	mizhu.alert('温馨提示', '输入的邀请码有误');
                        }else if(data.code=="215"){
//                          alert("您输入的验证码有误");
                            mizhu.alert('温馨提示', '您输入的验证码有误');
                        }
                         
            });
       },
       requirecode:function(){
            var that = this;
           
            if(that.mobile!==""){
               var reg=/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
               if(reg.test(that.mobile)){
                  that.type=2;
                  that.mobilemessage="";
                    setInterval(()=>{
                    that.codemessage--;
                        if(that.codemessage==0){
                            that.type=1;
                        }
                    },1000);
                    that.codemessage=60;
                    that.$Post('/smscode' ,{mobile: that.mobile,type:"2"}, function(data){
                        console.log(data);
                        if(data.code=="203"){                           
//                         alert("发送失败");                       
							 mizhu.alert('温馨提示', '发送失败');
                       }
                        });
               }else{
                   that.mobilemessage="手机号格式错误";
                   
               }
                 
            }else if(that.mobile==""){
                that.mobilemessage="手机号不能为空";
            }
            
       }
    }
}
</script>

<style scoped>
input{
	color: #fff;
}
.protocol{
	    width: 8.88rem;
    height: 100%;
    background: #fff;
    overflow-y: scroll;
    overflow-x: hidden;
    border-radius: 0.27rem;
    margin: 0 auto;
	
}
.protocol>h3{
	font-size: 0.22rem;
	color: #101010;
}
.protocol>p{
	margin-top:1.27rem;
	font-size: 0.22rem;
	color: #101010;
	padding:0rem 0.27rem 0;
	padding-bottom: 1.2rem;
}
.box{
	width: 8.88rem;
    height: 80%;
    margin: 0 auto 0;
    position: relative;
    /*top: -385px;*/
    left:50%;
	top:50%;
	position: fixed;
	-webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    transform:translate(-50%,-50%);
}
.agree{
	font-size: 0.33rem;
	height: 1.11rem;
	line-height: 1.11rem;
	padding-left:0.69rem;
	border-top:1px solid #E5E5E5;
	position: absolute;
    bottom: 0;
    border-radius: 0 0 10px 10px;
	width:8.19rem;
	background: #fff;	    
}
.top{
	width:100%;
	height:1.1rem;
	line-height:1.1rem;
	position:absolute;
	top:0rem;
	right:0rem;
	background: #fff;
	border-radius: 10px 10px 0 0;
	
}
.top>img{
	width: 0.66rem;
	margin-left: 0.25rem;
    	margin-top: 0.22rem;
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
.form-group{
    width:8.33rem;
    margin:0 auto;
    border-bottom:1px solid #BBBBBB;
}
.form-group input{
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
    padding:0.23rem;
    line-height: 1rem;
    float: right;
}
.form-group input::-webkit-input-placeholder{
         font-size: 0.38rem;  
        color: #BBBBBB;
}
.form-group input:focus{
    border:none;
    outline: none;
}

.login{
    padding-top:1.61rem;
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
.xieyi{
    font-size:0.33rem;
    color:#ffffff;
    padding-top:0.41rem;
}
.name{
    display: none;
}
.note p{
    color:#ffffff;
    width:7.5rem;
    text-align: left;
    font-size: 0.33rem;
    margin:0 auto;
    padding-top:0.36rem;
}
.sex{
    font-size:0.38rem;
     color:#ffffff;
     width:7.5rem;
    margin:0 auto;
    padding-top:0.36rem;
}
ul{
    float:right;
}
ul li{
    list-style: none;
    float:right;
    color:#737373;
    width: 2.2rem;
    text-align: right;
}
</style>


