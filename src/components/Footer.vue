<template lang="pug">
  div#footer
    div.container
      div.footer__copyright
        p.footer__copyright--text
          | ⓒ {{ thisYear }} {{ companyName }}., All Rights Reserved.

        p.footer__terms
          router-link.footer__terms--each(
            :key="key"
            :title="key"
            target="_blank"
            :to="'tos/' + value"
            v-for="(value, key) in tosList"
          ) {{ key }}

        p.footer__copyright--info
          span(
            v-for="info in infoList"
          ) {{ info }}
          span.clipboard(
            @click="toast"
            v-clipboard:copy="mailTo"
            v-tooltip.bottom="{content: '이메일 주소를 복사하려면 클릭하세요', delay: {show: 500, hide: 100}}"
          ) 이메일: {{ mailTo }}
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'footer-el',

  data () {
    return {
      companyName: globalVar.companyName,
      mailTo: globalVar.mailTo,
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
      return this.$store.state.thisYear
    },

    infoList() {
      return this.$store.state.infoList
    },

    tosList() {
      return this.$store.state.tosList
    },
  },
}
</script>

<style lang="scss">
#footer {
  padding: $grid12x $grid4x;
  background-color: $textf4;

  ::selection {
    color: #fff;
    background-color: $brand-pink !important;
  }

  @media #{$pablet} {
    padding: $grid12x $grid4x $grid16x;
  }

  .footer__copyright {
    margin: 0 auto;
    color: $black24;

    .footer__copyright--info,
    .footer__terms {
      margin-top: $grid5x;
    }

    .footer__copyright--text {
      color: $black38;
      font-weight: 700;
      margin-bottom: -#{$grid2x};
      @include font-size(14px);
    }

    .footer__terms {
      font-weight: 700;
      margin-top: $grid6x;
      @include line-height($grid3x);

      .footer__terms--each {
        color: $black24;
        transition: color 0.25s ease;
        @include font-size($grid3x);

        &:hover {
          color: $black54;
        }

        &:not(:first-child) {
          &::before {
            content: '·';
            color: $black24;
            margin: 0 $grid2x;
          }
        }
      }
    }

    .footer__copyright--info {
      margin-bottom: $grid8x;
      @include font-size(10px);

      span {
        @include font-size(10px);

        &:not(:last-child) {
          &:after {
            content: ' | ';
            margin: 0 $grid2x;
          }
        }
      }
    }

    .clipboard {
      cursor: pointer;
    }
  }
}
</style>
