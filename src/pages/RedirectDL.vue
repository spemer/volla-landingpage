<template lang="pug">
  div#redirect
    div.redirect__wrapper
      img.redirect__img(
        src="/src/assets/dist/volla_bridge.png"
      )
      JoinUs
      //- div.redirect__wrapper
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
import JoinUs from '@/components/home/JoinUs'
import { globalVar } from '@/globalVar'
import { userAgent } from '@/mixins/userAgent'

export default {
  name: 'redirect_dl',

  data: _ => ({
    website: '웹사이트 바로가기',
    serviceKo: globalVar.serviceKo,
  }),

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
    redirecting: setTimeout(function() {
      let android = globalVar.androidStore,
          ios     = globalVar.iosStore,
          unknown = globalVar.websiteUrl

      if (this.userAgent == 'Android') {
        return window.location.href = android
      }
      else if (this.userAgent == 'iOS') {
        return window.location.href = ios
      }
      else {
        alert('안드로이드, iOS 등의 모바일 운영체제에서만 다운로드 가능합니다.')
        return window.location.href = unknown
      }
    }.bind(this), 1000)
  },

  components: {
    JoinUs,
  },

}
</script>

<style lang="scss" scoped>
#redirect {
  padding: $grid8x 0 $grid4x;
  text-align: center;

  #joinus {
    border: none !important;
  }

  .redirect__wrapper {
    width: 100%;
    height: 100%;

    .redirect__img {
      width: 100%;
    }
    // top: 50%;
    // left: 50%;
    // margin: 0;
    // position: absolute;
    // @include transform(translate(-50%, -50%));

    // .redirect__wrapper--img {
    //   display: block;
    //   margin: 0 auto;
    //   width: $grid16x;
    // }

    // .redirect__wrapper--text {
    //   margin-top: $grid2x;
    // }

    // .global__cta {
    //   display: block;
    //   margin-top: $grid32x;
    // }
  }
}
</style>
