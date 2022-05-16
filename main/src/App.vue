<template>
  <div id="nav">
    <div style="height: 40px; background: red; color: white">
      <Header />
    </div>
    <!--    <router-link to="/">Home</router-link> |-->
    <!--    <router-link to="/about">About</router-link>-->
    <div
      class="sub-body"
      id="micro-container"
      style="flex: 1; background: #61dafb"
    >
      子应用
    </div>
  </div>
  <!--  <router-view />-->
</template>

<style lang="less">
#app {
  height: 100%;
}
#nav {
  display: flex;
  flex-direction: column;
  height: 100%;
}
body,
html {
  height: 100%;
  margin: 0;
}
</style>
<script>
import Header from "@/components/Header";
export default {
  components: { Header },
};
</script>
