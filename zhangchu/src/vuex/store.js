import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/*
	state 用于存储数据项目
	mutations 单线程同步代码用于操作state
	actions 用于响应状态变化 不能操作state 而跟mutations的区别在于可以存在异步代码
	getters 用于获取数据的接口
*/
export default new Vuex.Store({
	state:{
		date: ""
	},
	mutations:{
		add_date(state,date){
			state.date = date;
		}
	},
	actions:{
		addDate({commit}, date){
			commit("add_date",date);
		}
	},
	getters:{
		getDate:function(state){
			return state.date;
		}
		//getDate:(state)=>state.date
	}
});