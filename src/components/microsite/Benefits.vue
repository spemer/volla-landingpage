<template lang="pug">
  div#benefits
    div.container
      h1.service__title.section__title
        | {{ serviceKo }}를 선택해야 하는 이유는 당연합니다
      div.service__card
        div.service__card--each(
          v-for="value in benefits.top"
          :key="key"
        )
          p.service__card--text.section__subtitle {{ value }}

      h1.service__title.section__title.subtitle
        | 또한 이와 더불어,
        br
        | 볼라의 시작을 함께해주시는 분들을 위해서
        br
        | 이런 혜택들을 준비했습니다.
      div.service__card
        div.service__card--each(
          v-for="value in benefits.bottom"
          :key="key"
        )
          p.service__card--text.section__subtitle {{ value }}
</template>

<script>
import { globalVar } from '@/globalVar'

export default {
  name: 'benefits',

  data () {
    return {
      serviceKo: globalVar.serviceKo,
    }
  },

  computed: {
    benefits () {
      return this.$store.state.benefits
    }
  }
}
</script>
