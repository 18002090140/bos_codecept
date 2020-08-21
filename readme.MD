# 运行说明
- https://codecept.io
## cnpm install
## 调整参数设置：a.包括codecept.config.js中的chrome位置.b.baseurl设定
## 运行测试代码 npx codeceptjs run --verbose  //--verbose是显示详细信息，可以去掉
- https://codecept.io/quickstart/
## 如需编写额外的验收测试代码 
- 则首先生成用户故事或验收标准的数据文件，放到/Data/文件夹中
- 编写对应的测试代码*_test.js

# xpath 参考说明 
 - https://www.w3school.com.cn/xpath/xpath_intro.asp
 - 参考xpath使用注意事项.md

# 准备测试数据及模板
- 生成U08文件及测试文件 cnpm run prepare S07_U08
- 生成S07下所有U的文件及测试文件 cnpm run prepare S07



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