<template lang="pug">
  div#hero
    div.hero__dim
      div.container
        div.hero__text
          h1.hero__text--title
            | 라이브 방송으로 만나는
            span.hero__title--nbsp &nbsp;
            span.hero__br
            | 동대문 쇼핑,
          p.hero__text--subtitle {{ serviceEn }}를 소개합니다.

          DownloadBtn.dlbtn
</template>

<script>
import {globalVar} from '@/globalVar'
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
$baseURI: '../assets/dist/hero.jpg';

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
    background-color: $black54;

    .hero__text {
      top: 50%;
      left: 50%;
      color: #fff;
      text-align: center;
      position: absolute;
      margin-right: -50%;
      @include transform(translate(-50%, -50%));

      .hero__text--title {
        text-align: center;

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

      .dlbtn {
        margin-top: $grid12x;
      }
    }
  }
}
</style>
