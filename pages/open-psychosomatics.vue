<template lang="pug">
.course.container
  BackToHome
  .course__header
    .courseHeader
      .courseHeader__top.gridContainer
        .courseHeader__title.gridContainer__cell._span-xs-3._order-xs-2(v-html='$t("pages.courses.openPsychosomatics.title")')
        .gridContainer__cell._span-2._offset-1._span-md-2._offset-md-1._span-sm-2._order-sm-2._span-xs-1
          .courseHeader__info
            span {{ $t('courseFormatLabel') }}
            samp {{ $t("pages.courses.openPsychosomatics.format") }}
        .gridContainer__cell._span-2._offset-3._span-md-2._offset-md-3._span-sm-2._order-sm-2._span-xs-2
          .courseHeader__info._rightXS
            span {{ $t('courseLevelLabel') }}
            samp {{ $t("pages.courses.openPsychosomatics.level") }}
        .gridContainer__cell._span-6._offset-6._span-md-7._span-sm-4._order-sm-1._offset-sm-2._span-xs-3._order-xs-1
          .courseHeader__img
            img(src='/img/course_psy/course_header.jpg')
      .courseHeader__bottom.gridContainer
        .gridContainer__cell._span-5._offset-1._span-md-6._offset-md-1._span-xs-3._order-xs-1
          .courseHeader__text
            p(v-html='$t("pages.courses.openPsychosomatics.text")')
        .gridContainer__cell._span-3._offset-1._span-md-4._offset-md-1._span-sm-3._span-xs-3._order-xs-3._offset-xs-0
          .courseHeader__btn
            Link(mod='_more _icon' href="#" outside icon) {{ $t('courseBtnBookingText') }}
        .gridContainer__cell._span-2._offset-5._span-md-2._offset-md-6._span-sm-2._offset-sm-4._centered._span-xs-2._order-xs-2
          .courseHeader__info._price
            span {{ $t('coursePriceLabel') }}
            samp {{ $t("pages.courses.openPsychosomatics.price") }}
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
  .course__practice
    .coursePractice
      .gridContainer
        .gridContainer__cell._span-4._offset-1._span-md-5._offset-md-1._span-sm-3._span-xs-3
          .coursePractice__title Как практиковать
        .gridContainer__cell._span-5._offset-6._span-md-5._offset-md-6._span-sm-3._offset-sm-3._span-xs-3
          .coursePractice__text
            p На курсе мы разберем практические методы и инструменты. После завершения курса вы сможете отрабатывать их самостоятельно на близких, друзьях. Или вместе с другими участниками в нашем чате в Telegram.
  .course__lessons
    .courseLessons
      .courseLessons__inner.gridContainer
        .courseLessons__title Как проходят занятия
        .courseLessons__text
          p Рекомендую изучать все уроки последовательно — каждый следующий урок основан на информации предыдущего.
        .courseLessons__img
          img(src='/img/course_psy/lessons_bg.png')
        .courseLessons__info._first
          span 15 - 40
            small мин
          samp длительность урока
        .courseLessons__info._second
          span 1
            small._year год
          samp доступа к платформе
        .courseLessons__info._third
          samp Уроки размещены на онлайн-платформе Чтобы пройти курс вам нужен интернет, смартфон или ноутбук.
  .course__booking
    .courseBooking.gridContainer
      .courseBooking__left.gridContainer__cell._span-5._span-md-12._span-sm-6._span-xs-3
        .courseBooking__title Запись и&nbsp;оплата
        .courseBooking__text
          p Записаться и оплатить курс можно через онлайн-платформу. После оплаты на указанную почту придет логин, пароль и ссылка для входа.
      .courseBooking__right.gridContainer__cell._span-7._span-md-12._span-sm-6._span-xs-3
        .courseBooking__name Открытая Психосоматика
        .courseBooking__type Онлайн-курс
        .courseBooking__btn
          Link(mod="_more _icon" href="#" outside icon) записаться
        .courseBooking__price
          span Цена
          samp 30 000 ₽
  .course__reviews
    .courseReviews.gridContainer
      .courseReviews__title.gridContainer__cell._span-6._offset-1._span-md-8._offset-md-1._span-sm-6 Отзывы выпускников
      .courseReviews__slider.gridContainer__cell._span-10._offset-1._span-md-10._offset-md-1._span-sm-6
        Reviews
  .course__faq
    .courseFaq.gridContainer
      .courseFaq__title.gridContainer__cell._span-3._offset-1._span-md-7._offset-md-1._span-sm-6._span-xs-3 Вопрос-ответ
      .courseFaq__list.gridContainer__cell._span-7._offset-4._span-md-10._offset-md-1._span-sm-6._span-xs-3
        accordion(id="accordion-example-2" :content="faq" multiple)
</template>

<script>
import Link from '@/components/Link'
import BackToHome from '@/components/BackToHome'
import CourseFromWhom from '@/components/course/CourseFromWhom'
import CourseFromWhomImage from '@/components/course/CourseFromWhomImage'
import CourseOfWhat from '@/components/course/CourseOfWhat'
import Accordion from '@/components/Accordion'
import Reviews from '@/components/Reviews'
export default {
  components: {
    Link,
    BackToHome,
    CourseFromWhom,
    CourseFromWhomImage,
    CourseOfWhat,
    Accordion,
    Reviews,
  },
  data() {
    return {
      faq: [
        {
          id: 1,
          active: false,
          title: 'А что, если курс мне не поможет?',
          details: `
            <p>Результаты курса полностью зависят от вас. Если вы готовы
            принять эту информацию, посмотреть на себя с другой стороны,
            то все получится. </p>
          `,
        },
        {
          id: 2,
          active: false,
          title: `Можно ли после курса практиковать этот метод с клиентами?`,
          details: `
            <p>На курсе вы получите начальные знания и инструменты,
             чтобы помогать не только себе, но и другим людям.
             Рекомендуем начать постепенно: не спешите использовать все
             инструменты и знания сразу. И не забывайте, что вы работаете
             с человеком: окружайте заботой и пониманием.</p>
          `,
        },
        {
          id: 3,
          active: false,
          title: `Как начать практиковать психосоматический
          подход, если еще нет клиентов?`,
          details: `
            <p>После курса я создаю группу тех, кто готов работать
            с моими клиентами. Первый месяц вы будете практиковаться
             на безвозмездной основе, после ваша работа будет оплачиваться.</p>
          `,
        },
        {
          id: 4,
          active: false,
          title: `Расскажите, есть ли чат курса, что в нем
          будет и как в него попасть?`,
          details: `
            <p>В описании к курсу вы найдете ссылку на чат в Telegram.
            В нем выпускники и ученики курса практикуют инструменты и методы,
             которые я даю на курсе. участники чата помогают друг другу найти
             причины их симптомов, делятся полезной информацией. Также в чате
             вы найдете дополнительные
             материалы, о которых упоминаем в уроках.</p>
          `,
        },
        {
          id: 5,
          active: false,
          title: `Где можно продолжить обучение психосоматике?`,
          details: `
            <p>Если вы планируете применять этот подход на практике и хотите еще глубже погрузиться, приходите на курс  <u>«Практическая психосоматика»</u>.</p>
          `,
        },
      ],
    }
  },
}
</script>

<style scoped lang="stylus">

.course
  margin-top 32px
  margin-bottom 240px
  @media $md_minus
    margin-top 48px
    margin-bottom 155px
  @media $sm_minus
    margin-top 40px
    margin-bottom 298px
  @media $xs
    margin-top 8px
    margin-bottom 208px
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
  &__program
    margin 128px 0 128px
    @media $md_minus
      margin 78px 0 80px
    @media $sm_minus
      margin 22px 0 80px
    @media $xs
      margin -5px 0 110px
  &__lessons
    margin-top 160px
    @media $md_minus
      margin-top 128px
    @media $xs
      margin-top 80px
  &__booking
    margin-top 133px
    @media $md_minus
      margin-top 114px
    @media $sm_minus
      margin-top 161px
    @media $xs
      margin-top 80px
  &__reviews
    margin-top 160px
    @media $md_minus
      margin-top 128px
    @media $xs
      margin-top 57px
  &__faq
    margin-top 248px
    @media $sm_minus
      margin-top 168px
    @media $xs
      margin-top 136px
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
.coursePractice
  padding 61px 64px 63px
  background $darkGray
  color $bg
  width calc(100% + 128px)
  margin-left -64px
  @media $md_minus
    padding 64px 44px 112px
    width calc(100% + 88px)
    margin-left -44px
  @media $sm_minus
    padding 58px 64px 72px
    width calc(100% + 128px)
    margin-left -64px
  @media $xs
    padding 46px 24px 84px
    width calc(100% + 48px)
    margin-left -24px
  &__title
    margin-bottom 48px
    font-size 48px
    line-height 150%
    letter-spacing 0.02em
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
  &__text
    & p
      @media $sm_minus
        font-size 16px
        line-height 24px
        letter-spacing 0.03em
.courseLessons
  &__inner
    position relative
    grid-template-areas\
    ". title title title title img img img img img img img"\
    ". text text text text img img img img img img img"\
    ". text text text text img img img img img img img"\
    ". info1 info1 . info2 info2 . info3 info3 info3 . ."
    @media $md_minus
      grid-template-areas\
      ". title title title title title . . . . . ."\
      ". text text text text text img img img img img img"\
      ". info1 info1 info1 info2 info2 info2 info3 info3 info3 info3 ."
    @media $sm_minus
      grid-template-areas\
      "title title title title . ."\
      "text text text text text text"\
      "info1 info1 . info2 info2 ."\
      "img img img img img img"\
      "info3 info3 info3 info3 . ."
    @media $xs
      grid-template-areas\
        "img img img"\
        "title title title"\
        "text text text"\
        "info1 info1 info1"\
        "info2 info2 info2"\
        "info3 info3 info3"
  &__title
    grid-area title
    margin-bottom 48px
    font-size 48px
    line-height 150%
    letter-spacing 0.02em
    @media $md_minus
      margin-bottom 16px
    @media $sm_minus
      font-size 32px
      line-height 48px
      letter-spacing 0.02em
      margin-bottom 32px
    @media $xs
      margin-bottom 0
      margin-top 40px
      font-size 24px
      line-height 40px
      width 100%
  &__text
    grid-area text
    margin-top -40px
    @media $md_minus
      margin-top 0
    @media $xs
      margin-top -16px
  &__img
    grid-area img
    position relative
    @media $sm_minus
      margin-top 48px
    @media $xs
      margin-top 0
    & img
      position relative
      z-index 2
  &__info
    display flex
    flex-direction column
    margin-top 8px
    & span
      font-family Roboto
      font-style normal
      font-weight 300
      font-size 48px
      line-height 48px
      letter-spacing -0.06em
      color $acsent
      margin-bottom 16px
      @media $md_minus
        font-size 48px
        line-height 48px
      & small
        font-size 24px
        line-height 24px
        font-family 'ObjectSans'
        margin-left 16px
        &._year
          margin-left 8px
    & samp
      font-size 16px
      line-height 24px
      @media $sm_minus
        line-height 26px
    &._first
      grid-area info1
      @media $sm_minus
        margin-top 32px
      @media $xs
        margin-top 24px
    &._second
      grid-area info2
      @media $sm_minus
        margin-top 32px
      @media $xs
        margin-top 0
    &._third
      grid-area info3
      @media $sm_minus
        margin-top 48px
      @media $xs
        margin-top 24px
.courseBooking
  border 1px solid $acsent
  border-right none
  width calc(100% + 128px)
  margin-left -64px
  @media $md_minus
    width calc(100% + 88px)
    margin-left -44px
    border none
  @media $sm_minus
    width calc(100% + 128px)
    margin-left -64px
  @media $xs
    width calc(100% + 48px)
    margin-left -24px
  @media $lg_plus
    border-right 1px solid $acsent
  &__left
    padding 81px 32px 165px 64px
    width calc(100% + 32px)
    color $white
    background $acsent
    display grid
    gap 32px
    grid-template-columns repeat(5,minmax(0,1fr))
    grid-template-areas\
    ". title title title . "\
    ". text text text text"
    grid-auto-rows max-content
    @media $md_minus
      padding 65px 44px 73px 44px
      width 100%
      grid-template-columns repeat(12,minmax(0,1fr))
      gap 32px
      grid-template-areas\
      ". title title title . . text text text text text ."
    @media $sm_minus
      padding 66px 64px 125px 64px
      gap 24px
      grid-template-columns repeat(6,minmax(0,1fr))
      grid-template-areas\
      "title title title text text text"
    @media $xs
      padding 46px 24px 80px 24px
      gap 40px
      grid-template-columns repeat(3,minmax(0,1fr))
      grid-template-areas\
      "title title title"\
      "text text text"
  &__right
    padding 81px 64px 165px 0
    display grid
    gap 32px
    grid-template-columns repeat(7,minmax(0,1fr))
    grid-template-areas\
    ". name name name name name ."\
    ". type type . . . ."\
    ". btn btn btn . price price"
    align-items self-start
    grid-auto-rows max-content
    @media $md_minus
      padding 56px 44px 160px 44px
      grid-template-columns repeat(12,minmax(0,1fr))
      gap 24px
      grid-template-areas\
      ". name name name name name name name . . . ."\
      ". type type type . . . . . . . ."\
      ". btn btn btn btn . . price price . . ."
    @media $sm_minus
      padding 48px 64px 114px 64px
      grid-template-columns repeat(6,minmax(0,1fr))
      gap 32px
      grid-template-areas\
      "name name name name name ."\
      "type type . . . . "\
      "btn btn btn . price price"
    @media $xs
      padding 8px 24px 89px 24px
      gap 40px
      grid-template-columns repeat(3,minmax(0,1fr))
      grid-template-areas\
      "name name name"\
      "type type ."\
      "price price ."\
      "btn btn btn"
  &__title
    margin-bottom 64px
    font-size 48px
    line-height 150%
    letter-spacing 0.02em
    grid-area title
    @media $md_minus
      margin-bottom 0
    @media $sm_minus
      font-size 32px
      line-height 48px
      letter-spacing 0.02em
    @media $xs
      margin-bottom 24px
      margin-top 0
      font-size 24px
      line-height 40px
      width 100%
  &__text
    grid-area text
    @media $xs
      margin-top -16px
    & p
      @media $sm_minus
        font-size 16px
        line-height 26px
        letter-spacing 0.03em
  &__name
    font-weight 800
    font-size 48px
    line-height 72px
    letter-spacing 0.02em
    text-transform uppercase
    color $acsent
    grid-area name
    @media $xs
      font-size 24px
      line-height 32px
      letter-spacing 0.04em
  &__btn
    height 96px
    grid-area btn
    align-self center
    margin-top 96px
    @media $md_minus
      margin-top 72px
    @media $sm_minus
      margin-top 32px
    @media $xs
      height 80px
      margin-top 0
  &__type
    grid-area type
    margin-top 24px
    @media $md_minus
      margin-top 0
    @media $sm_minus
      margin-top -8px
    @media $xs
      font-size 16px
      line-height 24px
      margin-top -24px
  &__price
    display flex
    flex-direction column
    align-self center
    grid-area price
    margin-top 96px
    @media $md_minus
      margin-top 72px
    @media $sm_minus
      margin-top 32px
    @media $xs
      margin-top 24px
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

 .courseFaq
   &__title
     margin-bottom 64px
     font-size 48px
     line-height 150%
     letter-spacing 0.02em
     @media $md_minus
       margin-bottom 40px
     @media $sm_minus
       font-size 32px
       line-height 48px
       letter-spacing 0.02em
     @media $xs
       margin-bottom -16px
       margin-top 0
       font-size 24px
       line-height 40px
       width 100%
.courseReviews
  &__title
    margin-bottom 32px
    font-size 48px
    line-height 150%
    letter-spacing 0.02em
    @media $md_minus
      margin-bottom 40px
    @media $sm_minus
      font-size 32px
      line-height 48px
      letter-spacing 0.02em
      margin-bottom 32px
    @media $xs
      margin-bottom 0
      margin-top 0
      font-size 24px
      line-height 40px
      width 100%
  &__slider
    border-top 2px solid $borderSecond
    border-bottom 2px solid $borderSecond
    position relative
    padding 48px 0 80px
    @media $sm_minus
      padding 48px 0 46px
    @media $xs
      border none
      padding 0
    &:before
      @media $sm_minus
        content ''
        position absolute
        left -51px
        top 41px
        width 130px
        height 104px
        background url('/img/about/quotes_icon.svg') no-repeat
        background-size contain
      @media $xs
        width 80px
        height 64px
        top 0
        left -43px
</style>
