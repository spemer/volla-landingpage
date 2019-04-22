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
import { globalVar } from '@/globalVar'
import DownloadBtn from '@/components/misc/DownloadBtn'

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

<style lang="scss">
$baseURI: '../assets/dist/hero.png';

#hero {
  width: 100%;
  height: $grid128x;
  position: relative;
  margin-top: $header;
  background-image: url('#{$baseURI}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media #{$tablet} {
    max-height: calc(92vh - #{$grid16x});
  }

  .hero__dim {
    height: 100%;
    background-color: $black78;

    .hero__text {
      top: 50%;
      left: 50%;
      color: #fff;
      text-align: center;
      position: absolute;
      margin-right: -50%;
      @include transform(translate(-50%, -50%));

      .hero__title--nbsp {
        display: inline-block;
      }

      @media #{$middle} {
        .hero__title--nbsp {
          display: none !important;
        }

        .hero__br {
          &::after {
            content: '\a ';
            white-space: pre;
          }
        }
      }

      .hero__text--title {
        text-align: center;

        @media #{$mini} {
          @include font-size($grid6x);
          @include line-height($grid6x);
        }
      }

      .hero__text--subtitle {
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

      .hero__text--spantext,
      .hero__br {
        font-weight: 300;
        opacity: 0.8;
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
      }
    }
  }
}
</style>
