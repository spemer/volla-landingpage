<template lang="pug">
  div#benefitsComp
    div.container
      h1.service_title.section_title
        | {{ serviceKo }}를 선택해야 하는 이유는 당연합니다
      div.service_card
        div.service_card-each(
          v-for="(value, key, index) in benefitsTop"
          :key="key"
        )
          div.service_card-img.seller.seller1(
            :class="'img-' + (index + 1)"
          )
          p.service_card-text.section_subtitle.withcount {{ value }}

      div.global_cta
        a.global_cta-link(
          :href="volla_pdf"
          target="_blank"
        )
          button.global_cta-btn(
            :title="serviceKo + ' 입점 제안서 보기(새 창)'"
          ) 입점 제안서 보기
</template>

<script>
import { globalVar } from "@/globalVar";

export default {
  data: () => ({
    volla_pdf: globalVar.entryProposal,
    serviceKo: globalVar.serviceKo,
    benefitsTop: {
      benefits_1: `입점비용이 없습니다. 상품만 있다면 누구나 셀러가 될 수 있습니다.`,
      benefits_2: `매출 수수료는 당연히 타 업체들과 비교했을 때에도, 더욱 저렴합니다.`,
      benefits_3: `전문장비가 없어도 스마트폰만으로 라이브 방송을 시작할 수 있습니다.`
    }
  })
};
</script>

<style lang="scss" scoped>
@import "~@/style/components/home/_service.scss";
@import "~@/style/components/benefits/_benefits.scss";

#benefitsComp {
  $icon_benefits: "~@/assets/dist/benefits_";

  .seller1 {
    @include setGridIcons($icon_benefits);
  }
}
</style>
