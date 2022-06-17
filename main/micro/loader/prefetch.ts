import { getList } from "../const/subApps";
import { parseHtml } from "./index";
// 预加载
export const prefetch = async () => {
  // 1. 获取到所有的子应用列表 - 不包括当前正在显示的
  const list = getList().filter(
    (item) => !window.location.pathname.startsWith(item.activeRule)
  ); // 所有不是以`item.activeRule`开头的子应用我们都需要获取到，那么这个时候呢除了当前正在显示的这个子应用，接下来所有的子应用我们都给它获取到了
  // 2. 预加载剩下的所有子应用
  await Promise.all(
    list.map(async (item) => await parseHtml(item.entry, item.name))
  );
};
