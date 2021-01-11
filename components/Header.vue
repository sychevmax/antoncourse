<template lang="pug">
  .header.container(ref='header')
    nuxt-link.header__logo(:to="localePath('/')" v-html="$t('header.logo')")
    nuxt-link.header__about(:to="localePath('author')") {{ $t('header.aboutLinkText') }}
    nuxt-link.header__courses(:to="localePath('courses')") {{ $t('header.courseLinkText') }}
    a.header__contacts(href="https://antonantonov.com/") контакты
    .header__burger
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
  props: {
    opeMenuFromBurger: {
      type: Boolean,
      required: false,
    },
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
    justify-content space-between
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
      height 31px
      display flex
      flex-direction column
      justify-content flex-start
      @media $md_minus
        height auto
        line-height 16px
        margin-bottom 8px
      @media $sm_minus
        margin-bottom 4px
        line-height 18px
      &:last-child
        margin-left 21px
        @media $md_minus
          margin-bottom 0
  &__about
    font-size 24px
    line-height 32px
    margin-left auto
    margin-right 88px
    transition $transition
    @media $md_minus
      font-size 16px
      line-height 24px
    @media $sm_minus
      margin-right 48px
    @media $xs
      display none
    &:hover
      color $acsent
  &__courses
    margin-right 88px
    font-size 24px
    line-height 32px
    letter-spacing 0.02em
    transition $transition
    @media $md_minus
      font-size 16px
      line-height 24px
    @media $sm_minus
      margin-right 48px
    @media $xs
      display none
    &:hover
      color $acsent
  &__contacts
    margin-right 136px
    font-size 24px
    line-height 32px
    letter-spacing 0.02em
    transition $transition
    @media $md_minus
      font-size 16px
      line-height 24px
    @media $sm_minus
      margin-right 96px
    @media $xs
      display none
    &:hover
      color $acsent
  &__burger
    display none
    @media $xs
      display block
      margin-right 70px
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
