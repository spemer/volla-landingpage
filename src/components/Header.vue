<template lang="pug">
  div#header
    div.container
      div.header__left(
        v-scroll-to="{el: 'body', duration: 0}"
      )
        img.header__left--img(
          src="../assets/dist/launcher.svg"
        )
        p.header__left--text {{ serviceKo }}
        p.header__left--text.sub &nbsp;- {{ tagline }}

      div.header__right(
      )
        p.header__right--text.dl(
          v-if="this.$route.path === '/'"
          v-scroll-to="{el: '#download', duration: 0, offset: -54}"
        ) 다운로드
        router-link.header__right--text.join(
          v-if="this.$route.path === '/'"
          :to="'/sellerform'"
          v-tooltip.bottom="{content: '입점신청하기', delay: {show: 500, hide: 100}}"
        ) 입점신청
        router-link.header__right--text.home(
          v-if="this.$route.path === '/sellerform'"
          :to="'/'"
          v-tooltip.bottom="{content: '볼라 홈페이지', delay: {show: 500, hide: 100}}"
        ) 홈페이지
</template>

<script>
import { globalVar } from '@/globalVar'

export default {
  name: 'header-el',

  methods: {
    dlWait () {
      alert('어플이 4월 중으로 곧 출시됩니다. 조금만 기다려주세요!')
    }
  },

  data () {
    return {
      mailTo: globalVar.mailTo,
      tagline: globalVar.tagline,
      serviceKo: globalVar.serviceKo,
      serviceEn: globalVar.serviceEn,
      sellerRequestUrl: globalVar.sellerRequestUrl,
    }
  },

}
</script>
