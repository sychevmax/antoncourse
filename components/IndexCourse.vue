<template lang="pug">
  .indexCourse
    .indexCourse__header.gridContainer
      .indexCourse__title
        KinesisContainer(event="scroll" :duration="100")
          KinesisElement(
            tag="div"
            :strength="-50"
            transformOrigin="50% 300%"
            axis="y"
            type="translate")
            h1._acsent(v-html='title')
      .gridContainer__cell._span-4._offset-1._span-md-5._offset-md-1._none-xs
        .indexCourse__meta._desktop(v-if="active")
          .indexCourse__info
            span {{ $t('courseFormatLabel') }}
            samp {{format}}
          .indexCourse__info
            span {{ $t('courseLevelLabel') }}
            samp {{level}}
        .indexCourse__meta._desktop(v-else="active")
          .indexCourse__info._inactive {{date}}
      .gridContainer__cell._span-5._offset-6._span-md-6._offset-md-6._span-sm-4._offset-sm-2._span-xs-2._offset-xs-1
        .indexCourse__img
          KinesisContainer(event="scroll" :duration="100")
            KinesisElement(
              tag="img"
              :src="img"
              :strength="-100"
              transformOrigin="50% 300%"
              axis="y"
              type="translate")

    .indexCourse__bottom.gridContainer
      .gridContainer__cell._span-5._offset-1._span-md-6._offset-md-1._span-sm-4._span-xs-3
        .indexCourse__meta._mobile(v-if="active")
          .indexCourse__info
            span {{ $t('courseFormatLabel') }}
            samp {{format}}
          .indexCourse__info
            span {{ $t('courseLevelLabel') }}
            samp {{level}}
        .indexCourse__meta._mobile(v-else="active")
          .indexCourse__info._inactive {{date}}
        .indexCourse__more._mobile(v-if='active')
          Link(mod="_more" :href="link" :outside="false" :icon="false") {{ $t('courseBtnText') }}
        .indexCourse__text
          p(v-html='text')
      .gridContainer__cell._span-3._offset-6._span-md-3._offset-md-7._span-sm-2._span-xs-3
        .indexCourse__more._desktop(v-if='active')
          Link(mod="_more" :href="link" :outside="false" :icon="false") {{ $t('courseBtnText') }}


</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import Link from '~/components/Link'
export default {
  components: {
    KinesisContainer,
    KinesisElement,
    Link,
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
    link: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      required: false,
    },
    level: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.indexCourse
  position relative
  &__row
    display flex
    margin-top 60px
    @media $xs
      flex-direction column
      margin-top 32px
  &__col
    width 50%
    &:last-child
      padding-left 32px
    @media $sm_minus
      display flex
      flex-direction column
    @media $xs
      width 100%
  &__header
    position relative
    align-items flex-end
  &__title
    position absolute
    top 50%
    transform translateY(-50%)
    left 0
    z-index 3
    @media $sm_minus
      bottom 40px
      top unset
      transform none
    @media $xs
      position static
      margin-bottom 24px
    & h1
      @media $sm_minus
        font-size 48px
        line-height 64px
      @media $xs
        font-size 24px
        line-height 32px
  &__meta
    display flex
    flex-wrap wrap
    justify-content space-between
    &._desktop
      & .indexCourse__info
        @media $sm_minus
          display none
    &._mobile
      display none
      @media  $sm_minus
        display flex
        justify-content flex-start
        width 100%
        height 80px
        align-items center
        margin-bottom 64px
        margin-left 0
      @media $xs
        margin-bottom 40px
        height auto
  &__img
    position relative
    z-index 0
    @media $xs
      padding-left 0
      margin-left -24px
  &__info
    display flex
    flex-direction column
    width calc(50% - 16px)
    @media $sm_minus
      width auto
      margin-right calc( ((100% - (24px * 3)) / 4) + 24px + 24px )
    @media $xs
      margin-right 95px
    &:last-child
      margin-right 0
    & span
      font-size 14px
      line-height 16px
      color $acsent
      margin-bottom 8px
      text-transform uppercase
      height 30px
      display flex
      flex-direction column
      @media $md_minus
        margin-bottom 16px
        height auto
      @media $xs
        font-size 12px
        line-height 14px
        margin-bottom 8px
    & samp
      font-family inherit
      @media $md_minus
        font-size 16px
        line-height 24px
        letter-spacing 0.04em
      @media $xs
        font-size 16px
        line-height 20px
    &._inactive
      width 100%
      font-size 24px
      line-height 32px
      @media $md_minus
        font-size 16px
        line-height 16px
        flex-direction row
      @media $sm_minus
        margin-top 4px
      @media $xs
        font-size 16px
        line-height 24px
        flex-direction column
        margin-top 0
      &:before
        content ''
        width 23px
        height 28px
        background url('/img/index/clock_icon.svg')
        background-size contain
        display block
        margin-bottom 16px
        @media $md_minus
          width 13px
          height 16px
          margin-right 14px
        @media $xs
          margin-right 0
          margin-bottom 8px
  &__text
   opacity 1
  &__more
    height 96px
    width 100%
    @media $sm_minus
      height 80px
    @media $xs
      margin-bottom 24px
      margin-top 40px
    &._desktop
      @media $xs
        display none
    &._mobile
      display none
      max-width 273px
      @media $xs
        display block
        margin-bottom 40px
  &__bottom
    margin-top 80px
    @media $md_minus
      margin-top 64px
    @media $sm_minus
      margin-top 40px
    @media $xs
      margin-top 64px
</style>
