<template lang="pug">
  div#easyStart
    div.container
      h1.easy_text-title.section_title 스마트폰으로 언제 어디서든
      p.section_subtitle
        | {{ serviceKo }}는 방송용 전문장비가 필요 없습니다.
        br
        | 언제 어디서나, 스마트폰 하나만으로
        br
        | {{ serviceKo }}에서 쉽고 빠르게 판매를 시작해보세요!
</template>

<script>
import { globalVar } from "@/globalVar";

export default {
  data: () => ({
    serviceKo: globalVar.serviceKo
  })
};
</script>

<style lang="scss" scoped>
#easyStart {
  border-top: 1px solid $texteee;
  padding-bottom: $grid12x;
}
</style>
