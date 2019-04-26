<template lang="pug">
  div#hero
    div.hero__dim
      div.container
        div.hero__text
          h1.hero__text--title
            | 라이브 방송으로 담는
            span.hero__title--nbsp &nbsp;&nbsp;
            span.hero__br
            | 오프라인 쇼핑
          p.hero__text--subtitle {{ serviceEn }}를 소개합니다
          p.hero__text--spantext
            | 라이브 방송으로 여러분의 상품을
            span.hero__title--nbsp &nbsp;
            span.hero__br
            | 더욱 쉽고 확실하게 판매하는
            br
            | 여성 패션 &amp; 뷰티 모바일 라이브 쇼핑 플랫폼

          DownloadBtn.dlbtn
</template>

<script>
import DownloadBtn from '@/components/misc/DownloadBtn'
import { globalVar } from '@/globalVar'

export default {
  name: 'hero',

  data () {
    return {
      serviceEn: globalVar.serviceEn,
    }
  },

  components: {
    DownloadBtn,
  },

}
</script>
