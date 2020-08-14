const qclocator = require('./qclocator');
const baseurl="http://localhost:8088";
Feature('qwe');

Scenario('asdsd', (I) => {

    user={username:1,password:1}
    I.amOnPage(baseurl+'/#/login')
    I.fillField(qclocator.inputWithplaceHolder('请输入账号'),user.username)
    I.fillField(qclocator.inputWithplaceHolder('请输入密码'),user.password)
    I.click('登录')
    /*
    I.click('//li[@data-test="装备出入库"]')
    I.wait(1)
    I.click('//a[@data-test="供应商管理"]')
    I.wait(1)
    I.click('新增供应商')
    I.fillField(qclocator.inputWithLabel('供应商'),1)
    I.fillField(qclocator.inputWithLabel('联系人'),2)
    I.fillField(qclocator.inputWithLabel('联系方式'),3)
    I.click('确定')
    I.wait(1)
    I.click('//li[@data-test="库房管理"]')
    I.click('//a[@data-test="人员管理"]')
    I.wait(1)
    I.click('新增人员')
    I.fillField(qclocator.inputWithLabel('警号'),1)
    I.fillField(qclocator.inputWithLabel('姓名'),2)
    I.click('//div[@data-label="性别"]//input')
    I.click('//div[@data-label="性别"]//li[1]')
    I.click('//div[@data-label="角色"]//input')
    I.click('//div[@data-label="角色"]//li[1]')
    I.fillField(qclocator.inputWithLabel('职位'),4)
    I.fillField(qclocator.inputWithLabel('联系方式'),18511111111)
    I.fillField(qclocator.inputWithLabel('身份证号'),332522111111111111)
    I.fillField(qclocator.inputWithLabel('密码'),1)
    I.attachFile('//div[@data-label="上传"]//input[@type="file"]','Data/vue.jpg')
    I.click('提交')*/

    // I.click('//li[@data-test="装备出入库"]')
    // I.wait(1)
    // I.click('//a[@data-test="装备参数列表"]')
    // I.wait(1)
    // I.click('新增装备参数')
    // I.fillField(qclocator.inputWithLabel('装备名称'),1)
    // I.fillField(qclocator.inputWithLabel('装备型号'),2)
    // I.click(qclocator.entitySelectorWithLabel('供应商')) // entity組件剥离有问题，直接修改原组件
    // I.click(qclocator.rowWithText('1'))
    // I.click("确定",qclocator.popupWindowWithTitle("供应商选择"));
    // I.fillField(qclocator.inputWithLabel('质保期（天）'),4)
    // I.fillField(qclocator.inputWithLabel('充电周期（天）'),5)
    // I.fillField(qclocator.inputWithLabel('保养周期（天）'),6)
    // I.attachFile('//div[@data-label="上传"]//input[@type="file"]','Data/vue.jpg')
    // I.click('提交')
    
    I.click('//li[@data-test="装备出入库"]')
    I.wait(1)
    I.click('//a[@data-test="入库单列表"]')
    I.wait(1)
    I.click('入库装备')
    I.click(qclocator.entitySelectorWithLabel('装备参数'))
    I.click(qclocator.rowWithText('1'))
    I.click("确定",qclocator.popupWindowWithTitle('装备参数选择'));
    I.wait(1)
    I.click(qclocator.entitySelectorWithLabel('装备位置'))
    I.wait(1)
    I.click(qclocator.rowWithText('1')) // 选择列有点问题 貌似只能根据序号来选择行
    I.click("确定",qclocator.popupWindowWithTitle('位置信息选择'));
    I.wait(1)
    I.fillField('//div[@data-label="单价"]//input[1]',111) //单价填写有问题 暂时无法实现
    I.click('//div[@data-label="生产日期"]//input[1]') //日期选择同样有问题
    I.click('此刻')
    I.click('//div[@data-label="硬件选择"]//input')
    I.click('//div[@data-label="硬件选择"]//li[1]')
    I.click('读取数据')
    I.wait(1)
    I.click('//div[@data-label="明细"]')
    
    pause() 
    
    
    // I.click(qclocator.rowWithText(data.UserStory.name),qclocator.popupWindowWithTitle("用户故事选择"));
    // I.click("确定",qclocator.popupWindowWithTitle("用户故事选择"));  
    // I.seeInField(qclocator.inputWithLabel("用户故事"),data.UserStory.name);
    // I.fillField(qclocator.inputWithLabel("内容"),t01.represent)
    // I.click('提交')
    // I.click("详情",qclocator.rowWithText(t01.name));
    // I.seeInField(qclocator.inputWithLabel("用户故事"),data.UserStory.name);
    // I.click("返回");
    // I.click("删除",qclocator.rowWithText(t01.name));
    // I.click('确定','//div[@aria-label="提示"]');
    // I.dontSee(t01.name,"//*[@class='container']");
});

