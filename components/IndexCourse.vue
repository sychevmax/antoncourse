<template lang="pug">
  .indexCourse
    .indexCourse__header
      .indexCourse__title
        KinesisContainer(event="scroll" :duration="100")
          KinesisElement(
            tag="div"
            :strength="-50"
            transformOrigin="50% 300%"
            axis="y"
            type="translate")
            h1._acsent(v-html='title')
      .indexCourse__meta._desktop(v-if="active")
        .indexCourse__info
          span {{ $t('courseFormatLabel') }}
          samp {{format}}
        .indexCourse__info
          span {{ $t('courseLevelLabel') }}
          samp {{level}}
      .indexCourse__meta._desktop(v-else="active")
        .indexCourse__info._inactive {{date}}

      .indexCourse__img
        KinesisContainer(event="scroll" :duration="100")
          KinesisElement(
            tag="img"
            :src="img"
            :strength="-100"
            transformOrigin="50% 300%"
            axis="y"
            type="translate")

    .indexCourse__row
      .indexCourse__col
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
      .indexCourse__col
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
    display flex
    align-items flex-end
    @media $xs
      flex-direction column
      align-items flex-start
  &__title
    position absolute
    top 50%
    transform translateY(-50%)
    left 0
    z-index 3
    @media $md_minus
      top unset
      bottom 0
      transform none
    @media $sm_minus
      bottom 40px
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
    width 50%
    display flex
    flex-wrap wrap
    margin-left 112px
    &._desktop
      & .indexCourse__info
        @media $md_minus
          display none
    &._mobile
      display none
      @media $md_minus
        display flex
        width 100%
        margin-bottom 84px
        margin-left 80px
      @media $sm_minus
        margin-left 0
        margin-bottom 68px
      @media $xs
        margin-bottom 0
  &__img
    width 60%
    padding-left 32px
    position relative
    z-index 0
    @media $md_minus
      width 64%
    @media $sm_minus
      width 192%
    @media $xs
      width 100%
      padding-left 0
      margin-left -24px
  &__info
    display flex
    flex-direction column
    margin-right 104px
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
      @media $xs
        font-size 12px
        line-height 14px
    & samp
      font-family inherit
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
      @media $xs
        font-size 16px
        line-height 24px
        flex-direction column
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
  &__text
    margin-left 113px
    margin-right 46px
    @media $md_minus
      width 85%
      margin-left 80px
      margin-right 0
    @media $sm_minus
      margin-left 0
      width calc(400% / 3)
    @media $xs
      width 100%
      margin-top 40px
  &__more
    height 96px
    width 100%
    max-width 302px
    @media $md_minus
      max-width 215px
    @media $sm_minus
      max-width 191px
      margin-left auto
    @media $xs
      height 80px
      max-width 273px
      margin-bottom 24px
      margin-left 0
      margin-top 40px
    &._desktop
      @media $xs
        display none
    &._mobile
      display none
      @media $xs
        display block
</style>
