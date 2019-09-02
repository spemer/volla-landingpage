<template lang="pug">
  div#service
    div.container
      h1.service_title.section_title 대세는 라이브 방송입니다
      div.service_card
        div.service_card-each(
          v-for="(value, key, index) in serviceList"
          :key="key"
        )
          h3.service_card-title {{ value.title }}
          p.service_card-text.section_subtitle {{ value.desc }}
          div.service_card-img.service(
            :class="'img-' + index"
          )
</template>

<script>
import { globalVar } from "@/globalVar";

export default {
  data: () => ({
    serviceList: {
      serviceList1: {
        title: "라이브 방송 + 모바일 쇼핑",
        desc: `눈과 손이 지루할 틈 없는 쇼핑시간, ${globalVar.serviceKo}에는 실시간으로 보고 듣고 이야기하는 소통의 즐거움이 있습니다.`
      },
      serviceList2: {
        title: "원하는 정보를 실시간으로",
        desc: `상세한 정보를 실시간 방송으로 확인하고, 다른 사람들과 함께 정보를 교류하며 소통할 수 있습니다.`
      },
      serviceList3: {
        title: "쇼핑까지 한 자리에서",
        desc: `마음에 드는 제품이 있다면, 방송을 보는 동시에 실시간으로 장바구니에 담거나 바로 구매할 수 있습니다.`
      }
    }
  })
};
</script>
