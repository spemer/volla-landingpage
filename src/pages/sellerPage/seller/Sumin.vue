<template lang="pug">
  div.sellerPage
    div.sellerPage_hero
      img.sellerPage_hero-img(
        :src="backgroundImage"
      )

    div.sellerPage_container
      h3.sellerPage_container-title
        | 🌵 느리게 살자 늘보씨처럼 🌵
      p.sellerPage_container-text
        | 세상 귀여운 캐릭터 일러스트 문구!
      p.sellerPage_container-text
        | 이숨 작가님이 손수 작업한 캐릭터 문구로
      p.sellerPage_container-text
        | 대체 불가능한 귀여움을 겟- 해보세요

      br
      p.sellerPage_container-text.bold
        | ⬇️ 수민님 제품 리스트 ⬇️ ️

      div.sellerPage_items(
        v-for="(item, i) in itemList"
      )
        h3.sellerPage_items-title
          | {{ item.index }}
        p.sellerPage_items-text
          | {{ item.title }} -
          span.price &nbsp;{{ item.price }}원
        p.sellerPage_items-text.caption
          | {{ item.caption }}
        img.sellerPage_items-img(
          :src="item.src"
        )

      br
      p.sellerPage_container-text.bold(
        v-if="this.$route.query.from === 'app'"
      )
        | ⬇️ 더 많은 제품 구경하기 ⬇️ ️
      br
</template>

<script>
import { globalVar } from "@/globalVar";

export default {
  name: "seller-sumin",

  metaInfo() {
    return {
      title: globalVar.serviceEn,
      titleTemplate: "[입점] 이숨(e.sooom)"
    };
  },

  data: () => ({
    backgroundImage: require("@/assets/marketing/dist/esooom_hero.png"),
    itemList: [
      {
        index: "01",
        title: "늘어지는 녀석들 조각스티커",
        caption: "손으로 꼬집! 잡아서 사진찍으면 존귀탱 ٩( ᐛ )و",
        src: require("@/assets/marketing/dist/esooom_1.png"),
        price: "2,500"
      },
      {
        index: "02",
        title: "느린늘보_조각스티커",
        caption: "이숨 작가님 메인 캐릭터! 늘보씨 조각스티커 💕",
        src: require("@/assets/marketing/dist/esooom_2.png"),
        price: "2,000"
      },
      {
        index: "03",
        title: "바다_마스킹테이프",
        caption: "여름과 어울리게, 청량감있는 🌊",
        src: require("@/assets/marketing/dist/esooom_3.png"),
        price: "6,000"
      },
      {
        index: "04",
        title: "안경닦이_늘보",
        caption: "(작가님이 쓸라고 만들었다는 👓) 근데 넘 이쁘잖아...!",
        src: require("@/assets/marketing/dist/esooom_4.png"),
        price: "4,500"
      },
      {
        index: "05",
        title: "메모세트",
        caption: "요즘은 메모지도 외모지상주의 📝 아까워서 어케쓴담?!",
        src: require("@/assets/marketing/dist/esooom_5.png"),
        price: "2,500"
      }
    ]
  })
};
</script>
