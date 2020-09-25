<template>
	<el-table :data="list" style="width: 100%;padding-top: 15px;">
		<el-table-column label="分公司" min-width="100">
			<template slot-scope="scope">
				<!-- {{ scope.row.DepartName | orderNoFilter }} -->
				{{ scope.row.DepartName }}
			</template>
		</el-table-column>
		<el-table-column label="金额(千元|元)" width="120" align="center">
			<template slot-scope="scope">
				{{ scope.row.Amt }}
			</template>
		</el-table-column>
		<el-table-column label="台数" width="50" align="center">
			<template slot-scope="scope">
				{{ scope.row.Num }}
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
	export default {
		props: ['lists'],
		data() {
			return {
				list: []
			}
		},
		created() {
			this.list = this.lists.slice(0, 5)
		}
	}
</script>
