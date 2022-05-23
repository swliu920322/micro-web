import { ISubObj } from "@/store/sub";
import { performScriptForEval } from "./performScript";

export * as perform from "./performScript";
// 子应用生命周期处理, 环境变量设置

const isCheckLifeCycle = (lifeCycle: any) => {
  if (lifeCycle?.bootstrap && lifeCycle?.mount && lifeCycle?.unmount) {
    return true;
  }
};
export const sandbox = (app: ISubObj, script: string) => {
  // @ts-ignore 1.设置环境变量
  window.__MICRO_WEB__ = true;
  // 2.运行js文件
  const lifecycle = performScriptForEval(script, app.name);
  // 生命周期，挂载在到app上
  if (isCheckLifeCycle(lifecycle)) {
    // @ts-ignore
    app.bootstrtap = lifecycle.bootstrtap;
    // @ts-ignore
    app.mount = lifecycle.mount;
    // @ts-ignore
    app.unmount = lifecycle.unmount;
  }
};
