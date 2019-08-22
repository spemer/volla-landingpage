<template lang="pug">
  div#videoEmbed
    div.container
      h1.easy_text-title.section_title
        | 이제 소비자는 단순히 예쁜 사진이 아닌
        br
        | 영상을 통한 더 생생한 정보를 원합니다

      youtube.video_body(
        :video-id="videoId"
      )
      p.videoEmbed_from
        span.videoEmbed_from-text 영상출처:
          a.videoEmbed_from-link(
            target="_blank"
            :href="videoLink"
            rel="noopener noreferrer"
            :title="`${videoChannel} 님 유튜브 채널 바로가기(새 창)`"
          ) &nbsp;{{ videoChannel }}&nbsp;
</template>

<script>
import Vue from "vue";
import VueYouTubeEmbed from "vue-youtube-embed";
Vue.use(VueYouTubeEmbed);

export default {
  data: () => ({
    videoChannel: "춤추는 변호사",
    videoId: "_62t0IooHYw",
    videoLink: "https://www.youtube.com/channel/UCoeXIHBxfJ7ahvMV4y8a9wQ"
  })
};
</script>
