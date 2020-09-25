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
			assetsCarinfo: {
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
		//  mounted() {
		//    this.$nextTick(() => {
		//      this.initChart()
		//    })
		//  },
		watch: {
			assetsCarinfo(newValue, oldValue) {
				this.data1 = this.assetsCarinfo.map(item => item.day);
				this.data2 = this.assetsCarinfo.map(item => item.num);
				this.data3 = this.assetsCarinfo.map(item => item.amt);
				this.initChart()
			}
		},
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
					title: {
						text: ''
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['数量（件）', '金额（千元）']
					},
					grid: {
						x: 45,
						y: 45,
						x2: 30,
						y2: 30
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: this.data1
						// data: ['30天以内', '61~90天', '91~120天', '120天以上']
					},
					yAxis: [{
							type: 'value',
							name: '数量（件）',
							axisLabel: { // 调整左侧Y轴刻度， 直接按对应数据显示
								show: true,
								showMinLabel: true,
								showMaxLabel: true,
								formatter: function(value) {
									return value
								}
							}
						},
						{
							type: 'value',
							name: '金额（千元）',
							axisLabel: { // 调整左侧Y轴刻度， 直接按对应数据显示
								show: true,
								showMinLabel: true,
								showMaxLabel: true,
								formatter: function(value) {
									return value
								}
							}
						}
					],
					series: [{
							name: '数量（件）',
							type: 'line',
							yAxisIndex: 0,
							data: this.data2
							// data: [13, 3, 7, 17]
						},
						{
							name: '金额（千元）',
							type: 'line',
							yAxisIndex: 1,
							data: this.data3
							// data: [1043, 325, 972, 2124]
						}

					]
				})
			}
		}
	}
</script>
