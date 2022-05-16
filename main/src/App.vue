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
      <div v-if="loading">正在加载中...</div>
      <div v-else>子应用</div>
    </div>
  </div>
  <!--  <router-view />-->
</template>

<script>
import Header from "@/components/Header";
import { computed } from "vue";
import { loadingRef, changeLoading } from "@/store/loading";
export default {
  components: { Header },
  setup() {
    return {
      loading: computed(() => loadingRef.value),
    };
  },
};
</script>
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
