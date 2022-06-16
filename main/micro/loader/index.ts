// 加载html的方法
import { ISubObj } from "@/store/sub";
import { fetchResource } from "../utils/fetchResource";
import { sandbox } from "../sandbox";

export const loadHtml = async (app: ISubObj) => {
  // 第一个，子应用显示在哪里
  const container = app.container; // #id
  // 入口
  const entry = app.entry;
  const [dom, scripts] = await parseHtml(entry, app.name);
  const ct = document.querySelector(container);
  if (!ct) {
    throw new Error("容器不存在，请检查!");
  }
  ct.innerHTML = dom;
  scripts?.forEach((i) => sandbox(app, i));
  return app;
};

// 提高加载性能 - 应用缓存
// 如果我们当前这个html也就解析并且加载过那么这时候呢我们就直接返回我们已经加载过的内容，但是呢如果没有加载过的话我们继续让它走之前我们需要走的加载我们子应用的所有的流程
const cache: Record<string, any> = {}; // 根据子应用的 name 来做缓存

export const parseHtml = async (
  entry: string,
  name: string
): Promise<[string, string[]]> => {
  if (cache[name]) {
    return cache[name]; // 如果说当前命中了我们的 name，我们就直接使用 name 缓存的当前的子应用的所有的信息
  }
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
  cache[name] = [dom, allScript];
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
        // 说明我们是直接在 script 中书写的内容并没有外链其它的js资源，那么这个时候呢我们就需要获取到当前 script 标签中的所有内容将它添加到上面的 script 这个数组中
        script.push(element.outerHTML);
      } else {
        // src 有内容这个时候表明当前的js资源是通过外部链接引入的，那么这个时候呢我们就要通过它这个链接去获取到它对应的内容
        if (src.startsWith("http")) {
          scriptUrl.push(src);
        } else {
          // 如果js资源文件不是以http开头的
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
      if (href?.endsWith(".js")) {
        if (href.startsWith("http")) {
          scriptUrl.push(href);
        } else {
          // 如果js资源文件不是以http开头的
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
