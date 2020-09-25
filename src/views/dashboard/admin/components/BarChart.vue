<template>
	<div :class="className" :style="{height:height,width:width}" />
</template>

<script>
	import echarts from 'echarts'
	require('echarts/theme/macarons') // echarts theme
	import resize from './mixins/resize'
	const animationDuration = 6000

	export default {
		mixins: [resize],
		props: {
			className: {
				type: String,
				default: 'chart'
			},
			width: {
				type: String,
				default: '100%'
			},
			height: {
				type: String,
				default: '300px'
			},
			HeadAchievements: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				chart: null,
				data1: [],
				data2: []
			}
		},
		watch: {
			HeadAchievements(newValue, oldValue) {
				this.data1.push(this.HeadAchievements.bkamt, this.HeadAchievements.hzamt, this.HeadAchievements.jjamt);
				this.data2.push(this.HeadAchievements.bkcount, this.HeadAchievements.hzcount, this.HeadAchievements.jjcount);
				this.initChart();
			}
		},
		// mounted() {
		// 	this.$nextTick(() => {	
		// 		this.data1.push(this.HeadAchievements.bkamt, this.HeadAchievements.hzamt, this.HeadAchievements.jjamt);
		// 		this.data2.push(this.HeadAchievements.bkcount, this.HeadAchievements.hzcount, this.HeadAchievements.jjcount);
		// 		this.initChart();
		// 	})
		// },
		beforeDestroy() {
			if (!this.chart) {
				return
			}
			this.chart.dispose()
			this.chart = null
		},
		methods: {
			initChart() {
				this.chart = echarts.init(this.$el, 'macarons')

				this.chart.setOption({
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					grid: {
						x: 45,
						y: 45,
						x2: 25,
						y2: 30
					},
					xAxis: [{
						type: 'value',
						boundaryGap: [0, 0.01]
					}, {
						type: 'value',
						boundaryGap: [0, 0.01]
					}],
					yAxis: {
						type: 'category',
						data: ['进件', '核准', '拨款']
					},
					series: [{
							name: '数量（件）',
							type: 'bar',
							data: this.data1,
							xAxisIndex: 1
						},
						{
							name: '金额（千元）',
							type: 'bar',
							data: this.data2,
						}
					]
				})
			}
		}
	}
</script>
