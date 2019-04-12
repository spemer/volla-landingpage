<template lang="pug">
  div#joinus
    div.container
      h1.joinus__title.section__title {{ serviceKo }}에 입점하세요
      p.section__subtitle
        | {{ serviceKo }}와 함께 성장하실 셀러분들을 모십니다
        br
        | 입점신청 이메일을 보내시려면, 아래의 버튼을 클릭해주세요
        br
        span.joinus__title--copyEmail(
          @click="toast"
          v-clipboard:copy="mailTo"
          v-tooltip.bottom="{content: '이메일 주소를 복사하려면 클릭하세요', delay: {show: 500, hide: 100}}"
        ) 이메일 주소 복사하기

      div.global__cta
        a.global__cta--link(
          :href="`mailto:${mailTo},${companyMailTo}?subject=볼라 셀러(판매자) 입점신청`"
        )
          button.global__cta--btn(
            v-tooltip.bottom="{content: '입점신청 이메일을 보내려면 클릭하세요', delay: {show: 500, hide: 100}}"
          ) 입점신청하기
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'joinus',

  data () {
    return {
      companyMailTo: globalVar.companyMailTo,
      baseURI: globalVar.ceoWebsiteUrl,
      serviceEn: globalVar.serviceEn,
      serviceKo: globalVar.serviceKo,
      mailTo: globalVar.mailTo,
    }
  },

  methods: {
    toast () {
      this.$toasted.show('이메일 주소가 복사되었습니다', {
        theme: "primary",
        position: "bottom-center",
        duration : 2000
      })
    }
  },

}
</script>

<style lang="scss">
#joinus {
  border-top: 1px solid $texteee;

  .container {
    .section__subtitle {
      margin-bottom: 0;

      .joinus__title--copyEmail {
        cursor: pointer;
        color: $brand-pink;
        display: inline-block;
        @include transition(all 0.25s ease);

        &:hover {
          opacity: 0.5;
        }
      }
    }

    .global__cta--btn {
      color: #fff;
      background-color: $brand-pink;

      &:hover {
        // opacity: .5;
        color: $brand-pink;
        background-color: #fff;
      }
    }
  }
}
</style>
