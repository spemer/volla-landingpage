<template lang="pug">
  div#joinus
    div.container
      h1.joinus__title.section__title {{ serviceKo }}에 입점하세요
      p.section__subtitle
        | {{ serviceKo }}와 함께 성장하실 셀러분들을 모십니다.
        br
        | 셀러 입점신청서를 작성하시려면, 아래의 버튼을 클릭해주세요.
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
          :to="btnPath"
        )
          button.global__cta--btn.form(
            :title="btnText"
          ) {{ btnText }}
</template>

<script>
import { globalVar } from '@/globalVar'

export default {
  name: 'joinus',

  data () {
    return {
      mailTo: globalVar.mailTo,
      serviceKo: globalVar.serviceKo,
      btnPath: '',
      btnText: '',
    }
  },

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
      this.btnPath = '/seller'
      this.btnText = '입점신청소개'
    } else if (this.$route.path === '/seller') {
      this.btnPath = '/sellerform'
      this.btnText = '셀러입점신청'
    }
  },

}
</script>
