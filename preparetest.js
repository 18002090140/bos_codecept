// import axios from "axios";
// import _ from "lodash";
const axios = require("axios")
const _ = require("lodash")
const fs = require("fs");
const path = require("path");
const { dir } = require("console");
const { lastIndexOf } = require("lodash");
// import bossupport from "./codecept.conf";
let testUrl = "http://172.22.161.90:8030/bos/test-data/export"
let allUrl = "http://172.22.161.90:8030/bos/test-data/export/data/007/0"
// let url = bossupport.backendurl + '/data/007/0'
const arg = process.argv
const argUrl = `${testUrl}/${arg[2]}/${arg[3]}/${arg[4]}`
axios.get(argUrl, {})
  .then(function (res) {
    var sprintno = "S01";
    //var criteriaArr=_.
    if (res.status == 200) {
      console.log(`网络请求成功:${res.status}`);
      //生成文件夹与文件
      let data = JSON.stringify(res.data, "", "\t")
      initDir("Data1","Data1/007.json",data)
      
      //JS
      // let jsData = JSON.parse(JSON.stringify(res.data))
      // writeFile('007.js', data)
      // console.log(jsData) 
    } else {
      console.log(`网络请求失败:${res.status}`)
    }

  })
  .catch(function (error) {
    console.log(error);
  });



function mkdirs(pathname, callback) {
  // 需要判断是否是绝对路径(避免不必要的bug)
  pathname = path.isAbsolute(pathname) ? pathname : path.join(__dirname, pathname);
  // 获取相对路径
  pathname = path.relative(__dirname, pathname);
  let floders = pathname.split(path.sep); // path.sep 避免平台差异带来的bug
  let pre = "";
  floders.forEach(floder => {
    try {
      // 没有异常，文件已经创建，提示用户改文件已经创建
      let _stat = fs.statSync(path.join(__dirname, pre, floder));
      let hasMkdir = _stat && _stat.isDirectory();
      if (hasMkdir) {
        callback && callback(`文件${floder}已经存在，不能重复创建，请重新创建`);
      }
    } catch (error) {
      // 抛出异常，文件不存在则创建文件
      try {
        // 避免父文件还没有创建的时候先创建子文件所出现的意外bug,这里选择同步创建文件
        fs.mkdirSync(path.join(__dirname, pre, floder));
        callback && callback(null);
      } catch (error) {
        callback && callback(error);
      }
    }
    pre = path.join(pre, floder); // 路径拼合
    console.log(pre)
  });
}

function initDir(pathname,filename,msg) {
  fs.exists(pathname, function (exists) {
    // 判断文件夹是否存在
    //removeDir 如果存在，先对文件夹中的文件进行删除 ，再删除文件夹，最后再新建文件夹，生成文件
    //makeDir 如果不存在，新建文件夹，生成文件
    exists ? removeDir(pathname,filename,msg) : makeDir(pathname,filename,msg)
  })
}

function makeDir(pathname,filename,msg) {
  fs.mkdir(pathname, function (err) {
    if (err) {
      return console.error("文件夹创建失败:" + err)
    }
    console.log("文件夹创建成功！")
    writeFile(filename,msg)
  })
}

function removeDir(pathname,filename,msg) {
  fs.readdirSync(pathname).map((file) => {
    fs.unlink(`${pathname}/${file}`, (err) => {
      if (err) {
        console.log(`删除文件失败:${err}`);
      } else {
        console.log('删除文件成功！');
        // console.log('\x1b[91m','删除文件成功！')
      }

      fs.rmdir(pathname, function (err) {
        if (err) {
          return console.error("文件夹删除失败:" + err)
        }
        console.log("文件夹删除成功！")
        makeDir(pathname,filename,msg)
      })
    });
  });
  
}

function writeFile(pathname, msg) {
  fs.writeFile(pathname, msg, "utf8", function (err) {
    if (err) {
      console.error("写入文件出错啦！" + err)
    }
    console.log("数据写入成功!"
    )
  })
}
// function makeDir(pathname) {
//   let arr = pathname.split('/')
//   let dir = arr[0]
//   const dirCache ={}
//   for(let i=1;i<=arr.length;i++){
//     if(!dirCache[dir]&&!fs.existsSync(dir)){
//       dirCache[dir] = true
//       fs.mkdirSync(dir)
//     }
//     dir = dir+'/'+arr[i]
//   }
// }
// function removeDir(pathname) {
//   const index = pathname.lastIndexOf("/")
//   console.log(index)
// }

