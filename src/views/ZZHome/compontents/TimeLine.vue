<template>
	<div>
		<el-steps :active="2" align-center>
			<el-step title="进件" description="这是一段很长很长很长的描述性文字" />
			<el-step title="店长审核" description="这是一段很长很长很长的描述性文字" />
			<el-step title="风控" description="这是一段很长很长很长的描述性文字" />
			<el-step title="签约" description="这是一段很长很长很长的描述性文字" />
			<el-step title="拨款" description="这是一段很长很长很长的描述性文字" />
		</el-steps>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				active:''
			}
		},
		components:{
			
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
