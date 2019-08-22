<template lang="pug">
  div#hero.sellerHero(
    :style="{ backgroundImage: backgroundImage }"
  )
    div.hero_dim
      div.container
        div.hero_text
          h1.hero_text-title
            | 새로운 고객을 만날 수 있는
            br
            | 새로운 라이브 패션 커머스
          p.hero_text-subtitle {{ serviceEn }}를 소개합니다
        img.hero_text-image(
          :alt="serviceEn"
          src="@/assets/dist/white.png"
        )
</template>

<script>
import { globalVar } from "@/globalVar";

export default {
  data: () => ({
    serviceEn: globalVar.serviceEn,
    backgroundImage: `url(${require("@/assets/dist/hero_2.png")})`
  })
};
</script>
