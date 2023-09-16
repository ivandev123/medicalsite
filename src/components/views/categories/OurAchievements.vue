<template>
  <div class="our-achievements">
    <h2 class="our-achievements__title our-achievements__title_mb-20">Статистика нашей клиники</h2>

    <div class="our-achievements__content">
      <p>На протяжении последних 5 лет, наша клиника по лечению достигла значительных результатов.</p>
      <p>85% наших пациентов достигли трезвости после лечения, поддерживая ее в течение 3-7 лет.</p>
      <p>15% из обратившихся в клинику выбрали кодирование и успешно сохраняют результат в течение 9-12 месяцев.</p>
      <p>Более 15 индивидуальных программ, учитывая особенности каждого случая.</p>
      <p>Применяем передовые методики, такие как терапия замещения и психотерапия, улучшая шансы на выздоровление.</p>
      <p>90% семей наших пациентов также получили помощь и стали активными участниками процесса выздоровления.</p>

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