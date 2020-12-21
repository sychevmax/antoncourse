<template lang="pug">
.course
  BackToHome(page="course")
  .course__header
    .courseHeader.container
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
    .courseFromWhom
      .courseFromWhom__list.gridContainer.container
        .courseFromWhom__title.gridContainer__cell._span-6._offset-1._span-md-9._offset-md-1._span-sm-6._offset-sm-0._span-xs-3 {{ $t('pages.courses.openPsychosomatics.fromWhom.title') }}
        .courseFromWhom__col.gridContainer__cell._span-3._offset-2._span-md-4._offset-md-1._span-sm-5._offset-sm-1._span-xs-2._offset-xs-1
          .courseFromWhom__text.aboutBorderText._course(v-for='item in $t("pages.courses.openPsychosomatics.fromWhom.contentCol1")' :key="item.id" v-html="item.body")
        .courseFromWhom__col._second.gridContainer__cell._span-4._offset-7._span-md-5._offset-md-7._span-sm-5._offset-sm-1._span-xs-2._offset-xs-1
          .courseFromWhom__text.aboutBorderText._course(v-for='item in $t("pages.courses.openPsychosomatics.fromWhom.contentCol2")' :key="item.id" v-html="item.body")
  .course__fromWhomImage
    .courseFromWhomImage
      .courseFromWhomImage__bg
        KinesisContainer(event="scroll" :duration="100")
          KinesisElement(
            tag="div"
            :strength="-140"
            transformOrigin="50% 300%"
            axis="y"
            type="translate")
            picture
              source( media="(max-width: 1023px)" srcset="/img/course_psy/from_whom_img_sm.jpg")
              img(src="/img/course_psy/from_whom_img.jpg")
      .gridContainer.container
        .gridContainer__cell._span-5._offset-1._span-md-6._offset-md-1._span-sm-4
          .courseFromWhomImage__text
            KinesisContainer(event="scroll" :duration="100")
              KinesisElement(
                tag="div"
                :strength="-50"
                transformOrigin="50% 300%"
                axis="y"
                type="translate")
                div(v-html='$t("pages.courses.openPsychosomatics.fromWhomImage")')
  .course__ofWhat
    .courseOfWhat
      .courseOfWhat__inner.gridContainer._courseOfWhat.container
        .courseOfWhat__title.gridContainer__cell._span-6._offset-1._span-md-8._offset-md-1._span-sm-6._span-xs-3 {{ $t("pages.courses.openPsychosomatics.ofWhatTitle") }}
        .courseOfWhat__item.gridContainer__cell._span-2._offset-1._span-md-2._offset-md-2._span-sm-2._offset-sm-0._span-xs-1._first
          img(src='/img/course_psy/of_what_1.svg')
          .courseOfWhat__text(v-html='$t("pages.courses.openPsychosomatics.ofWhat[0]")')
        .courseOfWhat__item._second.gridContainer__cell._span-3._offset-3._span-md-2._offset-md-7._span-sm-2._offset-sm-3._span-xs-1._offset-xs-1._second
          img(src='/img/course_psy/of_what_2.svg')
          .courseOfWhat__text(v-html='$t("pages.courses.openPsychosomatics.ofWhat[1]")')
        .courseOfWhat__item.gridContainer__cell._span-3._offset-6._span-md-3._offset-md-2._span-sm-3._offset-md-0._span-xs-1._offset-xs-0._third
          img(src='/img/course_psy/of_what_3.svg')
          .courseOfWhat__text(v-html='$t("pages.courses.openPsychosomatics.ofWhat[2]")')
        .courseOfWhat__item.gridContainer__cell._span-2._offset-9._span-md-3._offset-md-7._span-sm-3._offset-sm-3._span-xs-1._offset-xs-1._fourth
          img(src='/img/course_psy/of_what_4.svg')
          .courseOfWhat__text(v-html='$t("pages.courses.openPsychosomatics.ofWhat[3]")')
  .course__program
    .courseProgram.gridContainer.container
      .courseProgram__title.gridContainer__cell._span-11._offset-1._span-md-8._offset-md-1._span-sm-3 {{ $t("pages.courses.openPsychosomatics.program.title") }}
      .courseProgram__inner.gridContainer__cell.gridContainer._rows._span-10._offset-1._span-md-12._span-sm-6
        .courseProgram__item(v-for='item in $t("pages.courses.openPsychosomatics.program.list")' :key='item.num')
          .courseProgram__num {{ item.num }}
          .courseProgram__text(v-html='item.body')
  .course__practice
    .coursePractice
      .gridContainer.container
        .gridContainer__cell._span-4._offset-1._span-md-5._offset-md-1._span-sm-3._span-xs-3
          .coursePractice__title {{ $t("pages.courses.openPsychosomatics.practice.title") }}
        .gridContainer__cell._span-5._offset-6._span-md-5._offset-md-6._span-sm-3._offset-sm-3._span-xs-3
          .coursePractice__text(v-html='$t("pages.courses.openPsychosomatics.practice.text")')
  .course__lessons
    .courseLessons
      .courseLessons__inner.gridContainer.container
        .courseLessons__title {{ $t("pages.courses.openPsychosomatics.lessons.title") }}
        .courseLessons__text(v-html='$t("pages.courses.openPsychosomatics.lessons.text")')
        .courseLessons__img
          img(src='/img/course_psy/lessons_bg.png')
        .courseLessons__info._first(v-html='$t("pages.courses.openPsychosomatics.lessons.info[0].value")')
        .courseLessons__info._second(v-html='$t("pages.courses.openPsychosomatics.lessons.info[1].value")')
        .courseLessons__info._third(v-html='$t("pages.courses.openPsychosomatics.lessons.info[2].value")')
  .course__booking
    .courseBooking
      .gridContainer.container
        .courseBooking__left.gridContainer__cell._span-5._span-md-12._span-sm-6._span-xs-3
          .courseBooking__title(v-html='$t("pages.courses.openPsychosomatics.booking.title")')
          .courseBooking__text(v-html='$t("pages.courses.openPsychosomatics.booking.text")')
        .courseBooking__right.gridContainer__cell._span-7._span-md-12._span-sm-6._span-xs-3
          .courseBooking__name(v-html='$t("pages.courses.openPsychosomatics.title")')
          .courseBooking__type {{ $t("pages.courses.openPsychosomatics.format") }}-{{ $t("courseWord") }}
          .courseBooking__btn
            Link(mod="_more _icon" href="#" outside icon) {{ $t('courseBtnBookingText') }}
          .courseBooking__price
            span {{ $t("coursePriceLabel") }}
            samp {{ $t("pages.courses.openPsychosomatics.price") }}
  .course__reviews
    .courseReviews.gridContainer.container
      .courseReviews__title.gridContainer__cell._span-6._offset-1._span-md-8._offset-md-1._span-sm-6 {{ $t("pages.courses.openPsychosomatics.reviews.title") }}
      .courseReviews__slider.gridContainer__cell._span-10._offset-1._span-md-10._offset-md-1._span-sm-6
        Reviews(
          :data="reviews",
          :texts='$t("pages.courses.openPsychosomatics.reviews.items")'
        )
  .course__faq
    .courseFaq.gridContainer.container
      .courseFaq__title.gridContainer__cell._span-3._offset-1._span-md-7._offset-md-1._span-sm-6._span-xs-3 Вопрос-ответ
      .courseFaq__list.gridContainer__cell._span-7._offset-4._span-md-10._offset-md-1._span-sm-6._span-xs-3
        accordion(id="accordion-example-2" :content="faq" :data='$t("pages.courses.openPsychosomatics.faq.data")' multiple)
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import Link from '@/components/Link'
import BackToHome from '@/components/BackToHome'
import Accordion from '@/components/Accordion'
import Reviews from '@/components/Reviews'
export default {
  components: {
    KinesisContainer,
    KinesisElement,
    Link,
    BackToHome,
    Accordion,
    Reviews,
  },
  data() {
    return {
      reviews: [
        {
          id: 1,
          img: '/img/course_psy/review_1.png',
          instagramLink: 'https://www.instagram.com/elmielmiee/',
          instagramName: '@elmielmiee',
        },
        {
          id: 2,
          img: '/img/course_psy/review_2.png',
          instagramLink: 'https://www.instagram.com/svetlana__rani/',
          instagramName: '@svetlana__rani',
        },
        {
          id: 3,
          img: '/img/course_psy/review_3.png',
          instagramLink: 'https://www.instagram.com/stacy__moonlightt/',
          instagramName: '@stacy__moonlightt',
        },
        {
          id: 4,
          img: '/img/course_psy/review_4.png',
          instagramLink: 'https://www.instagram.com/anast_asiya1210/',
          instagramName: '@anast_asiya1210',
        },
        {
          id: 5,
          img: '/img/course_psy/review_5.png',
          instagramLink: 'https://www.instagram.com/ylia_ttt/',
          instagramName: '@ylia_ttt',
        },
        {
          id: 6,
          img: '/img/course_psy/review_6.png',
          instagramLink: 'https://www.instagram.com/juliezagoret/',
          instagramName: '@juliezagoret',
        },
      ],
      faq: [
        {
          id: 1,
          active: false,
        },
        {
          id: 2,
          active: false,
        },
        {
          id: 3,
          active: false,
        },
        {
          id: 4,
          active: false,
        },
        {
          id: 5,
          active: false,
        },
      ],
    }
  },
}
</script>

<style lang="stylus">

.course
  margin-top 32px
  margin-bottom 240px
  position relative
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
      margin-top 114px
    @media $sm_minus
      margin-top 19px
    @media $xs
      margin-top 24px
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
      margin-top 157px
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
      width calc(100% + 24px)
      position relative
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
      margin-bottom 32px
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
.courseFromWhomImage
  mix-blend-mode normal
  background-position center
  background-size cover
  padding 86px 0 154px
  min-height 584px
  position relative

  @media $md_minus
    padding 71px 0 145px
  @media $sm_minus
    padding 71px 0 104px
  @media $xs
    padding 42px 0 184px
    min-height 480px
    background-position 80% bottom
  &__bg
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    overflow hidden
    & *
      width 100%
      height 100%
    & img
      width 100%
      height 100%
      object-fit cover
  &__text
    color $bg

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
    display flex
    flex-direction column
    align-items baseline
    justify-content center
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
  &__text
    font-size 16px
    line-height 24px
    margin-top 36px
    text-transform lowercase
    @media $xs
      font-size 12px
      line-height 20px

.courseProgram
  &__inner
    @media $xs
      display block !important
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
    padding 32px 0 8px
    display flex
    @media $md_minus
      padding 24px 0 16px
    @media $sm_minus
      padding 16px 0 0
      margin-bottom -8px
    @media $xs
      margin-bottom 0
      padding 16px 0
    &:nth-last-child(1),
    &:nth-child(6)
      border-bottom 1px solid $border
    &:nth-child(6)
      @media $xs
        border-bottom none
  &__num
    width 80px
    height 80px
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
  padding 61px 0 63px
  background $darkGray
  color $bg
  @media $md_minus
    padding 64px 0 112px
  @media $sm_minus
    padding 58px 0 72px
  @media $xs
    padding 46px 0 84px
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
    ". info1 info1 . info2 info2 . info3 info3 info3 . ."
    grid-template-rows max-content
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
    //margin-bottom 48px
    font-size 48px
    line-height 72px
    max-height 144px
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
      margin-top 0px
      font-size 24px
      line-height 40px
      width 100%
  &__text
    grid-area text
    @media $md_minus
      margin-top 0
    @media $xs
      margin-top -16px
  &__img
    grid-area img
    position relative
    margin-top -80px
    @media $md_minus
      margin-top 0
      top -180px
    @media $sm_minus
      margin-top 48px
      top 0
    @media $xs
      margin-top 0
    & img
      position relative
      z-index 2
  &__info
    display flex
    flex-direction column
    margin-top 40px
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
        letter-spacing normal
        &._year
          margin-left 8px
    & samp
      font-size 16px
      line-height 24px
      @media $sm_minus
        line-height 26px
      @media $xs
        font-size 12px
        line-height 20px
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
        margin-top 16px
      @media $xs
        margin-top 24px
.courseBooking
  border 2px solid $acsent
  border-right none
  position relative
  @media $md_minus
    border none
    border-bottom 2px solid $acsent
  &:before
    content ''
    width 43%
    position absolute
    top 0
    left 0
    height 100%
    background $acsent
    @media $md_minus
      background transparent
  &:after
    content ''
    width 57%
    position absolute
    top 0
    right 0
    height 100%
    background $bg
    @media $md_minus
      background transparent
  &__left
    padding 81px 0 111px 0
    color $white
    background $acsent
    display grid
    gap 32px
    grid-template-columns repeat(5,minmax(0,1fr))
    grid-template-areas\
    ". title title title . "\
    ". text text text text"
    grid-auto-rows max-content
    position relative
    z-index 3
    &:before
      content ''
      width calc(100% + 32px)
      height 100%
      position absolute
      top 0
      left 0
      background $acsent
      z-index -1
      @media $md_minus
        width calc(100% + 88px)
        left -44px
      @media $sm_minus
        width calc(100% + 128px)
        left -64px
      @media $xs
        width calc(100% + 48px)
        left -24px
    @media $md_minus
      padding 65px 0 73px 0
      width 100%
      grid-template-columns repeat(12,minmax(0,1fr))
      gap 24px
      grid-template-areas\
      ". title title title . . text text text text text ."
    @media $sm_minus
      padding 66px 0 125px 0
      gap 32px
      grid-template-columns repeat(6,minmax(0,1fr))
      grid-template-areas\
      "title title title text text text"
    @media $xs
      padding 46px 0 80px 0
      gap 40px
      grid-template-columns repeat(3,minmax(0,1fr))
      grid-template-areas\
      "title title title"\
      "text text text"
  &__right
    padding 81px 0 137px 0
    display grid
    gap 32px
    grid-template-columns repeat(7,minmax(0,1fr))
    grid-template-areas\
    ". name name name name name ."\
    ". type type . . . ."\
    ". btn btn btn . price price"
    align-items self-start
    grid-auto-rows max-content
    position relative
    z-index 3
    @media $md_minus
      padding 56px 0 160px 0
      grid-template-columns repeat(12,minmax(0,1fr))
      gap 24px
      grid-template-areas\
      ". name name name name name name name . . . ."\
      ". type type type . . . . . . . ."\
      ". btn btn btn btn . . price price . . ."
    @media $sm_minus
      padding 48px 0 114px 0
      grid-template-columns repeat(6,minmax(0,1fr))
      gap 32px
      grid-template-areas\
      "name name name name name ."\
      "type type . . . . "\
      "btn btn btn . price price"
    @media $xs
      padding 8px 0 89px 0
      gap 40px
      grid-template-columns repeat(3,minmax(0,1fr))
      grid-template-areas\
      "name name name"\
      "type type ."\
      "price price ."\
      "btn btn btn"
  &__title
    margin-bottom 32px
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
      margin-bottom -10px
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
    height 152px
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
    margin-top -16px
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
