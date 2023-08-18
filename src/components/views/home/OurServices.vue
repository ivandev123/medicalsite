<template>
  <section class="our-services">
    <h2 class="our-services__title">Наши услуги</h2>

    <div class="our-services__content our-services__content_mt-42">
      <RouterLink
          class="our-services__service"
          to="/"
          v-for="(service, idx) in services"
          :key="service.id"
      >
        <div class="our-services__picture">
          <img src="../../../assets/images/our-service.jpg" alt="service">
        </div>
        <div class="our-services__info">
          <div class="our-services__info-title">{{ service.title }}</div>
          <div class="our-services__info-subtitle">{{ service.subtitle }}</div>
          <div class="our-services__number">{{ idx + 1 }}</div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script>
export default {
  name: "OurServices",
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Вывод из запоя',
          subtitle: 'Стационарное лечение, а так же капельницы на дому'
        },
        {
          id: 2,
          title: 'Лечение алкоголизма',
          subtitle: 'Пребывание в условиях 4-х звёздочного пансионата с лечением'
        },
        {
          id: 3,
          title: 'Наркологическая помощь',
          subtitle: 'Помогаем наркозависимым с самыми сложными стадиями'
        },
        {
          id: 4,
          title: 'Кодирование от алкоголизма',
          subtitle: 'Широкий выбор методов: укол, подшивание, гипноз'
        },
        {
          id: 5,
          title: 'Тесты на коронавирус COVID-19',
          subtitle: 'Результат на следующий день сдачи анализа'
        },
        {
          id: 6,
          title: 'Вызов врача на дом',
          subtitle: 'Терапевт, ЛОР, педиатр - готовы выехать в любой момент'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/components/home/ourServices";
</style>