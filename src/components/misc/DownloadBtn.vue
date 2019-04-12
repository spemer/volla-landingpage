<template lang="pug">
  div#downloadBtn
    div.download__badge.if__mobile--false
      a.download__badge--link(
        v-for="(value, key) in badges"
        :key="key"
        target="_blank"
        :href="value.href"
        v-tooltip.bottom="{content: key + ' ' + value.title + '에서 다운받기', delay: {show: 500, hide: 100}}"
      )
        img.download__badge--each(
          :src="value.src"
        )
        span.download__badge--text {{ value.title }}

    div.download__badge.if__mobile--true
      a.download__badge--link(
        target="_blank"
        :href="badgesMobile.href"
        v-tooltip.bottom="{content: badgesMobile.title + '에서 다운받기', delay: {show: 500, hide: 100}}"
      )
        img.download__badge--each(
          :src="badgesMobile.src"
        )
        span.download__badge--text {{ badgesMobile.title }}
</template>

<script>
export default {
  name: 'DownloadBtn',

  data () {
    return {
      userAgent: undefined,
    }
  },

  computed: {
    badges() {
      return this.$store.state.badges
    },

    badgesMobile() {
      if (this.userAgent == 'Android') {
        return this.$store.state.badges.Android
      } else if (this.userAgent == 'iOS') {
        return this.$store.state.badges.iOS
      }
    },
  },

  created () {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
      this.userAgent = "Windows Phone"
    }
    else if (/android/i.test(userAgent)) {
      this.userAgent = "Android"
    }
    else if (/iPad|iPhone|iPod/.test(userAgent) || navigator.appVersion.indexOf("Mac")!=-1 && !window.MSStream) {
      this.userAgent = "iOS"
    }
    else this.userAgent = "unknown"
  },

}
</script>

<style lang="scss">
#downloadBtn {
  .if__mobile--true {
    display: none !important;
  }

  .if__mobile--false {
    display: block !important;
  }

  @media #{$pablet} {
    .if__mobile--false {
      display: none !important;
    }
    .if__mobile--true {
      display: block !important;
    }
  }

  .download__badge {
    width: 100%;
    outline: none;
    margin: 0 auto;
    margin-top: $grid4x;
    text-align: center;
    display: inline-block;

    .download__badge--link {
      height: $grid10x;
      display: inline-block;
      margin-bottom: $grid8x;
      border-radius: $grid16x;
      background-color: #fff;
      border: 1px solid $texteee;
      padding: $grid2x $grid4x 0;
      @include transition(all 0.25s ease);

      &:hover {
        opacity: 0.75;
      }

      &:first-child {
        margin-right: $grid4x;

        @media #{$pablet} {
          margin-right: 0;
        }

        @media #{$mobile} {
          padding: $grid2x $grid4x 0;
        }
      }

      .download__badge--each {
        width: $grid6x;
        margin-right: $grid2x;
        vertical-align: bottom;
      }

      .download__badge--text {
        color: $text777;
        font-weight: 700;
        vertical-align: bottom;
      }
    }
  }
}
</style>
