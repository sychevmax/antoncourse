<template lang="pug">
  .courses.container
    // BackToHome
    .gridContainer
      .gridContainer__cell._span-4._span-md-4._span-sm-6._span-xs-3
        .courses__item
          CourseItem(
            imgSrc="/img/courses/1.jpg"
            :title="$t('pages.courses.openPsychosomatics.title')"
            :link="localePath('/courses/open-psychosomatics')"
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
  transition: {
    afterEnter(el) {
      el.classList.add('_enter')
    },
    beforeLeave(el) {
      el.classList.remove('_enter')
    },
    leave(el) {
      el.classList.add('_leave')
    },
  },
}
</script>

<style scoped lang="stylus">
.courses
  margin-top 14px
  &._leave
    animation translate-out 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.84)
  &._enter
    animation translate-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.84)
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
