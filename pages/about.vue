<template lang="pug">
  .about.container
    .aboutTop
      .aboutTop__img
        img(src='/img/about/about_top_bg.png')
      .aboutTop__text В психологию редко приходят те, кому просто интересно. Обычно это люди с болезненным, травматичным прошлым
    // .aboutStatham
      .aboutStatham__text
        p Я такой же: в детстве был неуправляемым, невротичным, склонным к различным зависимостям.
        br
        p Мне было все равно на то, как я живу. Я ввязывался в драки, бил чужие машины, мошенничал и обманывал. И сам не понимал, зачем это делаю. Не осознавал.
        br
        p У меня были самые тяжелые зависимости и болезни, с которым обычно не справляются, но я не мог увидеть себя со стороны.
    .aboutEyes
      .aboutEyes__text Вспомните себя, ведь у каждого из нас то, что нам не нравится в нас самих: поведение, эмоции, зависимости, болезни.
    .about__road
      AboutRoad
    .about__mission
      AboutMission
</template>

<script>
import AboutRoad from '~/components/about/AboutRoad'
import AboutMission from '~/components/about/AboutMission'
export default {
  components: {
    AboutMission,
    AboutRoad,
  },
}
</script>

<style lang="stylus" scoped>
.about
  overflow hidden
  padding-bottom 510px
  @media $md_minus
    padding-bottom 214px
  @media $sm_minus
    padding-bottom 144px
  @media $xs
    padding-bottom 160px
.aboutTop
  //height 700px
  display flex
  overflow hidden
  &__img
    width calc(100% * 5 / 12)
    @media $md_minus
      width calc(100% * 4 / 12)
    @media $sm_minus
      width calc(100% * 2 / 6)
    & img
      position relative
      top -98px
      @media $md_minus
        top 0
  //&:after
  //  content ''
  //  display block
  //  position absolute
  //  background url('/img/about/about_top_bg.png') no-repeat
  //  background-size contain
  //  height 807px
  //  width 648px
  //  left 0
  //  top 0
  //  @media $md_minus
  //    left -45px
  //    height 625px
  //    width 593px
  //    margin-top 72px
  //  @media $sm_minus
  //    left -65px
  //    width 455px
  //    height 520px
  //  @media $xs
  //    right -44px
  //    right 0
  //    left unset
  //    width 100%
  //    height 400px
  //    margin-top 24px
  //    //width 171px
  //    background-position 40px 0
  &__text
    max-width 708px
    width calc(100% * 7 / 12)
    flex-shrink 0
    //margin-left 560px
    margin-top 128px
    font-size 48px
    line-height 72px
    letter-spacing 0.02em
    position relative
    z-index 2
    @media $md_minus
      width calc(100% * 8 / 12)
      margin-top 72px
    @media $sm_minus
      width calc(100% * 4 / 6)
    //@media $md_minus
    //  margin-left 324px
    //@media $sm_minus
    //  font-size 24px
    //  line-height 40px
    //  margin-left 226px
    //  max-width 416px
    //@media $xs
    //  margin-left 0
    //  margin-top 176px
    &:before
      content ''
      width 172px
      height 138px
      background url('/img/about/quotes_icon.svg') no-repeat
      background-size contain
      display block
      position absolute
      right calc(100% + 26px)
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
  height 617px
  @media $md_minus
    height auto
  @media $sm_minus
    padding-bottom 64px
  @media $xs
    padding-top 354px
    margin-top -160px
  &:after
    content ''
    background url('/img/about/about_statham.png') no-repeat
    background-size contain
    position absolute
    right 0
    top -80px
    width 612px
    height 616px
    @media $md_minus
      width 373px
      height 376px
      top -60px
    @media $sm_minus
      top -286px
      width 456px
      height 458px
      right -10px
    @media $xs
      top 80px
      width 350px
      height 354px
      right unset
      left -48px
  &__text
    max-width 533px
    margin-left 115px
    position relative
    z-index 3
    @media $md_minus
      max-width 456px
      margin-left 81px
    @media $sm_minus
      max-width 416px
      margin-left 0
    &:before
      content ''
      width 80px
      height 4px
      background $acsent
      position absolute
      right calc(100% + 35px)
      top 16px
      @media $md_minus
        width 56px
        right calc(100% + 24px)
      @media $sm_minus
        position static
        display block
        margin-bottom 64px
      @media $xs
        width 80px
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
.aboutEyes
  height 340px
  @media $sm_minus
    height 592px
</style>
