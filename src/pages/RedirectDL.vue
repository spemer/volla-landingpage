<template lang="pug">
  div#redirect
    div.redirect__wrapper
      img.redirect__img(
        src="/src/assets/dist/volla_bridge.png"
      )
      JoinUs
</template>

<script>
import JoinUs from '@/components/home/JoinUs'
import { globalVar } from '@/globalVar'
import { userAgent } from '@/mixins/userAgent'

export default {
  name: 'redirect_dl',

  mixins: [
    userAgent,
  ],

  metaInfo: {
    title: globalVar.serviceEn,
    titleTemplate: `%s 앱 다운로드`,
    meta: [
      {
        name:     'description', content: `${globalVar.serviceEn} 앱 다운로드`,
        itemprop: 'description', content: `${globalVar.serviceEn} 앱 다운로드`,
        property: 'og:description', content: `${globalVar.serviceEn} 앱 다운로드`,
        name:     'twitter:description', content: `${globalVar.serviceEn} 앱 다운로드`,
      },
    ],
  },

  mounted () {
    this.$Progress.start()

    redirecting: setTimeout(function() {
      this.$Progress.finish()

      let android = globalVar.androidStore,
          ios     = globalVar.iosStore,
          unknown = globalVar.websiteUrl

      if (this.userAgent == 'Android') {
        return window.open(android, '_blank')
      }
      else if (this.userAgent == 'iOS') {
        return window.open(ios, '_blank')
      }
      else {
        alert('안드로이드, iOS 등의 모바일 운영체제에서만 다운로드 가능합니다.')
        return window.open(unknown, '_blank')
      }

    }.bind(this), 1500)
  },

  components: {
    JoinUs,
  },

}
</script>

<style lang="scss" scoped>
#redirect {
  text-align: center;
  padding: $grid8x 0 $grid4x;

  #joinus {
    border: none !important;
  }

  .redirect__wrapper {
    .redirect__img {
      width: 100%;
      max-width: 590px;
    }
  }
}
</style>
