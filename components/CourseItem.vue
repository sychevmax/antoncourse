<template lang="pug">
  nuxt-link.coursesItem(:to="link ? link : ''" @mousemove.native="itemMove" @mouseleave.native="itemLeave" :class="!active ? '_disabled' : ''")
    .coursesItem__titleWrap
      .coursesItem__title(v-html="title")
    .coursesItem__imgWrap
      .coursesItem__img(ref="img")
        img(:src="imgSrc")
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
  },
  methods: {
    itemMove(e) {
      const img = this.$refs.img
      if (img) {
        const r = img.getBoundingClientRect()
        img.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
        img.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
      }
    },
    itemLeave(e) {
      const img = this.$refs.img
      if (img) {
        img.style.setProperty('--x', 0)
        img.style.setProperty('--y', 0)
      }
    },
  },
}
</script>

<style lang="stylus">
:root
  --x 0
  --y 0
  --d 50
  --base-duration: 600ms;
  --base-ease: cubic-bezier(0.25, 0.46, 0.45, 0.84);
</style>

<style lang="stylus">
.coursesItem
  position relative
  padding 58px 0 85px
  display flex
  justify-content flex-end
  @media $md_minus
    padding 32px 0 72px
  @media $sm_minus
    justify-content flex-start
    padding 0
  &:hover
    & .coursesItem__img
      transform scale(1.025) translate(calc(var(--x) / var(--d) * 1px), calc(var(--y) / var(--d) * 1px))
  &._disabled
    opacity 0.5
    pointer-events none
  &__titleWrap
    position absolute
    top 50%
    left 0
    transform translateY(-50%)
    text-transform uppercase
    font-weight 800
    font-size 24px
    line-height 36px
    letter-spacing 0.04em
    color $acsent
    pointer-events none
    z-index 3
    @media $md_minus
      top unset
      transform none
      bottom 99px
    @media $sm_minus
      position static
      font-size 48px
      line-height 64px
      letter-spacing 0.03em
    @media $xs
      font-size 24px
      line-height 32px
      letter-spacing 0.05em
  &__title
    & div
      display flex
      overflow hidden
      z-index 9
      position relative
    & span
      display block
  &__imgWrap
    width calc(100% - 80px - 32px)
    margin-left auto
    position relative
    z-index 2
    @media $md_minus
      width calc(100% - 56px - 24px)
    @media $sm_minus
      display none
  &__img
    pointer-events none
    transition transform calc(var(--base-duration) / 4) var(--base-ease)
    will-change transform
  &__link
    background gray
    position absolute
    top 0
    left 0
    height 100%
    width 100%
    z-index 2
    opacity 0.2
</style>
