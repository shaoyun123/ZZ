<template>
	<div class="app-container">
		<TimeLine></TimeLine>
		<el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
			<el-form ref="dataForm" :model="data1" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
				<el-form-item label="担保人">
					<el-select v-model="data1.data1_dbr" class="filter-item" placeholder="Please select">
						<el-option value="是">是</el-option>
						<el-option value="否">否</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="关系">
					<el-select v-model="data1.data1_gx" class="filter-item" placeholder="Please select">
						<el-option value="夫妻">夫妻</el-option>
						<el-option value="父亲">父亲</el-option>
						<el-option value="母亲">母亲</el-option>
						<el-option value="子女">子女</el-option>
						<el-option value="哥哥">哥哥</el-option>
						<el-option value="弟弟">弟弟</el-option>
						<el-option value="姐姐">姐姐</el-option>
						<el-option value="妹妹">妹妹</el-option>
						<el-option value="亲戚">亲戚</el-option>
						<el-option value="朋友">朋友</el-option>
						<el-option value="同事">同事</el-option>
						<el-option value="法人">法人</el-option>
						<el-option value="其他">其他</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="姓名" required>
					<el-input v-model="data1.data1_xm" />
				</el-form-item>
				<el-form-item label="身份证号">
					<el-input v-model="data1.data1_sfzh" />
				</el-form-item>
				<el-form-item label="手机号">
					<el-input v-model="data1.data1_sjh" />
				</el-form-item>
				<el-form-item label="月均收入">
					<el-input v-model="data1.data1_yjsr" />
				</el-form-item>
				<el-form-item label="工作单位">
					<el-input v-model="data1.data1_gzdw" />
				</el-form-item>
				<el-form-item label="单位地址">
					<el-input v-model="data1.data1_dwdz" />
				</el-form-item>
				<el-form-item label="单位电话">
					<el-input v-model="data1.data1_dwdh" />
				</el-form-item>
				<el-form-item label="职位">
					<el-input v-model="data1.data1_zw" />
				</el-form-item>
				<el-form-item label="住宅信息">
					<el-input v-model="data1.data1_zzxx" />
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">
					Cancel
				</el-button>
				<el-button type="primary" @click="dialogStatus==='create'?createData1():updateData()">
					Confirm
				</el-button>
			</div>
		</el-dialog>
		<el-dialog :title="textMap[dialogStatus2]" :visible.sync="dialogFormVisible2">
			<el-form ref="dataForm" :model="data2" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
				<el-form-item label="关系">
					<el-select v-model="data2.data2_gx" class="filter-item" placeholder="Please select">
						<el-option value="夫妻">夫妻</el-option>
						<el-option value="父亲">父亲</el-option>
						<el-option value="母亲">母亲</el-option>
						<el-option value="子女">子女</el-option>
						<el-option value="哥哥">哥哥</el-option>
						<el-option value="弟弟">弟弟</el-option>
						<el-option value="姐姐">姐姐</el-option>
						<el-option value="妹妹">妹妹</el-option>
						<el-option value="亲戚">亲戚</el-option>
						<el-option value="朋友">朋友</el-option>
						<el-option value="同事">同事</el-option>
						<el-option value="法人">法人</el-option>
						<el-option value="其他">其他</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="姓名" required>
					<el-input v-model="data2.data2_xm" />
				</el-form-item>
				<el-form-item label="手机号">
					<el-input v-model="data2.data2_sjh" />
				</el-form-item>
				<el-form-item label="工作单位">
					<el-input v-model="data2.data2_gzdw" />
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible2 = false">
					Cancel
				</el-button>
				<el-button type="primary" @click="dialogStatus2==='create'?createData2():updateData()">
					Confirm
				</el-button>
			</div>
		</el-dialog>
		<el-form :inline="true" class="demo-form-inline" label-width="120px">
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span>两证一卡</span>
						<!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
					</div>
					<upload></upload>
				</el-card>
			</el-col>
			<el-card shadow="hover">
				<div slot="header" class="clearfix">
					<span>承租人资料</span>
					<!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
				</div>
				<el-form-item label="客户姓名">
					<el-input v-model="addForm.txtName" type="text" />
				</el-form-item>
				<el-form-item label="身份证">
					<el-input v-model="addForm.txtIdCard" type="text" />
				</el-form-item>
				<el-form-item label="性别">
					<el-select v-model="addForm.selSex" placeholder="请选择">
						<!-- <el-option label="男" />
						<el-option label="女" /> -->
						<el-option value="男">男</el-option>
						<el-option value="女">女</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="出生日期">
					<el-form-item>
						<el-date-picker v-model="addForm.txtBridate" type="date" placeholder="选择日期" style="width: 100%;" />
					</el-form-item>
				</el-form-item>
				<el-col :span="24">
					<el-form-item label="户籍地址">
						<el-input v-model="addForm.txtAddr" type="textarea" style="width: 400%;" />
					</el-form-item>
				</el-col>
				<el-form-item label="银行名称">
					<el-input v-model="addForm.txtBank" type="text" />
				</el-form-item>
				<el-form-item label="银行卡号">
					<el-input v-model="addForm.txtBankCard" type="text" />
				</el-form-item>
				<el-form-item label="驾驶证号">
					<el-input v-model="addForm.txtDriverLicense" type="text" />
				</el-form-item>
				<el-form-item label="手机号1">
					<el-input v-model="addForm.txtTel1" type="text" />
				</el-form-item>
				<el-form-item label="手机号2">
					<el-input v-model="addForm.txtTel2" type="text" />
				</el-form-item>
				<el-form-item label="学历">
					<el-select v-model="addForm.selEdu" placeholder="请选择学历">
						<el-option value="本科以上" label="本科以上" />
						<el-option value="本科" label="本科" />
						<el-option value="大专" label="大专" />
						<el-option value="高中" label="高中" />
						<el-option value="初中" label="初中" />
						<el-option value="其他" label="其他" />
					</el-select>
				</el-form-item>
				<el-form-item label="婚姻状况">
					<el-select v-model="addForm.selMarri" placeholder="请选择">
						<el-option value="未婚" label="未婚" />
						<el-option value="已婚有子女" label="已婚有子女" />
						<el-option value="已婚无子女" label="已婚无子女" />
						<el-option value="离婚" label="离婚" />
					</el-select>
				</el-form-item>
				<el-form-item label="子女数">
					<el-input v-model="addForm.txtBabySnum" type="text" />
				</el-form-item>
				<el-form-item label="住宅地址">
					<el-input v-model="addForm.txtLiveAddr" type="text" />
				</el-form-item>
				<el-form-item label="住宅状况">
					<el-select v-model="addForm.selLiveCode" placeholder="请选择">
						<el-option value="按揭购房" label="按揭购房" />
						<el-option value="无按揭购房" label="无按揭购房" />
						<el-option value="公房" label="公房" />
						<el-option value="单位宿舍" label="单位宿舍" />
						<el-option value="租赁" label="租赁" />
					</el-select>
				</el-form-item>
				<el-form-item label="居住年限">
					<el-input v-model="addForm.txtLiveYear" type="text" />
				</el-form-item>
				<el-form-item label="微信号">
					<el-input v-model="addForm.txtQqWc" type="text" />
				</el-form-item>
				<el-form-item label="就业状况">
					<el-select v-model="addForm.selJobCode" placeholder="请选择">
						<el-option value="待业" label="待业" />
						<el-option value="在职" label="在职" />
						<el-option value="退休" label="退休" />
					</el-select>
				</el-form-item>
				<!-- start -->
				<el-form-item label="工作单位">
					<el-input v-model="addForm.txtComName" type="text" />
				</el-form-item>
				<el-form-item label="单位地址">
					<el-input v-model="addForm.txtComAddr" type="text" />
				</el-form-item>
				<el-form-item label="部门">
					<el-input v-model="addForm.txtDepName" type="text" />
				</el-form-item>
				<el-form-item label="职位">
					<el-input v-model="addForm.txtComPosit" type="text" />
				</el-form-item>
				<el-form-item label="单位电话">
					<el-input v-model="addForm.txtComTel" type="text" />
				</el-form-item>
				<el-form-item label="工作年限(月)">
					<el-input v-model="addForm.txtComYear" type="text" />
				</el-form-item>
				<el-form-item label="企业规模">
					<el-select v-model="addForm.selComPeople" placeholder="请选择">
						<el-option value="全球500强企业" label="全球500强企业" />
						<el-option value="境内上市企业" label="境内上市企业" />
						<el-option value="500人以上企业" label="500人以上企业" />
						<el-option value="200-500人企业" label="200-500人企业" />
						<el-option value="100-200人企业" label="100-200人企业" />
						<el-option value="500-100人企业" label="500-100人企业" />
						<el-option value="50人以下企业" label="50人以下企业" />
						<el-option value="个体户" label="个体户" />
						<el-option value="自由职业" label="自由职业" />
						<el-option value="其他" label="其他" />
					</el-select>
				</el-form-item>
				<el-form-item label="所属行业">
					<el-select v-model="addForm.selComClass" placeholder="请选择">
						<el-option value="传统媒体/体育/娱乐" label="传统媒体/体育/娱乐" />
						<el-option value="传统制造业" label="传统制造业" />
						<el-option value="服务业" label="服务业" />
						<el-option value="高新技术" label="高新技术" />
						<el-option value="建筑业" label="建筑业" />
						<el-option value="公共事业" label="公共事业" />
						<el-option value="教育" label="教育" />
						<el-option value="金融/证券" label="金融/证券" />
						<el-option value="酒店/餐饮" label="酒店/餐饮" />
						<el-option value="医疗卫生" label="医疗卫生" />
						<el-option value="商业/贸易" label="商业/贸易" />
						<el-option value="保险/地产中介" label="保险/地产中介" />
						<el-option value="物流/运输" label="物流/运输" />
						<el-option value="专业事务所" label="专业事务所" />
						<el-option value="政府机构/事业单位" label="政府机构/事业单位" />
						<el-option value="专车" label="专车" />
						<el-option value="自由职业" label="自由职业" />
						<el-option value="其他" label="其他" />
					</el-select>
				</el-form-item>
				<el-form-item label="月均收入">
					<el-input v-model="addForm.txtSalary" type="text" />
				</el-form-item>
				<el-form-item label="每月受薪日">
					<el-input v-model="addForm.selWageDate" type="text" />
				</el-form-item>
				<el-form-item label="薪资发放形式">
					<el-select v-model="addForm.selWageClass" placeholder="请选择">
						<el-option label="银行代发" />
						<el-option label="现金" />
					</el-select>
				</el-form-item>
				<!-- end -->
				<el-form-item label="其他所得来源">
					<el-input v-model="addForm.txtSouce" type="text" />
				</el-form-item>
				<el-form-item label="其他收入金额">
					<el-input v-model="addForm.txtMonthMoney" type="text" />
				</el-form-item>
			</el-card>
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span>紧急联系人/担保人/配偶资料</span>
						<el-button class="link-type" style="float: right;" type="text" @click="addTableDataDialog()">添加</el-button>
					</div>
					<el-table :data="tableData1" style="width: 100%">
						<!-- 动态循环的列表 -->
						<template v-for="(item, index) in tableLabel1">
							<el-table-column :key="index" :prop="item.prop" :label="item.label"></el-table-column>
						</template>
						<!-- 固定的列 -->
						<el-table-column label="删除">
							<template slot-scope="scope">
								<el-button size="mini" type="danger" icon="el-icon-delete" @click="removeTable(scope.$index)"></el-button>
							</template>
						</el-table-column>
					</el-table>
				</el-card>
			</el-col>
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span>其他联系人资料</span>
						<el-button style="float: right; padding: 3px 0" type="text" @click="addTableDataDialog2()">添加</el-button>
					</div>
					<el-table :data="tableData2" style="width: 100%">
						<!-- 动态循环的列表 -->
						<template v-for="(item, index) in tableLabel2">
							<el-table-column :key="index" :prop="item.prop" :label="item.label"></el-table-column>
						</template>
						<!-- 固定的列：从业人员 -->
						<el-table-column label="删除">
							<template slot-scope="scope">
								<el-button size="mini" type="danger" icon="el-icon-delete" @click="removeTable2(scope.$index)"></el-button>
							</template>
						</el-table-column>
					</el-table>
				</el-card>
			</el-col>
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span>车辆/车商信息</span>
						<!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
					</div>
					<el-form-item label="发动机号">
						<el-input v-model="addForm.txtEngno" type="text" />
					</el-form-item>
					<el-form-item label="车架号">
						<el-input v-model="addForm.txtVin" type="text" />
					</el-form-item>
					<el-form-item label="车辆类别">
						<el-select v-model="addForm.selCarType" placeholder="请选择">
							<el-option value="新车" label="新车" />
							<el-option value="二手车" label="二手车" />
						</el-select>
					</el-form-item>
					<el-form-item label="上牌方式">
						<el-select v-model="addForm.selCarType" placeholder="请选择">
							<el-option value="新车" label="新车" />
							<el-option value="二手车" label="二手车" />
						</el-select>
					</el-form-item>
					<el-form-item label="品牌型号">
						<el-input v-model="addForm.txtModelName" type="text" />
					</el-form-item>
					<el-form-item label="颜色">
						<el-input v-model="addForm.txtColor" type="text" />
					</el-form-item>
					<el-form-item label="车牌">
						<el-select v-model="addForm.selCarNumber" placeholder="请选择">
							<el-option value="1" label="1" />
							<el-option value="2" label="2" />
						</el-select>
					</el-form-item>
					<el-form-item label="出厂日">
						<el-input v-model="addForm.txtMakeDate" type="text" />
					</el-form-item>
					<el-form-item label="过户码">
						<el-select v-model="addForm.selCarCode" placeholder="请选择">
							<el-option value="过户" label="过户" />
							<el-option value="抵押" label="抵押" />
						</el-select>
					</el-form-item>
					<el-form-item label="抵押人">
						<el-input v-model="addForm.pledger" type="text" />
					</el-form-item>
					<el-form-item label="车商名称">
						<el-input v-model="addForm.CarDealer" type="text" />
					</el-form-item>
					<el-form-item label="车商地址">
						<el-input v-model="addForm.CarDealerAddr" type="text" />
					</el-form-item>
					<el-form-item label="展厅名称">
						<el-input v-model="addForm.hallName" type="text" />
					</el-form-item>

				</el-card>
			</el-col>
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span>立项报价</span>
						<!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
					</div>
					<el-form-item label="立项种类">
						<el-input v-model="addForm.caseKind" type="text" />
					</el-form-item>
					<el-form-item label="还款类型">
						<el-select v-model="addForm.repayKind" placeholder="请选择">
							<el-option value="本息摊还" label="本息摊还" />
							<el-option value="到期还本" label="到期还本" />
							<el-option value="定额还本-手续费一次收" label="定额还本-手续费一次收" />
						</el-select>
					</el-form-item>
					<el-form-item label="分公司">
						<el-select v-model="addForm.selDep" placeholder="请选择">
							<el-option value="本息摊还" label="本息摊还" />
							<el-option value="到期还本" label="到期还本" />
							<el-option value="定额还本-手续费一次收" label="定额还本-手续费一次收" />
						</el-select>
					</el-form-item>
					<el-form-item label="业务员">
						<el-select v-model="addForm.selApply" placeholder="请选择">
							<el-option label="1" />
						</el-select>
					</el-form-item>
					<el-form-item label="类型">
						<el-select v-model="addForm.theKind" placeholder="请选择">
							<el-option value="SP立项" label="SP立项" />
							<el-option value="非SP立项" label="非SP立项" />
							<el-option value="车抵租" label="车抵租" />
							<el-option value="其他" label="其他" />
						</el-select>
					</el-form-item>
					<el-form-item label="申请日期">
						<el-input v-model="addForm.date2" type="text" />
					</el-form-item>
					<el-form-item label="家访人员">
						<el-input v-model="addForm.homeV_name" type="text" />
					</el-form-item>
					<el-form-item label="返佣码">
						<el-select v-model="addForm.return_code" placeholder="请选择">
							<el-option value="SP" label="SP" />
							<el-option value="不返佣" label="不返佣" />
						</el-select>
					</el-form-item>
					<!-- start -->
					<el-form-item label="SP模糊查找">
						<el-input v-model="addForm.txtSpValue" type="text" />
					</el-form-item>
					<el-form-item label="返佣ID">
						<el-input v-model="addForm.txtSpId" type="text" />
					</el-form-item>
					<el-form-item label="返佣对象">
						<el-input v-model="addForm.txtSpName" type="text" />
					</el-form-item>
					<el-form-item label="支行信息">
						<el-input v-model="addForm.txtSpBank" type="text" />
					</el-form-item>
					<el-form-item label="返佣账号">
						<el-input v-model="addForm.txtSpAccno" type="text" />
					</el-form-item>
					<!-- end -->
					<el-form-item label="保险方式">
						<el-select v-model="addForm.return_code" placeholder="请选择">
							<el-option value="第一年店长投保,其余公司投保" label="第一年店长投保,其余公司投保" />
							<el-option value="第一年店长投保,其余客户自付" label="第一年店长投保,其余客户自付" />
							<el-option value="全部客户自付" label="全部客户自付" />
							<el-option value="公司投保第一年,其余客户自付" label="公司投保第一年,其余客户自付" />
							<el-option value="第一年车商投保,其余公司投保" label="第一年车商投保,其余公司投保" />
							<el-option value="第一年车商投保,其余客户自付" label="第一年车商投保,其余客户自付" />
							<el-option value="第一年客户投保,其余公司投保" label="第一年客户投保,其余公司投保" />
							<el-option value="承作期间公司全部投保" label="承作期间公司全部投保" />
						</el-select>
					</el-form-item>
					<el-form-item label="产品方案">
						<el-select v-model="addForm.product_name" placeholder="请选择">
							<el-option value="至尊" label="至尊" />
							<el-option value="至由" label="至由" />
							<el-option value="考拉(1.29)" label="考拉(1.29)" />
							<el-option value="考拉(1.39)" label="考拉(1.39)" />
							<el-option value="考拉(1.49)" label="考拉(1.49)" />
						</el-select>
					</el-form-item>
					<el-form-item label="融资车价">
						<el-input v-model="addForm.financing_amount" type="text" />
					</el-form-item>
					<el-form-item label="购置税">
						<el-input v-model="addForm.P_tax" type="text" />
					</el-form-item>
					<el-form-item label="牌照费">
						<el-input v-model="addForm.L_fee" type="text" />
					</el-form-item>
					<el-form-item label="保险费">
						<el-input v-model="addForm.I_fee" type="text" />
					</el-form-item>
					<el-form-item label="打包总价">
						<el-input v-model="addForm.objTotal" type="text" />
					</el-form-item>
					<el-form-item label="履约定金">
						<el-input v-model="addForm.deposit" type="text" />
					</el-form-item>
					<el-form-item label="首付">
						<el-input v-model="addForm.desc" type="text" />
					</el-form-item>
					<el-form-item label="尾款">
						<el-input v-model="addForm.balance_payment" type="text" />
					</el-form-item>
					<el-form-item label="付款类别">
						<el-select v-model="addForm.paymentKind" placeholder="请选择">
							<el-option value="期初收" label="期初收" />
							<el-option value="期末收" label="期末收" />
						</el-select>
					</el-form-item>
					<el-form-item label="期数">
						<el-input v-model="addForm.vlsmn" type="text" />
					</el-form-item>
					<el-form-item label="期租金">
						<el-input v-model="addForm.vlsmn_rent" type="text" />
					</el-form-item>
					<el-form-item label="每期租牌费">
						<el-input v-model="addForm.vlsmn_rentCardFee" type="text" />
					</el-form-item>
					<el-form-item label="租赁款总额">
						<el-input v-model="addForm.total_rent" type="text" />
					</el-form-item>
					<el-form-item label="收益率IRR%">
						<el-input v-model="addForm.IRR" type="text" />
					</el-form-item>
					<el-form-item label="期末过户码">
						<el-select v-model="addForm.final_transfer_code" placeholder="请选择">
							<el-option value="承租人负担" label="承租人负担" />
							<el-option value="公司吸收" label="公司吸收" />
							<el-option value="其他" label="其他" />
						</el-select>
					</el-form-item>
					<el-form-item label="缴款方式">
						<el-select v-model="addForm.payment_way" placeholder="请选择">
							<el-option value="第三方银行扣款" label="第三方银行扣款" />
							<el-option value="承租人打款" label="承租人打款" />
							<el-option value="其他" label="其他" />
						</el-select>
					</el-form-item>
					<el-form-item label="进项发票">
						<el-select v-model="addForm.Invoice" placeholder="请选择">
							<el-option value="收款车商与开票车商相同" label="收款车商与开票车商相同" />
							<el-option value="收款车商与开票车商不同" label="收款车商与开票车商不同" />
							<el-option value="车辆采购车,不付款" label="车辆采购车,不付款" />
						</el-select>
					</el-form-item>
					<!-- start -->
					<el-form-item label="开票方名称">
						<el-input v-model="addForm.invoiceparty" type="text" />
					</el-form-item>
					<el-form-item label="开票方地址">
						<el-input v-model="addForm.invoiceaddr" type="text" />
					</el-form-item>
					<!-- end -->
					<el-form-item label="有线GPS数">
						<el-input v-model="addForm.GPS_cable" type="text" />
					</el-form-item>
					<el-form-item label="无线GPS数">
						<el-input v-model="addForm.GPS_wifi" type="text" />
					</el-form-item>
					<!-- start -->
					<el-form-item label="GPS设备管理费">
						<el-input v-model="addForm.vlsmn_GpsFee" type="text" />
					</el-form-item>
					<!-- end -->
					<el-form-item label="备注">
						<el-input v-model="addForm.note1" type="text" />
					</el-form-item>
				</el-card>
			</el-col>
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span>收付明细</span>
						<!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
					</div>
					<el-form-item label="咨询服务费(+)">
						<el-input v-model="addForm.fee1" type="text" />
					</el-form-item>
					<el-form-item label="上下牌服务费">
						<el-input v-model="addForm.fee2" type="text" />
					</el-form-item>
					<el-form-item label="相关印花税(-)">
						<el-input v-model="addForm.fee3" type="text" />
					</el-form-item>
					<el-form-item label="GPS费用(-)">
						<el-input v-model="addForm.fee4" type="text" />
					</el-form-item>
					<el-form-item label="渠道服务费(-)">
						<el-input v-model="addForm.fee5" type="text" />
					</el-form-item>
				</el-card>
			</el-col>
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span>扣款资料</span>
						<!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
					</div>
					<el-form-item label="代扣款银行">
						<el-select v-model="addForm.region" placeholder="请选择">
							<el-option value="不代扣" label="不代扣" />
							<el-option value="建设银行" label="建设银行" />
							<el-option value="工商银行" label="工商银行" />
							<el-option value="交通银行" label="交通银行" />
							<el-option value="兴业银行" label="兴业银行" />
							<el-option value="广发银行" label="广发银行" />
							<el-option value="平安银行" label="平安银行" />
							<el-option value="中信银行" label="中信银行" />
							<el-option value="浦发银行" label="浦发银行" />
							<el-option value="邮政银行" label="邮政银行" />
							<el-option value="中国银行" label="中国银行" />
							<el-option value="招商银行" label="招商银行" />
							<el-option value="上海银行" label="上海银行" />
						</el-select>
					</el-form-item>
					<el-form-item label="代扣款支行">
						<el-input v-model="addForm.d_bank_branch" type="text" />
					</el-form-item>
					<el-form-item label="代扣款账号">
						<el-input v-model="addForm.d_bank_card" type="text" />
					</el-form-item>
					<el-form-item label="代扣款人">
						<el-input v-model="addForm.d_name" type="text" />
					</el-form-item>
					<el-form-item label="代扣款ID">
						<el-input v-model="addForm.d_ID" type="text" />
					</el-form-item>
					<el-form-item label="代扣款人手机号">
						<el-input v-model="addForm.d_mobile" type="text" />
					</el-form-item>
				</el-card>
			</el-col>
			<el-col :span="24">
				<el-card shadow="hover">
					<div slot="header" class="clearfix">
						<span>客户信息反馈表(业务员)</span>
						<!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
					</div>
					<el-form-item label="申请人">
						<el-select v-model="addForm.applicant" placeholder="请选择">
							<el-option value="本地人（同省）" label="本地人（同省）" />
							<el-option value="外地人" label="外地人" />
							<el-option value="其他" label="其他" />
						</el-select>
					</el-form-item>
					<el-form-item label="车辆用途">
						<el-input v-model="addForm.car_purpose" type="text" />
					</el-form-item>
					<el-col :span="24">
						<el-form-item label="家庭情况">
							<el-input v-model="addForm.family_situation" type="textarea" style="width: 400%;" />
						</el-form-item>
					</el-col>
					<el-col :span="24">
						<el-form-item label="收入来源">
							<el-input v-model="addForm.income_sources" type="textarea" style="width: 400%;" />
						</el-form-item>
					</el-col>

				</el-card>
			</el-col>
			<el-col :span="24">
				<el-card shadow="hover">
					<el-button type="primary" @click="onSubmit">新增进件</el-button>
				</el-card>
			</el-col>
		</el-form>
	</div>
</template>

<script>
	// import {
	// 	createArticle
	// } from '@/api/article'
	import TimeLine from './compontents/TimeLine'
	import Upload from './compontents/Upload'
	// import {
	// 	console
	// } from '@/api/test'

	export default {
		name: 'Add',
		data() {
			return {
				addForm: {
					txtName: '',
					txtIdCard: '',
					selSex: '',
					txtBridate: '',
					txtAddr: '',
					txtBank: '',
					txtBankCard: '',
					txtDriverLicense: '',
					txtTel1: '',
					txtTel2: '',
					selEdu: '',
					selMarri: '',
					txtBabySnum: '',
					txtLiveAddr: '',
					selLiveCode: '',
					txtLiveYear: '',
					txtQqWc: '',
					selJobCode: '',
					txtComName: '',
					txtComAddr: '',
					txtDepName: '',
					txtComPosit: '',
					txtComTel: '',
					txtComYear: '',
					selComPeople: '',
					selComClass: '',
					txtSalary: '',
					selWageDate: '',
					selWageClass: '',
					txtSouce: '',
					txtMonthMoney: '',
					txtEngno: '',
					txtVin: '',
					txtModelName: '',
					txtColor: '',
					selCarNumber: '',
					txtMakeDate: '',
					selCarCode: '',
					pledger: '',
					CarDealer: '',
					CarDealerAddr: '',
					hallName: '',
					caseKind: '',
					repayKind: '',
					selDep: '',
					selApply: '',
					theKind: '',
					date2: '',
					homeV_name: '',
					return_code: '',
					txtSpValue: '',
					txtSpId: '',
					txtSpName: '',
					txtSpBank: '',
					txtSpAccno: '',
					return_code: '',
					product_name: '',
					financing_amount: '',
					P_tax: '',
					L_fee: '',
					I_fee: '',
					objTotal: '',
					deposit: '',
					desc: '',
					balance_payment: '',
					paymentKind: '',
					vlsmn: '',
					vlsmn_rent: '',
					vlsmn_rentCardFee: '',
					total_rent: '',
					IRR: '',
					final_transfer_code: '',
					payment_way: '',
					Invoice: '',
					invoiceparty: '',
					invoiceaddr: '',
					GPS_cable: '',
					GPS_wifi: '',
					vlsmn_GpsFee: '',
					note1: '',
					fee1: '',
					fee2: '',
					fee3: '',
					fee4: '',
					fee5: '',
					region: '',
					d_bank_branch: '',
					d_bank_card: '',
					d_name: '',
					d_ID: '',
					d_mobile: '',
					applicant: '',
					car_purpose: '',
					family_situation: '',
					income_sources: ''
					// custom_ID: '',
					// custom_Name: '',
					// sex: '',
					// brithday: '',
					// p_address: '',
					// mobile1: '',
					// mobile2: '',
					// education: '',
					// marriage: '',
					// childrenS: '',
					// live_address: '',
					// live_status: '',
					// live_years: '',
					// wechat_ID: '',
					// employments: '',
					// company_name: '',
					// company_address: '',
					// job_department: '',
					// job_title: '',
					// company_tel: '',
					// job_workyears: '',
					// company_scale: '',
					// company_industry: '',
					// Income_avg: '',
					// Income_date: '',
					// Income_from: '',
					// Income_other: '',
					// Income_total: '',
					// bankCard_name: '',
					// bankCard_ID: '',
					// driver_License: '',
					// car_kind: '',
					// car_edition: '',
					// car_color: '',
					// car_Engine_No: '',
					// car_number_f: '',
					// car_frame: '',
					// t_code: '',
					// pledger: '',
					// car_dealer: '',
					// car_dealer_site: '',
					// hallName: '',
					// caseKind: '',
					// repayKind: '',
					// theKind: '',
					// homeV_name: '',
					// return_code: '',
					// insuranceKind: '',
					// product_name: '',
					// financing_amount: '',
					// P_tax: '',
					// L_fee: '',
					// I_fee: '',
					// deposit: '',
					// down_payment: '',
					// Fdown_payment: '',
					// balance_payment: '',
					// objTotal: '',
					// paymentKind: '',
					// vlsmn: '',
					// vlsmn_rent: '',
					// vlsmn_rentCardFee: '',
					// total_rent: '',
					// IRR: '',
					// final_transfer_code: '',
					// payment_way: '',
					// Invoice: '',
					// GPS_cable: '',
					// GPS_wifi: '',
					// note1: '',
					// applicant: '',
					// car_purpose: '',
					// family_situation: '',
					// income_sources: '',
					// invoiceparty: '',
					// invoiceaddr: '',
					// vlsmn_GpsFee: '',
					// estimateRuleSn: '',
					// sp_ID: '',
					// sp_name: '',
					// sp_bank: '',
					// sp_ID: '',
					// sp_card: '',
					// sp_amt: '',
					// d_name: '',
					// d_ID: '',
					// d_bank: '',
					// d_bank_branch: '',
					// d_bank_card: '',
					// d_mobile: '',
					// case_ID: ''
				},
				tableLabel1: [{
						label: '担保人',
						prop: 'data1_dbr'
					},
					{
						label: '关系',
						prop: 'data1_gx'
					},
					{
						label: '姓名',
						prop: 'data1_xm'
					},
					{
						label: '身份证号',
						prop: 'data1_sfzh'
					},
					{
						label: '手机号',
						prop: 'data1_sjh'
					},
					{
						label: '月均收入',
						prop: 'data1_yjsr'
					},
					{
						label: '工作单位',
						prop: 'data1_gzdw'
					},
					{
						label: '单位地址',
						prop: 'data1_dwdz'
					},
					{
						label: '单位电话',
						prop: 'data1_dwdh'
					},
					{
						label: '职位',
						prop: 'data1_zw'
					},
					{
						label: '住宅信息',
						prop: 'data1_zzxx'
					}
				],
				data1: {
					data1_dbr: '',
					data1_gx: '',
					data1_xm: '',
					data1_sfzh: '',
					data1_sjh: '',
					data1_yjsr: '',
					data1_gzdw: '',
					data1_dwdz: '',
					data1_dwdh: '',
					data1_zw: '',
					data1_zzxx: ''
				},
				tableData1: [],
				tableLabel2: [{
						label: '关系',
						prop: 'data2_gx'
					},
					{
						label: '姓名',
						prop: 'data2_xm'
					},
					{
						label: '手机号',
						prop: 'data2_sjh'
					},
					{
						label: '工作单位',
						prop: 'data2_gzdw'
					}
				],
				data2: {
					data2_gx: '',
					data2_xm: '',
					data2_sjh: '',
					data2_gzdw: ''
				},
				tableData2: [],
				title: '',
				dialogFormVisible: false,
				dialogStatus: '',
				textMap: {
					update: 'Edit',
					create: 'Create'
				},
				dialogFormVisible2: false,
				dialogStatus2: '',
				textMap2: {
					update: 'Edit',
					create: 'Create'
				},
			}
		},
		created() {

		},
		components: {
			TimeLine,
			Upload
		},
		methods: {

			// 提交表单开始
			onSubmit() {
				console.log(this.addForm);
			},
			// 提交表单结束

			// 新增紧急联系人开始
			resetTempData1() {
				this.data1 = {
					// timestamp: new Date(),
					data1_dbr: '',
					data1_gx: '',
					data1_xm: '',
					data1_sfzh: '',
					data1_sjh: '',
					data1_yjsr: '',
					data1_gzdw: '',
					data1_dwdz: '',
					data1_dwdh: '',
					data1_zw: '',
					data1_zzxx: ''
				}
			},
			resetTempData2() {
				this.data2 = {
					data2_gx: '',
					data2_xm: '',
					data2_sjh: '',
					data2_gzdw: ''
				}
			},
			addTableDataDialog() {
				this.resetTempData1()
				this.dialogStatus = 'create'
				this.dialogFormVisible = true
				// this.$nextTick(() => {
				// 	this.$refs['dataForm1'].clearValidate()
				// })
				// this.tableData.push({
				// 	date: this.123.demo,
				// 	name: '王小虎',
				// 	address: '上海市普陀区金沙江路 1518 弄'
				// })
			},
			addTableDataDialog2() {
				this.resetTempData2()
				this.dialogStatus2 = 'create'
				this.dialogFormVisible2 = true
			},
			removeTable(index) {
				this.tableData1.splice(index, 1);
			},
			removeTable2(index) {
				this.tableData2.splice(index, 1);
			},
			createData1() {
				let obj = JSON.parse(JSON.stringify(this.data1))
				this.tableData1.push(obj);
				this.dialogFormVisible = false
			},
			createData2() {
				let obj = JSON.parse(JSON.stringify(this.data2))
				this.tableData2.push(obj);
				this.dialogFormVisible2 = false
			},
			// 新增紧急联系人结束
		}

	}
</script>
