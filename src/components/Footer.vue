<template lang="pug">
  div#footer
    div.container
      div.footer__copyright
        p.footer__copyright--text
          | ⓒ {{ thisYear }} {{ companyName }}., All Rights Reserved.

        p.footer__terms
          router-link.footer__terms--each(
            v-for="(value, key) in tosList"
            :key="key"
            target="_blank"
            :title="value[0]"
            :to="'tos/' + value[1]"
          ) {{ value[0] }}

        p.footer__copyright--info
          span.footer__copyright--title(
            v-for="(key, info) in infoList"
            :key="key"
          ) {{ info }}
            span.footer__copyright--desc {{ key }}
          span.footer__copyright--title 이메일
            span.footer__copyright--desc.clipboard(
            @click="toast"
            v-clipboard:copy="mailTo"
            v-tooltip.bottom="{content: '이메일 주소를 복사하려면 클릭하세요', delay: {show: 500, hide: 100}}"
          ) {{ mailTo }}

        a.footer__sns(
          v-for="(value, key) in snsList"
          :key="key"
          target="_blank"
          :href="value[0]"
          :title="'볼라 ' + value[2] + '(새 창)'"
        )
          i.footer__sns--logo.fab(
            :class="value[1]"
          )
</template>

<script>
import { globalVar } from '@/globalVar'

export default {
  name: 'footer-el',

  data () {
    return {
      mailTo: globalVar.mailTo,
      companyName: globalVar.companyName,
    }
  },

  methods: {
    toast () {
      this.$toasted.show('이메일 주소가 복사되었습니다', {
        theme: "primary",
        position: "bottom-center",
        duration : 2000
      })
    }
  },

  computed: {
    thisYear () {
      return this.$store.state.thisYear
    },

    infoList () {
      return this.$store.state.infoList
    },

    tosList () {
      return this.$store.state.tosList
    },

    snsList () {
      return this.$store.state.snsList
    },
  },
}
</script>
