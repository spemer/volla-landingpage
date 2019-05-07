<template lang="pug">
  div#download
    div.container
      h1.download__title.section__title 앱으로 간편하게 즐겨보세요
      p.section__subtitle
        | {{ serviceKo }} 앱은 안드로이드 구글 플레이, 아이폰 앱스토어에서 다운로드 받으실 수 있습니다.

      DownloadBtn

      div.download__mockup
        img.download__mockup--img(
          src="/src/assets/dist/screen.png"
        )
</template>

<script>
import DownloadBtn from '@/components/misc/DownloadBtn'
import { globalVar } from '@/globalVar'

export default {
  name: 'download',

  data: () => ({
      serviceKo: globalVar.serviceKo,
  }),

  components: {
    DownloadBtn,
  },

}
</script>
