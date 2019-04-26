<template lang="pug">
  div#joinus
    div.container
      h1.joinus__title.section__title {{ serviceKo }}에 입점하세요
      p.section__subtitle
        | {{ serviceKo }}와 함께 성장하실 셀러분들을 모십니다.
        br
        | 셀러 입점신청서를 작성하시려면 아래의 버튼을 클릭해주세요.
        br
        span.joinus__title--copyEmail(
          @click="toast"
          v-clipboard:copy="mailTo"
          v-tooltip.bottom="{content: '이메일 주소를 복사하려면 클릭하세요', delay: {show: 500, hide: 100}}"
        ) 이메일 주소 복사하기
          i.far.fa-copy

      div.global__cta
        a.global__cta--link(
          :href="`mailto:${mailTo}?subject=볼라 셀러(판매자) 입점신청`"
        )
          button.global__cta--btn.mailto(
            v-tooltip.bottom="{content: '메일 앱 열기(새 창)', delay: {show: 500, hide: 100}}"
          ) 메일로 문의하기

        router-link.global__cta--link(
          :to="'/sellerform'"
        )
          button.global__cta--btn.form(
            v-tooltip.bottom="{content: '입점신청하기', delay: {show: 500, hide: 100}}"
          ) 입점신청하기
</template>

<script>
import { globalVar } from '@/globalVar'

export default {
  name: 'joinus',

  data () {
    return {
      mailTo: globalVar.mailTo,
      serviceKo: globalVar.serviceKo,
      serviceEn: globalVar.serviceEn,
      baseURI: globalVar.ceoWebsiteUrl,
      companyMailTo: globalVar.companyMailTo,
      sellerRequestUrl: globalVar.sellerRequestUrl,
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
