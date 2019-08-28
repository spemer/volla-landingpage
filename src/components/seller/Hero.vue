<template lang="pug">
  div#hero.sellerHero(
    :style="{ backgroundImage: backgroundImage }"
  )
    div.hero_dim
      div.container
        div.hero_text
          h1.hero_text-title
            | 새로운 고객을 만날 수 있는
            br
            | 새로운 라이브 패션 커머스
          p.hero_text-subtitle {{ serviceEn }}를 소개합니다
        img.hero_text-image(
          :alt="serviceEn"
          src="@/assets/dist/white.png"
        )
</template>

<script>
import { globalVar } from "@/globalVar";

export default {
  data: () => ({
    serviceEn: globalVar.serviceEn,
    backgroundImage: `url(${require("@/assets/dist/hero_2.png")})`
  })
};
</script>

<style lang="scss" scoped>
#hero {
  &.sellerHero {
    margin: 0 auto;
    height: $grid140x;
    text-align: left !important;

    @media #{$tablet} {
      height: $grid96x;
      text-align: center !important;
    }

    .hero_text {
      top: 50%;
      color: #fff;
      position: absolute;
      margin-right: -50%;
      @include transform(translate(0%, -50%));

      @media #{$tablet} {
        margin-top: -#{$grid8x};
        color: #fff;
        position: relative;
        margin-right: 0%;
        @include transform(translate(0%, 100%));
      }

      @media #{$mini} {
        margin-top: 0;
      }

      .hero_text-title {
        text-align: left;

        @media #{$tablet} {
          text-align: center;
        }
      }
    }

    .hero_text-image {
      width: 360px;
      float: right;
      display: block;
      @include transform(translate(0%, 10%));

      @media #{$tablet} {
        display: none;
      }
    }
  }
}
</style>
