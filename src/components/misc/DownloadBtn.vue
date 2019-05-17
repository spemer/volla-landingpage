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

export default {
  name: 'DownloadBtn',

  data: _ => ({
    userAgent: null,
  }),

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
