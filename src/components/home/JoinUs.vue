<template lang="pug">
  div#joinus
    div.container
      h1.joinus_title.section_title {{ serviceKo }}에 데뷔하세요
      p.section_subtitle
        | {{ stringUpper }}
        br
        | {{ stringBelow }}
        br
        span.joinus_title-copyEmail(
          title="이메일 주소를 복사하려면 클릭해주세요."
          @click="copyToast(mailTo, '이메일 주소가 복사되었습니다')"
        ) 이메일 주소 복사하기

      div.global_cta
        a.global_cta-link(
          :href="`mailto:${mailTo}?subject=볼라 셀러(판매자) 입점신청`"
        )
          button.global_cta-btn.mailto(
            title="메일 앱으로 열기(새 창)"
          ) 메일로 문의하기

        router-link.global_cta-link(
          :to="sellerformLink"
        )
          button.global_cta-btn.form(
            title="셀러입점신청"
          ) 셀러입점신청
</template>

<script>
import { globalVar } from "@/globalVar";
import { copyToast } from "@/mixins/copyToast";

export default {
  data: () => ({
    stringUpper: "",
    stringBelow: "",
    sellerformLink: "/sellerform",
    mailTo: globalVar.mailTo,
    serviceKo: globalVar.serviceKo
  }),

  mixins: [copyToast],

  mounted() {
    if (this.$route.path === "/") {
      this.stringUpper = `${this.serviceKo}와 함께 성장하실 셀러분들을 모십니다.`;
      this.stringBelow =
        "입점신청서를 작성하시려면, 아래의 버튼을 클릭해주세요!";
      this.sellerformLink = "/sellerform";
    } else if (this.$route.path === "/benefits") {
      this.stringUpper = "라이브 방송으로 만나는 패션 커머스,";
      this.stringBelow = `${this.serviceKo}에 지금 바로 입점하세요!`;
      this.sellerformLink = "/sellerform";
    } else if (this.$route.path === "/event_landing") {
      this.stringUpper = "라이브 방송으로 만나는 패션 커머스,";
      this.stringBelow = `${this.serviceKo}에 지금 바로 입점하세요!`;
      this.sellerformLink = "/sellerform?from=app";
    }
  }
};
</script>

<style lang="scss" scoped>
#joinus {
  padding: $grid12x 0 $grid24x;
  border-top: 1px solid $texteee;

  .container {
    .section_subtitle {
      margin-bottom: 0;

      .joinus_title-copyEmail {
        cursor: pointer;
        font-weight: 400;
        color: $brand-pink;
        display: inline-block;
        @include transition(all 0.25s ease);

        &:hover {
          opacity: 0.5;
        }

        .fa-copy {
          margin-left: $grid;
        }
      }
    }

    .global_cta {
      width: 100%;
      display: inline-block;

      .global_cta-btn {
        width: $grid40x;

        &.form {
          color: #fff;
          background-color: $brand-pink;
        }

        &.mailto {
          margin-right: $grid4x;

          @media #{$pablet} {
            display: none;
          }
        }
      }
    }
  }
}
</style>
