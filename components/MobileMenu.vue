<template lang="pug">
  .mobileMenu(:class="open ? '_open' : ''")
    nuxt-link.mobileMenu__item(:to="localePath('author')" @click.native="closeMenu") {{ $t('header.aboutLinkText') }}
    nuxt-link.mobileMenu__item(:to="localePath('courses')" @click.native="closeMenu") {{ $t('header.courseLinkText') }}
    a.mobileMenu__item(href="https://antonantonov.com/") {{ $t('header.contactsLinkText') }}
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
  padding 64px 24px 0
  @media $sm_plus
    display none !important
  &._open
    visibility visible
    transform translateX(0)
  &__item
    font-size 16px
    line-height 24px
    letter-spacing 0.02em
    color $black
    text-transform lowercase
    margin-bottom 24px
    margin-left calc(100% - 118px)
</style>
