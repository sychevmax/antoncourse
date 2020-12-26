<template lang="pug">
  nuxt-link.backToHome(:to="localePath('/')" :class="'_'+page")
    .backToHome__icon
    .backToHome__text {{ $t('goToHome') }}
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped lang="stylus">
.backToHome
  position absolute
  top 32px
  left 15px
  z-index 10
  @media $xs
    left 2px
  @media $hover
    &:hover
      & .backToHome__icon
        top -8px
  &__icon
    width 14px
    height 40px
    position absolute
    top 0
    left -2px
    transform translate(0,-50%)
    background url('/img/back_icon.svg') no-repeat
    background-size contain
    display block
    transition $transition
    @media $xs
      background url('/img/back_icon_xs.svg') no-repeat
      left 0
  &__text
    transform rotate(90deg)
    text-transform lowercase
    font-size 16px
    letter-spacing 0.02em
    position: absolute;
    left -40px
    top 70px
    width 100px
    @media $xs
      font-size 12px
      top 66px
</style>
