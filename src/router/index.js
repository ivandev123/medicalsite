import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue";
import InfoLayout from "@/layouts/InfoLayout.vue";
import infoLayoutRoutes from "@/router/infoLayout";
import mainLayoutRoutes from "@/router/mainLayout";
import Error404 from "@/views/Error404.vue";

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
  },
  {
    path: '/404',
    component: Error404,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
