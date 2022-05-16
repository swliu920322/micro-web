<template>
  <ul style="display: flex; flex-direction: row">
    <li
      v-for="i of Nav"
      :key="i.url"
      style="width: 200px; text-align: center; cursor: pointer"
      @click="toRoute(i.url)"
    >
      {{ i.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "Header",
  components: {},
  setup() {
    const Nav = [
      { name: "首页", url: "/vue3/#/index" },
      { name: "资讯", url: "/vue2/#/information" },
      { name: "视频", url: "/react18/#/video" },
    ];
    const router = useRouter();
    const route = useRoute();
    watch(route, (val) => {
      console.log(val.fullPath);
    });
    return {
      Nav,
      toRoute(url: string) {
        if (url !== route.fullPath) {
          router.push(url);
        }
      },
    };
  },
});
</script>

<style scoped lang="less">
ul,
li {
  list-style: none;
}
</style>
