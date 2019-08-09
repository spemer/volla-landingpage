<template lang="pug">
  div#hero.sellerHero(
    :style="{ backgroundImage: backgroundImage }"
  )
    div.hero__dim
      div.container
        div.hero__text
          h1.hero__text--title
            | 당신의 고객을 만날 수 있는
            br
            | 새로운 라이브 쇼핑 서비스
          p.hero__text--subtitle {{ serviceEn }}를 소개합니다
        img.hero__text--image(
          :alt="serviceEn"
          src="@/assets/dist/white.png"
        )
</template>

<script>
import { globalVar } from "@/globalVar";

export default {
  name: "hero",

  data: () => ({
    serviceEn: globalVar.serviceEn,
    backgroundImage: `url(${require("@/assets/dist/hero_2.png")})`
  })
};
</script>
