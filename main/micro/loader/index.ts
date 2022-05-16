// 加载html的方法
import { ISubObj } from "@/store/sub";
import { fetchResource } from "../utils/fetchResource";

export const loadHtml = async (app: ISubObj) => {
  // 第一个，子应用显示在哪里
  const container = app.container; // #id
  // 入口
  const entry = app.entry;
  const html = await parseHtml(entry);
  const ct = document.querySelector(container);
  if (!ct) {
    throw new Error("容器不存在，请检查!");
  }
  ct.innerHTML = html;
  return app;
};

export const parseHtml = async (entry: string) => {
  const html = await fetchResource(entry);

  const div = document.createElement("div");
  div.innerHTML = html;
  // 标签 link script(src, js)
  const [dom, scriptUrl, script] = await parseJs();

  return html;
};

export const parseJs = async () => {
  return [];
};
