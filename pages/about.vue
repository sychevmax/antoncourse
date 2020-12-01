<template lang="pug">
  .about.container
    BackToHome
    .aboutTop.gridContainer
      .gridContainer__cell._span-4._span-md-4._span-sm-3._span-xs-3
        .aboutTop__img
          img(src='/img/about/about_top_bg.png')
      .gridContainer__cell._span-7._offset-5._span-md-8._span-sm-3._span-xs-3
        .aboutTop__text В психологию редко приходят те, кому просто интересно. Обычно это люди с болезненным, травматичным прошлым
    .about_statham
      .aboutStatham.gridContainer
        .gridContainer__cell._span-5._offset-1._span-md-6._offset-md-1._span-sm-4._offset-sm-0._span-xs-3
          .aboutBorderText
            p Я такой же: в детстве был неуправляемым, невротичным, склонным к различным зависимостям.
            br
            p Мне было все равно на то, как я живу. Я ввязывался в драки, бил чужие машины, мошенничал и обманывал. И сам не понимал, зачем это делаю. Не осознавал.
            br
            p У меня были самые тяжелые зависимости и болезни, с которым обычно не справляются, но я не мог увидеть себя со стороны.
    .aboutEyes
      .gridContainer
        .gridContainer__cell._span-8._offset-2._span-md-9._offset-md-1._span-sm-4._offset-sm-0._span-xs-3
          .aboutEyes__text Вспомните себя, ведь у каждого из нас то, что нам не нравится в&nbsp;нас самих: поведение, эмоции, зависимости, болезни.
    .aboutContentBird
      .gridContainer
        .gridContainer__cell._span-5._span-md-5._span-sm-4._order-sm-2._span-xs-3
          img.aboutContentBird__img._first(src='/img/about/about_bird.png')
        .gridContainer__cell._span-5._offset-6._span-md-6._offset-md-6._span-sm-4._offset-sm-2._order-sm-1._span-xs-3
          .aboutBorderText
            p Я смирился с тем, что у меня не будет нормальной жизни, как у всех. Но однажды я прошел тест по проективной методике, там нужно было описать животных. Оказалось, что я описывал себя, какой я — так я смог увидеть себя со стороны.
            br
            p Это было как удар молнией: я начал чувствовать себя, слышать. И внутри откликалось «Антон, ты можешь больше, ты можешь иначе» — так я постепенно избавился от зависимостей и в 2008 году пришел к психологии.
            br
            p В 2014 стал психологом, а в 2018  — клиническим психологом. С 2016 года я помогал людям, но сам не решил главный вопрос — своего здоровья.
        .gridContainer__cell._span-5._offset-1._span-md-6._offset-md-1._span-sm-4._offset-sm-0._order-sm-3._span-xs-3
          .aboutBorderText
            p С 6 лет я страдал заиканием и в 27 лет решил с ним разобраться: читал книги, изучал различные методики, ходил к врачам. В какой-то момент я искал психолога, который мог бы помочь с этим, а нашел не просто психолога, а специалиста по психосоматике. Догадываетесь, что случилось?
        .gridContainer__cell._span-3._offset-2._span-md-4._offset-md-0._span-sm-2._order-sm-5._span-xs-2
          img.aboutContentBird__img._second(src='/img/about/about_bird_2.png')
        .gridContainer__cell._span-6._offset-6._span-md-7._offset-md-5._span-sm-4._offset-sm-2._order-sm-4._span-xs-2._offset-xs-1
          img.aboutContentBird__img._third(src='/img/about/about_bird_3.png')
        .gridContainer__cell._span-5._offset-1._span-md-6._offset-md-1._span-sm-4._offset-sm-0._order-sm-6._span-xs-3
          .aboutBorderText
            p После того как я на себе увидел действие метода — понял, что могу объединить свои знания и помогать людям меняться внутренне и физически.
        .gridContainer__cell._span-7._offset-1._span-md-8._offset-md-0._span-sm-6._order-sm-7._span-xs-3
          .aboutContentBird__video
            AboutVideo(
              videoSrc='https://youtu.be/mWyak0g5LLI'
              previewSrc='/img/about/about_video_0.jpg',
            )
        .gridContainer__cell._span-3._offset-9._span-md-3._offset-md-9._span-sm-3._offset-sm-2._order-sm-8._span-xs-2._offset-xs-1
          .aboutContentBird__videoText
            p Пример работы с&nbsp;симптомом
        .gridContainer__cell._span-5._offset-6._span-md-6._offset-md-1._span-sm-4._offset-sm-2._order-sm-9._span-xs-3
          .aboutBorderText
            p Мои ученики и клиенты знают, какой именно стресс запускает тот или иной симптом: от простуды до онкологических заболеваний.
    .aboutVideos
      .gridContainer
        .aboutVideos__item.gridContainer__cell._span-4._span-md-4._span-sm-4._span-xs-2
          AboutVideo(
            title='мигрень'
            videoSrc='https://youtu.be/mWyak0g5LLI'
            previewSrc='/img/about/about_video_1.jpg',
          )
        .aboutVideos__item.gridContainer__cell._span-4._span-md-4._span-sm-4._offset-sm-2._span-xs-2._offset-xs-1
          AboutVideo(
            title='Аллергия'
            videoSrc='https://youtu.be/mWyak0g5LLI'
            previewSrc='/img/about/about_video_2.jpg',
          )
        .aboutVideos__item.gridContainer__cell._span-4._span-md-4._span-sm-4._span-xs-2
          AboutVideo(
            title='Простуда. ОРВИ или ОРЗ'
            videoSrc='https://youtu.be/mWyak0g5LLI'
            previewSrc='/img/about/about_video_3.jpg',
          )
    .about_youtube
      .gridContainer
        .gridContainer__cell._span-6._offset-3._span-md-5._offset-md-3._span-sm-4._offset-sm-1
          p Посмотрите другие видео на&nbsp;
            a(href='https://youtu.be/mWyak0g5LLI' target='_blank') Ютуб канале
    .about__road
      AboutRoad
    .about__mission
      AboutMission
</template>

<script>
import AboutRoad from '~/components/about/AboutRoad'
import AboutMission from '~/components/about/AboutMission'
import AboutVideo from '~/components/about/AboutVideo'
import BackToHome from '~/components/BackToHome'
export default {
  components: {
    AboutMission,
    AboutRoad,
    AboutVideo,
    BackToHome,
  },
}
</script>

<style lang="stylus" scoped>
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
    background url('/img/about/about_eyes.png') no-repeat
    background-size cover
    background-position center
    z-index 2
    top 0
    left 0
    height 100%
    position absolute
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
 .aboutBorderText
   position relative
   z-index 3
   &:before
     content ''
     width 80px
     height 4px
     background $acsent
     position absolute
     right calc(100% + 32px)
     top 16px
     @media $md_minus
       width 56px
       right calc(100% + 24px)
     @media $sm_minus
       position static
       display block
       margin-bottom 64px
     @media $xs
       width 64px
       height 2px
       margin-bottom 40px
   & p
     font-size 24px
     line-height 36px
     letter-spacing 0.02em
     @media $sm_minus
       letter-spacing 0
       line-height 40px
     @media $xs
       font-size 16px
       line-height 24px
       letter-spacing 0.03em
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
</style>
