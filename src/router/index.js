import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue";
import InfoLayout from "@/layouts/InfoLayout.vue";
import infoLayoutRoutes from "@/router/infoLayout";
import mainLayoutRoutes from "@/router/mainLayout";

const routes = [
  {
    path: '/',
    component: MainLayout,

    children: [...mainLayoutRoutes]
  },
  {
    path: '/',
    component: InfoLayout,

    children: [...infoLayoutRoutes],
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
