<template lang="pug">
  div#redirect
    div.container
      div.redirect_wrapper
        img.redirect_wrapper-img(
          src="@/assets/dist/launcher.svg"
        )
        p.redirect_wrapper-text {{ serviceKo }}

        router-link.global_cta(
          :to="'/'"
        )
          button.global_cta-btn(
            :title="website"
          ) {{ website }}
</template>

<script>
import { globalVar } from "@/globalVar";
import { userAgent } from "@/mixins/userAgent";

export default {
  name: "redirect_dl",

  mixins: [userAgent],

  data: () => ({
    website: "웹사이트 바로가기",
    serviceKo: globalVar.serviceKo
  }),

  metaInfo() {
    return {
      title: globalVar.serviceEn,
      titleTemplate: `%s 앱 다운로드`,
      meta: [
        {
          name: "description",
          content: `${globalVar.serviceEn} 앱 다운로드`
        },
        {
          itemprop: "description",
          content: `${globalVar.serviceEn} 앱 다운로드`
        },
        {
          property: "og:description",
          content: `${globalVar.serviceEn} 앱 다운로드`
        },
        {
          name: "twitter:description",
          content: `${globalVar.serviceEn} 앱 다운로드`
        }
      ]
    };
  },

  mounted() {
    let android = globalVar.AND_URL,
      ios = globalVar.IOS_URL,
      unknown = globalVar.WEB_URL;

    if (this.userAgent === "Android") {
      window.location.href = android;
    } else if (this.userAgent === "iOS") {
      window.location.href = ios;
    } else {
      alert("안드로이드, iOS 등의 모바일 운영체제에서만 다운로드 가능합니다.");
      window.location.href = unknown;
    }
  }
};
</script>

<style lang="scss" scoped>
#redirect {
  text-align: center;

  .redirect_wrapper {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    @include transform(translate(-50%, -50%));

    .redirect_wrapper-img {
      display: block;
      margin: 0 auto;
      width: $grid16x;
    }

    .redirect_wrapper-text {
      margin-top: $grid2x;
    }

    .global_cta {
      display: block;
      margin-top: $grid32x;
    }
  }
}
</style>
