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
import MassMediaAboutUs from "@/views/MainLayout/MassMediaAboutUs.vue";
import Stock from "@/views/MainLayout/Stock.vue";
import StockArticle from "@/views/MainLayout/StockArticle.vue";
import VideoLectures from "@/views/InfoLayout/VideoLectures.vue";
import RegulatoryBodies from "@/views/MainLayout/RegulatoryBodies.vue";
import HelpfulInfo from "@/views/MainLayout/HelpfulInfo.vue";
import Contacts from "@/views/MainLayout/Contacts.vue";

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
      },
      {
        path: 'media',
        component: MassMediaAboutUs
      },
      {
        path: 'stock',

        children: [
          {
            path: '',
            component: Stock,
          },
          {
            path: ':id',
            component: StockArticle,
          }
        ]
      },
      {
        path: 'regulatory-bodies',
        component: RegulatoryBodies,
      },
      {
        path: 'helpful-info',
        component: HelpfulInfo
      },
      {
        path: 'contacts',
        component: Contacts
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
      },
      {
        path: 'video-lectures',
        component: VideoLectures,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
