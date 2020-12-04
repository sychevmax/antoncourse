<template lang="pug">
.courseOfWhat
  .courseOfWhat__inner.gridContainer._courseOfWhat
    .courseOfWhat__title.gridContainer__cell._span-6._offset-1._span-md-8._offset-md-1._span-sm-6._span-xs-3 Из чего состоит курс
    .courseOfWhat__item.gridContainer__cell._span-2._offset-1._span-md-2._offset-md-2._span-sm-2._offset-sm-0._span-xs-1._first
      img(src='/img/course_psy/of_what_1.svg')
      .courseOfWhat__text видео-уроков
    .courseOfWhat__item._second.gridContainer__cell._span-3._offset-3._span-md-2._offset-md-7._span-sm-2._offset-sm-3._span-xs-1._offset-xs-1._second
      img(src='/img/course_psy/of_what_2.svg')
      .courseOfWhat__text часа практики
    .courseOfWhat__item.gridContainer__cell._span-3._offset-6._span-md-3._offset-md-2._span-sm-3._offset-md-0._span-xs-1._offset-xs-0._third
      img(src='/img/course_psy/of_what_3.svg')
      .courseOfWhat__text чат для проработки <br /> инструментов и общения
    .courseOfWhat__item.gridContainer__cell._span-2._offset-9._span-md-3._offset-md-7._span-sm-3._offset-sm-3._span-xs-1._offset-xs-1._fourth
      img(src='/img/course_psy/of_what_4.svg')
      .courseOfWhat__text сертификат <br /> о&nbsp;прохождении курса
</template>

<script>
export default {
  name: 'CourseOfWhat',
}
</script>

<style scoped lang="stylus">
.courseOfWhat
  &__title
    margin-bottom 112px
    font-size 48px
    line-height 150%
    letter-spacing 0.02em
    color $charkGrey
    opacity 0.8
    @media $md_minus
      margin-bottom 96px
    @media $sm_minus
      font-size 32px
      line-height 48px
      letter-spacing 0.02em
      margin-bottom 56px
    @media $xs
      margin-bottom 60px
      font-size 24px
      line-height 40px
      width 100%
  &__item
    @media $md_minus
      margin-bottom 106px
    @media $sm_minus
      margin-bottom 128px
    @media $xs
      margin-bottom 85px
      width 104px
    &._first
      @media $xs
        width 97px
        margin-right 73px
      & img
        @media $xs
          width 70.92px
          height 58.46px
    &._second
      margin-left 50px
      @media $md_minus
        margin-left 0
      @media $xs
        width 95px
        display flex
        flex-direction column
        align-items center
      & img
        @media $xs
          width 36.23px
          height 58.46px
    &._third
      @media $xs
        width 130px
        margin-right 40px
      & img
        @media $xs
          width 85.29px
          height 68.55px
    &._fourth
      @media $xs
        width 100px
      & img
        @media $xs
          width 69.04px
          height 60.7px
    & img
      @media $xs
        //max-width 80%
  &__text
    font-size 16px
    line-height 24px
    margin-top 36px
    text-transform lowercase
    @media $xs
      font-size 12px
      line-height 20px
</style>
