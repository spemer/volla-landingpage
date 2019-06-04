<template lang="pug">
  div#sellerForm
    div.container
      h1.sellerform__form--title {{ sellerForm }}
      p.sellerform__form--subtitle {{ serviceKo }} 셀러(판매자)용 입점 신청서입니다.
        span 는 필수 입력 항목입니다.

      form.sellerform__form--form(
        name="sellerform__form"
        @submit.prevent="sendPost"
      )
        p.sellerform__form--title(
          v-for="list in sellerForm_List"
        ) {{ list.text }}
          span(
            :required="list.required"
          )
          input.sellerform__form--input(
            :type="list.type"
            :name="list.name"
            v-model.trim="list.value"
            :required="list.required"
            :minlength="list.minlength"
            :maxlength="list.maxlength"
            :placeholder="list.placeholder"
          )

        p.sellerform__form--title.host {{ sellerForm_Category[0].text }}
          span(
            :required="sellerForm_Category[0].required"
          )
            div.sellerform__form--div(
              v-for="category in sellerForm_Category"
            )
              input.sellerform__form--input(
                :id="category.id"
                :type="category.type"
                :name="category.name"
                :value="category.buttonText"
                :required="category.required"
                v-model="sellerForm_CategoryValue.value"
              )
              label.sellerform__form--label(
                :for="category.id"
                :name="category.name"
                :class="category.class"
                :title="category.buttonText"
                v-model="sellerForm_CategoryValue.value"
              ) {{ category.buttonText }}

        p.sellerform__form--title {{ sellerForm_Details.text }}
          textarea.sellerform__form--input.textarea(
            :type="sellerForm_Details.text"
            :name="sellerForm_Details.name"
            v-model.trim="sellerForm_Details.value"
            :placeholder="sellerForm_Details.placeholder"
          )

        p.sellerform__form--condition {{ sellerCondition }}

        div.sellerform__form--terms
          p.sellerform__form--termsDetails(
            v-for="(value, key, index) in marketingTerms"
          ) {{ value.desc }}

        label.sellerform__form--checkbox(
          for="checkbox_1"
        ) {{ marketingTerms.personal.title }}
          input(
            id="checkbox_1"
            type="checkbox"
            v-model="marketing.val_1"
          )
          span.checkmark

        label.sellerform__form--checkbox(
          for="checkbox_2"
        ) {{ marketingTerms.marketing.title }}
          input(
            id="checkbox_2"
            type="checkbox"
            v-model="marketing.val_2"
          )
          span.checkmark

        button.sellerform__form--submit(
          name="sellerform__form"
          @click="checkCategoryValue"
        ) 제출하기
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
import { globalVar } from '@/globalVar'

export default {
  name: 'seller-form',

  data: _ => ({
    serviceKo: globalVar.serviceKo,
    sellerForm: globalVar.sellerForm,
    sellerCondition: globalVar.sellerCondition,
  }),

  metaInfo: {
    title: globalVar.serviceEn + ' - ' + globalVar.sellerForm,
    titleTemplate: '%s',
  },

  computed: {
    ...mapState([
      'sellerForm_Category',
      'marketing',
      'marketingTerms',
      'tokenState',
    ]),

    sellerForm_List: {
      get () {
        return this.$store.state.sellerForm_List
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_LIST', value)
      },
    },

    sellerForm_CategoryValue: {
      get () {
        return this.$store.state.sellerForm_CategoryValue
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_CATEGORY', value)
      },
    },

    sellerForm_Details: {
      get () {
        return this.$store.state.sellerForm_Details
      },
      set (value) {
        this.$store.commit('UPDATE_FORM_DETAILS', value)
      },
    },

    marketing: {
      get () {
        return this.$store.state.marketing
      },
      set (value) {
        this.$store.commit('SET_MARKETING_BOOL', value)
      },
    },
  },

  methods: {
    ...mapMutations([
      'SET_TOKEN_BOOL',
    ]),

    checkCategoryValue () {
      if (! this.sellerForm_CategoryValue.value)
        alert('호스트 지원 희망여부를 선택해주세요.')
      else if (
        this.sellerForm_List[0].value &&
        this.sellerForm_List[1].value &&
        this.sellerForm_CategoryValue.value)
        this.SET_TOKEN_BOOL(true)
    },

    start: _ => this.$Progress.start(),
    set: num => this.$Progress.set(num),
    increase: num => this.$Progress.increase(num),
    decrease: num => this.$Progress.decrease(num),
    finish: _ => this.$Progress.finish(),
    fail: _ => this.$Progress.fail(),

    sendPost () {
      if (this.marketing.val_1) {
        this.$Progress.start()

        // const test = process.env.TEST_URL
        // axios.post(test,
        const base = process.env.BASE_URL
        axios.post(`${base}/requestSeller`,
          {
            email: this.sellerForm_List[0].value,
            name: this.sellerForm_List[1].value,
            site: this.sellerForm_List[2].value,
            apply_categories: this.sellerForm_CategoryValue.value,
            details: this.sellerForm_Details.value,
            agree_personal_info: this.marketing.val_1,
            agree_marketing_info: this.marketing.val_2,
          },
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          },
        )
        .then(response => {
          this.$Progress.finish()
          this.SET_TOKEN_BOOL(true)
          if (this.$route.path == '/sellerform') {
            this.$router.push('/submit')
          } else if (this.$route.path == '/sellerform-app') {
            this.$router.push('/submit-app')
          }
          console.info(response.data)
        })
        .catch(error => {
          this.$Progress.fail()
          this.SET_TOKEN_BOOL(false)
          alert(`오류입니다. 다시 시도해주세요!\n${error}`)
          console.warn(error)
        })
      } else {
        alert('개인정보 수집 및 이용 동의 여부를 선택해주세요.')
      }
    },
  },

}
</script>
