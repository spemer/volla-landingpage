<template lang="pug">
  div#benefits
    div.container
      h1.service__title.section__title
        | {{ serviceKo }}를 선택해야 하는 이유는 당연합니다
      div.service__card
        div.service__card--each(
          v-for="(value, key, index) in benefits.top"
          :key="key"
        )
          div.service__card--img.seller.seller1(
            :class="'img-' + index"
          )
          p.service__card--text.section__subtitle.withcount {{ value }}

      div.global__cta
        a.global__cta--link(
          :href="volla_pdf"
          target="_blank"
        )
          button.global__cta--btn(
            :title="serviceKo + ' 입점소개서 다운로드(새 창)'"
          ) 입점소개서 받기
</template>

<script>
import { mapState } from 'vuex'
import { globalVar } from '@/globalVar'

export default {
  name: 'benefits',

  data: _ => ({
    volla_pdf: globalVar.volla_pdf,
    serviceKo: globalVar.serviceKo,
  }),

  computed: {
    ...mapState([
      'benefits',
    ]),
  },

}
</script>
