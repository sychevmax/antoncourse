<template lang="pug">
  .about
    BackToHome
    .aboutTop.gridContainer.container
      .gridContainer__cell._span-4._span-md-4._span-sm-3._span-xs-3
        .aboutTop__img
          img(src='/img/about/about_top_bg.png')
      .gridContainer__cell._span-7._offset-5._span-md-8._span-sm-3._span-xs-3
        .aboutTop__text {{ $t('pages.about.aboutTopText') }}
    .about_statham.container
      .aboutStatham.gridContainer
        .gridContainer__cell._span-5._offset-1._span-md-6._offset-md-1._span-sm-4._offset-sm-0._span-xs-3
          .aboutBorderText(v-html="$t('pages.about.stathamText')")
    .aboutEyes
      .gridContainer.container
        .gridContainer__cell._span-8._offset-2._span-md-9._offset-md-1._span-sm-4._offset-sm-0._span-xs-3
          .aboutEyes__text(v-html="$t('pages.about.aboutEyeText')")
    .aboutContentBird
      .gridContainer.container
        .gridContainer__cell._span-5._span-md-5._span-sm-4._order-sm-2._span-xs-3
          img.aboutContentBird__img._first(src='/img/about/about_bird.png')
        .gridContainer__cell._span-5._offset-6._span-md-6._offset-md-6._span-sm-4._offset-sm-2._order-sm-1._span-xs-3
          .aboutBorderText(v-html="$t('pages.about.aboutBirdText1')")
        .gridContainer__cell._span-5._offset-1._span-md-6._offset-md-1._span-sm-4._offset-sm-0._order-sm-3._span-xs-3
          .aboutBorderText._about(v-html="$t('pages.about.aboutBirdText2')")
        .gridContainer__cell._span-3._offset-2._span-md-4._offset-md-0._span-sm-2._order-sm-5._span-xs-2
          img.aboutContentBird__img._second(src='/img/about/about_bird_2.png')
        .gridContainer__cell._span-6._offset-6._span-md-7._offset-md-5._span-sm-4._offset-sm-2._order-sm-4._span-xs-2._offset-xs-1
          img.aboutContentBird__img._third(src='/img/about/about_bird_3.png')
        .gridContainer__cell._span-5._offset-1._span-md-6._offset-md-1._span-sm-4._offset-sm-0._order-sm-6._span-xs-3
          .aboutBorderText(v-html="$t('pages.about.aboutBirdText3')")
        .gridContainer__cell._span-7._offset-1._span-md-8._offset-md-0._span-sm-6._order-sm-7._span-xs-3
          .aboutContentBird__video
            AboutVideo(
              videoSrc='https://youtu.be/mWyak0g5LLI'
              previewSrc='/img/about/about_video_0.jpg',
              :hoverEffect="false"
            )
        .gridContainer__cell._span-3._offset-9._span-md-3._offset-md-9._span-sm-3._offset-sm-2._order-sm-8._span-xs-2._offset-xs-1
          .aboutContentBird__videoText(v-html="$t('pages.about.aboutBirdVideoText')")
        .gridContainer__cell._span-5._offset-6._span-md-6._offset-md-1._span-sm-4._offset-sm-2._order-sm-9._span-xs-3
          .aboutBorderText(v-html="$t('pages.about.aboutBirdText4')")
    .aboutVideos
      .gridContainer.container
        .aboutVideos__item.gridContainer__cell._span-4._span-md-4._span-sm-4._span-xs-2
          AboutVideo(
            :title='$t("pages.about.aboutVideoText1")'
            videoSrc='https://youtu.be/UKEpIG2vEqw'
            previewSrc='/img/about/about_video_1.jpg',
            :hoverEffect="false"
          )
        .aboutVideos__item.gridContainer__cell._span-4._span-md-4._span-sm-4._offset-sm-2._span-xs-2._offset-xs-1
          AboutVideo(
            :title='$t("pages.about.aboutVideoText2")'
            videoSrc='https://youtu.be/VUy0LsME1EI'
            previewSrc='/img/about/about_video_2.jpg',
            :hoverEffect="false"
          )
        .aboutVideos__item.gridContainer__cell._span-4._span-md-4._span-sm-4._span-xs-2
          AboutVideo(
            :title='$t("pages.about.aboutVideoText3")'
            videoSrc='https://youtu.be/Eyy_dBJhC9U'
            previewSrc='/img/about/about_video_3.jpg',
            :hoverEffect="false"
          )
    .about_youtube
      .gridContainer.container
        .gridContainer__cell._span-6._offset-3._span-md-5._offset-md-3._span-sm-4._offset-sm-1
          p(v-html='$t("pages.about.aboutYoutubeText")')
    .about__road
      .aboutRoad
        .gridContainer.container
          .gridContainer__cell._span-6._offset-1._span-md-8._span-sm-5._offset-sm-0._span-xs-3
            .aboutRoad__text(v-html='$t("pages.about.aboutRoadText")')
    .about__mission
      .aboutMission.container
        .aboutMission__text(v-html='$t("pages.about.aboutMissionText")')
        .aboutMission__btn
          Link(href='#' mod='_more' :outside="false") {{ $t("courseSelectBtnText") }}
        .aboutMission__img
          img(src='/img/about/misson.png')
</template>

<script>
import AboutVideo from '~/components/about/AboutVideo'
import BackToHome from '~/components/BackToHome'
export default {
  components: {
    AboutVideo,
    BackToHome,
  },
}
</script>

<style lang="stylus">
.about
  padding-bottom 510px
  @media $md_minus
    padding-bottom 214px
  @media $sm_minus
    padding-bottom 144px
  @media $xs
    padding-bottom 160px
  &__mission
    margin-top 256px
    @media $md_minus
      margin-top 127px
    @media $sm_minus
      margin-top 245px
    @media $xs
      margin-top 184px
.aboutTop
  //height 700px
  //display flex
  //overflow hidden
  margin-bottom 40px
  @media $md_minus
    margin-bottom 128px
  @media $sm_minus
    margin-bottom 270px
  @media $xs
    margin-bottom 0
  &__img
    margin-top -40px
    @media $md_minus
      position relative
      margin-top 24px
    @media $sm_minus
      margin-top 32px
    @media $xs
      margin-top 16px
      left 0
      margin-left auto
    & img
      position relative
      @media $xs
        left unset
        right -24px

  &__text
    margin-top 128px
    font-size 48px
    line-height 72px
    letter-spacing 0.02em
    position relative
    z-index 2
    @media $md_minus
      margin-top 72px
    @media $sm_minus
      font-size 24px
      line-height 40px
      width 100%
      left 0
    @media $xs
      margin-left 0
      margin-top -189px
    &:before
      content ''
      width 172px
      height 138px
      background url('/img/about/quotes_icon.svg') no-repeat
      background-size contain
      display block
      position absolute
      right calc(100% + 32px)
      top 0
      @media $md_minus
        position static
        width 136px
        height 109px
        margin-bottom 64px
      @media $sm_minus
        width 80px
        height 64px
        margin-bottom 30px
.aboutStatham
  margin-top 40px
  position relative
  padding-bottom 128px
  //height 617px
  @media $md_minus
    height auto
  @media $sm_minus
    padding-bottom 64px
  @media $xs
    margin-top 64px
  &:before
    content ''
    background url('/img/about/about_statham.png') no-repeat
    background-size contain
    position absolute
    right 0
    top -20px
    width 528px
    height 508px
    @media $md_minus
      width 372px
      height 358px
      top 0
    @media $sm_minus
      top -195px
      width 416px
      height 400px
      right 0
    @media $xs
      width 272px
      height 261px
      position static
      margin 0 auto
.aboutEyes
  height 400px
  position relative
  margin-bottom 128px
  @media $md_minus
    margin-bottom 68px
  @media $xs
    margin-bottom 106px
  &:before
    content ''
    background url('/img/about/about_eyes.jpg') no-repeat
    background-size cover
    background-position center
    z-index 2
    top 0
    left 0
    height 100%
    position absolute
    width 100%
  &__text
    position relative
    z-index 3
    font-size 24px
    line-height 40px
    letter-spacing 0.03em
    color $white
    margin-top 96px
    @media $md_minus
      margin-top 116px
    @media $sm_minus
      margin-top 100px
    @media $xs
      margin-top 67px
      font-size 16px
      line-height 24px
.aboutContentBird
  margin-bottom 128px
  @media $md_minus
    margin-bottom 80px
  @media $sm_minus
    margin-bottom 128px
  @media $xs
    margin-bottom 80px
  &__img
    &._first
      @media $sm_minus
        margin-top 80px
      @media $xs
        width calc(100% + 24px)
        margin-left -24px
    &._second
      margin-top 192px
      margin-bottom 96px
      @media $md_minus
        margin-top 270px
        margin-bottom 104px
      @media $sm_minus
        margin-top 96px
        margin-bottom 104px
      @media $xs
        margin-top 37px
        margin-bottom 34px
    &._third
      margin-top 48px
      @media $sm_minus
        margin-top 66px
      @media $md_minus
        margin-top 56px
      @media $xs
        margin-top 88px
  &__video
    margin-top 48px
    margin-bottom 116px
    @media $md_minus
      margin-top 104px
      margin-bottom 104px
    @media $sm_minus
      margin-top 48px
      margin-bottom 0
    @media $xs
      margin-top 32px
      width calc(100% + 24px)
      margin-left -24px
  &__videoText
    margin-top 48px
    @media $md_minus
      margin-top 104px
    @media $sm_minus
      margin-top 8px
      margin-bottom 96px
    @media $xs
      margin-top 0
      margin-bottom 24px
.aboutVideos
  &__item
    @media $sm_minus
      margin-bottom 48px
    @media $xs
      margin-bottom 32px
.about_youtube
  font-size 24px
  line-height 40px
  margin 80px 0 128px
  letter-spacing 0.03em
  @media $sm_minus
    margin 128px 0
  @media $xs
    margin 80px 0 83px
    font-size 16px
    line-height 24px
  & a
    font-size 24px
    line-height 32px
    color $acsent
    text-transform lowercase
    @media $xs
      font-size 16px
      line-height 24px
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
    z-index 2
    background url('/img/about/road_bg.jpg') no-repeat
    background-position-x center
    background-position-y bottom
    background-size cover
    @media $md_minus
      background-size 150%
    @media $sm_minus
      background-size 200%
    @media $xs
      background-position-y 0
      background-size cover
      background-position-x 58%
  &:after
    content ''
    width 100%
    height 100%
    position absolute
    left 0
    top 0
    z-index 3
    background: linear-gradient(260.88deg, #F5F7FA 5.97%, rgba(255, 255, 255, 0) 84.26%);
    mix-blend-mode: normal
    transform matrix(-1, 0, 0, 1, 0, 0)
    @media $xs
      background linear-gradient(221.93deg, #F5F7FA 24.43%, rgba(255, 255, 255, 0) 99.35%)

  &__text
    font-size 24px
    line-height 40px
    letter-spacing 0.03em
    position relative
    z-index 4
    @media $xs
      font-size 16px
      line-height 24px
.aboutMission
  position relative
  padding-left 112px
  @media $md_minus
    padding-left 81px
  @media $sm_minus
    padding-left 0
  &__text
    width 100%
    max-width 879px
    font-size 80px
    line-height 112px
    font-weight 800
    letter-spacing 0.05em
    color transparent
    text-transform uppercase
    -webkit-text-stroke-width 2px
    -webkit-text-stroke-color $acsent
    z-index 3
    position relative
    @media $md_minus
      width 100%
    @media $sm_minus
      font-size 48px
      line-height 64px
    @media $xs
      font-size 24px
      line-height 40px
      letter-spacing 0.13em
      -webkit-text-stroke-width 1px
    & span
      color $acsent
  &__btn
    width 326px
    height 96px
    margin-top 40px
    position relative
    z-index 3
    @media $md_minus
      width 273px
    @media $sm_minus
      width 249px
    @media $xs
      margin-top 24px
      height 80px
      width 207px
  &__img
    position absolute
    top 41px
    right 64px
    width 635px
    height 738px
    @media $md_minus
      right -20%
      top 42px
    @media $sm_minus
      width 404px
      height 472px
      right -10%
      top -117px
    @media $xs
      top -144px
      width 336px
      height 392px
      right -30%
</style>
