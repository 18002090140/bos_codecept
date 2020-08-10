// import axios from "axios";
// import _ from "lodash";
const axios = require("axios")
const _ = require("lodash")
const fs = require("fs");
const path = require("path");
const { dir } = require("console");
const { lastIndexOf } = require("lodash");
// import bossupport from "./codecept.conf";
// let url = bossupport.backendurl + '/data/007/0'
let testUrl = "http://172.22.161.90:8030/bos/check-standard/export/"
let allUrl = "http://172.22.161.90:8030/bos/check-standard/export/asd_123"
const arg = process.argv
const argUrl = `${testUrl}/${arg[2]}`
let sprintNo
let userStoryNo
initName(arg[2])
axios.get(argUrl, {})
  .then(function (res) {
    //var criteriaArr=_.
    if (res.status == 200) {
      log(`网络请求成功:${res.status}`);
      // log(Object.prototype.toString.call(res.data))
      const response = res.data
      if(typeof(userStoryNo)=="undefined"){
        // S07
        makeDir(`Data1/${sprintNo}`)
      }else{
        // S07_U07
        makeDir(`Data1/${sprintNo}`)
        const data =JSON.stringify(response[0], "", "\t")
        writeFile(`Data1/${sprintNo}/${userStoryNo}.js`,`module.exports =${data}`)
        // 每个U单独一个文件夹 文件夹下为单个测试用例
        // makeDir(`Data1/${sprintNo}/${userStoryNo}`)
        // for(let i=0;i<response.length;i++){
        //   writeFile(`Data1/${sprintNo}/${userStoryNo}/${response[i].number}.js`,JSON.stringify(response[i], "", "\t"))
        // } 
      }
      // let jsData = JSON.parse(JSON.stringify(res.data, "", "\t"))
    } else {
      log(`网络请求失败:${res.status}`)
    }
  })
  .catch(function (error) {
    console.log(error);
  });
// makeDir("Data1/Data2/Data3")
// writeFile("Data1/Data2/Data3/1.js","123")
function initName(arg){
  if(isExist(arg,"_")){
    const argSplit = arg.split("_")
    sprintNo = argSplit[0]
    userStoryNo = argSplit[1]
  }else{
    sprintNo = arg
  }
}
function isExist(string,char) {
  return string.includes(char)
}
function writeFile(filePathName, msg) {
  try{
    fs.writeFileSync(filePathName,msg,"utf8")
    log(`${filePathName} 写入文件成功！`)
  }catch(err){
    log(`writeFile() ${err}`)
  }
  // 异步
  // fs.writeFile(filePathName, msg, "utf8", function (err) {
  //   if (err) {
  //     console.error("写入文件出错啦！" + err)
  //   }else{
  //     console.log("数据写入成功!")
  //   }
  // })
}
function checkDir(dirPathName) {
  try {
    return fs.statSync(dirPathName)
  } catch (err) {
    // 如果错误是找不到文件夹 就不log
    if(err.code!="ENOENT")
    log(`CheckDir() ${err}`)
  }
}
function makeDir(dirPathName) {
  let arr = dirPathName.split('/')
  let dir = arr[0]
  const dirCache = {}
  
  for (let i = 1; i <= arr.length; i++) {
    if (!checkDir(dir)) {
      if (!dirCache[dir] && !fs.existsSync(dir)) {
        dirCache[dir] = true
        try{
          fs.mkdirSync(dir)
          log(`${dir} 生成文件夹成功！`)
        }catch(err){
          log(`makeDir() ${err}`)
        }
      }
    }
    dir = dir + '/' + arr[i]
  }
}
function log(msg) {
  console.log(msg)
}
