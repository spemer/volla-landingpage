<template lang="pug">
  div#sellerform(
    :class="{app: this.$route.query.from === 'app'}"
  )
    div.container
      h1.sellerform-title {{ sellerForm }}
      p.sellerform-subtitle {{ serviceKo }} 셀러(판매자)용 입점 신청서입니다.
        span 는 필수 입력 항목입니다.

      form.sellerform-form(
        name="sellerform_form"
        @submit.prevent="sendPost"
      )
        p.sellerform-title(
          v-for="list in sellerForm_List"
        ) {{ list.text }}
          span(
            :required="list.required"
          )
          input.sellerform-input(
            :type="list.type"
            :name="list.name"
            v-model.trim="list.value"
            :pattern="list.pattern"
            :required="list.required"
            :minlength="list.minlength"
            :maxlength="list.maxlength"
            :placeholder="list.placeholder"
          )
          span.sellerform-helpText {{ list.helpText }}

        p.sellerform-title.host {{ sellerForm_Category[0].text }}
          span(
            :required="sellerForm_Category[0].required"
          )
            div.sellerform-div(
              v-for="category in sellerForm_Category"
            )
              input.sellerform-input(
                :id="category.id"
                :type="category.type"
                :name="category.name"
                :value="category.buttonText"
                :required="category.required"
                v-model="sellerForm_CategoryValue.value"
              )
              label.sellerform-label(
                :for="category.id"
                :name="category.name"
                :class="category.class"
                :title="category.buttonText"
                v-model="sellerForm_CategoryValue.value"
              ) {{ category.buttonText }}

        p.sellerform-title {{ sellerForm_Details.text }}
          textarea.sellerform-input.textarea(
            :type="sellerForm_Details.text"
            :name="sellerForm_Details.name"
            v-model.trim="sellerForm_Details.value"
            :placeholder="sellerForm_Details.placeholder"
          )

        p.sellerform-condition {{ sellerCondition }}

        div.sellerform-terms
          p.sellerform-termsDetails(
            v-for="(value, key, index) in marketingTerms"
          ) {{ value.desc }}

        label.sellerform-checkbox(
          for="checkbox_1"
          style="font-weight: 700"
        ) {{ marketingTerms.personal.title }}
          input(
            id="checkbox_1"
            type="checkbox"
            v-model="marketing.val_1"
          )
          span.checkmark

        label.sellerform-checkbox(
          for="checkbox_2"
        ) {{ marketingTerms.marketing.title }}
          input(
            id="checkbox_2"
            type="checkbox"
            v-model="marketing.val_2"
          )
          span.checkmark

        div.sellerform-wrapper(
          :class="{'apply_border': this.$route.query.from === 'app'}"
        )
          div.sellerform-box
            button.sellerform-submit(
              name="sellerform_form"
              @click="checkCategoryValue"
            ) 제출하기
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import { globalVar } from "@/globalVar";

export default {
  name: "sellerForm",

  data: () => ({
    serviceKo: globalVar.serviceKo,
    sellerForm: globalVar.sellerForm,
    sellerCondition: globalVar.sellerCondition,
    marketingTerms: {
      personal: {
        title: "(필수) 개인정보 수집 및 이용에 동의합니다.",
        desc:
          "[개인정보 수집/이용] 귀하는 개인(신용)정보의 선택적인 수집∙이용, 제공에 대한 동의를 거부할 수 있습니다. 다만, 동의하지 않을 경우 관련 편의제공 안내 등 이용 목적에 따른 혜택에 제한이 있을 수 있습니다. 동의한 경우에도 귀하는 동의를 철회하거나 마케팅 목적으로 귀하에게 연락하는 것을 중지하도록 요청할 수 있습니다."
      },
      marketing: {
        title: "(선택) 마케팅 정보 수신에 동의합니다.",
        desc:
          "목적: 당사의 상품·서비스 안내 및 이용권유, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 시장조사 및 상품·서비스 개발연구 등"
      }
    }
  }),

  metaInfo() {
    return {
      title: `${globalVar.sellerFormTitle}`,
      titleTemplate: `%s`
    };
  },

  computed: {
    ...mapState(["sellerForm_Category", "tokenState"]),

    sellerForm_List: {
      get() {
        return this.$store.state.sellerForm_List;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_LIST", value);
      }
    },

    sellerForm_CategoryValue: {
      get() {
        return this.$store.state.sellerForm_CategoryValue;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_CATEGORY", value);
      }
    },

    sellerForm_Details: {
      get() {
        return this.$store.state.sellerForm_Details;
      },
      set(value) {
        this.$store.commit("UPDATE_FORM_DETAILS", value);
      }
    },

    marketing: {
      get() {
        return this.$store.state.marketing;
      },
      set(value) {
        this.$store.commit("SET_MARKETING_BOOL", value);
      }
    }
  },

  methods: {
    ...mapMutations(["SET_TOKEN_BOOL", "ADD_FORM_HELPTEXT"]),

    checkCategoryValue() {
      if (!this.sellerForm_List[0].value) {
        this.ADD_FORM_HELPTEXT([0, "이메일 주소는 필수 입력사항입니다."]);
      } else if (this.sellerForm_List[0].value) {
        this.ADD_FORM_HELPTEXT([0, ""]);

        if (!this.sellerForm_List[1].value) {
          this.ADD_FORM_HELPTEXT([1, "담당자 이름은 필수 입력사항입니다."]);
        } else if (this.sellerForm_List[1].value) {
          this.ADD_FORM_HELPTEXT([1, ""]);

          if (this.sellerForm_List[2].value) {
            return this.sellerForm_List[2].value.indexOf("http") === -1 ||
              this.sellerForm_List[2].value.indexOf("://") === -1
              ? this.ADD_FORM_HELPTEXT([
                  2,
                  `URL은 'http://' 혹은 'https://'로 시작해야 합니다.`
                ])
              : this.ADD_FORM_HELPTEXT([2, ""]);
          }

          if (!this.sellerForm_CategoryValue.value) {
            alert("호스트 지원 희망여부를 선택해주세요.");
          }
        }
      }
    },

    created() {
      this.$Progress.start();
    },

    mounted() {
      this.$Progress.finish();
    },

    sendPost() {
      if (
        this.sellerForm_List[0].value &&
        this.sellerForm_List[1].value &&
        this.sellerForm_CategoryValue.value &&
        this.marketing.val_1
      ) {
        this.$toast("요청중입니다. 잠시만 기다려주세요!");
        this.$Progress.start();
        const base = process.env.VUE_APP_BASE_URL;
        axios
          .post(
            `${base}/requestSeller`,
            {
              email: this.sellerForm_List[0].value,
              name: this.sellerForm_List[1].value,
              site: this.sellerForm_List[2].value,
              apply_categories: this.sellerForm_CategoryValue.value,
              details: this.sellerForm_Details.value,
              agree_personal_info: this.marketing.val_1,
              agree_marketing_info: this.marketing.val_2
            },
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              }
            }
          )
          .then(() => {
            this.SET_TOKEN_BOOL(true);
            this.$toast("셀러 입점신청이 완료되었습니다.");
            this.$Progress.finish();
            if (this.$route.query.from !== "app") {
              this.$router.replace("/submit");
            } else {
              this.$router.replace({
                path: "/submit",
                query: {
                  from: "app"
                }
              });
            }
          })
          .catch(error => {
            this.SET_TOKEN_BOOL(false);
            alert(`네트워크 오류입니다. 다시 시도해주세요!\n${error}`);
          });
      } else {
        this.$toast("개인정보 수집 및 이용 동의 여부를 선택해주세요.");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$width: 480px;
$pablet-width: 320px;
$mobile-width: 288px;

#sellerform {
  text-align: center;
  padding: $grid8x 0 $grid16x;

  input[type="radio"],
  input[type="checkbox"] {
    height: 0 !important;
    width: 0 !important;
    filter: alpha(opacity=0) !important;
    opacity: 0 !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
  }

  @media #{$mobile} {
    padding: $grid12x 0 $grid24x;
  }

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

  .sellerform-form {
    width: $width;
    display: block;
    margin: 0 auto;
    text-align: center;
    margin-top: $grid16x;

    .sellerform-wrapper {
      &.apply_border {
        border-top: 1px solid $texteee;
      }
    }

    label[for="checkbox_2"] {
      margin-bottom: $grid16x;
    }

    @media #{$pablet} {
      width: calc(100% - #{$grid8x});
    }

    @media #{$ip6} {
      width: calc(100% - #{$grid8x});
      margin-top: $grid16x;
    }

    .sellerform-title {
      display: block;
      text-align: left;
      font-weight: 900;
      margin-bottom: $grid;
      @include font-size($grid5x);

      span[required] {
        &::before {
          content: " *";
          color: $brand-pink;
          @include font-size($grid5x);
        }
      }

      &.host {
        margin-bottom: $grid16x;

        span {
          &::before {
            content: " *\A";
            white-space: pre;
          }
        }

        .sellerform-div {
          display: inline-block;

          .sellerform-label {
            color: $black38;
            cursor: pointer;
            font-weight: 700;
            text-align: center;
            margin-top: $grid4x;
            display: inline-block;
            padding: $grid3x $grid6x;
            background-color: $black04;
            @include font-size($grid4x);
            @include border-radius($grid2x);
            @include transition(all 0.1s ease);

            &.first {
              margin-right: $grid2x;
            }
          }

          input[type="radio"]:checked + label {
            color: #fff;
            font-weight: 700;
            color: $brand-pink;
            background-color: $brand-pink-16;
          }
        }
      }

      .sellerform-input {
        border: none;
        width: $width;
        outline: none;
        display: inline-block;
        margin-bottom: $grid12x;
        color: $black78 !important;
        padding: $grid4x 0 $grid2x;
        border-bottom: 1px solid $textccc;
        @include border-radius(0);
        @include font-size($grid4x);
        @include transition(border-bottom 0.25s ease);

        @media #{$pablet} {
          width: 100%;
        }

        &.textarea {
          resize: none;
          height: $grid32x;
          padding-top: $grid4x;
          @include line-height($grid4x);
        }

        &[type="radio"] {
          margin-top: $grid8x;
          margin-bottom: -#{$grid2x};
        }

        &:focus {
          border-bottom: 1px solid $brand-pink;
        }

        &::selection {
          color: #fff !important;
          background-color: $brand-pink !important;
        }
      }

      .sellerform-helpText {
        display: block;
        font-weight: 400;
        color: $warning_red;
        margin-top: -#{$grid10x};
        margin-bottom: $grid14x;
        @include font-size($grid3x);
      }
    }

    .sellerform-submit {
      outline: none;
      margin: 0 auto;
      display: block;
      width: $grid48x;
      cursor: pointer;
      height: $grid14x;
      font-weight: 900;
      color: $brand-pink;
      background-color: $brand-pink-16;
      @include border-radius($grid16x);
      @include transition(all 0.25s ease);

      &:hover {
        opacity: 0.5;
      }
    }

    .sellerform-condition {
      color: $black38;
      text-align: left;
      margin-top: -#{$grid10x};
      @include font-size($grid3x);
    }

    .sellerform-terms {
      height: $grid28x;
      text-align: left;
      font-weight: 300;
      padding: 0 $grid4x;
      overflow-y: scroll;
      margin-top: $grid16x;
      background-color: $black03;
      @include border-radius($grid2x);

      .sellerform-termsDetails {
        @include font-size(14px);
      }
    }

    .sellerform-checkbox {
      display: block;
      cursor: pointer;
      text-align: left;
      position: relative;
      margin-top: $grid4x;
      padding-left: $grid8x;
      @include user-select();
      @include font-size(14px);

      .checkmark {
        top: 2px;
        left: 0;
        width: $grid5x;
        height: $grid5x;
        position: absolute;
        background-color: $black04;
        @include border-radius($grid);
        @include transition(all 0.1s ease);
      }

      &:hover input ~ .checkmark {
        background-color: $black04;
      }

      input:checked ~ .checkmark {
        background-color: $brand-pink-16;
      }

      .checkmark:after {
        content: "";
        display: none;
        position: absolute;
      }

      input:checked ~ .checkmark:after {
        display: block;
      }

      .checkmark:after {
        top: 3px;
        right: 7px;
        width: $grid;
        height: 9px;
        border: solid $brand-pink;
        border-width: 0 2px 2px 0;
        @include transform(rotate(45deg));
      }
    }
  }

  &.app {
    &:not(.submit) {
      padding-top: $grid2x;
      padding-bottom: $grid24x;
      @include user-select();

      // iPhone X safearea
      @supports (padding-bottom: env(safe-area-inset-bottom)) {
        padding-bottom: calc(
          env(safe-area-inset-bottom + #{$grid40x})
        ) !important;
      }

      h1 {
        &.sellerform-title {
          display: none;
        }
      }

      p {
        &.sellerform-title {
          @include font-size($grid4x);

          &.host {
            margin-bottom: $grid12x;
          }

          input {
            margin-bottom: $grid4x;
            @include font-size(14px);
          }

          .sellerform-helpText {
            margin-bottom: $grid10x;
            margin-top: -#{$grid2x};
          }
        }

        &.sellerform-subtitle {
          display: none;
        }
      }

      .sellerform-input {
        padding-top: $grid2x;

        &.textarea {
          height: $grid24x;
          padding-top: $grid2x;
          @include font-size(14px);
        }
      }

      .sellerform-label {
        margin-top: $grid2x !important;
      }

      .sellerform-form {
        margin-top: $grid4x !important;

        @media #{$pablet} {
          width: calc(100% - #{$grid4x});
        }

        @media #{$ip6} {
          width: calc(100%);
          margin-top: $grid16x;
        }
      }

      .sellerform-wrapper {
        left: 0;
        bottom: 0;
        padding: 0;
        width: 100vw;
        position: fixed;
        height: $grid22x;
        background-color: #fff;
        @include gradient();

        @media #{$default} {
          width: calc(100% - #{$grid16x});
          padding: 0 $grid8x;
        }

        @media #{$landsc} {
          padding: 0 $grid8x;
        }

        @media #{$pablet} {
          width: calc(100% - #{$grid8x});
          padding: 0 $grid4x;
        }

        @media #{$mobile} {
          padding: 0 $grid4x;
        }

        // iPhone X safearea
        @supports (padding-bottom: env(safe-area-inset-bottom)) {
          padding-bottom: calc(env(safe-area-inset-bottom)) !important;
        }

        .sellerform-box {
          .sellerform-submit {
            opacity: 1;
            width: 100%;
            margin: 0 auto;
            display: block;
            margin-top: $grid4x !important;
            background-color: $brand-pink-16;
            @include border-radius();

            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>
