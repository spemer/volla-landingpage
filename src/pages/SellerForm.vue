<template lang="pug">
  div#sellerForm
    div.container
      h1.sellerform__form--title 셀러 입점신청서
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

        button.sellerform__form--submit(
          name="sellerform__form"
          @click="checkCategoryValue"
        ) 제출하기
</template>

<script>
import axios from 'axios'
import { globalVar } from '@/globalVar'

export default {
  name: 'seller-form',

  data () {
    return {
      serviceKo: globalVar.serviceKo,
      sellerCondition: globalVar.sellerCondition,
    }
  },

  metaInfo: {
    title: globalVar.serviceEn + ' - ' + globalVar.sellerForm,
    titleTemplate: '%s',
  },

  computed: {
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

    sellerForm_Category () {
      return this.$store.state.sellerForm_Category
    },

    tokenState () {
      return this.$store.state.tokenState
    },

  },

  methods: {
    checkCategoryValue () {
      if (! this.sellerForm_CategoryValue.value)
        alert('호스트 지원 희망여부를 선택해주세요.')
      else if (
        this.sellerForm_List[0].value &&
        this.sellerForm_List[1].value &&
        this.sellerForm_List[2].value &&
        this.sellerForm_CategoryValue.value
      ) { this.$store.commit('SET_TOKEN_BOOL', true) }
    },

    start () { this.$Progress.start() },
    set (num) { this.$Progress.set(num) },
    increase (num) { this.$Progress.increase(num) },
    decrease (num) { this.$Progress.decrease(num) },
    finish () { this.$Progress.finish() },
    fail () { this.$Progress.fail() },

    sendPost () {
      this.$Progress.start()

      const baseURI = globalVar.requestSellerUrl
      // const testUrl = globalVar.testUrl

      axios.post(baseURI,
        {
          email: this.sellerForm_List[0].value,
          name: this.sellerForm_List[1].value,
          contact: this.sellerForm_List[2].value,
          site: this.sellerForm_List[3].value,
          sns: this.sellerForm_List[4].value,
          apply_categories: this.sellerForm_CategoryValue.value,
          details: this.sellerForm_Details.value,
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
        this.$store.commit('SET_TOKEN_BOOL', true)
        // alert('response: ' + this.tokenState)
        console.log(response.data)
        this.$router.push('/submit')
      })
      .catch(error => {
        this.$Progress.fail()
        this.$store.commit('SET_TOKEN_BOOL', false)
        alert('오류입니다. 다시 시도해주세요!\n' + error)
        console.warn(error)
      })
    },

  },

}
</script>
