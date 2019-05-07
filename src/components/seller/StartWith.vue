<template lang="pug">
  div#startWith
    div.container
      h1.service__title.section__title
        | {{ serviceKo }}의 시작을 함께하실 셀러분들을 모십니다
        div.service__card--each
        h3.service__card--title
          | 누구나 스마트폰으로 손쉽게
          br
          | 라이브 커머스를 시작할 수 있습니다

      div.service__card
        div.service__card--each(
        v-for="(value, key, index) in startWith"
        :key="key"
        )
          div.service__card--img.seller(
            :class="'img-' + index"
          )
          p.service__card--text.section__subtitle {{ value }}
      p.sellerform__form--condition {{ sellerCondition }}
</template>

<script>
import { mapState } from 'vuex'
import { globalVar } from '@/globalVar'

export default {
  name: 'startWith',

  data: () => ({
    serviceKo: globalVar.serviceKo,
    sellerCondition: globalVar.sellerCondition,
  }),

  computed: {
    ...mapState([
      'startWith',
    ])
  },

}
</script>
