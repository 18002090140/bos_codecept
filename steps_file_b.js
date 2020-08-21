// in this file you can append custom step methods to 'I' object
const qclocator = require('./qclocator');
const baseurl="http://localhost:8088";
module.exports = {
    loginAsAdmin:function(){

      user={username:1,password:1}
      this.amOnPage(baseurl+'/#/login')
      this.fillField(qclocator.inputWithplaceHolder('请输入账号'),user.username)
      this.fillField(qclocator.inputWithplaceHolder('请输入密码'),user.password)
      this.click('登录')
    }
    ,/** //TODO
    所有能加上context的都加上locate范围，让对弹出框或者表格等复杂组件的内容更方便
     */
    in:function(locate,func){
      var that=this;
    
      func.call(this,I)

    }

    /**
     * TODO 应该继续完善当菜单项收缩的时候怎么处理。
     * 点击菜单项，注意给定参数的顺序。
     * @param {*} subMenuName - 子菜单项
     * @param {*} menuName -菜单项
     */
    ,b_clickMenuItem:function(subMenuName,menuName){
      if(!!menuName){
        this.click('//ul[@role="menubar"]//li[@data-test="'+menuName+'"]');
        this.wait(1)
      }
      this.click(`//ul[@role="menubar"]//li[@data-test="${subMenuName}"] | //ul[@role="menubar"]//a[@data-test="${subMenuName}"]`);
      this.wait(1)
    }

    ,b_selectOption:function(labelName,optionSelect){
      this.click(`//div[@data-label="${labelName}"]//input`)
      this.click(`//div[@data-label="${labelName}"]//li[contains(text(),'${optionSelect}')]`);

    }
    ,selectTableRowWithCellTextInColumn:function(cellText,ColumnHeaderText,locator){
      this.click((!!locator?locator:"")+`//div[contains(@class,"el-table__body-wrapper")]/table//td[string()="${cellText}"][count(./preceding-sibling::*)=count(//div[@class="el-table__header-wrapper"]/table//th[contains(.,'${ColumnHeaderText}')]/preceding-sibling::*)]/parent::tr`);
    },

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
}
