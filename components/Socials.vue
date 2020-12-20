<template lang="pug">
  .socials
    .socials__item
      Link(outside href='https://www.instagram.com/antonovpsy/' mod='_socials') {{ $t('socials.instagram') }}
    .socials__item
      Link(outside href='https://www.instagram.com/antonantonovgroup/' mod='_socials') {{ $t('socials.support') }}
    .socials__item
      Link(outside href='https://www.youtube.com/channel/UCsIsJO8scV9ULL2bc5IqroA' mod='_socials') {{ $t('socials.youtube') }}
</template>

<script>
import Link from '~/components/Link'
export default {
  components: {
    Link,
  },
}
</script>

<style lang="stylus" scoped>
.socials
  display flex
  justify-content space-between
  width 100%
  @media $xs
    flex-direction column
  &__item
    color $acsent
    font-size 24px
    line-height 32px
    margin-right 80px
    @media $md_minus
      margin-right 72px
      line-height 26px
    @media $sm_minus
      margin-right 48px
      line-height 24px
    @media $xs
      margin-right 0
    &:last-child
      margin-right 0
</style>
