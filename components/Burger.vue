<template lang="pug">
  button.burger
    .burger__text курсы
    .burger__icon
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.burger
  display flex
  align-items center
  &:hover
    cursor pointer
  &__text
    font-size 24px
    line-height 32px
    letter-spacing 0.02em
    @media $md_minus
      font-size 16px
      line-height 24px
    @media $xs
      display none
  &__icon
    width 48px
    height 12px
    position relative
    margin-left 13px
    &:before
      content ''
      width 24px
      height 2px
      background $charkGrey
      position absolute
      top 0
      left 0
    &:after
      content ''
      width 48px
      height 2px
      position absolute
      top 10px
      left 0
      background $charkGrey
    @media $xs
      margin-left 0
</style>
