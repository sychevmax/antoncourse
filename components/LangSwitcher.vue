<template lang="pug">
  .langSwitcher
    .langSwitcher__text RU

</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.langSwitcher
  width 48px
  height 48px
  border-radius 50%
  border 1px solid $charkGrey
  color $charkGrey
  display flex
  justify-content center
  align-items center
  &__text
    font-size 14px
    line-height 16px
    letter-spacing 0.05em
    &._active
      display inline
</style>
