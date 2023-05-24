import { ref } from "vue";
import { defineStore } from "pinia";
import type { UserData } from "@/types/types";

export const useChildrenStore = defineStore("children", () => {
  const children = ref<Array<UserData>>([]);

  //   const push = (child: UserData) => {
  //     children.value.push(child);
  //   };

  //   const remove = (index: number) => {
  //     children.value.splice(index, 1);
  //   };

  return { children };
});
