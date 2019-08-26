<template lang="pug">
  div#tosDetails
    div#terms
      router-view.terms-wrapper
</template>

<script>
import TOS_ENTRIES from "@/statics/data/tos.json";
import { globalVar } from "@/globalVar";

export default {
  name: "tosDetails",

  data: () => ({
    title: null
  }),

  computed: {
    tosEntries: () => TOS_ENTRIES
  },

  metaInfo() {
    return {
      title: `${this.title}`,
      titleTemplate: `%s`
    };
  },

  mounted() {
    let arr = this.tosEntries[globalVar.tosDateNowNumber];

    let idx = arr.findIndex(item => {
      return `/tos/${item.id}` === this.$route.path;
    });

    this.title = arr[idx].title;
  }
};
</script>

<style lang="scss">
#tosDetails {
  .global_cta-btn {
    display: inline-block;
    border: 2px solid transparent;
    background-color: $brand-pink-16;
    margin: -#{$grid16x} auto $grid48x !important;
  }

  #terms {
    font-weight: 400;

    ::selection {
      color: #fff;
      background-color: $brand-pink !important;
    }

    h1 {
      font-weight: 900;
      text-align: center;
      color: $black78 !important;
    }

    .terms-wrapper {
      margin: 0 auto;
      max-width: 640px;
      color: $black78 !important;
      padding: $grid32x 0 $grid32x;
      @include line-height($grid5x);

      @media #{$pablet} {
        padding-bottom: $grid32x !important;
      }

      h2 {
        text-align: center;
        margin-top: $grid16x;
        color: $black78 !important;
        margin-bottom: -#{$grid4x};
        @include font-size($grid7x);

        @media #{$pablet} {
          @include font-size($grid6x);
        }
      }

      p {
        margin-bottom: $grid2x;
        @include font-size($grid4x);
        @include line-height(18px);
      }

      h1 {
        color: $black78;
        @include font-size($grid8x);
      }

      h3 {
        color: $black78;
        margin-top: $grid16x;
        margin-bottom: $grid2x;
        @include font-size($grid6x);
        @include line-height($grid6x);
      }

      ul {
        li {
          margin-bottom: $grid2x;
          list-style-type: disc !important;
        }
      }

      li {
        margin-left: $grid6x;
      }

      .terms-list {
        margin-top: $grid4x;

        li {
          margin: $grid 0;
        }
      }

      ol {
        margin: 0 0 0 1.5em;
        padding: 0;
        counter-reset: item;

        @media #{$mobile} {
          margin: 0 0 1em;
        }

        > li {
          margin: 0;
          margin-bottom: $grid2x;
          padding: 0 0 0 1.25em;
          text-indent: -1.25em;
          list-style-type: none;
          counter-increment: item;

          > ul {
            padding-left: 1.5em !important;

            > li {
              padding: 0 !important;
              text-indent: 0 !important;
            }
          }

          > ol {
            counter-reset: item;

            > li {
              display: block;
              counter-increment: item;

              &:before {
                content: counters(item, ".") "";
              }
            }
          }

          @media #{$mobile} {
            padding: 0 0 0 1em;
            text-indent: -1em;
          }

          &:before {
            display: inline-block;
            width: 1em;
            padding-right: $grid2x;
            font-weight: bolder;
            text-align: right;
            content: counter(item) ".";

            @media #{$mobile} {
              padding-right: $grid;
            }
          }

          > ul,
          > ol {
            > li {
              margin: 0;
              padding: 0 0 0 1.5em;
              text-indent: -1.5em;

              @media #{$mobile} {
                padding: 0 0 0 1.25em;
                text-indent: -1.25em;
              }
            }
          }
        }
      }

      @media #{$tablet} {
        padding: $grid16x $grid8x $grid20x;
      }

      @media #{$pablet} {
        padding: $grid12x $grid6x $grid16x;

        h1 {
          @include font-size($grid6x);
        }

        h3 {
          @include font-size($grid5x);
        }
      }

      @media #{$mobile} {
        padding: $grid8x $grid4x $grid12x;

        h1 {
          @include font-size($grid6x);
        }

        h3 {
          @include font-size($grid5x);
        }
      }
    }
  }
}
</style>
