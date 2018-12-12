<template lang="pug">
  div#footer
    div.container
      div.footer__copyright
        p.footer__copyright--text
          | ⓒ {{ thisYear }} {{ companyName }}., All Rights Reserved.

        p.footer__copyright--info
          span(
            v-for="info in infoList"
          ) {{ info }}
          span.clipboard(
            @click="toast"
            v-clipboard:copy="mailTo"
            v-tooltip.bottom="{content: '이메일 주소를 복사하려면 클릭하세요', delay: {show: 500, hide: 100}}"
          ) 이메일: {{ mailTo }}

        p.footer__terms
          router-link.footer__terms--each(
            :key="key"
            :to="'tos/' + value"
            target="_blank"
            v-tooltip.bottom="{content: key + '(새 탭)', delay: {show: 500, hide: 100}}"
            v-for="(value, key) in tos"
          ) {{ key }}
</template>

<script>
import Vue from 'vue'
import {globalVar} from '@/globalVar'
import Toasted from 'vue-toasted'
import VueClipboard from 'vue-clipboard2'

Vue.use(Toasted)
Vue.use(VueClipboard)

export default {
  name: 'footer-el',

  data () {
    return {
      year: '',
      companyName: globalVar.companyName,
      infoList: [
        '상호명: ' + globalVar.companyNameFull,
        '사업자등록번호: ' + globalVar.companyID,
        '통신판매업: ' + globalVar.companyItc,
        '대표이사: ' + globalVar.companyCEO,
        '대표전화: ' + globalVar.callTo,
        '주소: ' + globalVar.companyAdr,
      ],
      mailTo: globalVar.mailTo,
      tos: {
        개인정보처리방침: 'privacy',
        제품판매이용약관: 'terms-product',
        관리자사이트이용약관: 'terms-site',
      }
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
    thisYear() {
      return this.year = new Date().getFullYear()
    }
  },
}
</script>

<style lang="scss">

#footer {
  font-weight: 400;
  padding: $grid12x $grid4x;
  border-top: 1px solid $stroke;

  @media #{$pablet} {
    padding: $grid12x $grid4x $grid16x;
  }

  .footer__copyright {
    margin: 0 auto;
    color: $black38;

    .footer__copyright--text,
    .footer__copyright--info,
    .footer__terms {
      @include font-size($grid3x);

      span {
        @include font-size($grid3x);

        &:not(:last-child) {

          &:after {
            content: " | ";
          }
        }
      }
    }

    .footer__copyright--text {
      color: $black54;
      font-weight: 900;
    }

    .clipboard {
      cursor: pointer;
    }

    .footer__copyright--text,
    .footer__copyright--info {
      margin-bottom: -#{$grid2x};
    }

    .footer__terms--each {
      color: $black38;
      transition: color .25s ease;

      &:hover {
        color: $black38;
      }

      &:not(:first-child) {

        &::before {
          content: " | ";
          color: $black38;
        }
      }
    }
  }
}
</style>
