<template lang="pug">
.courseHeader
  .courseHeader__top.gridContainer
    .courseHeader__title.gridContainer__cell._span-xs-3._order-xs-2 Открытая Психосоматика
    .gridContainer__cell._span-2._offset-1._span-md-2._offset-md-1._span-sm-2._order-sm-2._span-xs-1
      .courseHeader__info
        span Формат
        samp Онлайн
    .gridContainer__cell._span-2._offset-3._span-md-2._offset-md-3._span-sm-2._order-sm-2._span-xs-2
      .courseHeader__info._rightXS
        span Уровень
        samp 1 ступень
    .gridContainer__cell._span-6._offset-6._span-md-7._span-sm-4._order-sm-1._offset-sm-2._span-xs-3._order-xs-1
      .courseHeader__img
        img(src='/img/course_psy/course_header.jpg')
  .courseHeader__bottom.gridContainer
    .gridContainer__cell._span-5._offset-1._span-md-6._offset-md-1._span-xs-3._order-xs-1
      .courseHeader__text
        p Знакомство с психосоматикой. <br /> На курсе разбираем, как психосоматика влияет на все сферы жизни. Объясняем, как взаимосвязаны болезни, поведение и внутреннее состояние. Учим избавляться от симптомов и помогать не только себе, но и близким, друзьям, клиентам.
    .gridContainer__cell._span-3._offset-1._span-md-4._offset-md-1._span-sm-3._span-xs-3._order-xs-3._offset-xs-0
      .courseHeader__btn
        Link(mod='_more _icon' href="#" outside icon="true") записаться
    .gridContainer__cell._span-2._offset-5._span-md-2._offset-md-6._span-sm-2._offset-sm-4._centered._span-xs-2._order-xs-2
      .courseHeader__info._price
        span Цена
        samp 30 000 ₽
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
.courseHeader
  &__top
    position relative
  &__title
    position absolute
    bottom 55px
    left 111px
    z-index 3
    font-weight 800
    font-size 80px
    line-height 112px
    letter-spacing 0.05em
    text-transform uppercase
    color $acsent
    @media $md_minus
      line-height 96px
      bottom 39px
      left 0
    @media $sm_minus
      font-size 48px
      line-height 64px
      letter-spacing 0.05em
      bottom unset
      top 104px
    @media $xs
      font-size 24px
      line-height 32px
      letter-spacing 0.04em
      position static
      width 100%
      margin-top -16px
  &__img
    margin-bottom 8px
    display flex
    flex-direction column
    align-items flex-start
    max-height 448px
    @media $xs
      margin-bottom 0
    & img
      object-fit contain
  &__info
    display flex
    flex-direction column
    margin-right 104px
    @media $xs
      margin-right 95px
    &:last-child
      margin-right 0
    & span
      font-size 14px
      line-height 16px
      color $acsent
      margin-bottom 8px
      text-transform uppercase
      height 30px
      @media $md_minus
        height 17px
        margin-bottom 15px
      @media $xs
        font-size 12px
        line-height 14px
    & samp
      font-family inherit
      font-size 24px
      line-height 28px
      letter-spacing 0.04em
      margin-bottom 0
      @media $md_minus
        font-size 16px
        line-height 24px
      @media $xs
        font-size 16px
        line-height 20px
    &._price
      margin-top 32px
      @media $xs
        margin-top 24px
    &._rightXS
      @media $xs
        margin-left 48px
  &__bottom
    margin-top -16px
    @media $md_minus
      margin-top 55px
    @media $sm_minus
      margin-top 64px
    @media $xs
      margin-top 40px
  &__btn
    height 97px
    margin-top 32px
    @media $xs
      margin-top 0
      height 80px
</style>
