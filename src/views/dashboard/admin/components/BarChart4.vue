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
			weiYueInfo: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				chart: null,
				data: [],
			}
		},
		watch: {
			weiYueInfo(newValue, oldValue) {
				this.data.push({
					name: '回收金额',
					value: this.weiYueInfo.HS_Amt
				}, {
					name: '违约金额',
					value: this.weiYueInfo.WY_Amt
				})
				this.initChart()
			}
		},
		// mounted() {
		// 	this.$nextTick(() => {
		// 		this.initChart()
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
					title: {
						text: '违约金额比例(元)',
						x: 'center',
						textStyle: {
							fontSize: 14
						}
					},
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b} : {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data: ['回收金额', '违约金额']
					},
					series: [{
						type: 'pie',
						radius: '55%',
						center: ['50%', '60%'],
						data: this.data
						// [{ value: 335, name: '回收金额' },
						//  { value: 310, name: '违约金额' }]

					}]
				})
			}
		}
	}
</script>
