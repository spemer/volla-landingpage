<template lang="pug">
  div#easyStart
    div.container
      h1.easy__text--title.section__title 스마트폰으로 언제 어디서든
      p.section__subtitle
        | {{ serviceKo }}는 방송용 전문장비가 필요 없습니다.
        br
        | 언제 어디서든, 스마트폰 하나만으로도
        br
        | 쉽고 빠르게 {{ serviceKo }}에서 방송을 시작해보세요.
</template>

<script>
import { globalVar } from '@/globalVar'

export default {
  name: 'easyStart',

  data: () => ({
    serviceKo: globalVar.serviceKo,
  }),

}
</script>

<style lang="scss" scoped>
#easyStart {
  border-top: 1px solid $texteee;
  padding-bottom: $grid12x;
}
</style>
