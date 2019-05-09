<template lang="pug">
  div#sellerTitle
    div.container
      h1.easy__text--title.section__title
        | 이제 소비자는 예쁜 제품사진이 아닌
        br
        | 영상을 통한 소통으로 구매를 합니다

      youtube.video__body(
        video-id="_62t0IooHYw"
      )
      p.sellerTitle__from
        span.sellerTitle__from--text &nbsp;출처:
          a.sellerTitle__from--link(
            :href="videoLink"
            target="_blank"
            :title="videoChannel"
          ) &nbsp;{{ videoChannel }}&nbsp;
            i.sellerTitle__from--icon.fab.fa-youtube
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

export default {
  name: 'sellerTitle',

  data: () => ({
    videoId: process.env.YT_ID,
    videoChannel: '춤추는 변호사',
    videoLink: 'https://www.youtube.com/channel/UCoeXIHBxfJ7ahvMV4y8a9wQ',
  }),

}
</script>
