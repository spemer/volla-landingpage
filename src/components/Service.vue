<template lang="pug">
  div#service
    div.container
      div.service__card
        div.service__card--each(
          v-for="(value, key, index) in serviceList"
          :key="key"
        )
          h3.service__card--title {{ value.title }}
          p.service__card--text.section__subtitle {{ value.desc }}
          div.service__card--img(:class="'img-' + index")
</template>

<script>
export default {
  name: 'service',

  data () {
    return {
      serviceList: {
        serviceList1: {
          title: '라이브 방송 + 모바일 쇼핑',
          desc: '눈과 손이 지루할 틈 없는 쇼핑시간, 볼라에는 보고 듣고 이야기하는 즐거움이 있습니다.',
        },
        serviceList2: {
          title: '원하는 정보를 실시간으로',
          desc: '상세한 정보를 실시간 방송으로 확인하고, 다른 사람들과 함께 정보를 교류하고 소통할 수 있습니다.',
        },
        serviceList3: {
          title: '쇼핑까지 한 자리에서',
          desc: '마음에 드는 제품이 있다면, 방송을 보는 동시에 바로 장바구니에 담거나 구매할 수도 있습니다.',
        },
      },
    }
  }
}
</script>

<style lang="scss">
#service {
  overflow-y: hidden;
  padding-top: $grid16x;
  padding-bottom: $grid8x;

  .service__card {
    @include grid-layout(3, 100px, $grid16x);

    @media #{$tablet} {
      @include grid-layout(1, 100px, $grid4x);
    }

    .service__card--each {
      .service__card--img {
        height: 480px;
        margin: 0 auto;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        @include drop-shadow();

        $BaseURI: '/src/assets/dist/serviceImage_';
        @for $i from 0 through 2 {
          &.img-#{$i} {
            background-image: url('#{$BaseURI + ($i + 1)}.png');
          }
        }

        @media #{$tablet} {
          height: 560px;
          width: 320px;
        }

        @media #{$pablet} {
          height: 520px;
          width: 300px;
        }

        @media #{$ip6} {
          height: 480px;
          width: 280px;
        }
      }

      .service__card--title,
      .service__card--text {
        text-align: center;
        margin-top: $grid8x;

        @media #{$pablet} {
          margin-top: $grid4x;
        }
      }

      .service__card--title {
        font-weight: 700;
        margin: $grid4x 0 $grid6x;
      }

      .service__card--text {
        margin: -#{$grid4x} 0 $grid6x 0;
      }
    }
  }
}
</style>
