<template lang="pug">
  div#redirect
    div.container
      div.redirect__wrapper
        img.redirect__wrapper--img(
          src="/src/assets/dist/launcher.svg"
        )
        p.redirect__wrapper--text {{ serviceKo }}

        router-link.global__cta(
          :to="'/'"
        )
          button.global__cta--btn(
            :title="website"
          ) {{ website }}
</template>

<script>
import { globalVar } from '@/globalVar'
import { userAgent } from '@/mixins/userAgent'

export default {
  name: 'redirect_dl',

  data: _ => ({
    website: '웹사이트 바로가기',
    serviceKo: globalVar.serviceKo,
  }),

  mixins: [
    userAgent
  ],

  metaInfo: {
    title: globalVar.serviceEn,
    titleTemplate: `%s 앱 다운로드`,
    meta: [
      {
        name:     'description',         content: `${globalVar.serviceEn} 앱 다운로드`,
        itemprop: 'description',         content: `${globalVar.serviceEn} 앱 다운로드`,
        property: 'og:description',      content: `${globalVar.serviceEn} 앱 다운로드`,
        name:     'twitter:description', content: `${globalVar.serviceEn} 앱 다운로드`,
      }
    ],
  },

  mounted () {
    let android = globalVar.androidStore,
        ios     = globalVar.iosStore,
        unknown = globalVar.websiteUrl

    if      (this.userAgent == 'Android') {
      window.location.href = android
    }
    else if (this.userAgent == 'iOS') {
      window.location.href = ios
    }
    else if (this.userAgent == 'Windows Phone') {
      alert("안드로이드, iOS 등의 모바일 운영체제에서만 다운로드 가능합니다.")
      window.location.href = unknown
    }
    else {
      alert("안드로이드, iOS 등의 모바일 운영체제에서만 다운로드 가능합니다.")
      window.location.href = unknown
    }
  },

}
</script>
