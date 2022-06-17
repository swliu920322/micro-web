import { registerMicroApps, start } from "../../micro";
import { changeLoading } from "@/store/loading";
import { ISubObj } from "@/store/sub";

export const registerApp = (list: ISubObj[] = []) => {
  // 注册到微前端框架里
  registerMicroApps(list, {
    beforeLoad: [
      () => {
        changeLoading(true);
        console.log("主应用开始加载");
      },
    ],
    mount: [
      () => {
        changeLoading(false);
        console.log("主应用渲染完成");
      },
    ],
    destroyed: [
      () => {
        console.log("主应用卸载完成");
      },
    ],
  });
  start();
};
