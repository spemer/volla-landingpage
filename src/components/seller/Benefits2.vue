<template lang="pug">
  div#benefits.benefits2
    div.container
      h1.service__title.section__title.subtitle
        | 또한 이와 더불어, 아래와 같은
        br
        | 초기 입점 혜택을 준비했습니다.
      div.service__card
        div.service__card--each(
          v-for="(value, key, index) in benefits.bottom"
          :key="key"
        )
          div.service__card--img.seller.seller2(
            :class="'img-' + index"
          )
          p.service__card--text.section__subtitle {{ value }}
</template>

<script>
import { mapState } from 'vuex'
import { globalVar } from '@/globalVar'

export default {
  name: 'benefits',

  data: _ => ({
    serviceKo: globalVar.serviceKo,
  }),

  computed: {
    ...mapState([
      'benefits',
    ]),
  },

}
</script>
