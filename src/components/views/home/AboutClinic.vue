<template>
  <div class="about-clinic">
    <div class="about-clinic__left">
      <h2 class="about-clinic__title about-clinic__title_mb-30">Где проходит лечение?</h2>

      <ul class="about-clinic__list">
        <li>4 лицензированные наркологические клиники</li>
        <li>Комфортные условия проживания: 6 спален и 8 санузлов</li>
        <li>Полноценное 4 разовое питание</li>
        <li>Прогулки на свежем воздухе, территория центра 4000 кв.м.</li>
        <li>Комнаты для психологической разгрузки и зал для йоги</li>
        <li>Спортивный зал для поддержания физической активности</li>
        <li>От 5 до 14 человек в группе реабилитации</li>
        <li>Центры вместимостью 30, 48 и 53 человека</li>
      </ul>
    </div>

    <div class="about-clinic__right">
      <iframe
          src="https://www.youtube.com/embed/lz_3EgpQAcQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutClinic"
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/home/aboutClinic";
</style>