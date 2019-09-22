<template lang="pug">
  div#sellerForm.submit(
    :class="{app: this.$route.query.from === 'app'}"
  )
    div.container
      div.sbmt
        h1.sellerform-title 감사합니다
        p.sellerform-subtitle
          | {{ serviceKo }} 셀러 입점신청이 완료되었습니다.
          br
          | 빠른 시일 내에 안내메일을 발송해드리겠습니다.

        div.sellerform-wrapper
          div.sellerform-value(
            v-for="list in sellerForm_List"
          )
            p.sellerform-title.text(
              v-if="list.value"
            ) {{ list.text }}
              span.value {{ list.value }}

          //- p.sellerform-title.text(
          //-   v-if="sellerForm_CategoryValue.value"
          //- ) {{ sellerForm_Category[0].text }}
          //-   span.value {{ sellerForm_CategoryValue.value }}

          p.sellerform-title.text(
            v-if="sellerForm_Details.value"
          ) {{ sellerForm_Details.text }}
            span.value {{ sellerForm_Details.value }}

          p.sellerform-title.text 개인정보 수집 및 이용
            span.value( v-if="marketing.val_1" ) 동의
            span.value( v-else ) 미동의

          p.sellerform-title.text 마케팅 정보 수신
            span.value( v-if="marketing.val_2" ) 동의
            span.value( v-else ) 미동의

        router-link.global_cta(
          v-if="this.$router.path === '/submit'"
          :to="'/'"
        )
          button.global_cta-btn(
          ) 메인으로
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { globalVar } from "@/globalVar";

export default {
  name: "afterSubmitForm",

  data: () => ({
    serviceKo: globalVar.serviceKo
  }),

  metaInfo() {
    return {
      title: `${globalVar.afterSubmitForm}`,
      titleTemplate: `%s`
    };
  },

  computed: {
    ...mapState([
      "sellerForm_List",
      // "sellerForm_CategoryValue",
      "sellerForm_Details",
      // "sellerForm_Category",
      "marketing",
      "tokenState"
    ])
  },

  methods: {
    ...mapMutations(["REMOVE_FORM_VAL", "SET_MARKETING_BOOL", "SET_TOKEN_BOOL"])
  },

  destroyed() {
    this.REMOVE_FORM_VAL();
    this.SET_MARKETING_BOOL(false);
    this.SET_TOKEN_BOOL(false);
  }
};
</script>

<style lang="scss" scoped>
.app {
  &.submit {
    padding-top: $grid8x !important;
  }
}

#sellerForm {
  text-align: center;
  padding: $grid8x 0 $grid16x;

  .sellerform-subtitle {
    font-weight: 300;

    span {
      &::before {
        content: "\A* ";
        white-space: pre;
        font-weight: 900;
        color: $brand-pink;
      }
    }
  }

  .sbmt {
    width: 480px;
    margin: 0 auto;

    @media #{$pablet} {
      width: 100%;
    }

    .sellerform-wrapper {
      margin: $grid16x 0 $grid8x;

      .sellerform-title {
        &.text {
          text-align: left;
          font-weight: 900;
          margin-bottom: $grid12x;
          @include font-size($grid5x);

          .value {
            display: block;
            color: $black54;
            font-weight: 400;
            margin-top: $grid2x;
            word-wrap: break-word;
            @include font-size($grid4x);
          }
        }
      }
    }
  }
}
</style>
