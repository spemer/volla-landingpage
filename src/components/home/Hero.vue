<template lang="pug">
  div#hero(
    :style="{ backgroundImage: backgroundImage }"
  )
    div.hero_dim
      div.container
        div.hero_text.center
          h1.hero_text-title
            | {{ tagline }}
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
    tagline: globalVar.tagline,
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

<style lang="scss">
#hero {
  width: 100%;
  height: $grid128x;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media #{$tablet} {
    max-height: calc(92vh - #{$grid16x});
  }

  .hero_dim {
    height: 100%;
    overflow: hidden;
    background-color: $black78;

    .hero_text {
      &.center {
        top: 50%;
        left: 50%;
        color: #fff;
        text-align: center;
        position: absolute;
        margin-right: -50%;
        @include transform(translate(-50%, -50%));
      }

      .hero_title-nbsp {
        display: inline-block;
      }

      @media #{$middle} {
        .hero_title-nbsp {
          display: none !important;
        }

        .hero_br {
          &::after {
            content: "\a ";
            white-space: pre;
          }
        }
      }

      .hero_text-title {
        font-weight: 700;
        text-align: center;

        @media #{$mini} {
          @include font-size($grid6x);
          @include line-height($grid6x);
        }
      }

      .hero_text-subtitle {
        font-weight: 300;
        margin-top: -#{$grid4x};
        @include font-size($grid5x);

        @media #{$middle} {
          margin-top: -#{$grid2x};
        }

        @media #{$mini} {
          @include font-size($grid4x);
        }
      }

      .hero_text-spantext,
      .hero_br {
        opacity: 0.8;
        font-weight: 300;
        margin-bottom: -#{$grid2x};
        @include font-size($grid4x);

        @media #{$pablet} {
          padding: $grid4x 0;
          margin-top: -#{$grid2x};
          margin-bottom: -#{$grid4x};
        }

        @media #{$mobile} {
          @include font-size(14px);
        }
      }

      .dlbtn {
        margin-top: $grid12x;

        a {
          background-color: #fff;
        }
      }
    }
  }
}
</style>
