import React from 'react'
// import "./index.scss"
import ReactDOM from 'react-dom'
import BasicMap from './src/router';
import { setMain } from './src/utils/main.js'

const render = () => {
  ReactDOM.render(<BasicMap />, document.getElementById('app-react'))
}

if (!window.__MICRO_WEB__) {
  render()
}

export const bootstrap = () => {
  console.log("react16-开始加载");
};

export const mount = (app) => {
  // setMain(app); // 做app的一个缓存
  render();
  console.log("react16-渲染成功");
};

export const unmount = () => {
  console.log("react16-卸载");
};
