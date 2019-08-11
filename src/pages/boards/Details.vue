<template lang="pug">
  div#markdown
    router-view.container
    div#closebtn(
      :class="{ 'apply_border': !isBottom }"
    )
      router-link.global__cta(
        to="/notices/"
      )
        button.global__cta--btn(
          type="button"
        ) 목록으로
</template>

<script>
import NOTICES_ENTRIES from "@/statics/data/notices.json";
import { dateFormatting } from "@/mixins/dateFormatting";
import { applyBorder } from "@/mixins/applyBorder";

export default {
  name: "details",

  data: () => ({
    title: null
  }),

  mixins: [dateFormatting, applyBorder],

  computed: {
    noticesEntries: () => NOTICES_ENTRIES
  },

  metaInfo() {
    return {
      title: `공지사항`,
      titleTemplate: `%s`
    };
  },

  mounted() {
    // append date info
    let arr = this.noticesEntries["notices"];

    let idx = arr.findIndex(item => {
      return item.id === this.$route.params.id;
    });

    let getTitle = document.querySelectorAll("section h1")[0];
    let setDate = document.createElement("h4");
    getTitle.parentNode.insertBefore(setDate, getTitle.nextSibling);
    setDate.innerHTML = this.dateFormatting(arr[idx].ymd);
    this.title = arr[idx].title;

    // set _blank every anchor tags
    [...document.querySelectorAll("section a")].forEach(anchor => {
      let getAnchorTarget = anchor.getAttribute("target");
      if (!getAnchorTarget) {
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("rel", "noopener noreferrer");
      }
    });
  }
};
</script>

<style lang="scss">
#markdown {
  $p_font_size: 14px;

  margin: 0 auto;
  max-width: 480px !important;
  width: calc(100% - #{$grid32x});
  padding-top: $grid4x !important;
  padding-bottom: $grid32x !important;
  @include user-select();

  .container {
    max-width: 480px !important;
    padding: 0 $grid2x !important;
    width: calc(100% - #{$grid4x});
  }

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
      border-top: 1px solid $texteee;
    }

    .global__cta--btn {
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

  @media #{$default} {
    padding: $grid16x;
    width: calc(100% - #{$grid32x});
    padding-top: $grid6x !important;
  }

  @media #{$basic} {
    padding: $grid8x;
    width: calc(100% - #{$grid16x});
    padding-top: $grid6x !important;
  }

  @media #{$tablet} {
    padding: $grid2x;
    width: calc(100% - #{$grid4x});
    padding-top: $grid6x !important;
  }

  h1 {
    margin-top: 0;
    text-align: left;
    font-weight: 700;
    @include font-size($grid4x);
  }

  h4 {
    color: $black54;
    font-weight: 400;
    margin-top: -#{6px};
    padding-bottom: 17px;
    border-bottom: 1px solid $texteee;
    @include font-size($grid3x);
  }

  ul,
  ol {
    margin-left: -#{$grid4x};

    li {
      color: $black78;
    }
  }

  a {
    font-weight: 700;
  }

  img {
    margin: 0 auto;
    max-width: 100%;
    margin-top: $grid4x;
    display: inline-block;
    margin-bottom: $grid4x;
    @include border-radius();

    @media #{$pablet} {
      width: 100%;
    }
  }

  em {
    margin: 0 auto;
    display: block;
    max-width: 80%;
    text-align: center;

    @media #{$tablet} {
      max-width: 100%;
    }
  }

  hr {
    margin: $grid16x 0;
  }

  p,
  li {
    @include font-size($p_font_size);
  }
}
</style>
