<template lang="pug">
  .courseFromWhomImage
    .gridContainer
      .gridContainer__cell._span-5._offset-1._span-md-6._offset-md-1._span-sm-4
        .courseFromWhomImage__text
          p Этот курс для тех, кто готов заглянуть внутрь себя или помочь это сделать другому. Кто хочет ответить на самые болезненные вопросы, посмотреть правде в глаза и расстаться с прошлым: болезнями, разрушающими установками, негативным поведением и эмоциями.
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
.courseFromWhomImage
  //background url('/img/course_psy/from_whom_img.jpg') no-repeat
  background linear-gradient(0deg, rgba(43, 43, 43, 0.1), rgba(43, 43, 43, 0.1)), url('/img/course_psy/from_whom_img.jpg') no-repeat
  mix-blend-mode normal
  background-position center
  background-size cover
  padding 86px 64px 154px
  min-height 584px
  width calc(100% + 128px)
  margin-left -64px
  @media $md_minus
    padding 71px 44px 145px
    width calc(100% + 88px)
    margin-left -44px
  @media $sm_minus
    padding 71px 64px 104px
    width calc(100% + 128px)
    margin-left -64px
    background linear-gradient(0deg, rgba(43, 43, 43, 0.1), rgba(43, 43, 43, 0.1)), url('/img/course_psy/from_whom_img_sm.jpg') no-repeat
  @media $xs
    width calc(100% + 48px)
    margin-left -24px
    padding 42px 24px 184px
    min-height 480px
    background-position 80% bottom
  &__text
    color $bg
</style>
