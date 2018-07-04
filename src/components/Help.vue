 <template>
  
    <div class="middle-index">
      <img src="../../static/img/indexBG.jpg" alt="">
      <div class="tab">
          <img src="../../static/img/back.png" alt="" @click="close()">
          <!-- <img src="../../static/img/close.png" alt="" @click="close()"> -->
          <span>帮助</span>
      </div>
      <div class="content">
         <img src="../../static/img/title.png" alt="">
         <div class="main_content" style="padding:0 0.55rem">
             <div class="caizuan">
                <p>什么是彩钻</p>
                <p>彩钻是基于个人在IONTRUM活动产生的奖励，可以用于在粒子空间内的消费与兑换等。48小时不领取彩钻将暂停生产。<br>彩钻总量有限，且每2年产出量减少一半，随着时间的推移获取难度越来越大，前期参与更有优势。</p>
            </div>
            <div class="caizuan">
                <p>什么是能量</p>
                <p>能量是用户获取彩钻的影响因子，能量越高，获得的彩钻越多。<br>彩钻每天产量固定，第一年每天产量约27万个，每2年减少一次。按照用户当前的能量值在IONTRUM总的能量值占比分配彩钻。<br>假设每日发放彩钻总数为A：<br> <span style="color:#2060B5">用户每日领取到的彩钻=A*该用户当前能量值/所有用户能量值之和</span></p>
            </div>
            <div class="caizuan">
                <p>如何获得能量</p>
                <p>在IONTRUM中进行浏览、学习、社交等所有活动，答题并取得胜利，或完成指定独家任务，都可以增加能量，由于目前IONTRUM正在建设中，未来将支持更多获取能量的方式。</p>
            </div>
         </div>
      </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
           
        }
    },
    methods: {
      close:function(){
          this.$router.push('/index');
      }
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
    margin-top: 1.2rem;
}
.content>img{
        height: 1.38rem;
        padding-top: 0.1rem;
}
.caizuan{
    background: #ffffff;
    border-radius: 0.3rem;
    padding: 0 0.55rem;
    padding-top: 0.69rem;
    padding-bottom: 0.69rem;
    margin-bottom: 0.55rem;
}
.caizuan p:first-of-type{
    width:4.16rem;
    height:0.66rem;
    background: #1F60B7;
    font-size: 0.38rem;
    color: #ffffff;
    margin: 0 auto;
    border-radius: 0.3rem;
    margin-bottom: 0.55rem;
    line-height: 0.66rem
}
.caizuan p:last-of-type{
    font-size: 0.38rem;
    text-align: left;  
}

</style>


