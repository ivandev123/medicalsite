<template>
  <div class="blog-article-top">
    <header class="blog-article-top__body">
      <img alt="image" :src="data.blog_image">

      <div class="blog-article-top__content">
        <div class="blog-article-top__title">
          <h1>{{ data.title }}</h1>
        </div>

        <div class="blog-article-top__meta left">
          <div class="blog-article-top__meta-body">
            <img alt="avatar" class="blog-article-top__avatar" :src="data.author_avatar">
            Дарья Тихонова - {{ getDate?.reverse().join('.') }}
<!--            Дарья Тихонова - 02.12.2021-->
          </div>
        </div>
        <div class="blog-article-top__meta right">
          <div class="blog-article-top__comments">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M5.25 18C3.45507 18 2 16.5449 2 14.75V6.25C2 4.45507 3.45507 3 5.25 3H18.75C20.5449 3 22 4.45507 22 6.25V14.75C22 16.5449 20.5449 18 18.75 18H12.9648L7.57814 21.8173C7.12752 22.1366 6.50337 22.0301 6.18407 21.5795C6.06432 21.4105 6 21.2085 6 21.0016L5.9992 18H5.25Z" fill="#FFFFFF"/>
            </svg>
            {{ data.comments_count }}
          </div>
          <div class="blog-article-top__views">
            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 576 512">
              <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" fill="#FFFFFF"/>
            </svg>
            {{ data.views }}
          </div>
          <div class="blog-article-top__time">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 467.029 467.03" style="enable-background:new 0 0 467.029 467.03;" xml:space="preserve">
            <g>
              <path d="M269.873,45.488c0,25.113-20.357,45.487-45.473,45.487c-25.114,0-45.49-20.374-45.49-45.487   C178.91,20.374,199.286,0,224.4,0C249.516,0,269.873,20.374,269.873,45.488z M224.4,412.42c-15.073,0-27.305,12.232-27.305,27.303   c0,15.074,12.232,27.307,27.305,27.307c15.077,0,27.309-12.232,27.309-27.307C251.709,424.653,239.472,412.42,224.4,412.42z    M131.91,82.386c5.777-3.316,7.789-10.779,4.413-16.554c-3.316-5.804-10.749-7.79-16.552-4.441   c-5.778,3.344-7.792,10.75-4.415,16.554C118.674,83.749,126.109,85.762,131.91,82.386z M307.779,387.036   c-14.454,8.383-19.424,26.948-11.075,41.435c8.354,14.515,26.953,19.452,41.402,11.104c14.51-8.378,19.484-26.92,11.136-41.435   C340.827,383.662,322.294,378.687,307.779,387.036z M46.12,157.167c7.225,4.174,16.521,1.687,20.701-5.54   c4.175-7.253,1.685-16.524-5.54-20.729c-7.257-4.146-16.524-1.689-20.731,5.568C36.373,143.72,38.862,152.989,46.12,157.167z    M411.79,312.289c-15.934-9.213-36.366-3.762-45.551,12.199c-9.236,15.938-3.79,36.343,12.204,45.551   c15.934,9.213,36.366,3.767,45.546-12.204C433.17,341.877,427.719,321.497,411.79,312.289z M45.466,242.609   c0-10.044-8.146-18.188-18.183-18.188c-10.041,0-18.183,8.144-18.183,18.188c0,10.034,8.142,18.178,18.183,18.178   C37.353,260.787,45.466,252.643,45.466,242.609z M421.502,206.208c-20.077,0-36.37,16.318-36.37,36.401   c0,20.073,16.293,36.389,36.37,36.389c20.078,0,36.427-16.315,36.427-36.389C457.868,222.496,441.58,206.208,421.502,206.208z    M43.098,322.77c-10.158,5.867-13.656,18.865-7.789,28.997c5.862,10.16,18.864,13.623,28.994,7.757   c10.158-5.834,13.621-18.832,7.759-28.959C66.195,320.405,53.226,316.904,43.098,322.77z M414.81,178.164   c18.896-10.867,25.291-35.006,14.449-53.842c-10.958-18.832-35.003-25.291-53.9-14.394c-18.831,10.872-25.286,35.006-14.393,53.842   C371.868,182.606,395.974,189.061,414.81,178.164z M137.982,392.305c-11.607-6.721-26.474-2.749-33.167,8.891   c-6.665,11.579-2.695,26.444,8.884,33.108c11.609,6.688,26.476,2.726,33.169-8.854   C153.561,413.839,149.591,399.002,137.982,392.305z M344.206,35.12c-20.372-11.696-46.32-4.737-57.988,15.551   c-11.724,20.286-4.793,46.288,15.522,58.014c20.255,11.667,46.26,4.739,57.983-15.577C371.452,72.82,364.466,46.851,344.206,35.12z    M239.561,251.369V121.302h-30.324v112.537l-97.462,56.294l15.161,26.238L239.561,251.369z" fill="#FFFFFF"/>
            </g>
              <g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/>
          </svg>
            {{ getReadingTime }}
          </div>
        </div>
      </div>
    </header>

    <div class="blog-article-top__author">
      <img alt="avatar" class="blog-article-top__author-avatar" :src="data.author_avatar">

      <div class="blog-article-top__author-info">
        <div class="blog-article-top__author-fullname">{{ data.author }}</div>
        <div class="blog-article-top__author-job">{{ data.author_job }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogArticleTop",
  props: ['data'],
  computed: {
    getDate() {
      return this.data?.created_at
          ?.split('T')[0]
          .split('-')
    },
    getReadingTime() {
      const hours = Math.floor(this.data.reading_time / 60) + ' ч. '
      const minutes = this.data.reading_time % 60 + ' м.'

      return hours + minutes
    }
  }
}
</script>

<style scoped lang="scss">
.blog-article-top {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin: 0 auto;
  width: fit-content;
  position: relative;

  &__body {
    position: relative;
  }

  &__content {

  }

  &__title {
    max-width: 95%;
    position: absolute;
    bottom: 25px;
    left: 25px;

    & > h1 {
      display: inline;
      margin: 0;
      background: #FFFFFF;
      border: 14px solid #fff;
      font-weight: 700;
      font-size: 30px;
      line-height: 1.55;
      letter-spacing: normal;
      -webkit-box-decoration-break: clone;
      color: #242323;
    }
  }

  &__meta {
    display: flex;
    align-items: center;
    column-gap: 4px;
    padding: 0 10px;
    height: 35px;
    border-radius: 25px;
    background-color: #24c8bc;
    position: absolute;
    top: 25px;
    z-index: 10;

    &.left {
      left: 20px;
    }

    &.right {
      right: 20px;
    }

    & > div {
      display: flex;
      align-items: center;
      column-gap: 4px;
      margin: 0 3px;
      text-shadow: 0 2px 5px rgba(0, 0, 0, .15);
      font-weight: 700;
      font-size: 13px;
      color: #fff;
      white-space: nowrap;
    }

    &-body {
      padding-left: 30px;
    }
  }

  &__avatar {
    width: 35px;
    height: 35px;
    border-radius: 25px;
    position: absolute;
    top: 0;
    left: 0;
  }

  &__author {
    display: flex;
    gap: 15px;
    margin: 0 auto;
    width: 50%;

    &-avatar {
      width: 74px;
      height: 74px;
      box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, .2);
      border-radius: 50%;
      object-fit: cover;
    }

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 6px;
      color: #424851;
      transition: .35s all ease;

      &:hover {
        color: #FFA765;
      }
    }

    &-fullname {
      font-weight: 600;
      font-size: 16px;
    }

    &-job {
      font-weight: normal;
      font-size: 14px;
      line-height: 1.2;
    }
  }
}
</style>