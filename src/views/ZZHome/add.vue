<template>
	<div class="app-container">
		<el-steps :active="2" align-center>
			<el-step title="进件" description="这是一段很长很长很长的描述性文字"></el-step>
			<el-step title="店长审核" description="这是一段很长很长很长的描述性文字"></el-step>
			<el-step title="风控" description="这是一段很长很长很长的描述性文字"></el-step>
			<el-step title="签约" description="这是一段很长很长很长的描述性文字"></el-step>
			<el-step title="拨款" description="这是一段很长很长很长的描述性文字"></el-step>
		</el-steps>

		<el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="120px">
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span>两证一卡</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					</div>
				</el-card>
			</el-col>
			<el-card shadow="hover">
				<div slot="header" class="clearfix">
					<span>承租人资料</span>
					<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
				</div>
				<el-form-item label="客户姓名" required>
					<el-input type="text" v-model="addForm.desc"></el-input>
				</el-form-item>
				<el-form-item label="身份证" required>
					<el-input type="text" v-model="addForm.desc"></el-input>
				</el-form-item>
				<el-form-item label="性别" required>
					<el-select v-model="addForm.region" placeholder="请选择性别">
						<el-option label="男" value="男"></el-option>
						<el-option label="女" value="女"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="出生日期" required>
					<el-form-item>
						<el-date-picker type="date" placeholder="选择日期" v-model="addForm.date1" style="width: 100%;"></el-date-picker>
					</el-form-item>
				</el-form-item>
				<el-col :span="24">
					<el-form-item label="户籍地址">
						<el-input type="textarea" v-model="addForm.desc" style="width: 100%;"></el-input>
					</el-form-item>
				</el-col>
				<el-form-item label="银行名称" required>
					<el-input type="text" v-model="addForm.desc"></el-input>
				</el-form-item>
				<el-form-item label="银行卡号" required>
					<el-input type="text" v-model="addForm.desc"></el-input>
				</el-form-item>
				<el-form-item label="驾驶证号" required>
					<el-input type="text" v-model="addForm.desc"></el-input>
				</el-form-item>
				<el-form-item label="手机号1" required>
					<el-input type="text" v-model="addForm.desc"></el-input>
				</el-form-item>
				<el-form-item label="手机号2" required>
					<el-input type="text" v-model="addForm.desc"></el-input>
				</el-form-item>
				<el-form-item label="学历" required>
					<el-select v-model="addForm.region" placeholder="请选择性别">
						<el-option label="男" value="男"></el-option>
						<el-option label="女" value="女"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="婚姻状况" required>
					<el-select v-model="addForm.region" placeholder="请选择性别">
						<el-option label="男" value="男"></el-option>
						<el-option label="女" value="女"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="子女数" required>
					<el-input type="text" v-model="addForm.desc"></el-input>
				</el-form-item>
				<el-form-item label="住宅地址" required>
					<el-input type="text" v-model="addForm.desc"></el-input>
				</el-form-item>
				<el-form-item label="住宅状况" required>
					<el-input type="text" v-model="addForm.desc"></el-input>
				</el-form-item>
				<el-form-item label="居住年限" required>
					<el-input type="text" v-model="addForm.desc"></el-input>
				</el-form-item>
				<el-form-item label="微信号" required>
					<el-input type="text" v-model="addForm.desc"></el-input>
				</el-form-item>
				<el-form-item label="就业状况" required>
					<el-select v-model="addForm.region" placeholder="请选择性别">
						<el-option label="男" value="男"></el-option>
						<el-option label="女" value="女"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="其他所得来源" required>
					<el-input type="text" v-model="addForm.desc"></el-input>
				</el-form-item>
				<el-form-item label="其他收入金额" required>
					<el-input type="text" v-model="addForm.desc"></el-input>
				</el-form-item>
				<!-- <el-form-item>
						<el-button type="primary" @click="submitForm('addForm')">立即创建</el-button>
						<el-button @click="resetForm('addForm')">重置</el-button>
					</el-form-item> -->

			</el-card>
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span>紧急联系人/担保人/配偶资料</span>
						<el-button style="float: right; padding: 3px 0" type="text" @click="removeSelected()">删除</el-button>
						<el-button style="float: right; padding: 3px 0" type="text" @click="addTableData()">添加</el-button>
					</div>
					<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column label="日期" width="120">
							<template slot-scope="scope">{{ scope.row.date }}</template>
						</el-table-column>
						<el-table-column prop="name" label="姓名" width="120">
						</el-table-column>
						<el-table-column prop="address" label="地址" show-overflow-tooltip>
						</el-table-column>
					</el-table>
					<div style="margin-top: 20px">
						<el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
						<el-button @click="toggleSelection()">取消选择</el-button>
					</div>
				</el-card>
			</el-col>
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span>其他联系人资料</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮1</el-button>
					</div>

				</el-card>
			</el-col>
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span>车辆/车商信息</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					</div>
					<el-form-item label="发动机号" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="车架号" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="车辆类别" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="上牌方式" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="品牌型号" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="颜色" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="车牌" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="出厂日" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="过户码" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="抵押人" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="车商名称" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="车商地址" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="展厅名称" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>

				</el-card>
			</el-col>
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span>立项报价</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					</div>
					<el-form-item label="还款类型" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="分公司" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="业务员" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="类型" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="申请日期" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="家访人员" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="返佣码" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="保险方式" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="产品方案" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="融资车价" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="购置税" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="牌照费" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="保险费" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="打包总价" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="履约定金" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="首付" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="尾款" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="付款类别" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="期数" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="期租金" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="每期租牌费" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="租赁款总额" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="收益率IRR%" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="期末过户码" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="缴款方式" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="进项发票" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="有线GPS数" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="无线GPS数" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="备注" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
				</el-card>
			</el-col>
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span>收付明细</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					</div>
					<el-form-item label="上下牌服务费" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="相关印花税(-)" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="GPS费用(-)" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="渠道服务费(-)" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
				</el-card>
			</el-col>
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span>扣款资料</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					</div>
					<el-form-item label="代扣款银行" required>
						<el-select v-model="addForm.region" placeholder="请选择性别">
							<el-option label="男" value="男"></el-option>
							<el-option label="女" value="女"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="代扣款支行" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="代扣款账号" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="代扣款人" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="代扣款ID" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="代扣款人手机号" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
				</el-card>
			</el-col>
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span>客户信息反馈表(业务员)</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					</div>
					<el-form-item label="申请人" required>
						<el-select v-model="addForm.region" placeholder="请选择性别">
							<el-option label="男" value="男"></el-option>
							<el-option label="女" value="女"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="车辆用途" required>
						<el-input type="text" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="家庭情况" required>
						<el-input type="textarea" v-model="addForm.desc"></el-input>
					</el-form-item>
					<el-form-item label="收入来源" required>
						<el-input type="textarea" v-model="addForm.desc"></el-input>
					</el-form-item>
				</el-card>
			</el-col>

		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'add',
		data() {
			return {
				tableData: [],
				multipleSelection: [],
				addForm: {
					// name: '1',
					// region: '1',
					// date1: '2',
					// date2: '',
					// delivery: false,
					// type: [],
					// resource: '',
					// desc: ''
					custom_ID: '',
					custom_Name: '',
					sex: '',
					brithday: '',
					p_address: '',
					mobile1: '',
					mobile2: '',
					education: '',
					marriage: '',
					childrenS: '',
					live_address: '',
					live_status: '',
					live_years: '',
					wechat_ID: '',
					employments: '',
					company_name: '',
					company_address: '',
					job_department: '',
					job_title: '',
					company_tel: '',
					job_workyears: '',
					company_scale: '',
					company_industry: '',
					Income_avg: '',
					Income_date: '',
					Income_from: '',
					Income_other: '',
					Income_total: '',
					bankCard_name: '',
					bankCard_ID: '',
					driver_License: '',
					// DanBao: DanBaostr,
					// LianXi: LianXistr,
					// File: file,
					car_kind: '',
					car_edition: '',
					car_color: '',
					car_Engine_No: '',
					car_number_f: '',
					car_frame: '',
					// car_factoryday: makedate,
					t_code: '',
					pledger: '',
					car_dealer: '',
					car_dealer_site: '',
					hallName: '',
					caseKind: '',
					repayKind: '',
					// sc_ID: scid,
					// sc_name: scname,
					// userID: userid,
					// username: username,
					theKind: '',
					homeV_name: '',
					return_code: '',
					insuranceKind: '',
					product_name: '',
					financing_amount: '',
					P_tax: '',
					L_fee: '',
					I_fee: '',
					deposit: '',
					down_payment: '',
					Fdown_payment: '',
					balance_payment: '',
					objTotal: '',
					paymentKind: '',
					vlsmn: '',
					vlsmn_rent: '',
					vlsmn_rentCardFee: '',
					total_rent: '',
					IRR: '',
					final_transfer_code: '',
					payment_way: '',
					Invoice: '',
					GPS_cable: '',
					GPS_wifi: '',
					note1: '',
					applicant: '',
					car_purpose: '',
					family_situation: '',
					income_sources: '',
					invoiceparty: '',
					invoiceaddr: '',
					vlsmn_GpsFee: '',
					estimateRuleSn: '',
					// ShouFustr: ShouFustr,
					sp_ID: '',
					sp_name: '',
					sp_bank: '',
					sp_ID: '',
					sp_card: '',
					sp_amt: '',
					d_name: '',
					d_ID: '',
					d_bank: '',
					d_bank_branch: '',
					d_bank_card: '',
					d_mobile: '',
					case_ID: "",
					// str1: str1,
					// str2: str2,
					// str3: str3,
					// str4: str4,
					// str5: str5,
					// str6: str6,
					// str7: "",
					// str8: "",
					// str9: str9
				}
			}
		},
		created() {

		},
		methods: {
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			addTableData(){
				console.log(this.tableData);
				// this.tableData.push({					
				// 	date: this.123.demo,
				// 	name: '王小虎',
				// 	address: '上海市普陀区金沙江路 1518 弄'					
				// })
			},
			removeSelected(){
				console.log(this.multipleSelection)
				this.multipleSelection = '';
			}
		}

	}
</script>
