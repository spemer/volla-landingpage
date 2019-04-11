<template lang="pug">
  div#joinus
    div.container
      h1.joinus__title.section__title {{ serviceKo }}에 입점하세요.
      p.section__subtitle {{ serviceKo }}와 함께 성장하실 셀러분들을 모십니다.

      div.global__cta
        a.global__cta--link(
          :href="`mailto:${mailTo}`"
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
      baseURI: globalVar.ceoWebsiteUrl,
      serviceEn: globalVar.serviceEn,
      serviceKo: globalVar.serviceKo,
      mailTo: globalVar.mailTo,
    }
  },

}
</script>

<style lang="scss">
#joinus {
  border-top: 1px solid $texteee;
}
</style>
