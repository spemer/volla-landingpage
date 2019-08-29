<template lang="pug">
  div#startWith
    div.container
      h1.service_title.section_title
        | {{ serviceKo }}의 시작을 함께하실 셀러분들을 모십니다
        div.service_card-each
        h3.service_card-title
          | 누구나 스마트폰으로 손쉽게
          br
          | 라이브 커머스를 시작할 수 있습니다

      div.service_card
        div.service_card-each(
        v-for="(value, key, index) in startWith"
        :key="key"
        )
          div.service_card-img.seller(
            :class="'img-' + index"
          )
          p.service_card-text.section_subtitle {{ value }}
      p.sellerform_form-condition {{ sellerCondition }}
</template>

<script>
import { globalVar } from "@/globalVar";

export default {
  data: () => ({
    serviceKo: globalVar.serviceKo,
    sellerCondition: globalVar.sellerCondition,
    startWith: {
      condition_1:
        "자신의 의류 및 상품을 잘 보여줄 수 있도록 샵을 운영하고 있는 분",
      condition_2:
        "온라인 패션 쇼핑몰 구축을 염두하고 있지만 어려움을 겪고 있는 분",
      condition_3:
        "직접 소비자들과 활발하게 소통하면서, 동시에 매출을 올리고 싶은 분"
    }
  })
};
</script>

<style lang="scss" scoped>
#startWith {
  $icon_condition: "~@/assets/dist/condition_";
  border-top: 1px solid $texteee;

  .service_card-title {
    font-weight: 400;
    text-align: center;
  }

  .service_card {
    padding: $grid4x $grid8x;

    @media #{$middle} {
      padding: $grid4x 0;
    }

    @media #{$pablet} {
      padding: $grid4x $grid8x;
    }

    .service_card-each {
      .service_card-img {
        &.seller {
          width: 80px;
          height: 80px;
          margin-bottom: $grid8x !important;
          @include setGridIcons($icon_condition);
        }
      }
    }
  }

  .sellerform_form-condition {
    color: $black38;
    text-align: center;
    margin-top: $grid4x;
    margin-bottom: $grid16x;
    @include font-size($grid3x);
  }
}
</style>
