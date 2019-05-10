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
          countTo.service__card--title(
            ref="counter"
            class="counter"
            :duration=5000
            :startVal=0
            :endVal="value.endVal"
            :suffix="value.suffix"
            :decimals="value.decimals"
            v-scroll-reveal="{delay: 100}"
          )
          p.service__card--text.section__subtitle {{ value.title }}
</template>

<script>
import Vue from 'vue'
import countTo from 'vue-count-to'
import VueScrollReveal from 'vue-scroll-reveal'
import { mapState } from 'vuex'
import { globalVar } from '@/globalVar'

Vue.use(VueScrollReveal, {
  delay: 1500
})

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

  components: {
    countTo,
  },

}
</script>
