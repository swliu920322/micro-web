export interface ILifeCycle {
  beforeLoad?: () => void;
  mount?: () => void;
  unmount?: () => void;
}
export type LifeCycle = "beforeLoad" | "mount" | "destroyed";
export interface ISubObj extends ILifeCycle {
  name: string;
  activeRule: string;
  container: string;
  entry: string;
}
export const subNavList: ISubObj[] = [
  {
    name: "react18",
    activeRule: "/react18",
    container: "#micro-container",
    entry: "//localhost:3000",
  },
  {
    name: "vue2",
    activeRule: "/vue2",
    container: "#micro-container",
    entry: "//localhost:9004",
  },
  {
    name: "vue3",
    activeRule: "/vue3",
    container: "#micro-container",
    entry: "//localhost:9005",
  },
];
