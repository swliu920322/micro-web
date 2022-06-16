import React from "react";
import ReactDOM from "react-dom";
import BasicMap from "./src/router/index.jsx"; // 路由文件
import "./index.scss";

const render = () => {
  ReactDOM.render(
    <BasicMap />,
    document.getElementById("app-react")
  );
};

// 如果当前不是在微前端的环境
if (!window.__MICRO_WEB__) {
  render();
}

export const bootstrap = () => {
  console.log("react15-开始加载");
};

export const mount = () => {
  render();
  console.log("react15-渲染成功");
};

export const unmount = () => {
  console.log("react15-卸载");
};
