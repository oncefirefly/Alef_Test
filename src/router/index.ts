import AlefFormView from "@/views/AlefFormView.vue";
import AlefPreview from "@/views/AlefPreviewView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "form",
      component: AlefFormView,
    },
    {
      path: "/preview",
      name: "preview",
      component: AlefPreview,
    },
  ],
});

export default router;
