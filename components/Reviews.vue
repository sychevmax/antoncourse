<template lang="pug">
  VueSlickCarousel.reviews(v-bind="settings")
    .reviewsItem(v-for="item in prepareData" :key="item.id")
      .reviewsItem__inner.gridContainer
        .reviewsItem__icon.gridContainer__cell._span-2._span-md-2._span-sm-1
          img(src="/img/about/quotes_icon.svg")
        .reviewsItem__content.gridContainer__cell._span-7._offset-2._span-md-7._offset-md-2._span-sm-6._span-xs-3
          .reviewsItem__text(v-html="item.text")
          a.reviewsItem__link(:href="item.instagramLink" target="_blank")
            img(:src="item.img")
            span {{ item.instagramName }}
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    VueSlickCarousel,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    texts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      prepareData: [],
      settings: {
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        dotsClass: 'reviews-dots',
      },
    }
  },
  created() {
    this.data.map((item, index) => {
      item.text = this.texts[index].text
      this.prepareData.push(item)
    })
  },
}
</script>

<style lang="stylus">
.reviews
  position relative
  & .slick-arrow
    width 80px
    height 80px
    border 2px solid $charkGrey
    background transparent
    border-radius 50%
    display flex !important
    justify-content center
    align-items center
    z-index 10
    bottom -200px
    top unset
    transform none
    @media $sm_minus
      width 64px
      height 64px
      bottom -134px
    @media $xs
      top unset
      bottom -8px
      border 1px solid $charkGrey
    &:before
      content ''
      background url('/img/arrow_back.svg') no-repeat
      background-size contain
      width 32px
      height 32px
      display block
      @media $sm_minus
        width 19px
        height 19px
      @media $xs
        width 26px
        height 26px
    &.slick-prev
      right 128px
      left unset
      @media $sm_minus
        right 112px
      @media $xs
        display none !important
    &.slick-next
      right 0
      @media $xs
        right 0
      &:before
        transform rotate(180deg)
  &-dots
    display flex !important
    justify-content flex-start
    position absolute
    bottom -168px
    left 0
    @media $sm_minus
      bottom -112px
    @media $xs
      display none !important
    & li
      & button
        font-size 0
        width 16px
        height 16px
        border 2px solid $charkGrey
        background transparent
        border-radius 50%
        margin-right 23px
      &.slick-active
        & button
          border-color $acsent
.reviewsItem
  position relative
  border none
  outline none
  &__inner
    grid-template-columns repeat(10,minmax(0,1fr)) !important
    @media $sm_minus
      grid-template-columns repeat(6,minmax(0,1fr)) !important
    @media $xs
      grid-template-columns repeat(3,minmax(0,1fr)) !important
  &__icon
    @media $sm_minus
      display none
  &__text
    & p
      font-size 24px
      line-height 36px
      @media $xs
        font-size 16px
        line-height 24px
        letter-spacing 0.02em
  &__link
    font-size 24px
    line-height 36px
    color $acsent
    display flex
    align-items center
    margin-top 24px
    @media $md_minus
      margin-top 33px
    @media $sm_minus
      margin-top 40px
      font-size 16px
      line-height 26px
    @media $xs
      margin-top 48px
      line-height 24px
    & img
      height 64px
      width 64px
      object-fit contain
      @media $sm_minus
        height 48px
        width 48px
    & span
      margin-left 16px
</style>
