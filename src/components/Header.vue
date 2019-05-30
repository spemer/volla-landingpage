<template lang="pug">
  div#header(
    v-if="this.$route.path !== '/sellerform-app' && this.$route.path !== '/submit-app'"
  )
    div.container
      div.header__left(
        v-scroll-to="{el: 'body', duration: 0}"
      )
        img.header__left--img(
          src="../assets/dist/launcher.svg"
        )
        p.header__left--text {{ serviceEn }}
        //- p.header__left--text.sub &nbsp;{{ tagline }}

      div.header__right(
      )
        p.header__right--text.dl(
          v-if="this.$route.path === '/'"
          v-scroll-to="{el: '#download', duration: 0, offset: -54}"
        ) 다운로드
        a.header__right--text(
          :href="href"
          :class="(this.$route.path === '/') ? 'join' : 'home'"
        ) {{ text }}
</template>

<script>
import { globalVar } from '@/globalVar'

export default {
  name: 'header-el',

  data: _ => ({
    href: '',
    text: '',
    tagline: globalVar.tagline,
    serviceEn: globalVar.serviceEn,
  }),

  mounted () {
    if (this.$route.path === '/') {
      this.href = '/seller'
      this.text = '입점소개'
    } else if (this.$route.path !== '/') {
      this.href = '/'
      this.text = '메인으로'
    }
  },

}
</script>
