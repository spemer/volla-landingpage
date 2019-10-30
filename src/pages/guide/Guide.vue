<template lang="pug">
  div#guide
    router-view
    div#closebtn.apply_border
      router-link.global_cta(
        :to="btn_link"
      )
        button.global_cta-btn(
          type="button"
        ) {{ btn_text }}
    Kakao
</template>

<script>
export default {
  name: "guide",

  data: () => ({
    btn_text: "",
    btn_link: ""
  }),

  watch: {
    $route() {
      return this.$route.path === "/guide/live"
        ? ((this.btn_text = "프리즘 송출 가이드 보러가기"),
          (this.btn_link = "/guide/prism"))
        : ((this.btn_text = "라이브 신청 가이드 보러가기"),
          (this.btn_link = "/guide/live"));
    }
  },

  mounted() {
    return this.$route.path === "/guide/live"
      ? ((this.btn_text = "프리즘 송출 가이드 보러가기"),
        (this.btn_link = "/guide/prism"))
      : ((this.btn_text = "라이브 신청 가이드 보러가기"),
        (this.btn_link = "/guide/live"));
  },

  components: {
    Kakao: () =>
      import(
        /* webpackChunkName: 'components/misc/kakao' */ "@/components/misc/Kakao"
      )
  }
};
</script>

<style lang="scss">
#guide {
  #plusfriend-addfriend-button {
    margin-bottom: $grid18x;
  }

  #closebtn {
    left: 0;
    width: 100%;
    height: auto;
    position: fixed;
    border-top: none;
    bottom: -#{$grid16x};
    background-color: #fff;
    z-index: 99997 !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    margin: $grid12x auto $grid16x;
    @include gradient();

    @media #{$pablet} {
      display: block;
    }

    // iPhone X safearea
    @supports (padding-bottom: env(safe-area-inset-bottom)) {
      padding-bottom: calc(env(safe-area-inset-bottom)) !important;
    }

    &.apply_border {
      border-top: 1px solid #eee;
    }

    .global_cta-btn {
      display: block;
      height: $header;
      color: $brand_pink;
      margin: $grid4x auto;
      width: calc(100% - #{$grid8x});
      background-color: $brand_pink_16;
      @include border-radius();
      @include font-size($grid4x);
    }
  }

  .swiper-container {
    .swiper-pagination {
      position: fixed;
      bottom: 0;
      margin-bottom: $grid32x;

      .swiper-pagination-bullet {
        opacity: 1;
        background: $black16;
        z-index: 99998 !important;

        &.swiper-pagination-bullet-active {
          background: $brand-pink;
        }
      }
    }
  }
}
</style>
