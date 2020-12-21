<template lang="pug">
  a.link._outside(:class='mod ? " "+mod : "" ' :href='href' target='_blank' v-if='outside')
    span
      slot
    svg-icon(name="link_icon" v-if="icon")
  nuxt-link.link(:class='mod ? " "+mod : "" ' :to='href' v-else="outside")
    span
      slot
    svg-icon(name="link_icon" v-if="icon")
</template>

<script>
export default {
  props: {
    mod: {
      type: String,
      required: false,
    },
    href: {
      type: String,
      required: true,
    },
    outside: {
      type: Boolean,
      required: true,
    },
    icon: {
      type: Boolean,
      required: false,
    },
  },
}
</script>

<style lang="stylus" scoped>
.link
  &._socials
    position relative
    font-size 24px
    line-height 32px
    color $acsent
    letter-spacing 0.02em
    @media $md_minus
      font-size 16px
      line-height 24px
    &:after
      content ''
      width 16px
      height 16px
      background url('/img/link_icon.svg') no-repeat
      background-size contain
      margin-left 14px
      position absolute
      right -28px
      top calc(50% + 2px)
      transform translateY(-50%)
      opacity 0
      visibility hidden
      transition $transition
      @media $md_minus
        top 50%
    @media $hover
      &:hover
        &:after
          opacity 1
          visibility visible
  &._more
    border-radius 2px
    width 100%
    height 100%
    display inline-flex
    justify-content center
    align-items center
    font-size 24px
    line-height unset
    letter-spacing 0.02em
    color $acsent
    border 2px solid $acsent
    transition $transition
    @media $md_minus
      font-size 16px
    &:hover
      background $acsent
      color $bg
      & svg
        color $white
    & span
      line-height 40px
  &._icon
    position relative
    display flex
    align-items center
    & svg
      max-width 16px
      max-height 16px
      color $acsent
      margin-left 17px
      transition $transition
</style>
