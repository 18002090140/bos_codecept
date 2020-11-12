module.exports ={
	"name": "人员供应商装备参数的增删",
	"number": "U01",
	"represent": "作为系统管理员，我能在系统中增删人员、供应商、装备参数。以便为装备入库提供足够的信息",
	"sprint": {
		"name": "供应商和装备参数",
		"represent": "供应商和装备参数"
	},
	"C01": {
		"name": "增加人员",
		"number": "C01",
		"represent": "我是管理员，当我登录到系统中，我选择仓库管理和人员管理菜单项，点击新增人员按钮后进入到。我能将用户1的信息录入到系统中。点击提交按钮后，我能在人员列表界面中见到含有用户1编号的记录",
		"u2": {
			"number": "u2",
			"data": {
				/*机构id*/"organUnitId": "1",
				/*性别*/"gender": "女",
				/*null*/"credentialsNonExpired": "true",
				/*身份证号*/"idNumber": "1",
				/*null*/"enabled": "true",
				/*机构名称*/"organUnitName": "1",
				/*指纹信息*/"fingerprintInformation": "0",
				/*是否注册人脸*/"faceRegistration": "true",
				/*密码*/"password": "1",
				/*指纹id*/"fingerId": "1",
				/*联系方式手机号*/"phone": "11111111",
				/*姓名*/"name": "1",
				/*人脸信息*/"faceInformation": "1",
				/*进入库房权限*/"enterHouse": "true",
				/*null*/"accountNonExpired": "true",
				/*职位*/"position": "1",
				/*null*/"id": "1",
				/*null*/"username": "2",
				/*null*/"accountNonLocked": "true"
			}
		},
		"u1": {
			"number": "u1",
			"data": {
				/*机构id*/"organUnitId": "1",
				/*性别*/"gender": "男",
				/*null*/"credentialsNonExpired": "true",
				/*身份证号*/"idNumber": "1",
				/*null*/"enabled": "true",
				/*机构名称*/"organUnitName": "1",
				/*指纹信息*/"fingerprintInformation": "0",
				/*是否注册人脸*/"faceRegistration": "true",
				/*密码*/"password": "1",
				/*指纹id*/"fingerId": "1",
				/*联系方式手机号*/"phone": "11111111",
				/*姓名*/"name": "1",
				/*人脸信息*/"faceInformation": "1",
				/*进入库房权限*/"enterHouse": "true",
				/*null*/"accountNonExpired": "true",
				/*职位*/"position": "1",
				/*null*/"id": "1",
				/*null*/"username": "1",
				/*null*/"accountNonLocked": "true",
				"police_sign":"44",
				"role": "警员"
			}
		}
	},
	"C02": {
		"name": "添加供应商",
		"number": "C02",
		"represent": "我是管理员，当我登录到系统中，我选择出库房管理和出库列表菜单项，点击新增供应商按钮后进入到供应商新增界面。我能将供应商1的信息录入到系统中。点击提交按钮后，我能在供应商列表界面中见到含有供应商1编号的记录",
		"g1": {
			"number": "g1",
			"data": {
				/*联系电话*/"phone": "1111111",
				/*联系人*/"person": "联系人1",
				/*名称*/"name": "供应商1",
				/*null*/"id": "1"
			}
		}
	},
	"C03": {
		"name": "新增装备参数",
		"number": "C03",
		"represent": "我是管理员，当我登录到系统中，我选择出入库管理和装备列表菜单项，点击新增装备参数按钮后进入到装备参数新增界面。我能将装备参数1的信息录入到系统中。点击提交按钮后，我能在装备参数列表界面中见到含有用户1编号的记录",
		"c1": {
			"number": "c1",
			"data": {
				/*装备图片*/"image": "1",
				/*保养周期*/"upkeepCycle": "1",
				/*名称拼音*/"alphabetic": "pingy1",
				/*供应商*/"supplier": {
					"number": "g1",
					"name":"供应商1"
				},
				/*名称*/"name": "1",
				/*型号*/"model": "1",
				/*null*/"id": "0",
				/*小类*/"category": {
					"number": "x1"
				},
				/*保质期*/"shelfLife": "1",
				/*充电周期*/"chargeCycle": "1",
				/*caid*/"categoryId": "1"
			}
		}
	}
}