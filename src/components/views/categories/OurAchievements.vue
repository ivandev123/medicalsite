<template>
  <div class="our-achievements">
    <h2 class="our-achievements__title our-achievements__title_mb-20">Статистика нашей клиники</h2>

    <div class="our-achievements__content">
      <p>73% обратившихся приняли решение о комплексном лечении и полностью освободились от зависимости. Не пьют более 3-7 лет</p>
      <p>15% обратившихся в клинику выбрали путь кодирования и успешно удерживают результат на протяжении 9-12 месяцев</p>
      <p>12% обратившихся прибегают к процедуре вывода из запоя и удерживают результат в течение 3-6 месяцев</p>

      <Button style="margin: 10px auto 0;" name="Записаться на приём" padding="16px 24px" width="33.3%" font-size="18px"/>
    </div>
  </div>
</template>

<script>
import Button from "@/components/utils/Button.vue";

export default {
  name: "OurAchievements",
  components: {Button}
}
</script>

<style scoped lang="scss">
.our-achievements {
  margin-top: 50px;

  &__title {
    &_mb-20 {
      margin-bottom: 20px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    padding: 30px;
    border-radius: 20px;
    background: #FFFFFF;
  }
}
</style>