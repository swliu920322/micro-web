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
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { nav } from "@/router";

export default defineComponent({
  name: "Header",
  components: {},
  setup() {
    const Nav = nav;
    const router = useRouter();
    const route = useRoute();
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
