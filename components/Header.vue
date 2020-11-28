<template lang="pug">
  .header.container
    a.header__logo(href='#')
      span Антон
      span Антонов
    a.header__about(href='#') об авторе
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

<style lang="stylus" scoped>
.header
  display flex
  align-items center
  height 136px
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
    @media $md_minus
      line-height 16px
      font-size 16px
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
    margin-right 120px
    @media $md_minus
      margin-right 125px
    @media $sm_minus
      margin-right 39px
    @media $xs
      margin-right 22px
      margin-left auto
</style>
