<template lang="pug">
  .aboutRoad.gridContainer
    .aboutRoad__img
    .gridContainer__cell._span-6._offset-1._span-md-8._span-sm-5._offset-sm-0._span-xs-3
      .aboutRoad__text Все, что я даю — это не просто слова. Это шаг к осознанной жизни. И&nbsp;поняв, что такое психосоматика и как она работает, можно изменить мышление, навсегда избавиться от старых привычек и мыслей.
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.aboutRoad
  height 400px
  padding-top 98px
  position relative

  @media $md_minus
    padding-top 94px

  @media $sm_minus
    padding-top 64px

  @media $xs
    padding-top 50px

  &:before
    content ''
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    background linear-gradient(260.88deg, #F5F7FA 5.97%, rgba(255, 255, 255, 0) 84.26%)
    mix-blend-mode normal
    transform matrix(-1, 0, 0, 1, 0, 0)
    z-index 3
    width calc(100% + 128px)
    margin-left -64px
    @media $md_minus
      width calc(100% + 88px)
      margin-left -44px
    @media $sm_minus
      width calc(100% + 128px)
      margin-left -64px
    @media $xs
      margin-left -24px
  &__img
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    z-index 2
    background url('/img/about/road_bg.jpg') no-repeat
    background-position-x center
    background-position-y -550px
    background-size cover
    transform scaleX(-1)
    width calc(100% + 128px)
    margin-left -64px
    @media $md_minus
      background-position-y -420px
      width calc(100% + 88px)
      margin-left -44px
    @media $sm_minus
      background-position-y -240px
      width calc(100% + 128px)
      margin-left -64px
    @media $xs
      width calc(100% + 48px)
      margin-left -24px
      background-position-y 0
      background-position-X -50px

  &__text
    font-size 24px
    line-height 40px
    letter-spacing 0.03em
    position relative
    z-index 4
    @media $xs
      font-size 16px
      line-height 24px
</style>
