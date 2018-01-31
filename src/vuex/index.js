import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	username:""
}

const mutations = {
	setUsername: function(state,username){
		state.username = username;
	}
}

const action = {
	setUsernameA: function({commit},username){
		commit("setUsername",username)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})