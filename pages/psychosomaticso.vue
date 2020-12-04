<template lang="pug">
.course.container
  BackToHome
  .course__header
    CourseHeader
  .course__fromWhom
    CourseFromWhom
  .course__fromWhomImage
    CourseFromWhomImage
  .course__ofWhat
    CourseOfWhat
  .course__program
    .courseProgram.gridContainer
      .courseProgram__title.gridContainer__cell._span-12._span-md-8._offset-md-1._span-sm-3 Программа курса
      .courseProgram__inner.gridContainer__cell.gridContainer._rows._span-10._offset-1._span-md-12._span-sm-6
        .courseProgram__item
          .courseProgram__num 1
          .courseProgram__text
            p Основы психосоматики. <br /> Как устроен организм с&nbsp;позиции эмбриологи, этологии и биологии
        .courseProgram__item
          .courseProgram__num 2
          .courseProgram__text
            p Этапы всех симптомов и&nbsp;болезней
        .courseProgram__item
          .courseProgram__num 3
          .courseProgram__text
            p Биологическая латеральность. <br /> ВАКОГ — каналы восприятия
        .courseProgram__item
          .courseProgram__num 4
          .courseProgram__text
            p Психика. <br /> Сферы реализации. <br /> Структура содержания речи
        .courseProgram__item
          .courseProgram__num 5
          .courseProgram__text
            p Невербальная коммуникация. О&nbsp;чем говорят позы и жесты
        .courseProgram__item
          .courseProgram__num 6
          .courseProgram__text
            p Глаза как система доступа
        .courseProgram__item
          .courseProgram__num 7
          .courseProgram__text
            p Психокинезиология. Реакции тела. Руки
        .courseProgram__item
          .courseProgram__num 8
          .courseProgram__text
            p Симптом. Запуск. Избавление
        .courseProgram__item
          .courseProgram__num 9
          .courseProgram__text
            p Запуск рукой, болезнь. Инструмент регрессия и прогрессия
        .courseProgram__item
          .courseProgram__num 10
          .courseProgram__text
            p Пояснения к инструментам: состояния, вторичная выгода, пять парадоксов мозга
        .courseProgram__item
          .courseProgram__num 11
          .courseProgram__text
            p Запись <br /> консультации
        .courseProgram__item
          .courseProgram__num 12
          .courseProgram__text
            p Пояснение <br /> к консультации
</template>

<script>
import Link from '@/components/Link'
import BackToHome from '@/components/BackToHome'
import CourseHeader from '@/components/course/CourseHeader'
import CourseFromWhom from '@/components/course/CourseFromWhom'
import CourseFromWhomImage from '@/components/course/CourseFromWhomImage'
import CourseOfWhat from '@/components/course/CourseOfWhat'
export default {
  components: {
    Link,
    BackToHome,
    CourseHeader,
    CourseFromWhom,
    CourseFromWhomImage,
    CourseOfWhat,
  },
}
</script>

<style scoped lang="stylus">

.course
  margin-top 32px
  @media $md_minus
    margin-top 48px
  @media $sm_minus
    margin-top 40px
  @media $xs
    margin-top 8px
  &__fromWhom
    margin-top 160px
    @media $sm_minus
      margin-top 128px
  &__fromWhomImage
    margin-top 88px
    @media $md_minus
      margin-top 194px
    @media $sm_minus
      margin-top 83px
    @media $xs
      margin-top 64px
  &__ofWhat
    margin-top 128px
    @media $xs
      margin-top 64px
.course__program
  margin 128px 0 128px
  @media $md_minus
    margin 78px 0 80px
  @media $sm_minus
    margin 22px 0 80px
  @media $xs
    margin -5px 0 110px
.courseProgram
  &__inner
    @media $xs
      display block
  &__title
    margin-bottom 48px
    font-size 48px
    line-height 150%
    letter-spacing 0.02em
    color $charkGrey
    opacity 0.8
    @media $md_minus
      margin-bottom 104px
    @media $sm_minus
      font-size 32px
      line-height 48px
      letter-spacing 0.02em
      margin-bottom 43px
    @media $xs
      margin-bottom 0
      font-size 24px
      line-height 40px
      width 100%
  &__item
    width 100%
    //border-top 1px solid $border
    border-top 1px solid $border
    padding 32px 0 40px
    display flex
    @media $md_minus
      padding 24px 0 40px
    @media $sm_minus
      padding 16px 0 24px
    &:nth-last-child(1),
    &:nth-child(6)
      border-bottom 1px solid $border
    &:nth-child(6)
      @media $xs
        border-bottom none
  &__num
    width 80px
    height 80px
    font-family Roboto
    font-style normal
    font-weight 400
    font-size 80px
    line-height 80px
    color $acsent
    margin-right 32px
    flex-shrink 0
    @media $md_minus
      width 97px
      margin-right 16px
    @media $sm_minus
      width 57px
      height 48px
      margin-right 16px
      font-size 48px
      line-height 48px
    @media $xs
      width 64px
      height 48px
  &__text
    & p
      letter-spacing 0
      @media $md_minus
        letter-spacing 0.03em
      @media $sm_minus
        font-size 16px
        line-height 24px
        letter-spacing 0.03em
      @media $xs
        font-size 12px
        line-height 20px
</style>
