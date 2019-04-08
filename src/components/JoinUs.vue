<template lang="pug">
  div#joinus
    div.container
      h1.joinus__title.section__title Volla에 입점하세요

      div.global__cta
        a.global__cta--link(
          :href="baseURI"
          target="_blank"
        )
          button.global__cta--btn(
          ) 입점신청하기
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'joinus',

  data () {
    return {
      baseURI: globalVar.ceoWebsiteUrl,
    }
  }
}
</script>

<style lang="scss">
#joinus {
  border-top: 1px solid $texteee;
}
</style>
