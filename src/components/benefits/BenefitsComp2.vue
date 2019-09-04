<template lang="pug">
  div#benefitsComp.benefits2
    div.container
      h1.service_title.section_title.subtitle
        | 또한 이와 더불어, 아래와 같은
        br
        | 초기 입점 혜택을 준비했습니다.
      div.service_card
        div.service_card-each(
          v-for="(value, key, index) in benefitsBottom"
          :key="key"
        )
          div.service_card-img.seller.seller2(
            :class="'img-' + (index + 1)"
          )
          p.service_card-text.section_subtitle {{ value }}
</template>

<script>
export default {
  data: () => ({
    benefitsBottom: {
      benefits2_1: "보다 높은 수익을 위한 낮은 수수료율과 수수료 할인",
      benefits2_2: "부담없는 방송 진행을 위한 라이브 방송 호스트 지원",
      benefits2_3: "보다 원활한 입점을 위한 입점절차 및 방송절차 지원"
    }
  })
};
</script>

<style lang="scss" scoped>
.benefits2 {
  $icon_benefits-2: "~@/assets/dist/benefits2_";

  padding-bottom: $grid8x !important;

  .service_card {
    .service_card-each {
      .service_card-img {
        &.seller {
          &.seller2 {
            @include setGridIcons($icon_benefits-2);
          }
        }
      }
    }
  }

  .subtitle {
    @include font-size($grid8x);

    @media #{$pablet} {
      @include font-size($grid7x);
    }

    @media #{$ip6} {
      @include font-size($grid5x);
    }
  }
}
</style>
