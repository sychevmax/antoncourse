<template lang="pug">
  .index.container
    .indexTop
      .indexTop__inner.gridContainer(ref="indexTitleParent")
        .gridContainer__cell._span-6._span-md-6._offset-md-1._span-sm-4
          .indexTop__title(v-html="$t('pages.home.indexTopTitle')" ref="indexTitle")
        .indexTop__right
          .indexTop__imgWrap
            img.indexTop__bg(src='/img/index/index_top_bg.png')
            img.indexTop__img(src='/img/index/index_top_img.png')

      .indexTop__bottom.gridContainer
        .gridContainer__cell._span-2._offset-1._span-md-2._offset-md-1._span-sm-2._span-xs-1
          button.indexTop__scroll(@click="scrollToSecondScreen")
            svg-icon(name="arrow")
        .gridContainer__cell._span-6._offset-6._span-md-6._offset-md-6._span-sm-4._span-xs-2
          .indexTop__socials
            Socials
    .indexDescr.gridContainer(ref="secondScreen")
      .gridContainer__cell._span-5._offset-1._span-md-6._offset-md-1._order-md-2._span-sm-4._order-sm-2._span-xs-3
        .indexDescr__text(v-html="$t('pages.home.indexDescrText')")
      .gridContainer__cell._span-5._offset-7._span-md-6._offset-md-5._order-md-1._span-sm-4._offset-sm-2._order-sm-1._span-xs-3
        .indexDescr__title(v-html="$t('pages.home.indexDescrTitle')")
    .indexVideos
      .indexVideos__item.gridContainer
        .indexVideos__title.h0._first
          KinesisContainer(event="scroll" :duration="100")
            KinesisElement(
              tag="div"
              :strength="-50"
              transformOrigin="50% 300%"
              axis="y"
              type="translate")
              div {{ $t('pages.home.indexVideoTitle1') }}
        .indexVideos__video.gridContainer__cell._span-6._span-md-7._span-sm-6._span-xs-3
          AboutVideo(
            videoSrc='https://youtu.be/mWyak0g5LLI'
            previewSrc='/img/index/video_preview_1.jpg',
            hoverEffect
          )
        .indexVideos__text.gridContainer__cell._span-3._offset-7._span-md-4._offset-md-8._span-sm-3._span-xs-2._offset-xs-1(v-html="$t('pages.home.indexVideoText1')")
      .indexVideos__item.gridContainer
        .indexVideos__title.h0._second
          KinesisContainer(event="scroll" :duration="100")
            KinesisElement(
              tag="div"
              :strength="-50"
              transformOrigin="50% 300%"
              axis="y"
              type="translate")
              div {{ $t('pages.home.indexVideoTitle2') }}
        .indexVideos__text.gridContainer__cell._span-3._offset-2._span-md-4._offset-md-0._span-sm-3._order-sm-2._offset-sm-3._span-xs-2(v-html="$t('pages.home.indexVideoText2')")
        .indexVideos__video.gridContainer__cell._span-6._offset-6._span-md-7._offset-md-5._span-sm-6._order-sm-1._span-xs-3
          AboutVideo(
            videoSrc='https://youtu.be/mWyak0g5LLI'
            previewSrc='/img/index/video_preview_2.jpg',
            hoverEffect
          )

      .indexVideos__item.gridContainer
        .indexVideos__title.h0._third
          KinesisContainer(event="scroll" :duration="100")
            KinesisElement(
              tag="div"
              :strength="-52"
              transformOrigin="50% 300%"
              axis="y"
              type="translate")
              div {{ $t('pages.home.indexVideoTitle3') }}
        .indexVideos__video.gridContainer__cell._span-6._span-md-7._span-sm-6._span-xs-3
          AboutVideo(
            videoSrc='https://youtu.be/mWyak0g5LLI'
            previewSrc='/img/index/video_preview_3.jpg',
            hoverEffect
          )
        .indexVideos__text.gridContainer__cell._span-3._offset-7._span-md-4._offset-md-8._span-sm-3._span-xs-2._offset-xs-1(v-html="$t('pages.home.indexVideoText3')")
    .indexAuthor
      .indexAuthor__row
        .indexAuthor__col
          .indexAuthor__title
            h1._acsent {{ $t('pages.home.indexAuthorTitle') }}
          .indexAuthor__text._desktop(v-html="$t('pages.home.indexAuthorText')")
        .indexAuthor__col
          .indexAuthor__img
            KinesisContainer(event="scroll" :duration="100")
              KinesisElement(
                tag="img"
                src="/img/index/index_author.jpg"
                :strength="-50"
                transformOrigin="50% 300%"
                axis="y"
                type="translate")
      .indexAuthor__text._mobile(v-html="$t('pages.home.indexAuthorText')")
      .indexAuthor__row._bottom
        .indexAuthor__col._bottom
          .indexAuthor__more
            Link(href='about' mod='_more' :outside='false') {{ $t('pages.home.indexAuthorBtnText') }}
        .indexAuthor__col._bottom
          .indexAuthor__socials
            Socials
      .indexAuthor__descr(v-html="$t('pages.home.indexAuthorDescr')")
    .indexCourses
      .indexCourses__title
        .h0 {{ $t('pages.home.indexCoursesTitle') }}
      .indexCourses__item
        IndexCourse(
          active
          :title='$t("pages.courses.openPsychosomatics.title")'
          :format='$t("pages.courses.openPsychosomatics.format")'
          :level='$t("pages.courses.openPsychosomatics.level")'
          img='/img/index/course_1.jpg'
          :link="localePath('/courses/open-psychosomatics')"
          :text='$t("pages.courses.openPsychosomatics.text")'
          )
      .indexCourses__item
        IndexCourse(
          :active='false'
          :date='$t("pages.courses.practicalPsychosomatics.date")'
          :title='$t("pages.courses.practicalPsychosomatics.title")'
          img='/img/index/course_2.jpg'
          link='#'
          :text='$t("pages.courses.practicalPsychosomatics.text")'
        )
      .indexCourses__item
        IndexCourse(
          :active='false'
          :date='$t("pages.courses.neotericPsychosomatics.date")'
          :title='$t("pages.courses.neotericPsychosomatics.title")'
          img='/img/index/course_3.jpg'
          link='#'
          :text='$t("pages.courses.neotericPsychosomatics.text")'
        )

</template>
<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import Socials from '~/components/Socials'
import IndexVideoBlock from '~/components/IndexVideoBlock'
import IndexCourse from '~/components/IndexCourse'
import Link from '~/components/Link'
import AboutVideo from '~/components/about/AboutVideo'
export default {
  components: {
    KinesisContainer,
    KinesisElement,
    Socials,
    IndexVideoBlock,
    IndexCourse,
    Link,
    AboutVideo,
  },
  methods: {
    scrollToSecondScreen() {
      this.$scrollTo(this.$refs.secondScreen, 600)
    },
  },
  mounted() {
    const title = this.$refs.indexTitle
    const titleParent = this.$refs.indexTitleParent
    const titleBox = title.getBoundingClientRect()
    const titleParentBox = titleParent.getBoundingClientRect()
    const leftPosTitle = titleBox.left - titleParentBox.left
    this.$root.$emit('titleReady', leftPosTitle)
  },
}
</script>

<style lang="stylus">
@keyframes jumpScroll
  0%
    transform translateY(0px)
  50%
    transform translateY(16px)
  100%
    transform translateY(0px)
.index
  margin-bottom 240px !important
  overflow hidden
  @media $md_minus
    margin-bottom 200px !important
  @media $sm_minus
    margin-bottom 349px !important
  @media $xs
    margin-bottom 212px !important
.indexTop
  position relative
  padding-top 24px
  &__inner
    position relative
    margin-bottom 138px
    @media $md_minus
      margin-bottom 176px
    @media $sm_minus
      margin-bottom 246px
  &__title
    font-size 112px
    text-transform uppercase
    line-height 134px
    font-weight 800
    letter-spacing 0.03em
    color $acsent
    z-index 9
    position relative
    @media $md_minus
      font-size 80px
      line-height 96px
    @media $xs
      font-size 40px
      line-height 48px
    & span
      color transparent
      -webkit-text-stroke-width 2px
      -webkit-text-stroke-color $acsent
      @media $xs
        -webkit-text-stroke-width 1px
  &__right
    position absolute
    right 0
    top 0
    width 640px
    height  552px
    @media $md_minus
      width 456px
      height  456px
    @media $sm_minus
      top 40px
      width 480px
      height  480px
      right -60px
    @media $xs
      width 304px
      height  304px
      right -69px
      top 56px
  &__imgWrap
    position relative
    right 0
  &__bg
    position absolute
    top 0
    left 0
    z-index 5
    width 486px
    height 483px
    @media $md_minus
      width 402px
      height 400px
    @media $sm_minus
      width 372px
      height 370px
    @media $xs
      width 248px
      height 246px
  &__img
    position relative
    z-index 8
  &__bottom
    @media $md_minus
      margin-top 48px
    @media $sm_minus
      justify-content flex-start
      align-items baseline
      margin-top 60px
  &__scroll
    width 112px
    height 112px
    border-radius 50%
    border 2px solid $acsent
    display flex
    align-items center
    justify-content center
    flex-shrink 0
    @media $xs
      width 64px
      height 64px
    &:hover
      cursor pointer
    & svg
      width 28px
      height 28px
      color $acsent
      animation jumpScroll 2s ease-out 6s 2
      @media $xs
        width 18px
        height 18px
  &__socials
    position relative
    z-index 2
    display flex
    margin-top 30px
    @media $md_minus
      margin-top auto
    @media $xs
      margin-top 32px
.indexDescr
  //display flex
  margin-top 88px
  @media $md_minus
    flex-direction column
    margin-top 64px
  @media $sm_minus
    margin-top 18px
  @media $xs
    margin-top 64px
  &__text
    @media $md_minus
      order 2
  &__title
    font-weight 400
    font-size 48px
    line-height 72px
    letter-spacing 0.02em
    @media $md_minus
      margin-bottom 72px
    @media $sm_minus
      font-size 40px
      line-height 60px
      margin-bottom 96px
    @media $xs
      font-size 24px
      line-height 40px
      margin-bottom 7px
.indexCourses
  margin-top 128px
  &__title
    margin-left 112px
    margin-bottom 160px
    @media $sm_minus
      margin-bottom 112px
      margin-left 0
    @media $xs
      margin-bottom 64px
      margin-left 0
  &__item
    margin-bottom 80px
    &:last-child
      margin-bottom 0
.indexAuthor
  margin-top 159px
  @media $md_minus
    margin-top 118px
  @media $sm_minus
    margin-bottom 128px
  @media $xs
    margin-bottom 103px
  &__row
    display flex
    &._bottom
      @media $xs
        flex-direction column
  &__col
    position relative
    &:first-child
      width calc(50.55% - 112px)
      @media $md_minus
        width calc(51.3% - 80px)
      @media $sm_minus
        width 34%
    &:last-child
      width 49.45%
      @media $md_minus
        width 48.7%
      @media $sm_minus
        width 66%
      @media $xs
        width 131%
    &._bottom
      @media $xs
        width 100%
        display flex
        justify-content flex-end
  &__title
    position relative
    z-index 3
    @media $sm_minus
      position absolute
      top 50%
      transform translateY(-50%)
    @media $xs
      top unset
      bottom 15px
      transform none
  &__text
    margin-left 112px
    max-width 304px
    margin-top 8px
    @media $md_minus
      margin-left 80px
      margin-top 24px
    &._desktop
      @media $sm_minus
        display none
    &._mobile
      display none
      @media $sm_minus
        display block
        margin 97px 0 64px 0
        max-width 408px
      @media $xs
        margin 40px 0 57px 0
      & p
        @media $xs
          font-size 12px
          line-height 20px
    & p
      font-size 16px
      line-height 26px
      letter-spacing 0.03em
  &__img
    display flex
    @media $sm_minus
      max-height 384px
    & img
      object-fit cover
  &__socials
    height 100%
    display flex
    align-items center
    @media $xs
      width 100%
      max-width 175px
      margin-top 40px
  &__more
    max-width 304px
    margin-left 112px
    height 96px
    width 100%
    @media $md_minus
      margin-left 80px
      max-width 215px
    @media $sm_minus
      margin-left 0
      max-width 191px
    @media $xs
      max-width 175px
      height 80px
  &__descr
    max-width 530px
    margin-left 112px
    margin-top 128px
    @media $md_minus
      margin-left 80px
    @media $sm_minus
      width 66%
      margin-left auto
    @media $xs
      width 100%
      margin-top 80px
.indexVideos
  margin-top 144px

  &__item
    position relative
    margin-bottom 176px
    @media $md_minus
      margin-bottom 205px
    @media $sm_minus
      margin-bottom 175px
    @media $xs
      margin-bottom 108px
    &:last-child
      margin-bottom 0

  &__title
    position absolute
    transform translateY(-60%)
    z-index 3
    top 0
    pointer-events none
    @media $sm_minus
      transform translateY(-70%)
    &._first
      left 24px
      @media $md_minus
        left 0
      @media $sm_minus
        left -60px
      @media $xs
        left 0
    &._second
      left 50%
      transform translate(-50%, -60%)
      @media $md_minus
        left unset
        right 0
        transform translate(0, -70%)
      @media $xs
        right unset
        left -16px
    &._third
      left 50%
      transform translate(-50%, -60%)
      @media $md_minus
        left 108px
        transform translate(0, -70%)
      @media $sm_minus
        left -44px
      @media $xs
        left unset
        right -21px
  &__text
    align-self center
    @media $sm_minus
      margin-top 32px
      align-self auto
    @media $xs
      margin-top -16px
</style>
