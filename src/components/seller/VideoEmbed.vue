<template lang="pug">
  div#videoEmbed
    div.container
      h1.easy_text-title.section_title
        | 이제 소비자는 단순히 예쁜 사진이 아닌
        br
        | 영상을 통한 더 생생한 정보를 원합니다

      youtube.video_body(
        :video-id="videoId"
        player-width="100%"
        player-height="480px"
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

<style lang="scss" scoped>
#videoEmbed {
  padding: $grid16x 0 $grid20x;

  .easy_text-title {
    padding: $grid4x 0;
    @include font-size($grid7x);

    @media #{$tablet} {
      @include font-size($grid6x);
    }

    @media #{$ip6} {
      @include font-size($grid5x);
    }

    @media #{$mini} {
      @include font-size($grid4x);
    }
  }

  .video_body {
    display: block;

    iframe {
      width: 100%;
      height: 480px;
      margin: 0 auto;
    }

    @media #{$pablet} {
      height: auto !important;
    }
  }

  .videoEmbed_from {
    text-align: center;
    margin-top: $grid2x;

    .videoEmbed_from-text {
      font-weight: 300;
      display: inline-block;

      .videoEmbed_from-link {
        cursor: pointer;
        font-weight: 700;
      }
    }
  }
}
</style>
