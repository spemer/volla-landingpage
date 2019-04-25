<template lang="pug">
  div#sellerForm
    div.container
      div.sbmt
        h1.sellerform__form--title 감사합니다
        p.sellerform__form--subtitle
          | {{ serviceKo }} 셀러 입점신청이 완료되었습니다.
          br
          | 빠른 시일 내에 안내메일을 발송해드리겠습니다.

        div.sellerform__form--wrapper
          div.sellerform__form--value(
            v-for="list in sellerForm_List"
          )
            p.sellerform__form--title.text(
              v-if="list.value"
            ) {{ list.text }}
              span.value {{ list.value }}

          p.sellerform__form--title.text 호스트 지원 희망여부
            span.value {{ sellerForm_CategoryValue.value }}

        router-link.global__cta(
          :to="'/'"
        )
          button.global__cta--btn(
          ) 메인으로
</template>

<script>
import { globalVar } from '@/globalVar'

export default {
  name: 'afterSubmitForm',

  data () {
    return {
      serviceKo: globalVar.serviceKo,
    }
  },

  computed: {
    sellerForm_List () {
      return this.$store.state.sellerForm_List
    },

    sellerForm_CategoryValue () {
      return this.$store.state.sellerForm_CategoryValue
    },

    sellerForm_Details () {
      return this.$store.state.sellerForm_Details
    },

    sellerForm_Category () { return this.$store.state.sellerForm_Category },

  },

}
</script>
