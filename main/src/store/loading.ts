import { ref } from "vue";

export const loadingRef = ref(true);
export const changeLoading = (val: boolean) => {
  loadingRef.value = val;
};
