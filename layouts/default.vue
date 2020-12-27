<template lang="pug">
  .wrapper(ref="wrapper" @scroll.passive='handleScroll' :class="openMenu ? '_overflow' : ''")
    Preloader
    MobileMenu(:open="openMenu")
    Header
    Nuxt
    .overlay-right
    .overlay-left
    UpToTop
</template>

<script>
import UpToTop from '@/components/UpToTop'
import Header from '@/components/Header'
import MobileMenu from '@/components/MobileMenu'
import Preloader from '@/components/Preloader'
export default {
  components: {
    UpToTop,
    Header,
    MobileMenu,
    Preloader,
  },
  data() {
    return {
      openMenu: false,
      opeMenuFromBurger: false,
      overflowBody: true,
    }
  },
  mounted() {
    this.$root.$on('scrollToTop', () => {
      this.$scrollTo(this.$refs.wrapper, 600)
    })
    this.$root.$on('openMenu', (value) => {
      this.openMenu = value
      const body = document.querySelector('body')
      if (this.openMenu) {
        body.style.overflow = 'hidden'
      } else {
        body.style.overflow = 'auto'
      }
    })
    this.unlockBody()
  },
  methods: {
    unlockBody() {
      const page = this.$route.path
      let interval = 0
      if (page === '/') {
        interval = 4500
      } else {
        interval = 3000
      }
      setTimeout(() => {
        this.overflowBody = false
      }, interval)
    },
  },
  head() {
    return {
      bodyAttrs: {
        class: this.overflowBody ? '_overflow' : '',
      },
    }
  },
}
</script>

<style lang="stylus">
.wrapper
  &._overflow
    overflow hidden
</style>
