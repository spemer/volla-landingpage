<template lang="pug">
  div#downloadBtn
    div.download__badge.if__mobile--false
      a.download__badge--link(
        v-for="(value, key) in badges"
        :key="key"
        target="_blank"
        :href="value.href"
        :title="key + ' ' + value.title + '에서 다운받기'"
      )
        img.download__badge--each(
          :src="value.src"
        )
        span.download__badge--text {{ value.title }}

    div.download__badge.if__mobile--true
      a.download__badge--link(
        target="_blank"
        :href="badgesMobile.href"
        :title="badgesMobile.title + '에서 다운받기'"
      )
        img.download__badge--each(
          :src="badgesMobile.src"
        )
        span.download__badge--text {{ badgesMobile.title }}
</template>

<script>
import { mapState } from 'vuex'
import { userAgent } from '@/mixins/userAgent'

export default {
  name: 'DownloadBtn',

  mixins: [
    userAgent
  ],

  computed: {
    ...mapState([
      'badges',
    ]),

    badgesMobile () {
      if (this.userAgent == 'Android') {
        return this.badges.Android
      } else if (this.userAgent == 'iOS') {
        return this.badges.iOS
      } else {
        return this.badges.Android
      }
    },
  },

}
</script>

<style lang="scss" scoped>
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
    text-align: center;
    margin-top: $grid4x;
    display: inline-block;

    .download__badge--link {
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

      .download__badge--each {
        width: $grid6x;
        margin-top: $grid2x;
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
