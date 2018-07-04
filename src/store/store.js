import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
  	 goodsArr:[],
  	 tili:"",
  	 physical:0,
  	 isLogin:0,
  	 color:0.00000,
  	 ucolor:0.00000,
  	 num:0.00000,
  	 energy:0,
  	 isShow:false,
  	 isLogin2:false,
  	 qkllink:"",
  	 code:""
  },
  getters:{
//		  isLogin2:state => state.isLogin2
  },
  mutations:{
  	  setCode:function(state,data){
  	  	 state.code = data;
  	  },
  	  setQkllink:function(state,data){
  	  	 state.qkllink = data;
  	  },
  	  setPhysical:function(state,data){
      	 state.physical = data;
      },
  		setEnergy:function(state,data){
      	 state.energy = data;
      },
      setGoodsArr:function(state,data){
      	 state.goodsArr = data;
      },
      setNumber:function(state,data){
      	state.num = data;
      },
      setuColor:function(state,data){
      	 state.ucolor = data;
      },
      setColor:function(state,data){
      	state.color = data;
      },
      removeGoods:function(state){
      	 state.goodsArr.forEach(function(data,index){
      	 	    if(data.num == 0){  	 	    	  
      	 	    		state.goodsArr.splice(index,1)
      	 	    }      	 	    
      	 })
      },

       changeLogin(state,data){
    			state.isLogin = data;   			
  		}
  },
 })
  