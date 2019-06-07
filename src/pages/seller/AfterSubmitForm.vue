<template lang="pug">
  div#sellerForm(
    :class="{app: isApp}"
  )
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

          p.sellerform__form--title.text(
            v-if="sellerForm_CategoryValue.value"
          ) {{ sellerForm_Category[0].text }}
            span.value {{ sellerForm_CategoryValue.value }}

          p.sellerform__form--title.text(
            v-if="sellerForm_Details.value"
          ) {{ sellerForm_Details.text }}
            span.value {{ sellerForm_Details.value }}

          p.sellerform__form--title.text 개인정보 수집 및 이용
            span.value( v-if="marketing.val_1" ) 동의
            span.value( v-else ) 미동의

          p.sellerform__form--title.text 마케팅 정보 수신
            span.value( v-if="marketing.val_2" ) 동의
            span.value( v-else ) 미동의

        router-link.global__cta(
          v-if="this.$router.path === '/submit'"
          :to="'/'"
        )
          button.global__cta--btn(
          ) 메인으로
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { globalVar } from '@/globalVar'

export default {
  name: 'afterSubmitForm',

  data: _ => ({
    serviceKo: globalVar.serviceKo,
  }),

  metaInfo: {
    title: `${globalVar.serviceEn} - ${globalVar.sellerForm}`,
    titleTemplate: '%s',
  },

  computed: {
    ...mapState([
      'sellerForm_List',
      'sellerForm_CategoryValue',
      'sellerForm_Details',
      'sellerForm_Category',
      'marketing',
      'tokenState',
      'isApp',
    ]),
  },

  methods: {
    ...mapMutations([
      'REMOVE_FORM_VAL',
      'SET_MARKETING_BOOL',
      'SET_TOKEN_BOOL',
    ]),
  },

  destroyed () {
    this.REMOVE_FORM_VAL()
    this.SET_MARKETING_BOOL(false)
    this.SET_TOKEN_BOOL(false)
  },

}
</script>
