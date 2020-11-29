<template lang="pug">
  .aboutRoad
    .aboutRoad__text Все, что я даю — это не просто слова. Это шаг к осознанной жизни. И поняв, что такое психосоматика и как она работает, можно изменить мышление, навсегда избавиться от старых привычек и мыслей.
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.aboutRoad
  height 496px
  padding-left 112px
  background url('/img/about/road_bg.jpg')
  padding-top 80px
  @media $md_minus
    padding-top 67px
  @media $sm_minus
    padding-top 70px
  @media $xs
    padding-top 55px
  &__text
    max-width 528px
    font-size 24px
    line-height 40px
    letter-spacing 0.03em
    @media $xs
      font-size 16px
      line-height 24px
</style>
