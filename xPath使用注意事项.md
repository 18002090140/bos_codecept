## 可能遇到的错误以及解决办法
  Could not find browser revision 782078. Run "PU----"
	该错误表示找不到浏览器的方式，自己手动配置浏览器启动路径即可解决：
	找到当前目录下的 codecept.conf.js 在Puppeteer里新增属性如下
  ```js 
  chrome: {
    executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe
     	 }
	
	executablePath里填的是浏览器的启动方式路径 根据自己电脑上的路径配置即可
  ```
## XPath 语法
  https://www.w3school.com.cn/xpath/xpath_syntax.asp

## 其他连接
### XPath中的text()和string()区别 https://blog.csdn.net/jiangchao858/article/details/63314426
### Xpath cheatsheet https://devhints.io/xpath  

## 基本操作

```
//元素标签名
例如: //div,查找网页内的所有div

//元素标签名[@属性名='具体内容']
例如: //div[@class='box'],查找class为box的div

//元素标签名[第几个]
例如: //div[@class='box'][2],查找符合条件的第2个div

//元素1/元素2/元素3...
例如: //ul/li/div/a/img,查找ul下的li下的div下的a下的img标签

//元素1/@属性名
例如://ul/li/div/a/img/@src, 查找ul下的li下的div下的a下的img标签的src属性

//元素/text()
例如://a/text(), 获取a标签之间的文本(一级文本)

//元素//text()
例如://div[@class='box']//text(), 获取class为div下的所有文本

//元素[contains(@属性名,'相关属性值')]
例如://div[contains(@class,'zhangsan')] 查找class中包含zhangsan的div

//*[@属性='值']
例如://*[@name='lisi']查找所有name为lisi的元素
"""
```
## Xpath基本使用方法
  注：默认死格式 先写 //* 代表定位页面下所有元素

  ### 1、Xpath支持ID、Class、Name定位功能

　　1）、通过ID定位
 
 　　 　//*[@id='kw']
 
　　2）、通过Class定位
 
　　　　//*[@class='class_name']
 
　　3）、通过Name定位
 
　　　　//*[@name='name']
 
 
### 2、如果标签没有ID、Class、Name三总属性，Xpath还支持属性定位功能

 
　　　　@ 代表以属性定位，后面可以接标签中任意属性 
　　　　　　//*[@other='attribute']
 
### 3、当标签的属性重复时，Xpath提供了通过标签来进行过滤

　　　　　将 * 换位任意标签名，则可根据标签进行筛选
　　　　　//input[@placeholder='用户名']
 
### 4、当标签页重复时，Xpath提供了层级过滤

例如：找不到儿子，那么就先找他的爸爸，实在不行可以再找他的爷爷

　　1）、支持通过 / 进行层级递进，找到符合层级关系的标签
 
　　　　//form/div/input[@placeholder="用户名"]
 
　　2）、当层级都重复时，可以通过单个层级的属性进行定位
 
　　　　//form/div[@class='login-user']/input

