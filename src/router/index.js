import Vue from 'vue'

import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
 import Login from '@/components/Login'
import Resigter from '@/components/Resigter'
import Forget_password from '@/components/Forget_password'
import Index from '@/components/Index'
import Help from '@/components/Help'
import Caizuan from '@/components/Caizuan'
import Energy from '@/components/Energy'
import My_account from '@/components/My_account'
import Logout from '@/components/Logout'
import Accelerate from '@/components/Accelerate'
import Rule from '@/components/Rule'
import Goods from '@/components/Goods'
import Herald from '@/components/Herald'
import Goods_store from '@/components/Goods_store'
import Achieve from '@/components/Achieve'
import Rank from '@/components/Rank'
import Begin from '@/components/Begin'
import Challage from '@/components/Challage'
import ChallageFailure from '@/components/ChallageFailure'
import ChallageSuccess from '@/components/ChallageSuccess'
import InviteFirend from '@/components/InviteFirend'
import GuessCaizuan from '@/components/GuessCaizuan'
import PaySuccess from "@/components/PaySuccess"
import PayFailure from "@/components/PayFailure"
import IndexOld from "@/components/IndexOld"
import MyGuess from "@/components/MyGuess"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component:Login,
      meta: {
          title: "登录"
      }
  },
  {
      path: '/',
      name: 'Login',
      component:Login,
      meta: {
          title: "登录"
      }

  },
  {
    path: '/register',
    name: 'register',
    component:Resigter,
    meta: {
        title: "注册"
    },
},
{
    path: '/forget_password',
    name: 'forget_password',
    component:Forget_password,
    meta: {
        title: "忘记密码"
}

},
{
    path: '/index',
    name: 'index',
    component:Index,
    meta: {
        title: "主页"
}

},
{
    path: '/help',
    name: 'help',
    component:Help,
    meta: {
        title: "帮助"
}

},
{
    path: '/caizuan',
    name: 'caizuan',
    component:Caizuan,
    meta: {
        title: "彩钻记录"
}

},
{
    path: '/energy',
    name: 'energy',
    component:Energy,
    meta: {
        title: "能量记录"
}

},
{
    path: '/my_account',
    name: '账号设置',
    component:My_account,
    meta: {
        title: "账号设置"
}

},
{
    path: '/logout',
    name: '退出登录',
    component:Logout,
    meta: {
        title: "退出登录"
}

},
{
    path: '/accelerate',
    name: '能量提升',
    component:Accelerate,
    meta: {
        title: "能量提升"
}

},
{
    path: '/rule',
    name: '答题规则',
    component:Rule,
    meta: {
        title: "答题规则"
}

},
{
    path: '/goods',
    name: '我的物品',
    component:Goods,
    meta: {
        title: "我的物品"
}

},
{
    path: '/herald',
    name: '竞拍商品',
    component:Herald,
    meta: {
        title: "竞拍商品"
}

},
{
    path: '/good_store',
    name: '道具商店',
    component:Goods_store,
    meta: {
        title: "道具商店"
}

},
{
    path: '/achieve',
    name: '成就',
    component:Achieve,
    meta: {
        title: "成就"
}

},
{
    path: '/rank',
    name: '排行榜',
    component:Rank,
    meta: {
        title: "排行榜"
}

},
{
    path: '/begin',
    name: '开始答题',
    component:Begin,
    meta: {
        title: "开始答题"
}

},
{
    path: '/Challage',
    name: '答题开始',
    component:Challage,
    meta: {
        title: "答题开始"
}

},
{
    path: '/ChallageFailure',
    name: '答题失败',
    component:ChallageFailure,
    meta: {
        title: "答题失败"
}

},
{
    path: '/ChallageSuccess',
    name: '答题成功',
    component:ChallageSuccess,
    meta: {
        title: "答题成功"
}

},
{
    path: '/InviteFirend',
    name: '邀请好友',
    component:InviteFirend,
    meta: {
        title: "邀请好友"
}

},
{
    path: '/guessCaizuan',
    name: '彩钻竞拍',
    component:GuessCaizuan,
    meta: {
        title: "彩钻竞拍"
}

},
{
    path: '/PaySuccess',
    name: '支付成功',
    component:PaySuccess,
    meta: {
        title: "支付成功"
}

},
{
    path: '/PayFailure',
    name: '支付失败',
    component:PayFailure,
    meta: {
        title: "支付失败"
}

},
{
    path: '/IndexOld',
    name: 'indexold',
    component:IndexOld,
    meta: {
        title: "旧的主页"
}

},
/*{
    path: '/Index',
    name: 'index',
    component:Index,
    meta: {
        title: "主页"
}

}*/,
{
    path: '/MyGuess',
    name: 'MyGuess',
    component:MyGuess,
    meta: {
        title: "我的竞猜"
}

}
  ]
})
