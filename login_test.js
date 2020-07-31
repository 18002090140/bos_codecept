let locator = require('./qclocator')

let data= require('./Data/checkData.js');
Feature('测试数据web化');

Scenario("给定新增测试数据界面，当我输入name为‘byd-测试1‘，"
+"和对应的装备保养单JSON字符串，单击确定按钮后，我会在测试数据列表界面看到，"
+"领域模型为'装备保养单',名称为'byd-测试1'的数据条目，"
+"点开该条数据的详情后，能拿到该测试数据的值，该值应与输入的JSON字符串相同", (I) => {
    
    //给定.....
    //当我填写是是是是，
    //并且 提交后
    //那么 ....
    //1.当我在装备出入库模型界面，点击装备类型时，那么界面能跳转到装备类型的模型界面。
    //given I.amOnPage('https://baidu.com/');
    //and.I.click("详情",Locator.getRow("adsfasdf")).


    // I.amOnPage('http://120.78.125.187:8888/#/ModuleList');
    // I.click("新增测试数据","//table//div[text() = '领域模型']/ancestor::tr");
    // I.see("测试数据添加");
    // I.amOnPage('http://120.78.125.187:8888/#/TestData/DutuEOiLSv23vSG8d97gEQ_DM');
    // I.fillField("//section/section/main/div/div[2]/div[2]/div/div[1]/input",data.test1.name);
    // I.click('保存')
    // I.see("保存成功");

    I.amOnPage('http://localhost:8080/#/checkStandardList')
    I.click('验收标准列表')
    I.see("新增验收标准");
    I.click('新增验收标准')
    I.fillField("//input[@class='input']",data.name)[0]
    I.click("//i[@class='iconfont icon-sousuo']")[0]
    I.click(`//table//div[text() = 'asda']/ancestor::tr`)
    I.click('确定')
    I.fillField("//section/section/main/div/div[2]/div[1]/div[3]/textarea",'assadad')
    I.click("//section/section/main/div/div[2]/div[1]/div[4]/div[2]/i[2]")
    I.click("//section/section/main/div/div[2]/div[1]/div[4]/div[4]/div/div/div[2]/div/div[1]/div[1]/div[3]/table/tbody/tr[2]/td[1]/div/label/span/span")
    I.click("//button[@class='button primary default']")
    I.click("//button[@class='button simple default']")
    pause();
});


/*

Scenario("假定测试数据已经好了，当我在命令行中输入"
+"curl http://120.78.125.187:8888/#/ModuleList >data.json时，"
+"那么data.json文件是一个标准的json文件并且包含了系统中的所有测试数据。", (I) => {
    
    I.gotohome();
    //I.click("新增","这一行的")
    I.see("新增测试数据");
    I.fillField("name",data.jsondata.name);
    //I.fillField("模型数据",默认？或者弹出选择数据)
    I.fillField("jsondata",JSON.stringify(data.jsondata))
    pause();
    I.click("提交");
    I.amOnPage('http://120.78.125.187:8888/#/TestDataList');
    I.see(data.name);
    I.click('详情',locator.sameRow(data.name));
    I.seeTextEquals(JSON.stringify(data.jsondata));
 

    //
   
});

*/


