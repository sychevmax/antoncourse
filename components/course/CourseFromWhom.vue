<template lang="pug">
.courseFromWhom
  .courseFromWhom__list.gridContainer
    .courseFromWhom__title.gridContainer__cell._span-6._offset-1._span-md-9._offset-md-1._span-sm-6._offset-sm-0._span-xs-3 Для кого этот курс
    .courseFromWhom__col.gridContainer__cell._span-3._offset-2._span-md-4._offset-md-1._span-sm-5._offset-sm-1._span-xs-2._offset-xs-1
      .courseFromWhom__text.aboutBorderText._course
        p не понимаете причины болезней и хотите в этом разобраться
      .courseFromWhom__text.aboutBorderText._course
        p хотите научиться «слышать» симптомы и вовремя их убирать
      .courseFromWhom__text.aboutBorderText._course
        p работаете с людьми, хотите попробовать новый метод и получить новые инструменты
    .courseFromWhom__col._second.gridContainer__cell._span-4._offset-7._span-md-5._offset-md-7._span-sm-5._offset-sm-1._span-xs-2._offset-xs-1
      .courseFromWhom__text.aboutBorderText._course
        p лечите симптомы, но традиционная медицина помогает лишь временно
      .courseFromWhom__text.aboutBorderText._course
        p чувствуете подавленность, усталость, но не знаете, как от этого избавиться
      .courseFromWhom__text.aboutBorderText._course
        p интересуетесь, как связаны психика и тело, в чем суть психосоматики
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
.courseFromWhom
  &__col
    &._second
      @media $sm_minus
        margin-top -32px
      @media $xs
        margin-top -40px
  &__title
    margin-bottom 96px
    font-size 48px
    line-height 150%
    letter-spacing 0.02em
    color $charkGrey
    opacity 0.8
    @media $sm_minus
      font-size 32px
      line-height 48px
      letter-spacing 0.02em
    @media $xs
      margin-bottom 24px
      font-size 24px
      line-height 40px
  &__text
    margin-bottom 80px
    @media $sm_minus
      margin-bottom 64px
    @media $xs
      margin-bottom 40px
</style>
