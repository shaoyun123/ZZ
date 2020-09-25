<template>
	<div>
		<div style="margin-bottom:15px;">
			Your roles: {{ roles }}
		</div>
		Switch roles:
		<el-radio-group v-model="switchRoles">
			<el-radio-button label="editor" />
			<el-radio-button label="admin" />
		</el-radio-group>
		<!-- <el-button @click="ok()">123</el-button> -->
	</div>
</template>

<script>
	export default {
		computed: {
			roles() {
				return this.$store.getters.roles
			},
			switchRoles: {
				get() {
					return this.roles[0]
				},
				set(val) {
					this.$store.dispatch('user/changeRoles', val).then(() => {
						this.$emit('change')
					})
					// const { roles } = await store.dispatch('user/home')
				}
			}
		},
		methods: {
			

		}
	}
</script>
