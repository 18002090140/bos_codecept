// import axios from "axios";
// import _ from "lodash";
const axios = require("axios")
const _ = require("lodash")
const fs = require("fs");
const path = require("path");
const { dir } = require("console");
const { lastIndexOf } = require("lodash");
// const cjs = require("./Data1/S07/007")
// import bossupport from "./codecept.conf";
// let url = bossupport.backendurl + '/data/007/0'
let testUrl = "http://172.22.161.90:8030/bos/check-standard/export/"
let serverUrl = "http://120.78.125.187:8030/bos/check-standard/export/"
let allUrl = "http://172.22.161.90:8030/bos/check-standard/export/asd_123"
const arg = process.argv
const argUrl = `${serverUrl}/${arg[2]}`
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
        const uNameArr = []
        const uObjArr = {}
        let nameStep = 0
        for(let c=0;c<response.length;c++){
          const userStoryNo = response[c].userStory.number
          if(_.indexOf(uNameArr,userStoryNo)==-1){
            uNameArr[nameStep] = userStoryNo
            nameStep++
          }
          if(typeof(uObjArr[userStoryNo])=="undefined"){
            uObjArr[userStoryNo] = Object()
          }
          _.assign(uObjArr[userStoryNo],response[c])
        }
        for(let u=0;u<nameStep;u++){
          writeFile(`Data1/${sprintNo}/${uNameArr[u]}.js`,`module.exports =${initJS(uObjArr[uNameArr[u]])}`)
        }
      }else{
        // S07_U07
        makeDir(`Data1/${sprintNo}`)
        writeFile(`Data1/${sprintNo}/${userStoryNo}.js`,`module.exports =${initJS(response,false)}`)
      }
    } else {
      log(`网络请求失败:${res.status}`)
    }
  })
  .catch(function (error) {
    console.log(error);
  });
function initName(arg) {
  if (isExist(arg, "_")) {
    const argSplit = arg.split("_")
    sprintNo = argSplit[0]
    userStoryNo = argSplit[1]
  } else {
    sprintNo = arg
  }
}
function isExist(string, char) {
  return string.includes(char)
}
function writeFile(filePathName, msg) {
  try {
    fs.writeFileSync(filePathName, msg, "utf8")
    log(`${filePathName} 写入文件成功！`)
  } catch (err) {
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
    if (err.code != "ENOENT")
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
        try {
          fs.mkdirSync(dir)
          log(`${dir} 生成文件夹成功！`)
        } catch (err) {
          log(`makeDir() ${err}`)
        }
      }
    }
    dir = dir + '/' + arr[i]
  }
}
function initJS(obj,isSprint = true) {
  var userObj = Object()
  var sunObj = Object()
  if(isSprint){
    // 抽出用户故事
    userObj = obj.userStory
    // 测试用例 数组变对象
    var parentObj = Object()
      var childObj =Object()
      childObj.name = obj.name
      childObj.number = obj.number
      childObj.represent = obj.represent
      for(let t=0;t<obj.testDataSet.length;t++){
        var tparentObj = Object()
        var tchildObj =Object()
        tchildObj.number = obj.testDataSet[t].number
        tchildObj.data = obj.testDataSet[t].dataJson
        tparentObj[obj.testDataSet[t].number] = tchildObj
        _.assign(childObj,tparentObj)
      }
      parentObj[obj.number] = childObj
      _.assign(sunObj,parentObj)
  }else{
    userObj = obj[0].userStory

    for(let c=0;c<obj.length;c++){
      var parentObj = Object()
      var childObj =Object()
      childObj.name = obj[c].name
      childObj.number = obj[c].number
      childObj.represent = obj[c].represent
      for(let t=0;t<obj[c].testDataSet.length;t++){
        var tparentObj = Object()
        var tchildObj =Object()
        tchildObj.number = obj[c].testDataSet[t].number
        tchildObj.data = obj[c].testDataSet[t].dataJson
        tparentObj[obj[c].testDataSet[t].number] = tchildObj
        _.assign(childObj,tparentObj)
      }
      parentObj[obj[c].number] = childObj
      _.assign(sunObj,parentObj)
    }
  }
  // log(sunObj)
  let data = _.assign(userObj, sunObj)
  data =JSON.stringify(data, "", "\t")
  return data
}
function log(msg) {
  console.log(msg)
}
