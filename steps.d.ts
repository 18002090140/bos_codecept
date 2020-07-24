/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I }
  interface CallbackOrder { [0]: CodeceptJS.I }
  interface Methods extends CodeceptJS.Puppeteer {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {
  "amOutsideAngularApp": "在Angular应用外",
  "amInsideAngularApp": "在Angular应用内",
  "waitForElement": "等待元素",
  "waitForClickable": "等到可点击",
  "waitForVisible": "等到可见",
  "waitForText": "等待文本",
  "moveTo": "移至",
  "refresh": "刷新",
  "haveModule": "有模块",
  "resetModule": "重置模块",
  "amOnPage": "在页面",
  "click": "单击",
  "doubleClick": "双击",
  "see": "看到",
  "dontSee": "看不到",
  "selectOption": "选中选项",
  "fillField": "填写字段",
  "pressKey": "按键",
  "triggerMouseEvent": "触发鼠标事件",
  "attachFile": "附加文件",
  "seeInField": "在字段中看到",
  "dontSeeInField": "在字段中看不到",
  "appendField": "追加字段",
  "checkOption": "勾选选项",
  "seeCheckboxIsChecked": "看到复选框勾选",
  "dontSeeCheckboxIsChecked": "看不到复选框勾选",
  "grabTextFrom": "抓取文本",
  "grabValueFrom": "抓取值",
  "grabAttributeFrom": "抓取属性",
  "seeInTitle": "在标题中看到",
  "dontSeeInTitle": "在标题中看不到",
  "grabTitle": "抓取标题",
  "seeElement": "看到元素",
  "dontSeeElement": "看不到元素",
  "seeInSource": "在源码中看到",
  "dontSeeInSource": "在源码中看不到",
  "executeScript": "执行脚本",
  "executeAsyncScript": "执行异步脚本",
  "seeInCurrentUrl": "在当前网址中看到",
  "dontSeeInCurrentUrl": "在当前网址中看不到",
  "seeCurrentUrlEquals": "看到当前网址等于",
  "dontSeeCurrentUrlEquals": "看不到当前网址等于",
  "saveScreenshot": "保存屏幕截图",
  "setCookie": "设置Cookie",
  "clearCookie": "清空Cookie",
  "seeCookie": "看到Cookie",
  "dontSeeCookie": "看不到Cookie",
  "grabCookie": "抓取Cookie",
  "resizeWindow": "调整窗口尺寸",
  "wait": "等"
}
  }
}
