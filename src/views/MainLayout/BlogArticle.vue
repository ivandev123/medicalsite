<template>
  <article class="blog-article">
    <div class="container">
      <div class="blog-article__body">
        <div class="blog-article__content">
          <Preloader style="margin-top: 60px;" v-if="!blogArticle.content"/>

          <template v-if="blogArticle.content">
            <BlogArticleTop :data="getBlogArticleData"/>
            <div class="blog-article__inner blog-article__inner_mt-60">
              <div ref="articleContent" v-html="blogArticle.content"/>
              <!--            <h2>Заголовок 1</h2>-->
              <!--            <p>Всесторонняя перестройка организма с наступлением беременности приводит к изменениям внешности и не всегда – позитивным. Выпадение волос при беременности – одна из проблем, с которой приходится сталкиваться женщинам, готовящимся стать матерью. Как правило, в период вынашивания малыша волосы становятся более густыми и блестящими. Благодаря повышенному эстрогену – обязательному показателю при беременности – волосы становятся более сильными. Подобная реакция с фазой активного роста наблюдается у многих.&nbsp;</p>-->
              <!--            <br>-->
              <!--            <h2>Заголовок 2</h2>-->
              <!--            <p>Однако в некоторых случаях происходит обратное – волосы при беременности выпадают, становятся сухими, ломкими, тусклыми. Хотя не во всех случаях эти процессы взаимосвязаны. Так, если вылезает немного волос, и женщина до этого экспериментировала с процедурами кератинового выпрямления, окрашиванием, процесс может быть естественным, никак не связанным с беременностью.</p>-->
              <!--            <ul><li>Общем ослаблении организма – в такой сложный период жизни как беременность, могут активизироваться хронические заболевания, которые давно не давали о себе знать, способные существенно ослабить общий тонус мышц. В их числе и те, которые удерживают волосяные луковицы. Ослабление таких мышц приведет к тому, что волосы начнут вылезать.</li><li>Недостатке микроэлементов – в период вынашивания ребенка женский организм мало того, что ослабевает, он начинает остро нуждаться в дополнительных дозах микроэлементов. Причиной сильного выпадения волос может стать дефицит цинка, кальция, железа.</li></ul>-->
              <!--            <h2>Длинный заголовок Длинный заголовок Длинный заголовок</h2>-->
              <!--            <p>Так как почти у 40-50% женщин выпадают волосы при беременности, этот процесс нельзя считать патологией, если, конечно, это не вызвано серьезными недугами, не имеющими к вынашиванию прямого отношения. Уменьшить негативные последствия выпадения и остановить сам процесс поможет правильный уход за прической, в отношении которого стоит придерживаться определенных рекомендаций. Специалисты советуют женщинам, у которых выпадают волосы при беременности, ухаживать за ними с применением масла:&nbsp;</p>-->
              <!--            <p>Регулярное его использование для ухода за кожей головы очень полезно для здоровья. А задействование два раза в неделю перед сном для ухода за волосами поможет подпитать и оздоровить их. В число лучших натуральных уходовых масел входят оливковое, кокосовое, миндальное. Кроме того, стоит временно отказаться от окрашивания волос и иных процедур, которые воздействуют на структуру волосков и луковицы.</p>-->
            </div>
          </template>

            <InformationalArticles title="Рекомендуемые статьи" type="small" :page-width="pageWidth"/>
          <BlogAuthor
              :author="blogArticle.author"
              :author-job="blogArticle.author_job"
              :author_avatar="blogArticle.author_avatar"
          />
          <Comments :comments-count="blogArticle.comments_count" :comments="comments"/>
          <AddCommentForm :id="blogArticle.id"/>
        </div>
        <BlogArticleSidebar :headers="getHeaders" @scroll-to-title="scrollToTitle"/>
      </div>
    </div>
  </article>
</template>

<script>
import BlogArticleTop from "@/components/views/blogArticle/BlogArticleTop.vue";
import BlogArticleSidebar from "@/components/views/blogArticle/BlogArticleSidebar.vue";
import BlogAuthor from "@/components/views/blogArticle/BlogAuthor.vue";
import Comments from "@/components/Comments.vue";
import InformationalArticles from "@/components/InformationalArticles.vue";
import AddCommentForm from "@/components/AddCommentForm.vue";
import {mapActions, mapState} from "vuex";
import Preloader from "@/components/Preloader.vue";

export default {
  name: "BlogArticle",
  components: {
    Preloader,
    AddCommentForm, InformationalArticles, Comments, BlogAuthor, BlogArticleSidebar, BlogArticleTop},
  data() {
    return {
      pageWidth: 0,
    }
  },
  methods: {
    ...mapActions('blog', ['getBlogArticle', 'getBlogArticleCommentsById']),

    scrollToTitle(ref) {
      const element = document.querySelector(`#${ref}`)
      element.scrollIntoView({block: "center", behavior: "smooth"});
    },
    setWidth() {
      this.pageWidth = window.innerWidth
    },
  },
  computed: {
    ...mapState('blog', ['blogArticle', 'comments']),

    getBlogArticleData() {
      const data = { ...this.blogArticle }
      delete data.content
      delete data.description

      return data
    },
    getHeaders() {
      let element = document.createElement('div')
      element.innerHTML = this.blogArticle.content

      const headers = element.getElementsByTagName('h2');
      console.log(headers)

      return [...headers].map(title => title.innerText);
    },
    getBlogArticleId() {
      return +this.$route.params.id
    }
  },
  watch: {
    'blogArticle.content'() {
      setTimeout(() => [...document.querySelectorAll('h2')].forEach((el, idx) => {
        el.id = `h2-${idx}`
      }))
    }
  },
  created() {
    this.setWidth()
    window.onresize = () => this.setWidth()
  },
  mounted() {
    this.getBlogArticle(this.getBlogArticleId)
    this.getBlogArticleCommentsById(this.getBlogArticleId)
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/views/mainLayout/blogArticle";
</style>