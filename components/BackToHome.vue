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
  position fixed
  top 168px
  left 15px
  z-index 10
  @media $xs
    left 6px
  &._course
    position absolute
    top 0
  &__icon
    position relative
    width 12px
    height 32px
    border-right 1px solid $charkGrey
    border-top 1px solid $charkGrey
    &:before
      content ''
      width 16px
      height 16px
      position absolute
      top 0
      left -6px
      transform translate(0,-50%)
      background url('/img/arrow_back.svg') no-repeat
      background-size contain
      display block
  &__text
    transform rotate(90deg)
    text-transform lowercase
    font-size 16px
    letter-spacing 0.02em
    position: absolute;
    left -40px
    top 88px
    width 100px
</style>
