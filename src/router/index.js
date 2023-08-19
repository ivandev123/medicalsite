import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue";
import Home from "@/views/MainLayout/Home.vue";
import InfoLayout from "@/layouts/InfoLayout.vue";
import Categories from "@/views/InfoLayout/Categories.vue";
import Blog from "@/views/MainLayout/Blog.vue";
import BlogArticle from "@/views/MainLayout/BlogArticle.vue";
import HistoryOfTheClinic from "@/views/MainLayout/HistoryOfTheClinic.vue";
import Specialists from "@/views/InfoLayout/Specialists.vue";
import Certificates from "@/views/InfoLayout/Certificates.vue";
import Reviews from "@/views/InfoLayout/Reviews.vue";
import Photo from "@/views/InfoLayout/Photo.vue";
import Price from "@/views/InfoLayout/Price.vue";

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

        children: [
          {
            path: '',
            component: Blog
          },
          {
            path: ':id',
            component: BlogArticle
          }
        ]
      },
      {
        path: 'history',
        component: HistoryOfTheClinic
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
      },
      {
        path: 'specialists',
        component: Specialists,
      },
      {
        path: 'certificates',
        component: Certificates,
      },
      {
        path: 'reviews',
        component: Reviews,
      },
      {
        path: 'photo',
        component: Photo,
      },
      {
        path: 'price',
        component: Price,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
