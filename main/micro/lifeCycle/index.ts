import { filterAppByRoute } from "../utils";
import { getMainLifeCycle } from "../const/mainLifeCycle";
import { loadHtml } from "../loader";
import { ISubObj } from "@/store/sub";

export const lifeCycle = async () => {
  // 获取上一个子应用
  // @ts-ignore
  const prevApp = filterAppByRoute(window.__ORIGIN_APP__);
  // 获取跳转的子应用
  // @ts-ignore
  const nextApp = filterAppByRoute(window.__CURRENT_SUB_APP__);
  // console.log(prevApp, nextApp);
  if (!nextApp) {
    return;
  }
  if (prevApp?.unmount) {
    await destroyed(prevApp);
  }
  const app = await beforeLoad(nextApp);
  await mounted(app);
};

export const beforeLoad = async (app: any) => {
  await runMainLifeCycle("beforeLoad");
  app?.beforeLoad?.();
  const subApp = await loadHtml(app); // 获取子应用的内容
  // @ts-ignore
  subApp?.beforeLoad?.();
  return subApp;
};
export const mounted = async (app: ISubObj) => {
  console.log("mount", app);
  app?.mount?.();
  await runMainLifeCycle("mount");
};
export const destroyed = async (app: any) => {
  app?.unmount?.();
  // 对应执行一下主应用的生命周期
  await runMainLifeCycle("destroyed");
};

export const runMainLifeCycle = async (type: string) => {
  const mainLife = getMainLifeCycle();
  await Promise.all(mainLife[type]?.map(async (i: () => any) => await i()));
};
