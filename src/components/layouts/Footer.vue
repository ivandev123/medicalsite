<script>
import {defineComponent} from 'vue'
import LogoIcon from "@/components/icons/LogoIcon.vue";
import FacebookIcon from "@/components/icons/networks/FacebookIcon.vue";
import InstagramIcon from "@/components/icons/networks/InstagramIcon.vue";
import VKIcon from "@/components/icons/networks/VKIcon.vue";
import TwitterIcon from "@/components/icons/networks/TwitterIcon.vue";
import TelegramIcon from "@/components/icons/networks/TelegramIcon.vue";
import YouTubeIcon from "@/components/icons/networks/YouTubeIcon.vue";
import {mapActions, mapState} from "vuex";

export default defineComponent({
  name: "Footer",
  components: {YouTubeIcon, TelegramIcon, TwitterIcon, VKIcon, InstagramIcon, FacebookIcon, LogoIcon},
  methods: {
    ...mapActions('category', ['getCategories']),
  },
  computed: {
    ...mapState('category', ['categories']),
  },
  mounted() {
    this.getCategories()
  }
})
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__body">
        <div class="footer__up">
          <div class="footer__contact-info">
            <div class="footer__logo" @click="$router.push('/')">
              <LogoIcon/>
            </div>
            <div class="footer__networks">
              <FacebookIcon/>
              <InstagramIcon/>
              <VKIcon/>
              <TwitterIcon/>
              <TelegramIcon/>
              <YouTubeIcon/>
            </div>

            <div class="footer__contacts">
              <a href="tel:+7 (495) 988 3345" class="footer__contact">+7 (495) 988 3345</a>
              <a href="tel:+7 (495) 988 3345" class="footer__contact">+7 (495) 988 3345</a>
              <a href="tel:+7 (495) 988 3345" class="footer__contact">+7 (495) 988 3345</a>
              <a href="mailto:medicalsite@mail.ru" class="footer__contact">medicalsite@mail.ru</a>
            </div>
          </div>
          <nav class="footer__info footer__info_mt-30">
            <div class="footer__item">
              <span>Лечение наркомании</span>

              <ul>
                <li
                    v-for="category in categories"
                    :key="category.id"
                    @click.stop="$router.push('/category/' + category.id)"
                >
                  {{ category.name }}

                  <ul>
                    <li
                        v-for="subcategory in category.subcategories"
                        :key="subcategory.id"
                        @click.stop="$router.push(`/category/${category.id}/subcategory/${subcategory.id}`)"
                    >
                      {{ subcategory.name }}

                      <ul>
                        <li
                            v-for="service in subcategory.item"
                            :key="service.id"
                            @click.stop="$router.push(`/category/${category.id}/subcategory/${subcategory.id}/service/${service.id}`)"
                        >{{ service.name }}</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="footer__item">
              <span>Полезная информация</span>

              <ul>
                <li>История клиники</li>
                <li>Специалисты</li>
                <li>Сертификаты и лицензии</li>
                <li>Цены</li>
                <li>Отзывы</li>
                <li>Фото</li>
                <li>Статьи</li>
                <li>СМИ о нас</li>
                <li>Акции</li>
                <li>Видео лекции</li>
                <li>Блог</li>
                <li>Контакты</li>
                <li>Контролирующие органы</li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="footer__line"/>
        <div class="footer__down">
          <div class="footer__down-up">
            <div class="footer__site-title">Название 2023</div> |
            <a href="#">Политика конфиденциальности</a> |
            <a href="#">Пользовательское соглашение</a>
          </div>
          <div class="footer__down-license">Лицензия № ЛО-61-01-005955 от 04.08.2017г</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "@/assets/scss/components/layouts/footer";
</style>