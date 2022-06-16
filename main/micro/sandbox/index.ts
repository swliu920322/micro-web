import { ISubObj } from "@/store/sub";
import { performScriptForFunction } from "./performScript";
import { SnapShotSandbox } from "./snapShotSandbox";

export * as perform from "./performScript";
// 子应用生命周期处理, 环境变量设置

const isCheckLifeCycle = (lifeCycle: any) => {
  if (lifeCycle?.bootstrap && lifeCycle?.mount && lifeCycle?.unmount) {
    return true;
  }
};
export const sandbox = (app: ISubObj, script: string) => {
  const proxy = new SnapShotSandbox();
  if (!app.proxy) {
    app.proxy = proxy;
  }
  // @ts-ignore 1.设置环境变量
  window.__MICRO_WEB__ = true;
  // 2.运行js文件
  const lifecycle = performScriptForFunction(
    script,
    app.name,
    app.proxy?.proxy
  );
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
