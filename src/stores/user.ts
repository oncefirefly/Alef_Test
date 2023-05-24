import { ref } from "vue";
import { defineStore } from "pinia";
import type { UserData } from "@/types/types";

export const useUserStore = defineStore("user", () => {
  const user = ref<UserData>({
    name: "",
    age: "",
  });

  return { user };
});
