
## XPath 语法
  - https://developer.mozilla.org/zh-CN/docs/Web/XPath
  - https://www.w3school.com.cn/xpath/xpath_syntax.asp
  - https://www.w3.org/TR/xpath
  - 轴axes/函数function/

  
## 其他连接
### XPath中的text()和string()区别 https://blog.csdn.net/jiangchao858/article/details/63314426
### Xpath cheatsheet https://devhints.io/xpath  


## xpath的三大场景
- 在某个范围里A找符合某条件的节点B：采用A//B
- 在某个表格中，选择某列内容满足某个条件A的那一行（见下述‘常见的translate与contains函数'中的例子）
- 所有满足某个条件的节点中，选取与某个节点具有最近的共同祖先节点的那个。


# position()与count(./preceding-sibling::*)
- position仅仅是在选出来的所有节点里（context）应用序号，类似于下标。
- 而count(./preceding-sibling::*)显然是指当前节点在原来的上下文中是第N个节点（n=1,2,3....)。

# 常见的translate与contains函数
- translate用来做替换，而contains做包含判定，下面所说的是在所有包含‘管理员登陆’的单元格中，选出属于“中文名”这一列，所在的那些行。
- //td[contains(text(),’管理员登录’)]/ancestor::tr[position()=count(//table[@class='el-table__header'][1]//th[contains(translate(., ' ', ''),'中文名')]/preceding-sibling::*)]


# 节点集合的操作 ｜ 
-




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

