import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var state = {
	cart:[]
}

// 持久化：从本地取出数据
if(localStorage.getItem("data")) {
	var data = JSON.parse(localStorage.getItem("data"));
	state = data;
}

function saveTolocal(state) {
	// 持久化：保存数据
	localStorage.setItem("data", JSON.stringify(state));
}

const mutations = {
	addToCart: function(state, goods_info) {
		state.cart.push(goods_info);
		// 持久化：保存数据
		saveTolocal(state);
	}
}

const actions = {
	addToCartA: function({commit}, goods_info) {
		commit("addToCart", goods_info);
		console.log(goods_info)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})