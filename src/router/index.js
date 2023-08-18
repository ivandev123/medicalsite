import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue";
import Home from "@/views/MainLayout/Home.vue";
import InfoLayout from "@/layouts/InfoLayout.vue";
import Categories from "@/views/InfoLayout/Categories.vue";
import Blog from "@/views/MainLayout/Blog.vue";

const routes = [
  {
    path: '/',
    component: MainLayout,

    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'blog',
        component: Blog
      }
    ]
  },
  {
    path: '/',
    component: InfoLayout,

    children: [
      {
        path: 'categories',
        component: Categories,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
