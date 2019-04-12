<template lang="pug">
  div#download
    div.container
      h1.download__title.section__title 어플로 간편하게 즐겨보세요.
      p.section__subtitle {{ serviceKo }}는 안드로이드 구글 플레이, 아이폰 앱스토어에서 다운로드 받으실 수 있습니다.

      DownloadBtn

      div.download__mockup
        img.download__mockup--img(
          src="/src/assets/dist/screen.png"
        )
</template>

<script>
import {globalVar} from '@/globalVar'
import DownloadBtn from '@/components/misc/DownloadBtn'

export default {
  name: 'download',

  data () {
    return {
      serviceKo: globalVar.serviceKo,
    }
  },

  computed: {
    badges() {
      return this.$store.state.badges
    }
  },

  components: {
    DownloadBtn,
  },

}
</script>

<style lang="scss">
#download {
  height: 649px;
  overflow-y: hidden;
  border-top: 1px solid $texteee;

  @media #{$pablet2} {
    height: 720px;
  }

  @media #{$pablet} {
    height: 667px;
  }

  @media #{$middle2} {
    height: 667px;
  }

  @media #{$mobile} {
    height: 595px;
  }

  .download__mockup {
    text-align: center;

    .download__mockup--img {
      width: 320px;
      margin: 0 auto;

      @media #{$mobile} {
        width: 280px;
      }
    }
  }
}
</style>
