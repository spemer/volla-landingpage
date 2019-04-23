<template lang="pug">
  div#sellerForm
    div.container
      h1.sellerform__form--title 셀러 입점신청서
      p.sellerform__form--subtitle Volla 셀러(판매자)용 입점 신청서입니다.
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
            v-model="list.value"
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
                :class="category.class"
                v-model="sellerForm_CategoryValue.value"
              ) {{ category.buttonText }}

        p.sellerform__form--title {{ sellerForm_Details.text }}
          textarea.sellerform__form--input.textarea(
            :type="sellerForm_Details.text"
            :name="sellerForm_Details.name"
            v-model="sellerForm_Details.value"
            :placeholder="sellerForm_Details.placeholder"
          )

        p.sellerform__form--condition * 입점 시 판매를 위한 사업자등록, 통신판매업 신고 등이 필요할 수 있습니다.

        button.sellerform__form--submit(
          name="sellerform__form"
          @click="checkCategoryValue"
        ) 제출하기
</template>

<script>
import axios from 'axios'
import { globalVar } from '@/globalVar'

export default {
  name: 'sellerForm',

  metaInfo: {
    title: globalVar.serviceEn + ' - ' + globalVar.sellerForm,
    titleTemplate: '%s',
  },

  computed: {
    sellerForm_List: {
      get() {
        return this.$store.state.sellerForm_List
      },
      set(value) {
        this.$store.commit('UpdateSellerFormList', value)
      },
    },

    sellerForm_CategoryValue: {
      get() {
        return this.$store.state.sellerForm_CategoryValue
      },
      set(value) {
        this.$store.commit('UpdateSellerFormCategoryValue', value)
      },
    },

    sellerForm_Details: {
      get() {
        return this.$store.state.sellerForm_Details
      },
      set(value) {
        this.$store.commit('UpdateSellerFormDetails', value)
      },
    },

    sellerForm_Category() { return this.$store.state.sellerForm_Category },

  },

  methods: {
    checkCategoryValue() {
      if (! this.sellerForm_CategoryValue.value)
        alert('호스트 지원 희망여부를 선택해주세요.')
    },

    sendPost() {
      let baseURI = globalVar.requestSellerUrl

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
      .then(res => { console.log(res.data) })

      alert(this.$store.state.sellerForm_List[1].value
        + ' 님의 입점신청이 정상적으로 접수되었습니다.'
        + '\n빠른 시일 내로 안내 메일을 발송해드리겠습니다.')
    },

  },

}
</script>
