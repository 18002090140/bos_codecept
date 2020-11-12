// npx codeceptjs run
const qclocator = require('./qclocator');
const data = require("./Data1/S01/U01")
Feature(data.represent);

Before((I) => { // or Background
    I.loginAsAdmin();
});

Scenario(data.C01.represent, (I) => {
    const u1=data.C01.u1.data;
    I.b_clickMenuItem("人员管理","库房管理");//扩展行为
    I.click('新增人员')
    I.fillField(qclocator.inputWithLabel('警号'),u1.police_sign)//定位函数
    I.fillField(qclocator.inputWithLabel('姓名'),u1.name)
    I.b_selectOption("性别",u1.gender);//扩展行为
    I.b_selectOption("角色",u1.role);
    I.fillField(qclocator.inputWithLabel('职位'),u1.position)
    I.fillField(qclocator.inputWithLabel('联系方式'),u1.phone)
    I.fillField(qclocator.inputWithLabel('身份证号'),u1.idNumber)
    I.fillField(qclocator.inputWithLabel('密码'),u1.password)
    I.attachFile('//div[@data-label="上传"]//input[@type="file"]','Data/vue.jpg')//TODO 图片问题有待解决，行为有待扩展
    I.click(qclocator.buttonWithName('提交'))
    
    I.selectTableRowWithCellTextInColumn(Date.parse(new Date()),"警号");
})

Scenario(data.C02.represent, (I) => {
    const u1 = data.C02.g1.data
    I.b_clickMenuItem("供应商管理","装备出入库");
    I.click('新增供应商')
    I.fillField(qclocator.inputWithLabel('供应商'),u1.name)
    I.fillField(qclocator.inputWithLabel('联系人'),u1.person)
    I.fillField(qclocator.inputWithLabel('联系方式'),u1.phone)
    I.click(qclocator.buttonWithName('确定'))
    I.wait(2)
})

Scenario(data.C03.represent, (I) => {   
    const d = data.C03.c1.data
    I.b_clickMenuItem("装备参数列表","装备出入库");
    I.click('新增装备参数')
    I.fillField(qclocator.inputWithLabel('装备名称'),d.name)
    I.fillField(qclocator.inputWithLabel('装备型号'),d.model)
    I.click(qclocator.entitySelectorWithLabel('供应商')) // entity組件剥离有问题，直接修改原组件
    I.selectTableRowWithCellTextInColumn(d.supplier.name,"供应商名称","//div[@aria-label='供应商选择']");
    I.click("确定",qclocator.popupWindowWithTitle("供应商选择"));
    I.fillField(qclocator.inputWithLabel('质保期（天）'),d.shelfLife) 
    I.fillField(qclocator.inputWithLabel('充电周期（天）'),d.chargeCycle)
    I.fillField(qclocator.inputWithLabel('保养周期（天）'),d.upkeepCycle)
    I.attachFile('//div[@data-label="上传"]//input[@type="file"]','Data/vue.jpg')
    I.click('提交')
})

Scenario('asdsd', (I) => {    
    I.b_clickMenuItem("入库单列表","装备出入库");
    I.click('入库装备')
    I.click(qclocator.entitySelectorWithLabel('装备参数')) // equipInhouse页面的defineInput没带label 暂时自己加
    // I.selectTableRowWithCellTextInColumn("1111","供应商","//div[@aria-label='装备参数选择']");
    I.click(qclocator.rowWithText('1'))
    I.click("确定",qclocator.popupWindowWithTitle("装备参数选择"));
    I.wait(1)
    I.click(qclocator.entitySelectorWithLabel('装备位置'))  
    // I.selectTableRowWithCellTextInColumn("7架/A面/1节/1层","仓位名称","//div[@aria-label='位置信息选择']");
    I.click(qclocator.rowWithText('1'))
    I.click("确定",qclocator.popupWindowWithTitle("位置信息选择"));
    I.wait(1)
    I.fillField('//div[@data-label="单价"]//input[1]',111)
    I.click('//div[@data-label="生产日期"]//input[1]')
    I.click('此刻')    
    I.b_selectOption("硬件选择","手持机");
    I.click('读取数据')
    I.wait(1)
    I.click('//div[@data-label="明细"]')
});

