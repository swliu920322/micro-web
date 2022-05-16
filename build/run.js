// 启动所有子应用
const childProcess = require("child_process");
const path = require('path')

// 快速启动我们所有的项目
const filePath = {
  vue2: path.join(__dirname, '../vue2'),
  vue3: path.join(__dirname, '../vue3'),
  react18: path.join(__dirname, '../react18'),
  // service: path.join(__dirname, '../service'),
  main: path.join(__dirname, '../main')
};

// cd 子应用的目录 npm start 启动项目
function runChild() {
  Object.values(filePath).forEach((item) => {
    console.log(item);
    childProcess.spawn(`cd ${item} && npm start`, { stdio: "inherit", shell: true });
  });
}

runChild();
