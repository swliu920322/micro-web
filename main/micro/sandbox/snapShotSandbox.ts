// 快照沙箱

export class SnapShotSandbox {
  proxy: any = null;
  snapshot: Map<string, any> = new Map();
  constructor() {
    // 1.代理对象
    this.proxy = window;
    this.active();
  }
  // 激活
  active() {
    // 创建一个沙箱快照
    this.snapshot = new Map();
    // 遍历全局环境
    for (const key in window) {
      this.snapshot.set(key, window[key]);
    }
  }
  // 销毁
  inactive() {
    console.log('inactive')
    setTimeout(() => {
      for (const key in window) {
        const val = this.snapshot.get(key);
        if (window[key] !== val) {
          // 还原
          window[key] = val;
        }
      }
    }, 5000);
  }
}
