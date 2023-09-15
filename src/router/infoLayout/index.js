import Categories from "@/views/InfoLayout/Categories.vue";
import Specialists from "@/views/InfoLayout/Specialists.vue";
import Certificates from "@/views/InfoLayout/Certificates.vue";
import Reviews from "@/views/InfoLayout/Reviews.vue";
import Photo from "@/views/InfoLayout/Photo.vue";
import Price from "@/views/InfoLayout/Price.vue";
import VideoLectures from "@/views/InfoLayout/VideoLectures.vue";

export default [
  {
    path: 'category/:id',
    component: Categories,
  },
  {
    path: 'subcategory/:id',
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