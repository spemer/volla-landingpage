<template lang="pug">
  div#header
    div.container
      div.header__left(
        v-scroll-to="{el: 'body', duration: 0}"
      )
        img.header__left--img(
          src="../assets/dist/launcher.svg"
        )
        p.header__left--text {{ serviceKo }}
        p.header__left--text.sub &nbsp;- {{ tagline }}

      div.header__right(
        v-if="this.$route.path === '/'"
      )
        p.header__right--text.dl(
          v-scroll-to="{el: '#download', duration: 0, offset: -54}"
        ) 다운로드
        router-link.header__right--text.join(
          :to="'/seller-form'"
          target="_blank"
          v-tooltip.bottom="{content: '입점신청하기(새 창)', delay: {show: 500, hide: 100}}"
        ) 입점신청
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'header-el',

  methods: {
    dlWait() {
      alert('어플이 4월 중으로 곧 출시됩니다. 조금만 기다려주세요!')
    }
  },

  data () {
    return {
      mailTo: globalVar.mailTo,
      tagline: globalVar.tagline,
      serviceKo: globalVar.serviceKo,
      serviceEn: globalVar.serviceEn,
      sellerRequestUrl: globalVar.sellerRequestUrl,
    }
  },

}
</script>

<style lang="scss">
#header {
  top: 0;
  width: 100%;
  z-index: 10;
  position: fixed;
  height: $header;
  font-weight: 900;
  background-color: #fff;
  transition: top 0.3s ease;
  @include box-shadow();

  .container {
    height: $header;

    .header__left {
      cursor: pointer;
      height: $header;
      font-weight: 400;
      display: inline-block;

      .header__left--img {
        padding: $grid2x 0;
      }

      .header__left--text {
        color: $black78;
        margin-left: $grid4x;
        display: inline-block;
        @include transform(translateY(-75%));

        &.sub {
          margin-left: 0;
        }

        @media #{$pablet} {
          display: none;
        }
      }
    }

    .header__right {
      float: right;
      height: $header;
      font-weight: 500;

      .header__right--text {
        cursor: pointer;
        display: inline-block;
        @include font-size($grid4x);
        @include line-height($grid4x);
        @include transition(all 0.25s ease);

        &.join {
          font-weight: 700;
        }

        &:hover {
          opacity: 0.5;
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
