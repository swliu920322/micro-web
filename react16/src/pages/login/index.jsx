import React, {useEffect} from 'react';
import globalConfig from "../../config/globalConfig";
import LoginPanel from "./components/LoginPanel.jsx";
// import { main } from '../../utils/global'
import { getMain } from '../../utils/main.js';

import "./index.scss"

const Login = () => {

  useEffect(() => {
    /* if(!main.appInfo){
      return;
    }
    // 登录页面隐藏头部底部
    main.appInfo.footerState.changeFooter(false)

    main.appInfo.headerState.changeHeader(false)
    main.appInfo.crumbsState.setCrumbs([]) */
    const main = getMain();
    main.appInfo.header.changeHeader(false); // 修改 顶部和导航栏的 显示
    main.appInfo.nav.changeNav(false);
  }, [])

  return (
    <div className="login">
      <img className="loginBackground" src={`${globalConfig.baseUrl}/login-background.png`}/>
      <LoginPanel/>
    </div>
  )
}

export default Login
