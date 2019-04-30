<template lang="pug">
  div#downloadBtn
    div.download__badge.if__mobile--false
      a.download__badge--link(
        v-for="(value, key) in badges"
        :key="key"
        target="_blank"
        @click="value.dlWait"
        :title="key + ' ' + value.title + '에서 다운받기'"
      )
        //- :href="value.href"
        img.download__badge--each(
          :src="value.src"
        )
        span.download__badge--text {{ value.title }}

    div.download__badge.if__mobile--true
      a.download__badge--link(
        target="_blank"
        @click="badgesMobile.dlWait"
        :title="badgesMobile.title + '에서 다운받기'"
      )
        //- :href="badgesMobile.href"
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
    badges () {
      return this.$store.state.badges
    },

    badgesMobile () {
      if (this.userAgent == 'Android') {
        return this.$store.state.badges.Android
      } else if (this.userAgent == 'iOS') {
        return this.$store.state.badges.iOS
      } else {
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
