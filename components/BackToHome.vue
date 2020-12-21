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
    left 2px
  &._course
    position absolute
    top 0
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
    @media $sm_minus
      background url('/img/back_icon_xs.svg') no-repeat
      left 0
  &__text
    transform rotate(90deg)
    text-transform lowercase
    font-size 16px
    letter-spacing 0.02em
    position: absolute;
    left -40px
    top 74px
    width 100px
    @media $sm_minus
      font-size 12px
      top 66px
</style>
