<template lang="pug">
  .aboutVideo
    .aboutVideo__video(@mousemove="itemMove" @mouseleave="itemLeave" ref="img" :class="hoverEffect ? '_effect' : ''")
      .aboutVideo__play(:class="mod")
        svg-icon(name="video_play")
      silent-box(:image='video')
        template(v-slot:silentbox-item="{ silentboxItem }" v-if="parallax")
          KinesisContainer(event="scroll" :duration="100")
            KinesisElement(
              tag="div"
              :strength="parallax"
              transformOrigin="50% 300%"
              axis="y"
              type="translate")
              img(:src="silentboxItem.thumbnail" :width="silentboxItem.thumbnailWidth" :height="silentboxItem.thumbnailHeight")
        template(v-slot:silentbox-item="{ silentboxItem }" v-else)
          img(:src="silentboxItem.thumbnail" :width="silentboxItem.thumbnailWidth" :height="silentboxItem.thumbnailHeight")
    .aboutVideo__title(v-if='title') {{title}}
</template>

<script>
import VueSilentbox from 'vue-silentbox'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
export default {
  components: {
    VueSilentbox,
    KinesisContainer,
    KinesisElement,
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    videoSrc: {
      type: String,
      required: true,
    },
    previewSrc: {
      type: String,
      required: true,
    },
    hoverEffect: {
      type: Boolean,
      required: false,
    },
    mod: {
      type: String,
      required: false,
    },
    parallax: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      video: {
        src: this.videoSrc,
        thumbnail: this.previewSrc,
      },
    }
  },
  methods: {
    itemMove(e) {
      const img = this.$refs.img
      const r = img.getBoundingClientRect()
      img.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
      img.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
    },
    itemLeave(e) {
      const img = this.$refs.img
      img.style.setProperty('--x', 0)
      img.style.setProperty('--y', 0)
    },
  },
}
</script>

<style lang="stylus">
.aboutVideo
  position relative
  &:hover
    cursor pointer
    & .aboutVideo__play svg
      color $acsent
  &__video
    position relative
    display flex
    //will-change transform
    &._effect
      & .silentbox-item
        transition transform calc(var(--base-duration) / 4) var(--base-ease)
        &:hover
          transform scale(1.025) translate(calc(var(--x) / var(--d) * 1px), calc(var(--y) / var(--d) * 1px))
  &__title
    font-size 24px
    line-height 36px
    margin-top 32px
    color $acsent
    font-weight 800
    letter-spacing 0.02em
    text-transform uppercase
    @media $sm_minus
      line-height 40px
      margin-top 40px
      letter-spacing 0.03em
    @media $xs
      font-size 16px
      line-height 32px
      letter-spacing 0.04em
      margin-top 24px
  &__play
    width 112px
    height 112px
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    z-index 2
    pointer-events none
    @media $xs
      width 64px
      height 64px
    &._symptoms
      width 80px
      height 80px
      @media $sm_minus
        width 64px
        height 64px
      @media $xs
        width 40px
        height 40px
    & svg
      width 100%
      height 100%
      color transparent
      transition $transition
  & #silentbox-overlay__embed
    height 45vw
    max-height 80%
  & #silentbox-gallery
    width 100%
  & .silentbox-item
    width 100%
    & img
      width 100%
</style>
