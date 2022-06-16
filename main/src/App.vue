<template>
  <div id="nav">
    <div style="height: 40px; background: red; color: white">
      <Header />
    </div>
    <div class="sub-body" style="flex: 1">
      <div v-show="loading">正在加载中...</div>
      <div v-show="!loading" style="height: 100%" id="micro-container">
        子应用
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { computed } from "vue";
import { loadingRef } from "@/store/loading";
export default {
  components: { Header },
  setup() {
    return {
      loading: computed(() => loadingRef.value),
    };
  },
};
</script>
<style lang="less"></style>
