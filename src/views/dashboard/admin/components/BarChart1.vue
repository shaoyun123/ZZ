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
			departMentbk: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				chart: null,
				data: [],
			}
		},
		watch: {
			departMentbk(newValue, oldValue) {
				this.data = [];
				this.departMentbk.map((value) => {
					this.data.push({
						"name": value.DepartName,
						"value": value.Amt
					})
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
					// title: {
					// 	text: '违约金额比例(元)',
					// 	x: 'center',
					// 	textStyle: {
					// 		fontSize: 14
					// 	}
					// },
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b} : {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						x: 'left',
						data: ['业务一组', '业务二组', '苏州中融']
						// data: ['回收金额', '违约金额']
					},
					series: [{
						name: '拨款比例',
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
