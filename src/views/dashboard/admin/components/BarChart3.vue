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
			// carTypeInfo: {
			// 	type: Array,
			// 	default: []
			// }
			toggleChart3: {
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
			toggleChart3(newValue, oldValue) {
				if(this.toggleChart3[0].carType){
					this.data1 = this.toggleChart3.map(item => item.carType);
					this.data2 = this.toggleChart3.map(item => item.amt);
					this.data3 = this.toggleChart3.map(item => item.num);
				}else{
					this.data1 = this.toggleChart3.map(item => item.DepartName);
					this.data2 = this.toggleChart3.map(item => item.Amt);
					this.data3 = this.toggleChart3.map(item => item.Num);
				}
				
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
					// color: ['#c23531', '#3398db'],
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
							// color: function(params) {
							//   var colorList = ['#3398db', '#3398db', '#3398db']; //每根柱子的颜色
							//   return colorList[params.dataIndex];
							// },
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
								// color: function(params) {
								//   var colorList = ['#3398db', '#3398db', '#3398db']; //每根柱子的颜色
								//   return colorList[params.dataIndex];
								// }
							}
						}
					]
				})
			}
		}
	}
</script>
