<template lang="pug">
.preloader(:class="isIndexPage ? '_index' : ''")
  .preloader__inner.container
    .preloader__content(ref="content" :style="left" :class="isIndexPage ? '_index' : ''" v-html="$t('preloaderText')")
</template>

<script>
export default {
  data() {
    return {
      left: `--left:0px`,
      isIndexPage: false,
    }
  },
  mounted() {
    this.$root.$on('titleReady', (left) => {
      const content = this.$refs.content
      if (content) {
        this.isIndexPage = true
        this.left = `--left:${left}px`
        console.log('left', this.left)
      } else {
        this.isIndexPage = false
        this.left = `--left:0px`
      }
    })
  },
}
</script>

<style lang="stylus">
:root
  --left 0
</style>

<style lang="stylus">
@keyframes preloaderAnimation
  0%
    opacity 1
  100%
    opacity 0
    visibility hidden
    pointer-events none
@keyframes titleAnimation
  0%
    transform translateY(134px)
    opacity 0
    clip-path inset(100% 0 0 0)
  100%
    transform translateY(0)
    opacity 1
    clip-path: inset(0 0 0 0)

@keyframes wordsAnimation1440
  0%
    left 50%
    transform translateX(-50%)
  100%
    left calc(var(--left) + 64px)
    transform translateX(0)
@keyframes wordsAnimation1024
  0%
    left 50%
    transform translateX(-50%)
  100%
    left calc(var(--left) + 44px)
    transform translateX(0)
@keyframes wordsAnimation768
  0%
    left 50%
    transform translateX(-50%)
  100%
    left calc(var(--left) + 64px)
    transform translateX(0)
@keyframes wordsAnimation320
  0%
    left 50%
    transform translateX(-50%)
  100%
    left calc(var(--left) + 24px)
    transform translateX(0)

.preloader
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background rgba(255,255,255,1)
  z-index 600
  display flex
  animation preloaderAnimation 1s ease-out 3s 1 normal forwards
  &._index
    animation preloaderAnimation 1s ease-out 4s 1 normal forwards
  &__inner
    margin-top calc(136px + 24px)
    width 100%
    position relative
    @media $md_minus
      margin-top calc(89px + 24px)
      width calc(100% - 24px + 56px)
    @media $sm_minus
      margin-top calc(80px + 24px)
    @media $xs
      margin-top calc(72px + 24px)
  &__content
    position absolute
    top 0
    left 50%
    transform translateX(-50%)
    &._index
      animation wordsAnimation1440 1.5s cubic-bezier(0.13, 0.57, 0.01, 0.99) 2.5s 1 normal forwards
      @media $md_minus
        animation wordsAnimation1024 1.5s cubic-bezier(0.13, 0.57, 0.01, 0.99) 2.5s 1 normal forwards
      @media $sm_minus
        animation wordsAnimation768 1.5s cubic-bezier(0.13, 0.57, 0.01, 0.99) 2.5s 1 normal forwards
      @media $xs
        animation wordsAnimation320 1.5s cubic-bezier(0.13, 0.57, 0.01, 0.99) 2.5s 1 normal forwards
  &__text
    font-size 112px
    text-transform uppercase
    line-height 134px
    font-weight 800
    letter-spacing 0.03em
    color $acsent
    z-index 9
    position relative
    //background $black
    clip-path inset(0 0 0 0)
    transform translateY(134px)
    opacity 0
    animation-name: titleAnimation
    animation-timing-function cubic-bezier(0.13, 0.57, 0.01, 0.99)
    animation-duration 2s
    animation-delay 1s
    animation-fill-mode forwards
    @media $md_minus
      font-size 80px
      line-height 96px
    @media $xs
      font-size 40px
      line-height 48px
    &._first,
    &._second
      color transparent
      -webkit-text-stroke-width 2px
      -webkit-text-stroke-color $acsent
      @media $xs
        -webkit-text-stroke-width 1px
</style>
