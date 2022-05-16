import { ref } from "vue";

export let loadingRef = ref(true);
export const changeLoading = (val: boolean) => {
  loadingRef.value = val;
};
