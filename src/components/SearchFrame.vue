<template>
    <div class="middle-index">
        <div class="tab">
            <img src="../../static/img/back.png" alt="" @click="close()">
            <span>搜索</span>
        </div>
        <div class="content">
            <iframe id="show-iframe" frameborder="false" width="100%" height="100%" allowtransparency="true" :src="searchUrl"></iframe>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SearchFrame',
    data() {
        return {
            searchText: "",
            searchUrl: ""
        }
    },

    created() {
      let $this = this
      $this.searchText = $this.$route.query.searchText || ''
      $this.searchUrl = 'https://m.baidu.com/s?word=' + $this.searchText
    },
    methods: {
        close: function() {
            window.history.go(-1);
        },

    }
}
</script>
<style scoped>
html,body,#app,.middle-index,.content{height: 100% !important;}
.tab {
    background: #ffffff;
    height: 1.5rem;
    line-height: 1.5rem;
    position: fixed;
    top: 0px;
    z-index: 1000;
    width: 100%;
}

.tab img {
    width: 0.66rem;
    margin-left: 0.25rem;
    margin-top: 0.42rem;
}

.tab span {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    font-size: 0.44rem;
}
</style>