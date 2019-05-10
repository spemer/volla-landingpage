<template lang="pug">
  div#statsList
    div.container
      h1.easy__text--title.section__title
        | {{ serviceKo }}는 라이브 방송을 통해
        br
        | 매출을 극대화시킬 수 있는 플랫폼입니다

      div.service__card
        div.service__card--each(
          v-for="(value, key, index) in statsList"
          :key="key"
        )
          h3.service__card--title {{ value.title }}
          p.service__card--text.section__subtitle {{ value.desc }}
</template>

<script>
import { mapState } from 'vuex'
import { globalVar } from '@/globalVar'

export default {
  name: 'statsList',

  data: () => ({
    serviceKo: globalVar.serviceKo,
  }),

  computed: {
    ...mapState([
      'statsList',
    ]),
  },

}
</script>
