<template lang="pug">
  div#header(
    v-if="this.$route.query.from !== 'app'"
  )
    div.container
      div.header_left(
        v-scroll-to="{el: 'body', duration: 0}"
      )
        img.header_left-img(
          :alt="serviceEn"
          src="../assets/dist/launcher.svg"
        )
        p.header_left-text {{ serviceEn }}

      div.header_right
        p.header_right-text.dl(
          v-if="this.$route.path === '/'"
          v-scroll-to="{el: '#dl', duration: 0, offset: -54}"
        ) 다운로드
        router-link.header_right-text(
          :to="href"
          :class="(this.$route.path === '/') ? 'join' : 'home'"
        ) {{ text }}
</template>

<script>
import Vue from "vue";
import { globalVar } from "@/globalVar";

import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo);

export default {
  data: () => ({
    href: "",
    text: "",
    serviceEn: globalVar.serviceEn
  }),

  mounted() {
    return this.$route.path === "/"
      ? ((this.href = "/benefits"), (this.text = "입점소개"))
      : ((this.href = "/"), (this.text = "메인으로"));
  }
};
</script>

<style lang="scss" scoped>
#header {
  top: 0;
  width: 100%;
  z-index: 10;
  height: $header;
  position: sticky;
  font-weight: 900;
  background-color: #fff;
  @include box-shadow();

  @supports (position: sticky) or (position: -webkit-sticky) {
    position: -webkit-sticky;
    position: sticky;
  }

  .container {
    height: $header;

    .header_left {
      cursor: pointer;
      height: $header;
      font-weight: 400;
      display: inline-block;

      .header_left-img {
        width: 40px;
        height: 40px;
        padding: $grid2x 0;
        margin-left: -6px;
      }

      .header_left-text {
        font-weight: 700;
        color: $brand-pink;
        margin-left: $grid2x;
        letter-spacing: 0.25px;
        display: inline-block;
        @include transform(translateY(-75%));

        @media #{$pablet} {
          display: none;
        }
      }
    }

    .header_right {
      float: right;
      height: $header;
      font-weight: 400;

      .header_right-text {
        cursor: pointer;
        display: inline-block;
        @include font-size($grid4x);
        @include line-height($grid4x);
        @include transition(opacity 0.25s ease);

        &.join {
          font-weight: 700;
        }

        &.home {
          font-weight: 700;
          margin-right: 0 !important;
          @include transform(translateY(63%));
        }

        &:first-child {
          margin-right: $grid8x;

          @media #{$pablet} {
            margin-right: $grid6x;
          }

          @media #{$mini} {
            margin-right: $grid4x;
          }
        }
      }
    }
  }
}
</style>
