<template lang="pug">
  div#hero
    div.hero__dim
      div.container
        div.hero__text
          h1.hero__text--title
            | 라이브 방송으로 만나는
            span.hero__title--nbsp &nbsp;
            span.hero__br
            | 동대문 쇼핑
          p.hero__text--subtitle {{ serviceEn }}를 소개합니다
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'hero',

  data () {
    return {
      serviceEn: globalVar.serviceEn,
    }
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
      position: absolute;
      text-align: center;
      margin-right: -50%;
      @include transform(translate(-50%, -50%));

      .hero__text--title {
        .hero__title--nbsp {
          display: inline-block;
        }

        @media #{$middle} {
          @include font-size($grid6x);
          @include line-height($grid6x);

          .hero__title--nbsp {
            display: none;
          }

          .hero__br {
            &::after {
              content: '\a ';
              white-space: pre;
            }
          }
        }
      }

      .hero__text--subtitle {
        font-weight: 300;
        margin-top: -#{$grid4x};
        @include font-size($grid5x);

        @media #{$middle} {
          @include font-size($grid4x);
        }
      }
    }
  }
}
</style>
