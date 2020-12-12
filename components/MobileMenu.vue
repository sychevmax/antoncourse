<template lang="pug">
  .mobileMenu(:class="open ? '_open' : ''")
    nuxt-link.mobileMenu__item(to="/about" @click.native="closeMenu") Об авторе
    nuxt-link.mobileMenu__item(to="/courses" @click.native="closeMenu") Курсы
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeMenu() {
      this.$root.$emit('openMenu', false)
      this.$root.$emit('opeMenuFromBurger', false)
    },
  },
}
</script>

<style scoped lang="stylus">
.mobileMenu
  position fixed
  background $bg
  top 72px
  left 0
  height calc(100% - 72px)
  width 100%
  z-index 100
  visibility hidden
  transform translateX(100%)
  transition $transition
  display flex
  flex-direction column
  align-items flex-end
  padding-right 70px
  padding-top 64px
  @media $sm_plus
    display none !important
  &._open
    visibility visible
    transform translateX(0)
  &__item
    font-size 16px
    line-height 24px;
    text-align right
    letter-spacing 0.02em
    color $black
    text-transform lowercase
    margin-bottom 24px
</style>
