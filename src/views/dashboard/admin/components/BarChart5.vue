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
			huiShouInfo: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				chart: null,
				data1: [],
				data2: [],
				data3: []
			}
		},
		watch: {
			huiShouInfo(newValue, oldValue) {
				this.data1 = this.huiShouInfo.map(item => item.DepartName);
				this.data2 = this.huiShouInfo.map(item => item.Amt);
				this.data3 = this.huiShouInfo.map(item => item.Num);
				this.initChart()
			}
		},
		// mounted() {
		//   this.$nextTick(() => {
		//     this.initChart()
		//   })
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
					grid: {
						x: 45,
						y: 45,
						x2: 30,
						y2: 30
					},

					title: {
						subtext: ''
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['数量（件）', '金额（千元）']
					},
					calculable: true,
					xAxis: [{
						type: 'category',
						data: this.data1
					}],
					yAxis: [{
							type: 'value'
						},
						{
							type: 'value'
						}
					],
					series: [{
							name: '数量（件）',
							type: 'bar',
							data: this.data3,
							itemStyle: {
								normal: {
									label: {
										show: true, // 开启显示
										position: 'top', // 在上方显示
										textStyle: { // 数值样式
											color: '#20222A',
											fontSize: 14
										}
									}
								}
							},
							yAxisIndex: 1

						},
						{
							name: '金额（千元）',
							type: 'bar',
							data: this.data2,
							itemStyle: {
								normal: {
									label: {
										show: true, // 开启显示
										position: 'top', // 在上方显示
										textStyle: { // 数值样式
											color: '#20222A',
											fontSize: 14
										}
									}
								}
							}
						}
					]
				})
			}
		}
	}
</script>
