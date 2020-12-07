<template lang="pug">
  button.upToTop(@click="scrollToTop" :class="show ? '_show' : ''")
    .upToTop__icon
      svg-icon(name='arrow')
    .upToTop__text {{ $t('scrollToTop') }}
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    scrollToTop() {
      this.$root.$emit('scrollToTop')
    },
  },
  mounted() {
    const windowHeight = window.innerHeight
    window.onscroll = (e) => {
      scrollY > windowHeight ? (this.show = true) : (this.show = false)
    }
  },
}
</script>

<style scoped lang="stylus">
.upToTop
  position fixed
  bottom 64px
  right 64px
  z-index 5
  opacity 0
  visibility hidden
  transition $transition
  @media $md_minus
    right 44px
    bottom 44px
  @media $sm_minus
    right 64px
    bottom 64px
  @media $xs
    right 24px
    bottom 24px
  &:hover
    cursor pointer
  &._show
    opacity 1
    visibility visible
  &__icon
    width 112px
    height 112px
    display flex
    justify-content center
    align-items center
    border 2px solid $charkGrey
    border-radius 50%
    @media $xs
      width 48px
      height 48px
      border 1px solid $charkGrey
  & svg
    width 28px
    height 28px
    color $charkGrey
    transform rotate(180deg)
  &__text
    font-size 14px
    line-height 17px
    color $black
    margin-top 16px
    @media $xs
      display none
</style>
