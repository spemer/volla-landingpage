<template lang="pug">
  div#footer(
    v-if="!isApp"
  )
    div.container
      div.footer__copyright
        p.footer__copyright--text
          | ⓒ {{ new Date().getFullYear() }} {{ companyName }}., All Rights Reserved.

        p.footer__terms(
            v-for="(section, index) in Object.keys(tosEntries)"
            :key="index"
          )
          router-link.footer__terms--each(
            v-for="entry in tosEntries[section]"
            :key="entry.id"
            :title="entry.title"
            :to="{ name: entry.id, params: {id: entry.id} }"
          ) {{ entry.title }}

        p.footer__copyright--info
          span.footer__copyright--title(
            v-for="(key, info) in infoList"
            :key="key"
          ) {{ info }}
            span.footer__copyright--desc {{ key }}
          span.footer__copyright--title 이메일
            span.footer__copyright--desc.clipboard(
            title="이메일 주소를 복사하려면 클릭하세요"
            @click="copyToast(mailTo, '이메일 주소가 복사되었습니다')"
          ) {{ mailTo }}

        a.footer__sns(
          v-for="(value, key) in snsList"
          :key="key"
          target="_blank"
          :href="value[0]"
          rel="noopener noreferrer"
          :title="serviceKo + ' ' + value[2] + '(새 창)'"
        )
          font-awesome-icon.footer__sns--logo.fab(
            :icon="['fab', `${value[1]}`]"
            :class="`fa-${value[1]}`"
          )
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import TOS_ENTRIES from "@/statics/data/tos.json";
import { globalVar } from "@/globalVar";
import { copyToast } from "@/mixins/copyToast";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons/faFacebookSquare";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faAppStoreIos } from "@fortawesome/free-brands-svg-icons/faAppStoreIos";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons/faGooglePlay";
library.add(faFacebookSquare, faInstagram, faAppStoreIos, faGooglePlay);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);

export default {
  data: () => ({
    mailTo: globalVar.mailTo,
    serviceKo: globalVar.serviceKo,
    companyName: globalVar.companyName,
    infoList: {
      상호명: globalVar.companyNameFull,
      사업자등록번호: globalVar.companyID,
      통신판매업신고번호: globalVar.companyItc,
      대표이사: globalVar.companyCEO,
      대표전화: globalVar.callTo,
      주소: globalVar.companyAdr
    },
    tosList: {
      userPrivacyPageTitle: [globalVar.userPrivacyPageTitle, "user/privacy"],
      userServicePageTitle: [globalVar.userServicePageTitle, "user/service"],
      ceoPrivacyPageTitle: [globalVar.ceoPrivacyPageTitle, "ceo/privacy"],
      ceoServicePageTitle: [globalVar.ceoServicePageTitle, "ceo/service"]
    },
    snsList: {
      facebook: [globalVar.facebookUrl, "facebook-square", "페이스북"],
      instagram: [globalVar.instagramUrl, "instagram", "인스타그램"],
      appstore: [globalVar.iosStore, "app-store-ios", "앱 스토어 다운받기"],
      android: [globalVar.androidStore, "google-play", "구글 플레이 다운받기"]
    }
  }),

  mixins: [copyToast],

  computed: {
    ...mapState(["isApp"]),
    tosEntries: () => TOS_ENTRIES
  }
};
</script>

<style lang="scss" scoped>
#footer {
  padding: $grid12x $grid4x;
  background-color: $black04;

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
        cursor: pointer;
        @include font-size($grid3x);
        @include transition(color 0.25s ease);

        &:hover {
          color: $black54;
        }

        &:not(:first-child) {
          &::before {
            content: "·";
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
        display: inline-block;
        @include font-size(10px);

        &.footer__copyright--title {
          display: block;
          font-weight: 400;
          @include line-height($grid3x);
        }

        &.footer__copyright--desc {
          font-weight: 900;
          display: inline;

          &::before {
            content: " ";
            margin-right: $grid;
          }
        }
      }
    }

    .clipboard {
      cursor: pointer;
      @include transition(color 0.25s ease);

      &:hover {
        color: $black54;
      }
    }

    .footer__sns {
      color: $black24;
      font-size: $grid5x;
      display: inline-block;

      .footer__sns--logo {
        margin: $grid2x;
        padding: $grid2x;
        margin-bottom: $grid4x;
        @include transition(all 0.25s ease);

        &:hover {
          color: $black54;
        }

        &.fa-facebook-square {
          margin-left: -#{$grid2x};

          &:hover {
            color: $facebook;
          }
        }

        &.fa-instagram {
          &:hover {
            color: $instagram;
          }
        }
      }
    }
  }
}
</style>
