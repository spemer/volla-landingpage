<template lang="pug">
  div#header
    div.container
      div.header__left(
        v-scroll-to="{el: 'body', duration: 0}"
        v-tooltip.bottom="{content: '맨 위로', delay: {show: 500, hide: 100}}"
      )
        img.header__left--img(
          src="../assets/dist/launcher.svg"
        )
        p.header__left--text {{ serviceKo }}
        p.header__left--text.sub &nbsp;- {{ tagline }}

      div.header__right(
        v-scroll-to="{el: '#download', duration: 0, offset: -54}"
      )
        p.header__right--text 어플다운로드
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'header-el',

  data () {
    return {
      tagline: globalVar.tagline,
      serviceKo: globalVar.serviceKo,
      serviceEn: globalVar.serviceEn,
    }
  },

  // mounted () {
  //   var prevScrollpos = window.pageYOffset;
  //   window.onscroll = function() {
  //   var currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos || prevScrollpos < 0) {
  //       document.getElementById("header").style.top = "0";
  //     } else {
  //       document.getElementById("header").style.top = "-56px";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   }
  // },

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

  // // safari
  // @supports (-webkit-appearance: none) {
  //   @include box-shadow(0);
  //   background-color: hsla(0, 0%, 100%, 0.8);
  //   -webkit-backdrop-filter: saturate(100%) blur($grid6x);
  //   backdrop-filter: saturate(100%) blur($grid6x);
  // }

  // // edge
  // @supports (-ms-ime-align: auto) {
  //   @include box-shadow(0);
  //   background-color: hsla(0, 0%, 100%, 0.8);
  //   -webkit-backdrop-filter: saturate(100%) blur($grid6x);
  //   backdrop-filter: saturate(100%) blur($grid6x);
  // }

  // @media #{$ie} {
  //   background-color: #fff;
  // }
  // @media #{$chrome} {
  //   background-color: #fff;
  // }
  // @media #{$firefox} {
  //   background-color: #fff;
  // }

  .header__left {
    cursor: pointer;
    height: $header;
    font-weight: 300;
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

      @media #{$ip6} {
        display: none;
      }
    }
  }

  .header__right {
    float: right;
    cursor: pointer;
    color: $brand-pink;
    padding-top: $grid4x;
    @include transition(all 0.25s ease);

    &:hover {
      opacity: 0.5;
    }

    .header__right--text {
      @include transform(translateY(-65%) !important);
    }
  }
}
</style>
