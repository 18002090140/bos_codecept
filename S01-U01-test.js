let locator = require('./qclocator')

let data=require("./Data/S01/U01.js");
const qclocator = require('./qclocator');
const baseurl="http://120.78.125.187:8888";
Feature('测试数据web化');

Scenario(data.C02.represent, (I) => {
    var t01=data.C02.testdata.T01;


    I.amOnPage(baseurl+'/#/checkStandardList')
    I.click('新增验收标准')
    I.fillField(qclocator.inputWithLabel("名称"),t01.name);
    I.fillField(qclocator.inputWithLabel("编号"),t01.number);

    I.click(qclocator.entitySelectorWithLabel("用户故事"));

    I.click(qclocator.rowWithText(data.UserStory.name),qclocator.popupWindowWithTitle("用户故事选择"));
    I.click("确定",qclocator.popupWindowWithTitle("用户故事选择"));  
    
    /**
    I.in(qclocator.popupWindowWithTitle("用户故事选择"),(I)=>{
        I.click(qclocator.rowWithText("C01"));
        I.fillField("确定");
    })
     */

    I.seeInField(qclocator.inputWithLabel("用户故事"),data.UserStory.name);
    I.fillField(qclocator.inputWithLabel("内容"),t01.represent)
    I.click('提交')
   
    I.click("详情",qclocator.rowWithText(t01.name));
    I.seeInField(qclocator.inputWithLabel("用户故事"),data.UserStory.name);
    I.click("返回");
    I.click("删除",qclocator.rowWithText(t01.name));
    I.click('确定','//div[@aria-label="提示"]');
    I.dontSee(t01.name,"//*[@class='container']");
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


