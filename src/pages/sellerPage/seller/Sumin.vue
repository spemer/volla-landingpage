<template lang="pug">
  div.sellerPage
    div.sellerPage_hero
      img.sellerPage_hero-img(
        :src="backgroundImage"
      )
    div.sellerPage_container
      p.sellerPage_container-text
        | 세상 제일 귀여운 캐릭터 일러스트 문구!
      p.sellerPage_container-text
        | 이숨 작가님이 직접 작업한 캐릭터문구로
</template>

<script>
export default {
  name: "seller-sumin",

  data: () => ({
    backgroundImage: require("@/assets/marketing/dist/esooom.png")
  })
};
</script>
