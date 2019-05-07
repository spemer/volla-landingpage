<template lang="pug">
  div#hero.sellerHero
    div.hero__dim
      div.container
        div.hero__text
          h1.hero__text--title
            | 당신의 고객을 만날 수 있는
            span.hero__title--nbsp &nbsp;&nbsp;
            br
            | 새로운 라이브 쇼핑 서비스
          p.hero__text--subtitle(
            v-if="this.$route.path === '/'"
          ) {{ serviceEn }}를 소개합니다
          p.hero__text--spantext
            | 이제 소비자는 예쁜 제품 사진이 아닌,
            br
            | 영상을 통한 소통으로 구매를 합니다
</template>

<script>
import { globalVar } from '@/globalVar'

export default {
  name: 'hero',

  data: () => ({
    serviceEn: globalVar.serviceEn,
  }),

}
</script>
