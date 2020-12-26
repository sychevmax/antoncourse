<template lang="pug">
  .accordion-item(:id="groupId + '-' + item.id" :class="{'is-active': item.active}")
    dt.accordion-item-title
      button.accordion-item-trigger(@click='toggle')
        .accordion-item-title-text {{item.title}}
        span.accordion-item-trigger-icon
          svg-icon(name="arrow_accordion")
    transition(name='accordion-item' @enter='startTransition' @after-enter='endTransition' @before-leave='startTransition' @after-leave='endTransition')
      dd.accordion-item-details(v-if='item.active')
        .accordion-item-details-inner(v-html='item.details')
</template>

<script>
export default {
  props: ['item', 'multiple', 'groupId'],
  methods: {
    toggle(event) {
      if (this.multiple) this.item.active = !this.item.active
      else {
        this.$parent.$children.forEach((item, index) => {
          if (item.$el.id === event.currentTarget.parentElement.parentElement.id) {
            item.item.active = !item.item.active
          } else {
            item.item.active = false
          }
        })
      }
    },

    startTransition(el) {
      el.style.height = el.scrollHeight + 'px'
    },

    endTransition(el) {
      el.style.height = ''
    },
  },
}
</script>

<style lang="stylus">
.accordion-item-title
  position relative
  &-text
    font-size 24px
    line-height 36px
    font-family 'ObjectSans'
    max-width calc(100% - 32px - 82px)
    @media $md_minus
      max-width calc(100% - 24px - 56px)
    @media $sm_minus
      max-width calc(100% - 32px - 82px)
    @media $xs
      font-size 16px
      line-height 20px
      max-width calc(100% - 64px)

.accordion-item-trigger
  width 100%
  text-align left
  background-color transparent
  border none
  padding 24px 0 0 0
  &:hover
    cursor pointer

.accordion-item-trigger-icon
  display block
  position absolute
  top 0
  right 0
  bottom 0
  margin auto
  width 32px
  height 32px
  transition transform 0.2s ease
  & svg
    width 100%
    height 100%
    color $charkGrey

.accordion-item
  border-top 2px solid $borderSecond
  padding 0 0 40px 0
  &:last-child
    border-bottom 2px solid $borderSecond
  @media $xs
    border-width 1px
  &.is-active
    & .accordion-item-trigger-icon
      transform rotate(180deg)
      & svg
        color $acsent

.accordion-item-enter-active, .accordion-item-leave-active
  will-change height
  transition height 0.2s ease

.accordion-item-enter, .accordion-item-leave-to
  height 0 !important
.accordion-item-details
  overflow hidden
  background-color whitesmoke
  margin-top 16px
  font-size 16px
  &-inner
    & p
      font-size 16px
      line-height 24px
      @media $xs
        font-size 12px
        line-height 20px
</style>
