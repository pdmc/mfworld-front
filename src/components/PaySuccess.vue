<template>

  <div class="success">
      <img src="../../static/img/indexBG.jpg" alt="">
      <div class="pay_success">
        <p>恭喜您</p>
        <p>购买成功</p>
        <p @click="gotoIndex()">返回未来世界</p>
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
       gotoIndex:function(){
           this.$router.push('/index');
       },
   },

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
 
.pay_success{
    position: relative;
    color:#ffffff;
    padding-top: 3.33rem;
    text-align: center;
}
.pay_success p:first-of-type{
    font-size:0.5rem;
}
.pay_success p:nth-child(2n){
      font-size:0.88rem;
      padding-bottom: 2.22rem;
}
.pay_success p:last-of-type{
    width:5.83rem;
    height:1.25rem;
    border:1px solid #ffffff;
    border-radius: 0.4rem;
    margin: 0 auto;
    font-size:0.44rem;
    line-height: 1.25rem;
}
.success{
    /*display: none;*/
}
.success>img{
    height: 100%;
    width: 100%;
    position: fixed;
}
</style>
