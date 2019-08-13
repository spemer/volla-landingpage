<template lang="pug">
  div#statsList
    div.container
      h1.easy_text-title.section_title
        | {{ serviceKo }}는 라이브 방송을 통해
        br
        | 매출을 극대화시킬 수 있는 플랫폼입니다

      div.service_card
        div.service_card-each(
          v-for="(value, key, index) in statsList"
          :key="key"
        )
          span.service_card-title {{ value.value }}
          p.service_card-text.section_subtitle {{ value.title }}
</template>

<script>
import { globalVar } from "@/globalVar";

export default {
  data: () => ({
    serviceKo: globalVar.serviceKo,
    statsList: {
      first: {
        value: "66%",
        title: "모바일 점유율"
      },
      second: {
        value: "5.15배",
        title: "평균 구매 전환율 (온라인 쇼핑 대비)"
      },
      third: {
        value: "4.9배",
        title: "평균 구매량 (온라인 쇼핑 대비)"
      }
    }
  })
};
</script>
