import Home from "@/views/MainLayout/Home.vue";
import Blog from "@/views/MainLayout/Blog.vue";
import BlogArticle from "@/views/MainLayout/BlogArticle.vue";
import HistoryOfTheClinic from "@/views/MainLayout/HistoryOfTheClinic.vue";
import MassMediaAboutUs from "@/views/MainLayout/MassMediaAboutUs.vue";
import Stock from "@/views/MainLayout/Stock.vue";
import StockArticle from "@/views/MainLayout/StockArticle.vue";
import RegulatoryBodies from "@/views/MainLayout/RegulatoryBodies.vue";
import HelpfulInfo from "@/views/MainLayout/HelpfulInfo.vue";
import Contacts from "@/views/MainLayout/Contacts.vue";
import PrivacyPolicy from "@/views/MainLayout/PrivacyPolicy.vue";
import TermsOfUse from "@/views/MainLayout/TermsOfUse.vue";

export default [
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
  },
  {
    path: 'policy',
    component: PrivacyPolicy
  },
  {
    path: 'terms',
    component: TermsOfUse
  }
]