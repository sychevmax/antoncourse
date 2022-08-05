<template>
  <client-only>
    <vue-final-modal v-slot="{ close }" :name="name" :esc-to-close="true" :z-index-base="99999" v-bind="$attrs" :classes="['popup']" :overlay-class="['popup-overlay']" content-class="popup-content" v-on="$listeners" @closed="closed">
      <div class="popup__content">
        <slot></slot>
        <button class="popup__button _close" @click="close">
          <svg-icon name="icon_close"></svg-icon>
        </button>
      </div>
      <div class="popup__controls"></div>
    </vue-final-modal>
  </client-only>
</template>

<script>
export default {
  name: 'Popup',
  components: {},
  props: {
    mod: {
      type: [String, Array],
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    closed() {
      document.querySelector('body').style.overflow = 'auto'
      this.$emit('closed')
    },
  },
}
</script>

<style lang="stylus">
.vfm--overlay.popup-overlay
  background rgba(25, 39, 55, 0.8)!important
  backdrop-filter blur(8px)
</style>

<style scoped lang="stylus">
::v-deep .popup
  display flex
  justify-content center
  align-items center
  width 100%
  height 100%
  &__content
    flex-grow 1
    overflow-y auto
    display flex
    position relative
  &__controls
    display flex
    position absolute
    right 40px
    top 40px
    z-index 1
    @media $mdMinus
      right 32px
      top 32px
    @media $xs
      right 16px
      top 16px
    @media print
      display none
  &__button
    pointer-events all
    &:not(:last-of-type)
      margin-right 16px
    &._close
      display flex
      position absolute
      right 16px
      top 16px
      &:hover
        cursor pointer
      & svg
        width 24px
        height 24px


::v-deep .popup-content
  //position relative
  display flex
  flex-direction column
  max-height 100%
  margin 0
  background transparent
  padding 0
  width 400px
  //height 400px
  @media $xs
    padding 0
  @media print
    padding 0
</style>

<style scoped>
.dark-mode div::v-deep .popup-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>
