import { registerMicroApps, start } from "../../micro";

export const registerApp = (list: any[] = []) => {
  // 注册到微前端框架里
  registerMicroApps(list);
  start();
};

