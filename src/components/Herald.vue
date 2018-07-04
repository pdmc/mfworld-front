<template>
   <div class="main_box">
       <img src="../../static/img/indexBG.jpg" alt="">
       <div  class="tab">
            <img src="/static/img/back.9fbd588.png" alt="" @click="back()">
       </div>
       <div class="herald">
           <p>竞拍商品预告</p>
           <span>竞拍商品预告</span>
           <img src="../../static/img/guu.png" alt="">
           <img src="../../static/img/joyby.png" alt="">
           <img src="../../static/img/yoyo.png" alt="">
           <img src="../../static/img/ggg.png" alt="">
           <img src="../../static/img/gugu.png" alt="">
           <p style="font-size:0.55rem;margin-bottom: 2rem;">更多精彩商品敬请关注</p>
       </div>
   </div>
</template>

<script>
export default {
  data(){
      return{

      }
  },
  methods:{
        back:function(){
             window.history.go(-1);
        },
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
 .main_box>img{
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
}
.tab span{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    font-size: 0.44rem;
}
.herald{
    position: relative;
    text-align: center;
    margin-top: 1.1rem;
}
.herald p{
  font-size:1.11rem;
  color:#ffffff;
  padding-top:0.55rem;
}                                               
.herald span{
    font-size:0.55rem;
    color:#ffffff;
}
.herald img{
    width:9.44rem;
    height:3.33rem;
}
</style>


