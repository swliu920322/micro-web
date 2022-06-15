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
    this.snapshot = new Map();
    for (const key in window) {
      this.snapshot.set(key, window[key]);
    }
  }
  // 销毁
  inactive() {
    for (const key in window) {
      const val = this.snapshot.get(key);
      if (window[key] !== val) {
        window[key] = val;
      }
    }
  }
}
