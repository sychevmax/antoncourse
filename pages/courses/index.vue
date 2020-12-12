<template lang="pug">
  .courses.container
    // BackToHome
    .gridContainer
      .gridContainer__cell._span-4._span-md-4._span-sm-6._span-xs-3
        .courses__item
          CourseItem(
            imgSrc="/img/courses/1.jpg"
            :title="$t('pages.courses.openPsychosomatics.title')"
            link="/courses/open-psychosomatics"
            active
          )
      .gridContainer__cell._span-4._span-md-4._span-sm-6._span-xs-3
        .courses__item
          CourseItem(
            imgSrc="/img/courses/2.jpg"
            :title="$t('pages.courses.practicalPsychosomatics.title')"
            :active="false"
          )
      .gridContainer__cell._span-4._span-md-4._span-sm-6._span-xs-3
        .courses__item
          CourseItem(
            imgSrc="/img/courses/3.jpg"
            :title="$t('pages.courses.neotericPsychosomatics.title')"
            :active="false"
          )

</template>

<script>
import BackToHome from '@/components/BackToHome'
import CourseItem from '@/components/CourseItem'
export default {
  components: {
    CourseItem,
    BackToHome,
  },
}
</script>

<style scoped lang="stylus">
.courses
  margin-top 14px
  @media $sm_minus
    margin-top 96px
  @media $sm_minus
    margin-top 74px
  &__item
    @media $sm_minus
      margin-bottom 61px
    @media $xs
      margin-bottom 0
</style>
