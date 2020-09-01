const qclocator = require('./qclocator');

Feature('qwe');

Before((I) => { // or Background
    I.loginAsAdmin();
});

Scenario('装备入库操作', (I) => {
    I.b_clickMenuItem('入库单列表','装备出入库')
    I.click('入库装备')
    I.click(qclocator.entitySelectorWithLabel('装备参数'))
    I.selectTableRowWithCellTextInColumn('灭火器','装备名称')
    I.click("确定",qclocator.popupWindowWithTitle("装备参数选择"));
    I.click(qclocator.entitySelectorWithLabel('装备位置'))
    // I.selectTableRowWithCellTextInColumn('7架/A面/1节/1层','仓位名称')
    I.click(qclocator.rowWithText('1'))
    I.click("确定",qclocator.popupWindowWithTitle("位置信息选择"));
    I.wait(1)
    I.fillField('//div[@data-label="单价"]//input[1]','15')
    I.wait(1)
    I.click('//div[@data-label="生产日期"]//input[1]')
    I.click('此刻')
    I.wait(1)   
    I.b_selectOption("硬件选择","读写器");
    I.wait(1)
    I.click('读取数据')
    I.click('提交')
    pause
    
})
