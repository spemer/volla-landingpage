<template lang="pug">
  div#downloadBtn
    div.download__badge.if__mobile--false
      a.download__badge--link(
        @click="dlWait"
        v-for="(value, key) in badges"
        :key="key"
        target="_blank"
        v-tooltip.bottom="{content: key + ' ' + value.title + '에서 다운받기', delay: {show: 500, hide: 100}}"
      )
        //- :href="value.href"
        img.download__badge--each(
          :src="value.src"
        )
        span.download__badge--text {{ value.title }}

    div.download__badge.if__mobile--true
      a.download__badge--link(
        @click="dlWait"
        target="_blank"
        v-tooltip.bottom="{content: badgesMobile.title + '에서 다운받기', delay: {show: 500, hide: 100}}"
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

  methods: {
    dlWait() {
      alert('어플이 4월 중으로 곧 출시됩니다. 조금만 기다려주세요!')
    }
  },

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
