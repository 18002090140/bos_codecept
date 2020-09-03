// const allure = codeceptjs.container.plugins('allure')
Feature("我在百度");
Scenario("百度验收标准",(I) => {
    I.amOnPage("https://www.baidu.com/")
    // I.see("动感超人")
    // I.click("//input[@value='百度一下']")
})