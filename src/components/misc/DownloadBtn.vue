<template lang="pug">
  div#downloadBtn
    div.download_badge.if_mobile-false
      a.download_badge-link(
        v-for="(value, key) in badges"
        :key="key"
        target="_blank"
        :href="value.href"
        rel="noopener noreferrer"
        :title="key + ' ' + value.title + '에서 다운받기'"
      )
        img.download_badge-each(
          :alt="serviceEn"
          :src="value.src"
        )
        span.download_badge-text {{ value.title }}

    div.download_badge.if_mobile-true
      a.download_badge-link(
        target="_blank"
        rel="noopener noreferrer"
        :href="badgesMobile.href"
        :title="badgesMobile.title + '에서 다운받기'"
      )
        img.download_badge-each(
          :alt="serviceEn"
          :src="badgesMobile.src"
        )
        span.download_badge-text {{ badgesMobile.title }}
</template>

<script>
import { userAgent } from "@/mixins/userAgent";
import { globalVar } from "@/globalVar";

export default {
  data: () => ({
    serviceEn: globalVar.serviceEn,
    badges: {
      Android: {
        src: require("@/assets/dist/playstore.png"),
        title: "Google Play",
        href: globalVar.androidStore
      },
      iOS: {
        src: require("@/assets/dist/appstore.png"),
        title: "App Store",
        href: globalVar.iosStore
      }
    }
  }),

  mixins: [userAgent],

  computed: {
    badgesMobile() {
      return this.userAgent === "iOS" ? this.badges.iOS : this.badges.Android;
    }
  }
};
</script>

<style lang="scss" scoped>
#downloadBtn {
  .if_mobile-true {
    display: none !important;
  }

  .if_mobile-false {
    display: block !important;
  }

  @media #{$pablet} {
    .if_mobile-false {
      display: none !important;
    }

    .if_mobile-true {
      display: block !important;
    }
  }

  .download_badge {
    width: 100%;
    outline: none;
    margin: 0 auto;
    text-align: center;
    margin-top: $grid4x;
    display: inline-block;

    .download_badge-link {
      cursor: pointer;
      height: $grid12x;
      display: inline-block;
      margin-bottom: $grid8x;
      border-radius: $grid16x;
      background-color: $black04;
      padding: $grid2x $grid6x 0;
      border: 1px solid transparent;
      @include transition(all 0.25s ease);

      &:hover {
        opacity: 0.5;
      }

      &:first-child {
        margin-right: $grid4x;

        @media #{$pablet} {
          margin-right: 0;
        }
      }

      .download_badge-each {
        width: $grid6x;
        margin-top: $grid2x;
        margin-right: $grid2x;
        vertical-align: bottom;
      }

      .download_badge-text {
        color: $text777;
        font-weight: 700;
        vertical-align: bottom;
      }
    }
  }
}
</style>
