 <template>
  
    <div class="middle-index">
      <img src="../../static/img/indexBG.jpg" alt="">
      <div class="tab">
          <img src="../../static/img/back.png" alt="" @click="close()">
          <!-- <img src="../../static/img/close.png" alt="" @click="close()"> -->
          <span>帮助</span>
      </div>
      <div class="content">
         <img src="../../static/img/rule.png" alt="">
         <div class="main_content" style="padding:0 0.55rem">
             <div class="caizuan">
                <p>什么是体力</p>
                <p>体力值用于答题，每轮开始答题需要消耗一定数量的体力，体力不足时无法进行答题。<br />体力回复：用户每6分钟回复1点体力，体力上限为100，体力回复到100后将停止增加。<br />道具：使用道具可以直接增加体力或提高体力回复速度。</p>
            </div>
            <div class="caizuan">
                <p>如何进行答题</p>
                <p>点击开始挑战进行答题，答题前有5秒倒计时，倒计时结束答题开始，每一轮答题共10道题，每一题回答时间为10秒，每题基础分1分，用户答对获得分数为基础分*剩余秒数，每轮答题用户获得36分即为挑战成功，未达到36分则挑战失败。</p>
            </div>
            <div class="caizuan">
                <p>答题获取能量</p>
                <p>每成功完成一轮答题，获胜后将获得1点能量。</p>
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
    height: 15rem;
    width: 100%;
    position: relative;
    text-align: center;
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
    line-height: 0.66rem;
}
.caizuan p:last-of-type{
    font-size: 0.38rem;
    text-align: left;
}

</style>


