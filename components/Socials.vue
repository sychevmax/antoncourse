<template lang="pug">
  .socials
    .socials__item
      Link(outside href='#' mod='_socials') инстаграм
    .socials__item
      Link(outside href='#' mod='_socials') группа помощи
    .socials__item
      Link(outside href='#' mod='_socials') ютуб канал
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
  //justify-content center
  width auto
  @media $xs
    flex-direction column
  &__item
    color $acsent
    font-size 24px
    line-height 32px
    margin-right 80px
    @media $md_minus
      margin-right 72px
    @media $sm_minus
      margin-right 48px
    @media $xs
      margin-right 0
    &:last-child
      margin-right 0
</style>
