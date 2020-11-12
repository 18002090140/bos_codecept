const qclocator = require('./qclocator');
let data=require("./Data1/S01/U01.js");
const { C01 } = require('./Data1/S01/U01.js');
const webUrl = "http://120.78.125.187:8888";
const localUrl = "http://localhost:8088"
const baseUrl = localUrl

Feature("超级管理员登录并管理人员信息");

Before((I) => { // or Background
    I.loginAsAdmin();
});


xScenario("管理员登录",(I) => {
	
    I.wait(1)
    I.click('//div[@data-label="设置"]')
    I.click("个人中心")
    I.seeInField(qclocator.inputWithLabel("姓名"),data.C01.T02.data.name);
    
    I.click('//div[@data-label="设置"]')
    I.click('//div[@data-label="注销"]')
    I.wait(1)
    I.amOnPage(baseUrl+'/#/login')
})

Scenario(C01.represent,(I) => {


    I.click('//li[@data-test="库房管理"]')
    I.click('//a[@data-test="人员管理"]')
    I.wait(1)
    I.click('新增人员')
    I.fillField(qclocator.inputWithLabel('警号'),data.C01.u2.data.policeSign)
    I.fillField(qclocator.inputWithLabel('姓名'),data.C01.u2.data.name)
    I.click('//div[@data-label="性别"]//input')
    I.click(`//div[@data-label="性别"]//li[1]`)
    I.click('//div[@data-label="角色"]//input')
    I.click('//div[@data-label="角色"]//li[2]')
    I.fillField(qclocator.inputWithLabel('职位'),data.C01.u2.data.position)
    I.fillField(qclocator.inputWithLabel('联系方式'),data.C01.u2.data.phone)
    I.fillField(qclocator.inputWithLabel('身份证号'),data.C01.u2.data.idNumber)
    I.fillField(qclocator.inputWithLabel('密码'),data.C01.u2.data.password)
    // I.attachFile('//div[@data-label="上传"]//input[@type="file"]','Data/vue.ico')
    I.click('提交')

    I.wait(1)
    I.see(data.C01.u2.data.name)

    I.click('//div[@data-label="设置"]')
    I.click('//div[@data-label="注销"]')
    I.wait(1)

    I.amOnPage(baseUrl+'/#/login')
    I.fillField(qclocator.inputWithplaceHolder('请输入账号'),data.C02.u2.data.policeSign)
    I.fillField(qclocator.inputWithplaceHolder('请输入密码'),data.C02.u2.data.password)
    I.click('登录')

    // I.click('//div[@data-label="设置"]')
    // I.click("个人中心")
    // I.seeInField(qclocator.inputWithLabel("姓名"),data.C02.u2.data.name);
    // I.click('//div[@data-label="设置"]')
    // I.click('//div[@data-label="注销"]')
    // I.wait(1)
    // I.see("登录")
})

Scenario("新增供应商",(I) => {


    I.click('//li[@data-test="装备出入库"]')
    I.wait(1)
    I.click('//a[@data-test="供应商管理"]')
    I.wait(1)
    I.click('新增供应商')
    I.fillField(qclocator.inputWithLabel('供应商'),data.C02.g1.data.name)
    I.fillField(qclocator.inputWithLabel('联系人'),data.C02.g1.data.person)
    I.fillField(qclocator.inputWithLabel('联系方式'),data.C02.g1.data.phone)
    I.click(`确 定`)
    I.see('新增成功')
})