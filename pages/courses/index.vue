<template lang="pug">
  .courses.container
    .courses__inner
      .gridContainer
        .gridContainer__cell._span-4._span-md-4._span-sm-6._span-xs-3
          .courses__item
            CourseItem(
              imgSrc="/img/courses/1.jpg"
              :title="$t('pages.courses.openPsychosomatics.titleFirstScreen')"
              :link="localePath('/courses/open-psychosomatics')"
              active
            )
        .gridContainer__cell._span-4._span-md-4._span-sm-6._span-xs-3
          .courses__item
            CourseItem(
              imgSrc="/img/courses/2.jpg"
              :title="$t('pages.courses.practicalPsychosomatics.titleFirstScreen')"
              link="https://projects.antonantonov.com/2step"
              active
              outside
            )
        .gridContainer__cell._span-4._span-md-4._span-sm-6._span-xs-3
          .courses__item
            CourseItem(
              imgSrc="/img/courses/3.jpg"
              :title="$t('pages.courses.neotericPsychosomatics.titleFirstScreen')"
              link="https://study.antonantonov.com/op3?utm_source=course_aa&utm_medium=referral&utm_campaign=courses_screen"
              active
              outside
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
  head() {
    return {
      title: this.$t('pages.home.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.home.seo.description'),
        },
      ],
    }
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

<style lang="stylus">
.courses
  margin-top 14px
  &._leave
    animation translate-out 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.84)
  &._enter
    animation translate-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.84)
    & .courses__inner
      opacity 1
      animation none
    & .coursesItem__title div span
      animation-name translateFirstScreen
      animation-timing-function ease
      animation-duration 0.7s
      animation-delay 0.2s
      animation-fill-mode forwards
      transform translateY(100%)
    & .coursesItem__img
      opacity 0
      animation-name animPhoto
      animation-timing-function ease
      animation-duration 1s
      animation-delay 0.2s
      animation-fill-mode forwards
  @media $sm_minus
    margin-top 96px
  @media $sm_minus
    margin-top 74px
  &__item
    @media $sm_minus
      margin-bottom 61px
    @media $xs
      margin-bottom 0
  &__inner
    animation animPhoto 2s cubic-bezier(0.25, 0.46, 0.45, 0.84) 3.5s 1 normal forwards
    opacity 0
</style>
