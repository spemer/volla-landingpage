<template lang="pug">
  div#sellerForm(
    :class="{app: isApp}"
  )
    div.container
      h1.sellerform_form-title {{ sellerForm }}
      p.sellerform_form-subtitle {{ serviceKo }} 셀러(판매자)용 입점 신청서입니다.
        span 는 필수 입력 항목입니다.

      form.sellerform_form-form(
        name="sellerform_form"
        @submit.prevent="sendPost"
      )
        p.sellerform_form-title(
          v-for="list in sellerForm_List"
        ) {{ list.text }}
          span(
            :required="list.required"
          )
          input.sellerform_form-input(
            :type="list.type"
            :name="list.name"
            v-model.trim="list.value"
            :pattern="list.pattern"
            :required="list.required"
            :minlength="list.minlength"
            :maxlength="list.maxlength"
            :placeholder="list.placeholder"
          )
          span.sellerform_form-helpText {{ list.helpText }}

        p.sellerform_form-title.host {{ sellerForm_Category[0].text }}
          span(
            :required="sellerForm_Category[0].required"
          )
            div.sellerform_form-div(
              v-for="category in sellerForm_Category"
            )
              input.sellerform_form-input(
                :id="category.id"
                :type="category.type"
                :name="category.name"
                :value="category.buttonText"
                :required="category.required"
                v-model="sellerForm_CategoryValue.value"
              )
              label.sellerform_form-label(
                :for="category.id"
                :name="category.name"
                :class="category.class"
                :title="category.buttonText"
                v-model="sellerForm_CategoryValue.value"
              ) {{ category.buttonText }}

        p.sellerform_form-title {{ sellerForm_Details.text }}
          textarea.sellerform_form-input.textarea(
            :type="sellerForm_Details.text"
            :name="sellerForm_Details.name"
            v-model.trim="sellerForm_Details.value"
            :placeholder="sellerForm_Details.placeholder"
          )

        p.sellerform_form-condition {{ sellerCondition }}

        div.sellerform_form-terms
          p.sellerform_form-termsDetails(
            v-for="(value, key, index) in marketingTerms"
          ) {{ value.desc }}

        label.sellerform_form-checkbox(
          for="checkbox_1"
          style="font-weight: 700"
        ) {{ marketingTerms.personal.title }}
          input(
            id="checkbox_1"
            type="checkbox"
            v-model="marketing.val_1"
          )
          span.checkmark

        label.sellerform_form-checkbox(
          for="checkbox_2"
        ) {{ marketingTerms.marketing.title }}
          input(
            id="checkbox_2"
            type="checkbox"
            v-model="marketing.val_2"
          )
          span.checkmark

        div.sellerform_form-wrapper(
          :class="{'apply_border': this.$store.state.isApp}"
        )
          div.sellerform_form-box
            button.sellerform_form-submit(
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

  mounted() {
    if (this.$route.path === "/sellerform-app") {
      this.SET_CLASS_APP(true);
    } else {
      this.SET_CLASS_APP(false);
    }
  },

  computed: {
    ...mapState(["sellerForm_Category", "tokenState", "isApp"]),

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
    ...mapMutations(["SET_TOKEN_BOOL", "SET_CLASS_APP", "ADD_FORM_HELPTEXT"]),

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
            this.$toast("입점 신청이 완료되었습니다.");
            this.$Progress.finish();
            if (this.$route.path === "/sellerform-app") {
              return this.$router.replace("/submit-app");
            } else if (this.$route.path === "/sellerform") {
              return this.$router.replace("/submit");
            }
          })
          .catch(error => {
            this.SET_TOKEN_BOOL(false);
            alert(`오류입니다. 다시 시도해주세요!\n${error}`);
          });
      } else {
        this.$toast("개인정보 수집 및 이용 동의 여부를 선택해주세요.");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.sellerform_form-wrapper {
  &.apply_border {
    border-top: 1px solid $texteee;
  }
}
</style>
