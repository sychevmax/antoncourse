<template lang="pug">
  .wrapper(ref="wrapper" @scroll.passive='handleScroll')
    Header
    Nuxt
    UpToTop
</template>

<script>
import UpToTop from '@/components/UpToTop'
import Header from '@/components/Header'
export default {
  components: {
    UpToTop,
    Header,
  },
  methods: {
    handleScroll(event) {
      console.log(event.target.scrollTop)
    },
  },
  mounted() {
    this.$root.$on('scrollToTop', (da) => {
      this.$scrollTo(this.$refs.wrapper, 600)
    })
  },
}
</script>

<style lang="stylus"></style>
