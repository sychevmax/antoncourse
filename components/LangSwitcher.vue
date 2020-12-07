<template lang="pug">
  .langSwitcher(@click="toggleLang" v-click-outside="closeLang" :class="openSwitcher ? '_active' : ''")
    .langSwitcher__icon
      svg-icon(name="arrow")
    .langSwitcher__label(v-if="!openSwitcher") {{activeLang}}
    nuxt-link.langSwitcher__item(:to="switchLocalePath('ru')" v-if="openSwitcher" @click.native="selectLang('ru')" :class="activeLang === 'ru' ? '_order1' : '_order2'") RU
    nuxt-link.langSwitcher__item(:to="switchLocalePath('en')" v-if="openSwitcher" @click.native="selectLang('en')" :class="activeLang === 'en' ? '_order1' : '_order2'") EN

</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  components: {
    ClickOutside,
  },
  data() {
    return {
      openSwitcher: false,
      activeLang: this.$i18n.locale,
    }
  },
  methods: {
    toggleLang() {
      if (this.openSwitcher) {
        this.openSwitcher = false
      } else {
        this.openSwitcher = true
      }
    },
    selectLang(value) {
      this.activeLang = value
    },
    closeLang() {
      this.openSwitcher = false
    },
  },
  directives: {
    ClickOutside,
  },
}
</script>

<style lang="stylus" scoped>
.langSwitcher
  width 48px
  height 48px
  border-radius 50%
  border 1px solid $charkGrey
  color $charkGrey
  display flex
  flex-direction column
  padding 16px 0 0 7px
  box-sizing border-box
  position relative
  &:hover
    cursor pointer
  &._active
    border-radius 32px
    height 72px
    & .langSwitcher__icon
      & svg
        transform rotate(180deg)
  &__icon
    width 12px
    height 12px
    position absolute
    right 4px
    top 16px
    display flex
    & svg
      width 12px
      height 12px
      transition $transition
  &__label
    font-size 14px
    line-height 16px
    letter-spacing 0.05em
    height 18px
    text-transform uppercase
    pointer-events none
  &__item
    font-size 14px
    line-height 16px
    letter-spacing 0.05em
    margin-bottom 4px
    height 18px
    text-transform uppercase
  &__item
    transition $transition
    &._order1
      order 1
    &._order2
      order 2
    &:hover
      color $acsent
</style>
