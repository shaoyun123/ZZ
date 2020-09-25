<template>
	<div>
		<el-upload class="upload-demo" action="https://httpbin.org/post" :on-preview="handlePreview"
		 :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
			<el-button size="small" type="primary">上传身份证正面</el-button>
		</el-upload>
		<br />
		<el-upload class="upload-demo" action="https://httpbin.org/post" :on-preview="handlePreview"
		 :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
			<el-button size="small" type="primary">上传银行卡正面</el-button>
		</el-upload>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				fileList: []
			}
		},
		methods: {
			// 文件上传开始
			handleRemove(file, fileList) {
				console.log(file, fileList)
			},
			handlePreview(file) {
				console.log(file)
			},
			handleExceed(files, fileList) {
				this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
			},
			beforeRemove(file, fileList) {
				return this.$confirm(`确定移除 ${file.name}？`)
			}
			
			// 结束			
		}	
	}
</script>

<style>
	
</style>
