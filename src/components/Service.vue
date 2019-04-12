<template lang="pug">
  div#service
    div.container
      h1.service__title.section__title 대세는 라이브 방송입니다
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

  computed: {
    serviceList() {
      return this.$store.state.serviceList
    }
  },

}
</script>

<style lang="scss">
#service {
  overflow-y: hidden;
  padding-top: $grid16x;
  padding-bottom: $grid8x;

  .service__title {
    margin-bottom: $grid4x;
  }

  .service__card {
    @include grid-layout(3, 100px, $grid16x);

    @media #{$pro2} {
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

        @media #{$pro2} {
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
        font-weight: 600;
        margin: $grid4x 0 $grid6x;
      }

      .service__card--text {
        margin: -#{$grid4x} 0 $grid6x 0;
      }
    }
  }
}
</style>
