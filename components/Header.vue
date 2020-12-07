<template lang="pug">
  .header.container(ref='header')
    nuxt-link.header__logo(:to="localePath('/')" v-html="$t('header.logo')")
    nuxt-link.header__about(:to="localePath('about')") {{ $t('header.aboutLinkText') }}
    .header__menu
      Burger
    .header__lang
      LangSwitcher
</template>

<script>
import LangSwitcher from '~/components/LangSwitcher'
import Burger from '~/components/Burger'
export default {
  components: {
    LangSwitcher,
    Burger,
  },
}
</script>

<style lang="stylus">
.header
  display flex
  align-items center
  height 136px
  position relative
  @media $md_minus
    height 89px
  @media $sm_minus
    height 80px
  @media $xs
    height 72px
  &__logo
    color $charkGrey
    letter-spacing 0.02em
    line-height 24px
    font-size 24px
    position relative
    top -12px
    @media $md_minus
      line-height 16px
      font-size 16px
      top -8px
    & span
      display block
      &:last-child
        margin-left 21px
  &__about
    font-size 24px
    line-height 32px
    margin-left auto
    margin-right 211px
    @media $md_minus
      font-size 16px
      line-height 24px
      margin-right 159px
    @media $sm_minus
      margin-right 140px
    @media $xs
      display none
  &__menu
    margin-right 168px
    @media $md_minus
      margin-right 173px
    @media $sm_minus
      margin-right 87px
    @media $xs
      margin-right 70px
      margin-left auto
  &__lang
    position absolute
    right 64px
    top 43px
    z-index 10
    @media $md_minus
      right 44px
      top 16px
    @media $sm_minus
      right 64px
      top 19px
    @media $xs
      right 24px
      top 12px
</style>
