<template lang="pug">
  div#joinus
    div.container
      h1.joinus__title.section__title {{ serviceKo }}에 입점하세요
      p.section__subtitle
        | {{ stringUpper }}
        br
        | {{ stringBelow }}
        br
        span.joinus__title--copyEmail(
          v-clipboard:copy="mailTo"
          title="이메일 주소를 복사하려면 클릭하세요"
          @click="toast('이메일 주소가 복사되었습니다')"
        ) 이메일 주소 복사하기
          i.far.fa-copy

      div.global__cta
        a.global__cta--link(
          :href="`mailto:${mailTo}?subject=볼라 셀러(판매자) 입점신청`"
        )
          button.global__cta--btn.mailto(
            title="메일 앱 열기(새 창)"
          ) 메일로 문의하기

        a.global__cta--link(
          :href="'/sellerform'"
        )
          button.global__cta--btn.form(
            title="셀러입점신청"
          ) 셀러입점신청
</template>

<script>
import { globalVar } from '@/globalVar'
import { toast } from '@/mixins/toast'

export default {
  name: 'joinus',

  data: _ => ({
    stringUpper: '',
    stringBelow: '',
    mailTo: globalVar.mailTo,
    serviceKo: globalVar.serviceKo,
  }),

  mixins: [
    toast,
  ],

  mounted () {
    if (this.$route.path === '/') {
      this.stringUpper = `${this.serviceKo}와 함께 성장하실 셀러분들을 모십니다.`
      this.stringBelow = '셀러 입점신청서를 작성하시려면, 아래의 버튼을 클릭해주세요.'
    } else if (this.$route.path === '/seller' || this.$route.path === '/app') {
      this.stringUpper = '라이브 방송으로 담는 오프라인 쇼핑,'
      this.stringBelow = `${this.serviceKo}에 지금 바로 입점하세요!`
    }
  },

}
</script>

<style lang="scss" scoped>
#joinus {
  padding: $grid12x 0 $grid24x;
  border-top: 1px solid $texteee;

  &.aos-animate {
    .form {
      color: $brand-pink !important;
      background-color: #fff !important;
      border: 1px solid $brand-pink !important;
      animation: btn 0.5s ease-in-out 1.5s 1 forwards;

      @keyframes btn {
        from {
          color: $brand-pink !important;
          background-color: #fff !important;
        }

        to {
          color: #fff;
          background-color: $brand-pink;
        }
      }
    }
  }

  .container {
    .section__subtitle {
      margin-bottom: 0;

      .joinus__title--copyEmail {
        cursor: pointer;
        font-weight: 400;
        color: $brand-pink;
        display: inline-block;
        @include transition(all 0.25s ease);

        &:hover {
          opacity: 0.5;
        }

        .fa-copy {
          margin-left: $grid;
        }
      }
    }

    .global__cta {
      width: 100%;
      display: inline-block;

      .global__cta--btn {
        width: $grid40x;

        &.form {
          color: #fff;
          background-color: $brand-pink;
        }

        &.mailto {
          margin-right: $grid4x;

          @media #{$pablet} {
            display: none;
          }
        }
      }
    }
  }
}
</style>
