import { registerMicroApps } from "../../micro";

export const registerApp = (list = []) => {
  // 注册到微前端框架里
  registerMicroApps(list);
};
