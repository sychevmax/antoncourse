<template lang="pug">
.course
  BackToHome(page="course")
  .course__header
    .courseHeader.container
      .courseHeader__top.gridContainer
        .courseHeader__title.gridContainer__cell._span-xs-3._order-xs-2(v-html='$t("pages.courses.adultPsychosomatics.titleFirstScreen")')
        .gridContainer__cell._span-2._offset-1._span-md-2._offset-md-1._span-sm-2._order-sm-2._span-xs-1
          .courseHeader__info
            span {{ $t('courseFormatLabel') }}
            samp {{ $t("pages.courses.adultPsychosomatics.format") }}
        .gridContainer__cell._span-2._offset-3._span-md-2._offset-md-3._span-sm-2._order-sm-2._span-xs-2
          .courseHeader__info._rightXS
            span {{ $t('courseLevelLabel') }}
            samp {{ $t("pages.courses.adultPsychosomatics.level") }}
        .gridContainer__cell._span-6._offset-6._span-md-7._span-sm-4._order-sm-1._offset-sm-2._span-xs-3._order-xs-1
          .courseHeader__img
            img(src='/img/course_third/course_header.jpg')
      .courseHeader__bottom.gridContainer
        .gridContainer__cell._span-5._offset-1._span-md-6._offset-md-1._span-xs-3._order-xs-1
          .courseHeader__text
            p(v-html='$t("pages.courses.adultPsychosomatics.text")')
        .gridContainer__cell._span-3._offset-1._span-md-4._offset-md-1._span-sm-3._span-xs-3._order-xs-3._offset-xs-0
          .courseHeader__btn
            Link(mod='_more _icon' href="https://study.antonantonov.com/op3_freelesson" outside icon @click.native.prevent="showFirstLessonPopUp = true") {{ $t('courseBtnFreeLessonText') }}
        .gridContainer__cell._span-2._offset-5._span-md-2._offset-md-6._span-sm-2._offset-sm-4._centered._span-xs-2._order-xs-2
          .courseHeader__info._price
            span {{ $t('coursePriceLabel') }}
            samp {{ $t("pages.courses.adultPsychosomatics.price") }}
  .course__fromWhom
    .courseFromWhom
      .courseFromWhom__list.gridContainer.container
        .courseFromWhom__title.gridContainer__cell._span-6._offset-1._span-md-9._offset-md-1._span-sm-6._offset-sm-0._span-xs-3 {{ $t('pages.courses.adultPsychosomatics.fromWhom.title') }}
        .courseFromWhom__col.gridContainer__cell._span-4._offset-2._span-md-5._offset-md-1._span-sm-5._offset-sm-1._span-xs-2._offset-xs-1
          .courseFromWhom__text.aboutBorderText._course(v-for='item in $t("pages.courses.adultPsychosomatics.fromWhom.contentCol1")' :key="item.id" v-html="item.body")
        .courseFromWhom__col._second.gridContainer__cell._span-4._offset-7._span-md-5._offset-md-7._span-sm-5._offset-sm-1._span-xs-2._offset-xs-1
          .courseFromWhom__text.aboutBorderText._course(v-for='item in $t("pages.courses.adultPsychosomatics.fromWhom.contentCol2")' :key="item.id" v-html="item.body")
  .course__fromWhomImage
    .courseFromWhomImage
      .courseFromWhomImage__bg
        KinesisContainer(event="scroll" :duration="100")
          KinesisElement(
            tag="div"
            :strength="-240"
            transformOrigin="50% 300%"
            axis="y"
            type="translate")
            picture
              source( media="(max-width: 1023px)" srcset="/img/course_third/from_whom_img_sm.jpg")
              img(src="/img/course_third/from_whom_img.jpg")
      .gridContainer.container
        .gridContainer__cell._span-5._offset-1._span-md-6._offset-md-1._span-sm-4
          .courseFromWhomImage__text
            KinesisContainer(event="scroll" :duration="100")
              KinesisElement(
                tag="div"
                :strength="-50"
                transformOrigin="50% 300%"
                axis="y"
                type="translate")
                div(v-html='$t("pages.courses.adultPsychosomatics.fromWhomImage")')
  .course__ofWhat__third
    .courseOfWhatThird
      .courseOfWhatThird__inner.gridContainer._courseOfWhatThird.container
        .courseOfWhatThird__title.gridContainer__cell._span-6._offset-1._span-md-8._offset-md-1._span-sm-6._span-xs-3 {{ $t("pages.courses.adultPsychosomatics.ofWhatTitle") }}
        .courseOfWhatThird__item.gridContainer__cell._span-3._offset-1._span-md-3._offset-md-1._span-sm-2._offset-sm-0._span-xs-1._offset-xs-0._first
          img(src='/img/course_third/of_what_1.svg')
          .courseOfWhatThird__text(v-html='$t("pages.courses.adultPsychosomatics.ofWhat[0]")')
        .courseOfWhatThird__item.gridContainer__cell._span-3._offset-4._span-md-3._offset-md-4._span-sm-2._offset-sm-3._span-xs-1._offset-xs-1._second
          img(src='/img/course_third/of_what_2.svg')
          .courseOfWhatThird__text(v-html='$t("pages.courses.adultPsychosomatics.ofWhat[1]")')
        .courseOfWhatThird__item.gridContainer__cell._span-3._offset-7._span-md-3._offset-md-7._span-sm-2._offset-sm-0._span-xs-1._offset-xs-0._third
          img(src='/img/course_third/of_what_3.svg')
          .courseOfWhatThird__text(v-html='$t("pages.courses.adultPsychosomatics.ofWhat[2]")')
        .courseOfWhatThird__item.gridContainer__cell._span-3._offset-1._span-md-3._offset-md-1._span-sm-2._offset-sm-3._span-xs-1._offset-xs-1._fourth
          img(src='/img/course_third/of_what_4.svg')
          .courseOfWhatThird__text(v-html='$t("pages.courses.adultPsychosomatics.ofWhat[3]")')
        .courseOfWhatThird__item.gridContainer__cell._span-3._offset-4._span-md-3._offset-md-4._span-sm-2._offset-sm-0._span-xs-1._offset-xs-0._fifth
          img(src='/img/course_third/of_what_5.svg')
          .courseOfWhatThird__text(v-html='$t("pages.courses.adultPsychosomatics.ofWhat[4]")')
        .courseOfWhatThird__item.gridContainer__cell._span-3._offset-7._span-md-3._offset-md-7._span-sm-2._offset-sm-3._span-xs-1._offset-xs-1._sixth
          img(src='/img/course_third/of_what_6.svg')
          .courseOfWhatThird__text(v-html='$t("pages.courses.adultPsychosomatics.ofWhat[5]")')
  .course__program
    .courseProgram.gridContainer.container
      .courseProgram__title.gridContainer__cell._span-11._offset-1._span-md-8._offset-md-1._span-sm-3 {{ $t("pages.courses.adultPsychosomatics.program.title") }}
      .courseProgram__description.gridContainer__cell._span-10._offset-1._span-md-10._offset-md-1._span-sm-10
        p(v-html='$t("pages.courses.adultPsychosomatics.program.description")')
      .courseProgram__inner.gridContainer__cell.gridContainer._rows._span-10._offset-1._span-md-10._span-sm-10
        .courseProgram__item(v-for='item in $t("pages.courses.adultPsychosomatics.program.list")' :key='item.num')
          .courseProgram__num {{ item.num }}
          .courseProgram__text(v-html='item.body')
  .course__practice
    .coursePractice
      .gridContainer.container
        .gridContainer__cell._span-4._offset-1._span-md-5._offset-md-1._span-sm-3._span-xs-3
          .coursePractice__title {{ $t("pages.courses.adultPsychosomatics.practice.title") }}
        .gridContainer__cell._span-5._offset-6._span-md-5._offset-md-6._span-sm-3._offset-sm-3._span-xs-3
          .coursePractice__text(v-html='$t("pages.courses.adultPsychosomatics.practice.text")')
  .course__lessons
    .courseLessons
      .courseLessons__inner.gridContainer.container
        .courseLessons__title {{ $t("pages.courses.adultPsychosomatics.lessons.title") }}
        .courseLessons__text(v-html='$t("pages.courses.adultPsychosomatics.lessons.text")')
        .courseLessons__img
          img(src='/img/course_psy/lessons_bg.png')
        .courseLessons__info._first(v-html='$t("pages.courses.adultPsychosomatics.lessons.info[0].value")')
        .courseLessons__info._second(v-html='$t("pages.courses.adultPsychosomatics.lessons.info[1].value")')
        .courseLessons__info._third(v-html='$t("pages.courses.adultPsychosomatics.lessons.info[2].value")')
  .course__booking
    .courseBooking
      .gridContainer.container
        .courseBooking__left.gridContainer__cell._span-5._span-md-12._span-sm-6._span-xs-3
          .courseBooking__title(v-html='$t("pages.courses.adultPsychosomatics.booking.title")')
          .courseBooking__text(v-html='$t("pages.courses.adultPsychosomatics.booking.text")')
        .courseBooking__right.gridContainer__cell._span-7._span-md-12._span-sm-6._span-xs-3
          .courseBooking__name(v-html='$t("pages.courses.adultPsychosomatics.title")')
          .courseBooking__type {{ $t("pages.courses.adultPsychosomatics.format") }}-{{ $t("courseWord") }}
          .courseBooking__btn
            Link(mod="_more _icon" href="https://study.antonantonov.com/op3" outside icon @click.native.prevent="showThirdPaymentPopup = true") {{ $t('courseBtnBookingText') }}
          .courseBooking__price
            span {{ $t("coursePriceLabel") }}
            samp {{ $t("pages.courses.adultPsychosomatics.price") }}
  .course__reviews
    .courseReviews
      .gridContainer.container
        .courseReviews__title.gridContainer__cell._span-10._offset-1._span-md-10._offset-md-1._span-sm-6 {{ $t("pages.courses.adultPsychosomatics.reviews.title") }}
        .courseReviews__description.gridContainer__cell._span-10._offset-1._span-md-10._offset-md-1._span-sm-6
          p(v-html='$t("pages.courses.adultPsychosomatics.reviews.description")')
        .courseReviews__videoItem.gridContainer__cell._span-4._span-md-4._span-sm-4._span-xs-4
          AboutVideo(
            :title='$t("pages.courses.adultPsychosomatics.reviews.video[0].title")'
            videoSrc='https://youtu.be/pQCxhC8yvmM'
            previewSrc='/img/course_third/reviews_video_anichka.png',
            :hoverEffect="true"
            mod="_symptoms"
          )
        .courseReviews__videoItem.gridContainer__cell._span-4._span-md-4._span-sm-4._span-xs-4
          AboutVideo(
            :title='$t("pages.courses.adultPsychosomatics.reviews.video[1].title")'
            videoSrc='https://youtu.be/VvEb6r8OaCo'
            previewSrc='/img/course_third/reviews_video_igor.png',
            :hoverEffect="true"
            mod="_symptoms"
          )
        .courseReviews__videoItem.gridContainer__cell._span-4._span-md-4._span-sm-4._span-xs-4
          AboutVideo(
            :title='$t("pages.courses.adultPsychosomatics.reviews.video[2].title")'
            videoSrc='https://youtu.be/buUws4K9GFs'
            previewSrc='/img/course_third/reviews_video_irina.png',
            :hoverEffect="true"
            mod="_symptoms"
          )
  .courseReviews_youtube
    .gridContainer.container
      .gridContainer__cell._span-10._offset-1._span-md-10._offset-md-1._span-sm-8
        p(v-html='$t("pages.courses.adultPsychosomatics.reviews.youtubeText")')
  .course__faq
    .courseFaq.gridContainer.container
      .courseFaq__title.gridContainer__cell._span-3._offset-1._span-md-7._offset-md-1._span-sm-6._span-xs-3 {{ $t('faqTitle') }}
      .courseFaq__list.gridContainer__cell._span-7._offset-4._span-md-10._offset-md-1._span-sm-6._span-xs-3
        accordion(id="accordion-example-2" :content="faq" :data='$t("pages.courses.adultPsychosomatics.faq.data")' multiple)
  popup(v-model="showFirstLessonPopUp" name="form")
    .popup-form
      <div style="font-size: 16px;line-height: 1.2">Для знакомства с курсом вам необходимо зарегистрироваться на нашей образовательной платформе. Первый урок откроется сразу после заполнения формы.</div><form id="ltForm6356726" action="https://study.antonantonov.com/pl/lite/block-public/process-html?id=1481629038" method="post" data-open-new-window="0"><input type="hidden" name="formParams[setted_offer_id]" ><br><input type="text" maxlength="60" placeholder="Введите ваш эл. адрес" name="formParams[email]" value="" ><br><input type="text" maxlength="60" placeholder="Введите ваш телефон" name="formParams[phone]" value=""><br><button type="submit"id="button5744231"style="color: #FFFFFF; background-color: #ff543e; border-radius: 9px !important; " onclick="if(window['btnprs62ede3c0dc259']){return false;}window['btnprs62ede3c0dc259']=true;setTimeout(function(){window['btnprs62ede3c0dc259']=false},6000);return true;">Смотреть первый урок</button><br><input type="hidden" id="71605462ede3c0cd17a" name="__gc__internal__form__helper" class="__gc__internal__form__helper" value=""><input type="hidden" id="71605462ede3c0cd17aref" name="__gc__internal__form__helper_ref" class="__gc__internal__form__helper_ref" value=""><input type="hidden" name="requestTime" value="1659757504"><input type="hidden" name="requestSimpleSign" value="bad550ad86bf0146f77fcf369ca7dc6c"><input type="hidden" name="isHtmlWidget" value="1"/></form><span id="gccounterImgContainer"></span><script>window.addEventListener('load', function(){let loc=document.getElementById("71605462ede3c0cd17a");loc.value=window.location.href;let ref=document.getElementById("71605462ede3c0cd17aref");ref.value=document.referrer;let statUrl="https://study.antonantonov.com/stat/counter?ref=" + encodeURIComponent(document.referrer)+ "&loc=" + encodeURIComponent(document.location.href);document.getElementById('gccounterImgContainer').innerHTML="<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";});</script>
  popup(v-model="showThirdPaymentPopup" name="form")
    .popup-form
      <div style="font-size: 16px;line-height: 1.2">Стоимость курса 10 000₽.<br/><br/>Заполните форму, чтобы перейти к оплате.</div><form id="ltForm8671106" action="https://study.antonantonov.com/pl/lite/block-public/process-html?id=1481628963" method="post" data-open-new-window="0"><input type="hidden" name="formParams[setted_offer_id]" ><br><input type="text" maxlength="60" placeholder="Введите ваш эл. адрес" name="formParams[email]" value="" ><br><input type="text" maxlength="60" placeholder="Введите ваш телефон" name="formParams[phone]" value=""><br><button type="submit"id="button7746089"style="color: #FFFFFF; background-color: #ff543e; border-radius: 9px !important; " onclick="if(window['btnprs62ede5f75377a']){return false;}window['btnprs62ede5f75377a']=true;setTimeout(function(){window['btnprs62ede5f75377a']=false},6000);return true;">Перейти к оплате</button><br><input type="hidden" id="71605362ede5f745200" name="__gc__internal__form__helper" class="__gc__internal__form__helper" value=""><input type="hidden" id="71605362ede5f745200ref" name="__gc__internal__form__helper_ref" class="__gc__internal__form__helper_ref" value=""><input type="hidden" name="requestTime" value="1659758071"><input type="hidden" name="requestSimpleSign" value="87ae73e46423c1877322b1d7ae5bdcb1"><input type="hidden" name="isHtmlWidget" value="1"/></form><span id="gccounterImgContainer"></span><script>window.addEventListener('load', function(){let loc=document.getElementById("71605362ede5f745200");loc.value=window.location.href;let ref=document.getElementById("71605362ede5f745200ref");ref.value=document.referrer;let statUrl="https://study.antonantonov.com/stat/counter?ref=" + encodeURIComponent(document.referrer)+ "&loc=" + encodeURIComponent(document.location.href);document.getElementById('gccounterImgContainer').innerHTML="<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";});</script>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import Link from '@/components/Link'
import BackToHome from '@/components/BackToHome'
import Accordion from '@/components/Accordion'
import Reviews from '@/components/Reviews'
import Popup from '@/components/Popup'
export default {
  components: {
    KinesisContainer,
    KinesisElement,
    Link,
    BackToHome,
    Accordion,
    Reviews,
    Popup,
  },
  mounted() {
    window.forwardUtmTags()
    this.$nextTick(() => {
      const linkPopup = window.document.querySelector('.courseProgram__inner a.link-popup')
      if (!linkPopup) {
        return
      }

      linkPopup.addEventListener(
        'click',
        (e) => {
          e.preventDefault()
          this.showFirstLessonPopUp = true
        },
        false
      )
    })
  },
  head() {
    return {
      title: this.$t('pages.courses.adultPsychosomatics.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.courses.adultPsychosomatics.seo.description'),
        },
      ],
    }
  },
  data() {
    return {
      showFirstLessonPopUp: false,
      showThirdPaymentPopup: false,
      reviews: [
        {
          id: 1,
          img: '/img/course_psy/review_1.png',
          instagramLink: 'https://www.instagram.com/elmielmiee/',
          instagramName: '@elmielmiee',
        },
        {
          id: 2,
          img: '/img/course_psy/review_2.png',
          instagramLink: 'https://www.instagram.com/svetlana__rani/',
          instagramName: '@svetlana__rani',
        },
        {
          id: 3,
          img: '/img/course_psy/review_3.png',
          instagramLink: 'https://www.instagram.com/stacy__moonlightt/',
          instagramName: '@stacy__moonlightt',
        },
        {
          id: 4,
          img: '/img/course_psy/review_4.png',
          instagramLink: 'https://www.instagram.com/anast_asiya1210/',
          instagramName: '@anast_asiya1210',
        },
        {
          id: 5,
          img: '/img/course_psy/review_5.png',
          instagramLink: 'https://www.instagram.com/ylia_ttt/',
          instagramName: '@ylia_ttt',
        },
        {
          id: 6,
          img: '/img/course_psy/review_6.png',
          instagramLink: 'https://www.instagram.com/juliezagoret/',
          instagramName: '@juliezagoret',
        },
      ],
      faq: [
        {
          id: 1,
          active: false,
        },
        {
          id: 2,
          active: false,
        },
        {
          id: 3,
          active: false,
        },
        {
          id: 4,
          active: false,
        },
        {
          id: 5,
          active: false,
        },
        {
          id: 6,
          active: false,
        },
        {
          id: 7,
          active: false,
        },
        {
          id: 8,
          active: false,
        },
        {
          id: 9,
          active: false,
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

.course
  margin-top 32px
  margin-bottom 240px
  position relative
  &._leave
    animation translate-out 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.84)
  &._enter
    animation translate-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.84)
    & .courseHeader__title div span
      animation-name translateFirstScreen
      animation-timing-function ease
      animation-duration 0.7s
      animation-delay 0.2s
      animation-fill-mode forwards
      transform translateY(100%)
    & .courseHeader__img
      opacity 0
      animation-name animPhoto
      animation-timing-function ease
      animation-duration 1s
      animation-delay 0.2s
      animation-fill-mode forwards
    & .courseHeader
      opacity 1
      animation none
  @media $md_minus
    margin-top 48px
    margin-bottom 155px
  @media $sm_minus
    margin-top 40px
    margin-bottom 298px
  @media $xs
    margin-top 8px
    margin-bottom 208px
  &__fromWhom
    margin-top 160px
    @media $sm_minus
      margin-top 128px
  &__fromWhomImage
    margin-top 88px
    @media $md_minus
      margin-top 114px
    @media $sm_minus
      margin-top 19px
    @media $xs
      margin-top 24px
  &__ofWhat__third
    margin-top 128px
    @media $xs
      margin-top 64px
  &__program
    margin 128px 0 128px
    @media $md_minus
      margin 78px 0 80px
    @media $sm_minus
      margin 22px 0 80px
    @media $xs
      margin -5px 0 110px
  &__lessons
    margin-top 160px
    @media $md_minus
      margin-top 128px
    @media $xs
      margin-top 80px
  &__booking
    margin-top 133px
    @media $md_minus
      margin-top 157px
    @media $sm_minus
      margin-top 161px
    @media $xs
      margin-top 80px
  &__reviews
    margin-top 160px
    @media $md_minus
      margin-top 128px
    @media $xs
      margin-top 57px
  &__faq
    margin-top 248px
    @media $sm_minus
      margin-top 168px
    @media $xs
      margin-top 136px
.courseHeader
  //animation animPhoto 2s cubic-bezier(0.25, 0.46, 0.45, 0.84) 3.5s 1 normal forwards
  //opacity 0
  &__top
    position relative
  &__title
    position absolute
    bottom 55px
    left 111px
    z-index 3
    font-weight 800
    font-size 80px
    line-height 112px
    letter-spacing 0.05em
    text-transform uppercase
    color $acsent
    @media $md_minus
      line-height 96px
      bottom 39px
      left 0
    @media $sm_minus
      font-size 48px
      line-height 64px
      letter-spacing 0.05em
      bottom unset
      top 104px
    @media $xs
      font-size 24px
      line-height 32px
      letter-spacing 0.04em
      position static
      width 100%
      margin-top -16px
    & div
      overflow hidden
    & span
      display block
  &__img
    margin-bottom 8px
    display flex
    flex-direction column
    align-items flex-start
    max-height 448px
    @media $xs
      margin-bottom 0
      width calc(100% + 24px)
      position relative
    & img
      object-fit contain
  &__info
    display flex
    flex-direction column
    margin-right 104px
    @media $xs
      margin-right 95px
    &:last-child
      margin-right 0
    & span
      font-size 14px
      line-height 16px
      color $acsent
      margin-bottom 8px
      text-transform uppercase
      height 30px
      @media $md_minus
        height 17px
        margin-bottom 15px
      @media $xs
        font-size 12px
        line-height 14px
    & samp
      font-family inherit
      font-size 24px
      line-height 28px
      letter-spacing 0.04em
      margin-bottom 0
      @media $md_minus
        font-size 16px
        line-height 24px
      @media $xs
        font-size 16px
        line-height 20px
    &._price
      margin-top 32px
      @media $xs
        margin-top 24px
    &._rightXS
      @media $xs
        margin-left 48px
  &__bottom
    margin-top -16px
    @media $md_minus
      margin-top 55px
    @media $sm_minus
      margin-top 64px
    @media $xs
      margin-top 40px
  &__btn
    height 97px
    margin-top 32px
    @media $xs
      margin-top 0
      height 80px
    & span
      max-width: 165px
      @media $md_minus
        max-width: 300px
.courseFromWhom
  &__col
    &._second
      @media $sm_minus
        margin-top -32px
      @media $xs
        margin-top -40px
  &__title
    margin-bottom 96px
    font-size 48px
    line-height 150%
    letter-spacing 0.02em
    color $charkGrey
    opacity 0.8
    @media $sm_minus
      font-size 32px
      line-height 48px
      letter-spacing 0.02em
      margin-bottom 32px
    @media $xs
      margin-bottom 24px
      font-size 24px
      line-height 40px
  &__text
    margin-bottom 80px
    @media $sm_minus
      margin-bottom 64px
    @media $xs
      margin-bottom 40px
.courseFromWhomImage
  mix-blend-mode normal
  background-position center
  background-size cover
  padding 86px 0 154px
  min-height 584px
  position relative

  @media $md_minus
    padding 71px 0 145px
  @media $sm_minus
    padding 71px 0 104px
  @media $xs
    padding 42px 0 184px
    min-height 480px
    background-position 80% bottom
  &__bg
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    overflow hidden
    & *
      width 100%
      height 100%
    & div
      @media $xs
        transform none !important
    & img
      width 2560px
      height 1020px
      max-width unset
      transform translate(-50%, -267px)
      max-height unset
      object-fit contain
      position absolute
      left 50%
      top 0
      @media $xs
        transform translate(-55%, -267px)
  &__text
    color $bg
    & *
      @media $xs
        transform none !important

.courseOfWhatThird
  &__title
    margin-bottom 112px
    font-size 48px
    line-height 150%
    letter-spacing 0.02em
    color $charkGrey
    opacity 0.8
    @media $md_minus
      margin-bottom 96px
    @media $sm_minus
      font-size 32px
      line-height 48px
      letter-spacing 0.02em
      margin-bottom 56px
    @media $xs
      margin-bottom 60px
      font-size 24px
      line-height 40px
      width 100%
  &__item
    display flex
    flex-direction column
    align-items baseline
    justify-content center
    @media $md_minus
      margin-bottom 106px
    @media $sm_minus
      margin-bottom 128px
    @media $xs
      margin-bottom 85px
      width 104px
      &._second
        margin-left 70px
      &._fourth
        margin-left 70px
      &._sixth
        margin-left 70px
  &__text
    font-size 16px
    line-height 24px
    margin-top 36px
    @media $xs
      font-size 12px
      line-height 20px

.courseProgram
  &__inner
    @media $xs
      display block !important
  &__title
    font-size 48px
    line-height 150%
    letter-spacing 0.02em
    color $charkGrey
    opacity 0.8
    @media $sm_minus
      font-size 32px
      line-height 48px
      letter-spacing 0.02em
    @media $xs
      margin-bottom 0
      font-size 24px
      line-height 40px
      width 100%
  &__description
    letter-spacing 0
    line-height 40px
    @media $md_minus
      letter-spacing 0.03em
    @media $sm_minus
      font-size 16px
      line-height 24px
      letter-spacing 0.03em
    @media $xs
      font-size 12px
      line-height 20px
  &__item
    width 100%
    //border-top 1px solid $border
    border-top 2px solid $border
    padding 32px 0 8px
    display flex
    @media $md_minus
      padding 24px 0 16px
    @media $sm_minus
      padding 16px 0 0
      margin-bottom -8px
    @media $xs
      margin-bottom 0
      padding 16px 0
      border-width 1px
    &:nth-last-child(1)
      border-bottom 2px solid $border
    &:last-child
      border-bottom none
  &__num
    width 80px
    height 80px
    font-style normal
    font-weight 400
    font-size 80px
    line-height 80px
    color $acsent
    margin-right 32px
    flex-shrink 0
    @media $md_minus
      width 97px
      margin-right 16px
    @media $sm_minus
      width 57px
      height 48px
      margin-right 16px
      font-size 48px
      line-height 48px
    @media $xs
      width 64px
      height 48px
  &__text
    & p
      letter-spacing 0
      @media $md_minus
        letter-spacing 0.03em
      @media $sm_minus
        font-size 16px
        line-height 24px
        letter-spacing 0.03em
      @media $xs
        font-size 12px
        line-height 20px
    & a
      color $acsent
.coursePractice
  padding 61px 0 63px
  background $darkGray
  color $bg
  @media $md_minus
    padding 64px 0 112px
  @media $sm_minus
    padding 58px 0 72px
  @media $xs
    padding 46px 0 84px
  &__title
    margin-bottom 48px
    font-size 48px
    line-height 150%
    letter-spacing 0.02em
    @media $md_minus
      margin-bottom 104px
    @media $sm_minus
      font-size 32px
      line-height 48px
      letter-spacing 0.02em
      margin-bottom 43px
    @media $xs
      margin-bottom 0
      font-size 24px
      line-height 40px
      width 100%
  &__text
    & p
      @media $sm_minus
        font-size 16px
        line-height 24px
        letter-spacing 0.03em
.courseLessons
  &__inner
    position relative
    grid-template-areas\
    ". title title title title img img img img img img img"\
    ". text text text text img img img img img img img"\
    ". info1 info1 . info2 info2 . info3 info3 info3 . ."
    grid-template-rows max-content
    @media $md_minus
      grid-template-areas\
      ". title title title title title . . . . . ."\
      ". text text text text text img img img img img img"\
      ". info1 info1 info1 info2 info2 info2 info3 info3 info3 info3 ."
    @media $sm_minus
      grid-template-areas\
      "title title title title . ."\
      "text text text text text text"\
      "info1 info1 . info2 info2 ."\
      "img img img img img img"\
      "info3 info3 info3 info3 . ."
    @media $xs
      grid-template-areas\
        "img img img"\
        "title title title"\
        "text text text"\
        "info1 info1 info1"\
        "info2 info2 info2"\
        "info3 info3 info3"
  &__title
    grid-area title
    //margin-bottom 48px
    font-size 48px
    line-height 72px
    max-height 144px
    letter-spacing 0.02em
    @media $md_minus
      margin-bottom 16px
    @media $sm_minus
      font-size 32px
      line-height 48px
      letter-spacing 0.02em
      margin-bottom 32px
    @media $xs
      margin-bottom 0
      margin-top 0px
      font-size 24px
      line-height 40px
      width 100%
  &__text
    grid-area text
    @media $md_minus
      margin-top 0
    @media $xs
      margin-top -16px
    & p
      margin-bottom 20px
  &__img
    grid-area img
    position relative
    margin-top -80px
    @media $md_minus
      margin-top 0
      top -180px
    @media $sm_minus
      margin-top 48px
      top 0
    @media $xs
      margin-top 0
    & img
      position relative
      z-index 2
  &__info
    display flex
    flex-direction column
    margin-top 40px
    & span
      font-family Roboto
      font-style normal
      font-weight 300
      font-size 48px
      line-height 48px
      letter-spacing -0.06em
      color $acsent
      margin-bottom 16px
      @media $md_minus
        font-size 48px
        line-height 48px
      & large
        font-size 108px
      & small
        font-size 24px
        line-height 24px
        font-family 'ObjectSans'
        margin-left 16px
        letter-spacing normal
        &._year
          margin-left 8px
    & samp
      font-size 16px
      line-height 24px
      @media $sm_minus
        line-height 26px
      @media $xs
        font-size 12px
        line-height 20px
    &._first
      grid-area info1
      @media $sm_minus
        margin-top 32px
      @media $xs
        margin-top 24px
    &._second
      grid-area info2
      @media $sm_minus
        margin-top 32px
      @media $xs
        margin-top 0
      & span
        margin-bottom 0px
    &._third
      grid-area info3
      @media $sm_minus
        margin-top 16px
      @media $xs
        margin-top 24px
.courseBooking
  border 2px solid $acsent
  border-right none
  position relative
  @media $md_minus
    border none
    border-bottom 2px solid $acsent
  &:before
    content ''
    width 43%
    position absolute
    top 0
    left 0
    height 100%
    background $acsent
    @media $md_minus
      background transparent
  &:after
    content ''
    width 57%
    position absolute
    top 0
    right 0
    height 100%
    background $bg
    @media $md_minus
      background transparent
  &__left
    padding 81px 0 111px 0
    color $white
    background $acsent
    display grid
    gap 32px
    grid-template-columns repeat(5,minmax(0,1fr))
    grid-template-areas\
    ". title title title . "\
    ". text text text text"
    grid-auto-rows max-content
    position relative
    z-index 3
    &:before
      content ''
      width calc(100% + 32px)
      height 100%
      position absolute
      top 0
      left 0
      background $acsent
      z-index -1
      @media $md_minus
        width calc(100% + 88px)
        left -44px
      @media $sm_minus
        width calc(100% + 128px)
        left -64px
      @media $xs
        width calc(100% + 48px)
        left -24px
    @media $md_minus
      padding 65px 0 73px 0
      width 100%
      grid-template-columns repeat(12,minmax(0,1fr))
      gap 24px
      grid-template-areas\
      ". title title title . . text text text text text ."
    @media $sm_minus
      padding 66px 0 125px 0
      gap 32px
      grid-template-columns repeat(6,minmax(0,1fr))
      grid-template-areas\
      "title title title text text text"
    @media $xs
      padding 46px 0 80px 0
      gap 40px
      grid-template-columns repeat(3,minmax(0,1fr))
      grid-template-areas\
      "title title title"\
      "text text text"
  &__right
    padding 81px 0 137px 0
    display grid
    gap 32px
    grid-template-columns repeat(7,minmax(0,1fr))
    grid-template-areas\
    ". name name name name name ."\
    ". type type . . . ."\
    ". btn btn btn . price price"
    align-items self-start
    grid-auto-rows max-content
    position relative
    z-index 3
    @media $md_minus
      padding 56px 0 160px 0
      grid-template-columns repeat(12,minmax(0,1fr))
      gap 24px
      grid-template-areas\
      ". name name name name name name name . . . ."\
      ". type type type . . . . . . . ."\
      ". btn btn btn btn . . price price . . ."
    @media $sm_minus
      padding 48px 0 114px 0
      grid-template-columns repeat(6,minmax(0,1fr))
      gap 32px
      grid-template-areas\
      "name name name name name ."\
      "type type . . . . "\
      "btn btn btn . price price"
    @media $xs
      padding 8px 0 89px 0
      gap 40px
      grid-template-columns repeat(3,minmax(0,1fr))
      grid-template-areas\
      "name name name"\
      "type type ."\
      "price price ."\
      "btn btn btn"
  &__title
    margin-bottom 32px
    font-size 48px
    line-height 150%
    letter-spacing 0.02em
    grid-area title
    @media $md_minus
      margin-bottom 0
    @media $sm_minus
      font-size 32px
      line-height 48px
      letter-spacing 0.02em
    @media $xs
      margin-bottom -10px
      margin-top 0
      font-size 24px
      line-height 40px
      width 100%
  &__text
    grid-area text
    @media $xs
      margin-top -16px
    & p
      margin-bottom: 20px
      @media $sm_minus
        font-size 16px
        line-height 26px
        letter-spacing 0.03em
  &__name
    font-weight 800
    font-size 48px
    line-height 72px
    letter-spacing 0.02em
    text-transform uppercase
    color $acsent
    grid-area name
    @media $xs
      font-size 24px
      line-height 32px
      letter-spacing 0.04em
      height auto
  &__btn
    height 96px
    grid-area btn
    align-self center
    margin-top 96px
    @media $md_minus
      margin-top 72px
    @media $sm_minus
      margin-top 32px
    @media $xs
      height 80px
      margin-top 0
  &__type
    grid-area type
    margin-top -5px
    @media $md_minus
      margin-top 0
    @media $sm_minus
      margin-top -8px
    @media $xs
      font-size 16px
      line-height 24px
      margin-top -24px
  &__price
    display flex
    flex-direction column
    align-self center
    grid-area price
    margin-top 96px
    @media $md_minus
      margin-top 72px
    @media $sm_minus
      margin-top 32px
    @media $xs
      margin-top 24px
    & span
      font-size 14px
      line-height 16px
      color $acsent
      margin-bottom 8px
      text-transform uppercase
      height 30px
      @media $md_minus
        height 17px
        margin-bottom 15px
      @media $xs
        font-size 12px
        line-height 14px
    & samp
      font-family inherit
      font-size 24px
      line-height 28px
      letter-spacing 0.04em
      margin-bottom 0
      @media $md_minus
        font-size 16px
        line-height 24px
      @media $xs
        font-size 16px
        line-height 20px

 .courseFaq
   &__title
     margin-bottom 64px
     font-size 48px
     line-height 150%
     letter-spacing 0.02em
     @media $md_minus
       margin-bottom 40px
     @media $sm_minus
       font-size 32px
       line-height 48px
       letter-spacing 0.02em
     @media $xs
       margin-bottom -16px
       margin-top 0
       font-size 24px
       line-height 40px
       width 100%
   & a
    color $acsent
    text-transform lowercase
    position relative
    &:after
      content ''
      width 16px
      height 16px
      background url('/img/link_icon.svg') no-repeat
      background-size contain
      margin-left 14px
      position absolute
      right -28px
      top calc(50% + 2px)
      transform translateY(-50%)
      opacity 0
      visibility hidden
      transition $transition
      @media $md_minus
        top 50%
    @media $hover
      &:hover
        &:after
          opacity 1
          visibility visible
    @media $xs
      font-size 16px
      line-height 24px
.courseReviews
  &__title
    margin-bottom 32px
    font-size 48px
    line-height 150%
    letter-spacing 0.02em
    @media $md_minus
      margin-bottom 40px
    @media $sm_minus
      font-size 32px
      line-height 48px
      letter-spacing 0.02em
      margin-bottom 32px
    @media $xs
      margin-bottom 0
      margin-top 0
      font-size 24px
      line-height 40px
      width 100%
  &__slider
    border-top 2px solid $borderSecond
    border-bottom 2px solid $borderSecond
    position relative
    padding 48px 0 80px
    @media $sm_minus
      padding 48px 0 46px
    @media $xs
      border none
      padding 0
    &:before
      @media $sm_minus
        content ''
        position absolute
        left -51px
        top 41px
        width 130px
        height 104px
        background url('/img/about/quotes_icon.svg') no-repeat
        background-size contain
      @media $xs
        width 80px
        height 64px
        top 0
        left -43px
.courseReviews_youtube
  font-size 24px
  line-height 40px
  margin 80px 0 128px
  letter-spacing 0.03em
  @media $sm_minus
    margin 128px 0
  @media $xs
    margin 80px 0 83px
    font-size 16px
    line-height 24px
  & a
    font-size 24px
    line-height 32px
    color $acsent
    text-transform lowercase
    position relative
    &:after
      content ''
      width 16px
      height 16px
      background url('/img/link_icon.svg') no-repeat
      background-size contain
      margin-left 14px
      position absolute
      right -28px
      top calc(50% + 2px)
      transform translateY(-50%)
      opacity 0
      visibility hidden
      transition $transition
      @media $md_minus
        top 50%
    @media $hover
      &:hover
        &:after
          opacity 1
          visibility visible
    @media $xs
      font-size 16px
      line-height 24px
</style>
