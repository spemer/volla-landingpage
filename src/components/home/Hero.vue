<template lang="pug">
  div#hero(
    :style="{ backgroundImage: backgroundImage }"
  )
    div.hero_dim
      div.container
        div.hero_text.center
          h1.hero_text-title
            | 라이브 방송으로 만나는
            span.hero_title-nbsp &nbsp;&nbsp;
            span.hero_br
            | 실시간 패션 커머스
          p.hero_text-subtitle {{ serviceEn }}를 소개합니다
          p.hero_text-spantext
            | 라이브 방송으로 여러분의 상품을
            span.hero_title-nbsp &nbsp;
            span.hero_br
            | 더욱 쉽고 확실하게 판매하는
            br
            | 여성 패션 &amp; 뷰티 모바일 라이브 쇼핑 플랫폼

          DownloadBtn.dlbtn
</template>

<script>
import { globalVar } from "@/globalVar";

export default {
  data: () => ({
    serviceEn: globalVar.serviceEn,
    backgroundImage: `url(${require("@/assets/dist/hero.png")})`
  }),

  components: {
    DownloadBtn: () =>
      import(
        /* webpackChunkName: 'components/misc/DownloadBtn' */ "@/components/misc/DownloadBtn"
      )
  }
};
</script>
