
import {
	console
} from '@/api/home'

const state = {
	// token: getToken(),
	// name: '',
	// avatar: '',
	// introduction: '',
	// roles: [],
	// // id:00422
}

const mutations = {
	// SET_TOKEN: (state, token) => {
	// 	state.token = token
	// },
	// SET_INTRODUCTION: (state, introduction) => {
	// 	state.introduction = introduction
	// },
	// SET_NAME: (state, name) => {
	// 	state.name = name
	// },
	// SET_AVATAR: (state, avatar) => {
	// 	state.avatar = avatar
	// },
	// SET_ROLES: (state, roles) => {
	// 	state.roles = roles
	// },
	// // SET_ID: (state, id) => {
	// //   state.id = id
	// // },
}

const actions = {
	console() {
		return new Promise((resolve, reject) => {
			console().then(response => {
				resolve(response)
			}).catch(error => {
				reject(error)
			})
		})
	},	
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
