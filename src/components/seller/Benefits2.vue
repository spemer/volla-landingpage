<template lang="pug">
  div#benefits.benefits2
    div.container
      h1.service__title.section__title.subtitle
        | 또한 이와 더불어, 아래와 같은
        br
        | 초기 입점 혜택을 준비했습니다.
      div.service__card
        div.service__card--each(
          v-for="(value, key, index) in benefitsBottom"
          :key="key"
        )
          div.service__card--img.seller.seller2(
            :class="'img-' + index"
          )
          p.service__card--text.section__subtitle {{ value }}
</template>

<script>
import { globalVar } from '@/globalVar'

export default {
  name: 'benefits',

  data: () => ({
    serviceKo: globalVar.serviceKo,
    benefitsBottom: {
      benefits2_1: '보다 큰 수익을 위한 낮은 수수료율과 수수료 할인',
      benefits2_2: '보다 활발한 방송을 위한 라이브 방송 호스트 지원',
      benefits2_3: '보다 원활한 입점을 위한 입점 절차 및 방송 지원',
    },
  }),

}
</script>
