<template lang="pug">
  div#benefits
    div.container
      h1.service__title.section__title
        | {{ serviceKo }}를 선택해야 하는 이유는 당연합니다
      div.service__card
        div.service__card--each(
          v-for="(value, key, index) in benefitsTop"
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
import { globalVar } from "@/globalVar";

export default {
  name: "benefits",

  data: () => ({
    volla_pdf: globalVar.volla_pdf,
    serviceKo: globalVar.serviceKo,
    benefitsTop: {
      benefits_1:
        "입점비용이 없습니다. 상품만 있다면 누구나 온라인 셀러가 될 수 있습니다.",
      benefits_2:
        "매출 수수료는 당연히 타 업체들과 비교했을 때에도, 더욱 더 저렴합니다.",
      benefits_3:
        "전문장비가 없어도 스마트폰만으로 쉽게 라이브 방송을 시작할 수 있습니다."
    }
  })
};
</script>
