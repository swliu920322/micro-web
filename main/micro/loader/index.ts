// 加载html的方法
import { ISubObj } from "@/store/sub";
import { fetchResource } from "../utils/fetchResource";
import { sandbox } from "../sandbox";

export const loadHtml = async (app: ISubObj) => {
  // 第一个，子应用显示在哪里
  const container = app.container; // #id
  // 入口
  const entry = app.entry;
  const [dom, scripts] = await parseHtml(entry);
  const ct = document.querySelector(container);
  if (!ct) {
    throw new Error("容器不存在，请检查!");
  }
  ct.innerHTML = dom;
  scripts?.forEach((i) => sandbox(app, i));
  return app;
};

export const parseHtml = async (entry: string): Promise<[string, string[]]> => {
  const html = await fetchResource(entry);
  let allScript = [];
  const div = document.createElement("div");
  div.innerHTML = html;
  // 标签 link script(src, js)
  const [dom, scriptUrls, script] = await getResources(div, entry);
  const fetchedScripts = await Promise.all(
    scriptUrls.map(async (i) => fetchResource(i))
  );
  allScript = script.concat(fetchedScripts);
  return [dom, allScript];
};

export const getResources = async (
  root: HTMLDivElement,
  entry: string
): Promise<[string, string[], string[]]> => {
  const scriptUrl: string[] = [];
  const script: any[] = [];
  const dom = root.outerHTML;
  // 深度解析
  function deepParse(element: Element) {
    const children = element.children;
    const parent = element.parentElement;
    // script
    if (element.nodeName.toLocaleLowerCase() === "script") {
      const src = element.getAttribute("src");
      if (!src) {
        script.push(element.outerHTML);
      } else {
        if (src.startsWith("http")) {
          scriptUrl.push(src);
        } else {
          scriptUrl.push(`http:${entry}/${src}`);
        }
      }
      if (parent) {
        parent.replaceChild(
          document.createComment("次js文件已经被微前端替换"),
          element
        );
      }
    }
    // link也会有js的内容
    if (element.nodeName.toLocaleLowerCase() === "link") {
      const href = element.getAttribute("href");
      if (!href) {
        return;
      }
      if (href.endsWith(".js")) {
        if (href.startsWith("http")) {
          scriptUrl.push(href);
        } else {
          scriptUrl.push(`http:${entry}/${href}`);
        }
      }
    }

    for (let i = 0; i < children.length; i++) {
      deepParse(children[i]);
    }
  }
  deepParse(root);
  return [dom, scriptUrl, script];
};
