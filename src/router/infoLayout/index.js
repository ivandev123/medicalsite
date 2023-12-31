import Categories from "@/views/InfoLayout/Categories.vue";
import Specialists from "@/views/InfoLayout/Specialists.vue";
import Certificates from "@/views/InfoLayout/Certificates.vue";
import Reviews from "@/views/InfoLayout/Reviews.vue";
import Photo from "@/views/InfoLayout/Photo.vue";
import Price from "@/views/InfoLayout/Price.vue";
import VideoLectures from "@/views/InfoLayout/VideoLectures.vue";

export default [
  {
    path: 'category/:categorySlug',
    component: Categories,
  },
  {
    path: '/category/:categorySlug/:subcategorySlug',
    component: Categories,
  },
  {
    path: '/category/:categorySlug/:subcategorySlug/:serviceSlug',
    component: Categories,
  },
  // {
  //   path: `category/:id/subcategory/:id2`,
  //   component: Categories,
  //   meta: {
  //     type: 'all'
  //   }
  // },
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