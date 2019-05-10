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
          :to="'/seller'"
        ) 입점소개
        router-link.header__right--text.home(
          v-if="this.$route.path !== '/'"
          :to="'/'"
        ) 메인으로
</template>

<script>
import { globalVar } from '@/globalVar'

export default {
  name: 'header-el',

  data: _ => ({
    tagline: globalVar.tagline,
    serviceKo: globalVar.serviceKo,
  }),

  methods: {
    dlWait () {
      alert('어플이 4월 중으로 곧 출시됩니다. 조금만 기다려주세요!')
    },
  },

}
</script>
