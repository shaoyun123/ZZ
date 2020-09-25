<template>
	<div class="app-container">
		<switch-roles @change="handleRolesChange" />
		<!-- <el-button @click="postUrl"></el-button> -->
	</div>
</template>

<script>
	import SwitchRoles from './components/SwitchRoles'

	// import axios from 'axios'

	// axios配置
	// let http = axios.create({
	// 	baseURL: 'http://47.103.71.190:5556/api/'
	// 	// 可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
	// })
	export default {
		name: 'PagePermission',
		components: {
			SwitchRoles
		},
		methods: {
			handleRolesChange() {
				this.$router.push({
					path: '/permission/index?' + +new Date()
				})
			},

			// postUrl() {
			// 	http.get('/Home/Console?id=00422')
			// 		.then((res) => {
			// 			console.log('post请求成功', res.data)
			// 		}).catch((err) => {
			// 			console.log('post请求失败', err)
			// 		})
			// }
		},
		// created() {
		// 	this.postUrl()
		// }

	}
</script>
