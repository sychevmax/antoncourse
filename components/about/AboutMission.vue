<template lang="pug">
  .aboutMission
    .aboutMission__text Моя <span>миссия</span> — <br /> открывать <br /> людям глаза <br /> на самих себя. <br /> Вы готовы?
    .aboutMission__btn
      Link(href='#' mod='_more' outside=false) выбрать курс
    .aboutMission__img
      img(src='/img/about/misson.png')
</template>

<script>
import Link from '~/components/Link'
export default {
  components: {
    Link,
  },
}
</script>

<style lang="stylus" scoped>
.aboutMission
  position relative
  padding-left 112px
  @media $md_minus
    padding-left 81px
  @media $sm_minus
    padding-left 0
  &__text
    width calc(100% * 8 / 12)
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
