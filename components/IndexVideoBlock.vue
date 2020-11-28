<template lang="pug">
  .indexVideoBlock
    .indexVideoBlock__title.h0(v-text='title' :class='"_"+titleAlign')
    .indexVideoBlock__row(:class="right ? '_right' : '_left'")
      .indexVideoBlock__col._video(:class="right ? '_right' : '_left'")
        .indexVideoBlock__video
          .indexVideoBlock__play
            svg-icon(name="video_play")
          silent-box(:image='video')
      .indexVideoBlock__col._content(:class="right ? '_left' : '_right'")
        .indexVideoBlock__text(:class="right ? '_left' : '_right'")
          p(v-html='text')
</template>

<script>
import VueSilentbox from 'vue-silentbox'
export default {
  components: {
    VueSilentbox,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    videoSrc: {
      type: String,
      required: true,
    },
    previewSrc: {
      type: String,
      required: true,
    },
    right: {
      type: Boolean,
      required: true,
    },
    titleAlign: {
      type: String,
      required: true,
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
}
</script>

<style lang="stylus" scoped>
.indexVideoBlock
  position relative
  &__title
    position relative
    top 46px
    z-index 3
    @media $sm_minus
      top 24px
    @media $xs
      top 16px
    &._left
      text-align left
      @media $sm_minus
        position relative
        left -60px
      @media $xs
        left -24px
    &._center
      text-align center
      @media $md_minus
        text-align right
    &._right
      text-align right
  &__row
    display flex
    align-items center
    @media $sm_minus
      flex-wrap wrap
    &._right
      justify-content flex-end
    &._left
      justify-content flex-start
  &__col
    display flex
    @media $sm_minus
      width 100%
    &._video
      width 50%
      max-width 640px
      flex-shrink 0
      @media $md_minus
        width 58.5%
      @media $sm_minus
        width 100%
        order 1
      &._left
        justify-content flex-start
        order 1
        @media $sm_minus
          order 1
      &._right
        justify-content flex-end
        order 2
        @media $sm_minus
          order 1
    &._content
      @media $sm_minus
        order 2
      &._left
        order 1
        @media $sm_minus
          order 2
      &._right
        order 2
        @media $sm_minus
          order 2
  &__video
    width 100%
    max-width 640px
    //height 387px
    position relative
    display flex
    &._right
      order 2
    &:hover
      cursor pointer
      & .indexVideoBlock__play svg
        color $acsent
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
    & svg
      width 100%
      height 100%
      color transparent
      transition $transition

  &__text
    width 100%
    max-width 302px
    @media $sm_minus
      margin-top 64px
    @media $xs
      margin-top 24px
      max-width 176px
    &._right
      order 1
      margin-left 135px
      @media $md_minus
        margin-left 104px
      @media $sm_minus
        margin-left 0
        margin-right auto
      @media $xs
        margin-right 0
        margin-left auto
    &._left
      margin-right 144px
      @media $md_minus
        margin-right 96px
      @media $sm_minus
        margin-right 0
        margin-left auto
      @media $xs
        margin-right auto
        margin-left 0
</style>
