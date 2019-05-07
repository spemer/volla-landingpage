<template lang="pug">
  div#joinus
    div.container
      h1.joinus__title.section__title {{ serviceKo }}에 입점하세요
      p.section__subtitle
        | {{ stringUpper }}
        br
        | {{ stringBelow }}
        br
        span.joinus__title--copyEmail(
          @click="toast"
          v-clipboard:copy="mailTo"
          title="이메일 주소를 복사하려면 클릭하세요"
        ) 이메일 주소 복사하기
          i.far.fa-copy

      div.global__cta
        a.global__cta--link(
          :href="`mailto:${mailTo}?subject=볼라 셀러(판매자) 입점신청`"
        )
          button.global__cta--btn.mailto(
            title="메일 앱 열기(새 창)"
          ) 메일로 문의하기

        router-link.global__cta--link(
          :to="'/sellerform'"
        )
          button.global__cta--btn.form(
            title="셀러입점신청"
          ) 셀러입점신청
</template>

<script>
import { globalVar } from '@/globalVar'

export default {
  name: 'joinus',

  data: () => ({
    mailTo: globalVar.mailTo,
    serviceKo: globalVar.serviceKo,
    stringUpper: '',
    stringBelow: '',
  }),

  methods: {
    toast () {
      this.$toasted.show('이메일 주소가 복사되었습니다', {
        theme: "primary",
        position: "bottom-center",
        duration : 2000
      })
    },

  },

  mounted () {
    if (this.$route.path === '/') {
      this.stringUpper = this.serviceKo + '와 함께 성장하실 셀러분들을 모십니다.'
      this.stringBelow = '셀러 입점신청서를 작성하시려면, 아래의 버튼을 클릭해주세요.'
    } else if (this.$route.path === '/seller') {
      this.stringUpper = '라이브로 담는 오프라인 쇼핑,'
      this.stringBelow = this.serviceKo + '에 지금 바로 입점하세요!'
    }
  },

}
</script>
