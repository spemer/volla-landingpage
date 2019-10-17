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
  }
};
</script>

<style lang="scss">
#guide {
  #closebtn {
    left: 0;
    width: 100%;
    height: auto;
    position: fixed;
    border-top: none;
    bottom: -#{$grid16x};
    background-color: #fff;
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
}
</style>
