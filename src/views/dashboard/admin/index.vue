<template>
	<div class="dashboard-editor-container">
		<github-corner class="github-corner" />
		<!-- <panel-group @handleSetLineChartData="handleSetLineChartData" /> -->
		<panel-group />
		<el-row :gutter="16">
			<el-col :xs="24" :sm="24" :lg="9">
				<div class="chart-wrapper">
					<span>绩效</span>
					<!-- <bar-chart v-if="{JSON.stringify(ChartDatas)!='{}'}" v-bind:chartData="ChartDatas.head_achievements" /> -->
					<bar-chart :HeadAchievements="ChartDatas.headAchievements" v-if="ChartDatas.headAchievements" />
				</div>
			</el-col>
			<el-col :xs="24" :sm="24" :lg="9">
				<div class="chart-wrapper">
					<div slot="header" class="clearfix">
						<span>部门拨款率</span>
						<el-button style="float: right; padding: 3px 0" type="text" @click="toggle">切换</el-button>
					</div>
					<!-- <bar-chart1 v-show="flag" :departMentbk="ChartDatas.departMentbk" v-if="ChartDatas.departMentbk"/>
					<bar-chart6 v-show="!flag" :scbk="ChartDatas.scbk" v-if="ChartDatas.scbk" /> -->
					<bar-chart1 :departMentbk="toggleData" v-if="toggleData"/>
				</div>
			</el-col>
			<el-col :xs="24" :sm="24" :lg="6">
				<div class="chart-wrapper">
					<span>TOP分公司拨款金额排行</span>
					<text-content :lists="ChartDatas.top8scbk" v-if="ChartDatas.top8scbk.length" />
				</div>
			</el-col>
		</el-row>
		<el-row :gutter="16">
			<el-col :xs="24" :sm="24" :lg="9">
				<div class="chart-wrapper">
					<span>资产车-天数区间</span>
					<bar-chart2 :assetsCarinfo="ChartDatas.assetsCarinfo" v-if="ChartDatas.assetsCarinfo" />
				</div>
			</el-col>
			<el-col :xs="24" :sm="24" :lg="9">
				<div class="chart-wrapper">
					<span>车辆种类(台数(件))</span>
					<bar-chart3 :toggleChart3="ChartDatas.carTypeInfo" v-if="ChartDatas.carTypeInfo" />
				</div>
			</el-col>
			<el-col :xs="24" :sm="24" :lg="6">
				<div class="chart-wrapper">
					<span>每月拖回车</span>
					<text-content :lists="ChartDatas.tuohuoinfo" v-if="ChartDatas.tuohuoinfo.length" />
				</div>
			</el-col>
		</el-row>
		<el-row :gutter="16">
			<el-col :xs="24" :sm="24" :lg="9">
				<div class="chart-wrapper">
					<span>部门当月违约率</span>
					<bar-chart4 :weiYueInfo="ChartDatas.weiYueInfo" v-if="ChartDatas.weiYueInfo" />
				</div>
			</el-col>
			<el-col :xs="24" :sm="24" :lg="9">
				<div class="chart-wrapper">
					<span>部门当月回收率</span>
					<!-- <bar-chart5 :huiShouInfo="ChartDatas.huiShouInfo" v-if="ChartDatas.huiShouInfo" /> -->
					<bar-chart3 :toggleChart3="ChartDatas.huiShouInfo" v-if="ChartDatas.huiShouInfo" />
				</div>
			</el-col>
			<el-col :xs="24" :sm="24" :lg="6">
				<div class="chart-wrapper">
					<span>TOP分公司违约金额排行</span>
					<text-content :lists="ChartDatas.top8wy" v-if="ChartDatas.top8wy.length" />
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import GithubCorner from '@/components/GithubCorner'
	import PanelGroup from './components/PanelGroup'
	import BarChart from './components/BarChart'
	import BarChart1 from './components/BarChart1'
	import BarChart2 from './components/BarChart2'
	import BarChart3 from './components/BarChart3'
	import BarChart4 from './components/BarChart4'
	// import BarChart5 from './components/BarChart5'
	import BarChart6 from './components/BarChart6'
	import TextContent from './components/textContent'

	export default {
		name: 'DashboardAdmin',
		components: {
			GithubCorner,
			PanelGroup,
			BarChart,
			BarChart1,
			BarChart2,
			BarChart3,
			BarChart4,
			// BarChart5,
			BarChart6,
			TextContent
		},
		data() {
			return {
				ChartDatas: {
					assetsCarinfo: [], // echart  资产车-天数区间
					carTypeInfo: [], // echart  车辆种类(台数(件))
					departMentbk: [], // echart  部门拨款率1
					headAchievements: {}, // echart  绩效
					huiShouInfo: [], // echart  部门当月回收率
					scbk: [], // echart 部门拨款率2
					top8scbk: [], // TOP分公司拨款金额排行
					top8wy: [], // TOP分公司违约金额排行
					tuohuoinfo: [], // 每月拖回车
					weiYueInfo: {}, // echart  部门当月违约率					
				},
				toggleData:[],
				flag: true,
			}
		},
		created() {
			this.$store.dispatch('home/console').then((data) => {
				let newArray;
				this.ChartDatas.headAchievements = data.data.head_achievements;
				newArray = data.data.assetscarinfo.reverse();
				newArray.push(newArray.shift());
				this.ChartDatas.assetsCarinfo = newArray;
				this.ChartDatas.carTypeInfo = data.data.cartypeinfo
				this.ChartDatas.departMentbk = data.data.departMentbk
				this.ChartDatas.huiShouInfo = data.data.huishouinfo
				this.ChartDatas.scbk = data.data.scbk
				this.ChartDatas.top8scbk = data.data.top8scbk
				this.ChartDatas.top8wy = data.data.top8wy
				this.ChartDatas.tuohuoinfo = data.data.tuohuoinfo
				this.ChartDatas.weiYueInfo = data.data.weiyueinfo
				this.toggleData = data.data.departMentbk
				// console.log(this.ChartDatas);
			}).catch((res) => {
				console.log(res);
			})
		},
		methods: {
			// toggle() {
			// 	this.flag = !this.flag;
			// }
			toggle() {
				this.toggleData = this.toggleData == this.ChartDatas.departMentbk?this.ChartDatas.scbk:this.ChartDatas.departMentbk;
				// console.log(this.toggleData);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dashboard-editor-container {
		padding: 32px;
		background-color: rgb(240, 242, 245);
		position: relative;

		.github-corner {
			position: absolute;
			top: 0px;
			border: 0;
			right: 0;
		}

		.chart-wrapper {
			background: #fff;
			padding: 16px 16px 0;
			margin-bottom: 32px;
		}
	}

	@media (max-width:1024px) {
		.chart-wrapper {
			padding: 8px;
		}
	}
</style>
