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