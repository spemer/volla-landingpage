<template lang="pug">
  div#sellerForm
    div.container
      h1.sellerform__form--title 셀러 입점신청서
      p.sellerform__form--subtitle Volla 셀러(판매자)용 입점 신청서입니다.
        span 는 필수 입력 항목입니다.

      form.sellerform__form--form(
        @submit.prevent="sendPost"
        name="sellerform__form"
      )
        p.sellerform__form--title(
          v-for="list in sellerFormList"
        ) {{ list.text }}
          span(
            :required="list.required"
          )
          input.sellerform__form--input(
            @input="updateValue"
            v-model="list.value"
            :type="list.type"
            :name="list.name"
            :minlength="list.minlength"
            :maxlength="list.maxlength"
            :placeholder="list.placeholder"
            :required="list.required"
          )

        p.sellerform__form--title.host 호스트 지원 희망여부 선택
          span(required="true")
          br
          input#hostTrue.sellerform__form--input.radio(
            type="radio" name="apply_category" required="true"
            v-model="apply_category" v-bind:value="'직접 방송'"
          )
          label.sellerform__form--label.first(
            for="hostTrue" v-model="apply_category"
          ) 직접 방송
          input#hostFalse.sellerform__form--input.radio(
            type="radio" name="apply_category" required="true"
            v-model="apply_category" v-bind:value="'호스트 지원 필요'"
          )
          label.sellerform__form--label(
            for="hostFalse" v-model="apply_category"
          ) 호스트 지원 필요

        p.sellerform__form--title 기타 문의사항
          textarea.sellerform__form--input.textarea(
            type="text" name="details" v-model="details"
            placeholder="기타 문의사항을 적어주세요."
          )

        button.sellerform__form--submit(
          name="sellerform__form"
        ) 제출하기
</template>

<script>
import axios from 'axios'
import { globalVar } from '@/globalVar'

export default {
  name: 'sellerForm',

  metaInfo: {
    title: globalVar.serviceEn + ' - ' + globalVar.sellerForm,
    titleTemplate: '%s',
  },

  computed: {
    sellerFormList() {
      return this.$store.state.sellerFormList
    },

  },

  data () {
    return {
      apply_category: '',
      details: '',
    }
  },

  methods: {
    updateValue(e) {
      this.$store.commit('updateValue', e.target.value)
    },

    sendPost() {
      let baseURI = globalVar.requestSellerUrl
      // let testURI = globalVar.testUrl

      axios.post(baseURI,
        {
          email: this.$store.state.sellerFormList[0].value,
          name: this.$store.state.sellerFormList[1].value,
          contact: this.$store.state.sellerFormList[2].value,
          site: this.$store.state.sellerFormList[3].value,
          sns: this.$store.state.sellerFormList[4].value,
          apply_category: this.apply_category,
          details: this.details,
        },
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        },
      )
      .then(res => {
        console.log(res.data)
      })

      alert(this.$store.state.sellerFormList[1].value + ' 님의 입점신청이 정상적으로 접수되었습니다.\n빠른 시일 내로 안내 메일을 발송해드리겠습니다.')
    },

  },

}
</script>

<style lang="scss">
// $width: 320px;
$width: 480px;
$pablet-width: 320px;
$mobile-width: 288px;

#sellerForm {
  text-align: center;
  padding: $grid24x 0 $grid32x;

  .sellerform__form--subtitle {
    font-weight: 300;

    span {
      &::before {
        content: '\A* ';
        white-space: pre;
        font-weight: 900;
        color: $brand-pink;
      }
    }
  }

  .sellerform__form--form {
    width: $width;
    display: block;
    margin: 0 auto;
    text-align: center;
    margin-top: $grid20x;

    @media #{$pablet} {
      width: $pablet-width;
    }

    @media #{$mobile} {
      width: $mobile-width;
    }

    .sellerform__form--title {
      display: block;
      text-align: left;
      font-weight: 900;
      margin-bottom: $grid;
      @include font-size($grid5x);

      span[required] {
        &::before {
          content: ' *';
          color: $brand-pink;
          @include font-size($grid5x);
        }
      }

      &.host {
        margin-bottom: $grid16x;

        .sellerform__form--label {
          cursor: pointer;
          color: $black54;
          font-weight: 300;
          text-align: center;
          margin-top: $grid4x;
          display: inline-block;
          padding: $grid2x $grid4x;
          border: 1px solid $textccc;
          // background-color: $brand-pink-10;
          @include font-size($grid4x);
          @include border-radius($grid2x);

          &.first {
            margin-right: $grid2x;
          }
        }

        input[type='radio'] {
          display: none;
        }

        input[type='radio']:checked + label {
          color: #fff;
          font-weight: 900;
          border: 1px solid $brand-pink;
          background-color: $brand-pink;
        }
      }

      .sellerform__form--input {
        border: none;
        width: $width;
        outline: none;
        display: inline-block;
        margin-bottom: $grid12x;
        padding: $grid4x 0 $grid;
        border-bottom: 1px solid $textccc;
        @include font-size($grid4x);
        @include transition(all 0.25s ease);

        @media #{$pablet} {
          width: $pablet-width;
        }

        @media #{$mobile} {
          width: $mobile-width;
        }

        &.textarea {
          resize: none;
          height: $grid32x;
          padding-top: $grid2x;
          @include line-height($grid4x);
        }

        &[type='radio'] {
          margin-top: $grid8x;
          margin-bottom: -#{$grid2x};
        }

        &:focus {
          border-bottom: 1px solid $brand-pink;
        }

        &::selection {
          color: #fff !important;
          background-color: $brand-pink !important;
        }

        &::placeholder,
        &::-moz-placeholder,
        &:-ms-input-placeholder,
        &::-ms-input-placeholder,
        &::-webkit-input-placeholder {
          color: $black24;
        }
      }
    }

    .sellerform__form--submit {
      outline: none;
      margin: 0 auto;
      display: block;
      width: $grid48x;
      cursor: pointer;
      height: $grid14x;
      font-weight: 900;
      color: $brand-pink;
      margin-top: $grid8x;
      background-color: #fff;
      border: 2px solid $brand-pink;
      @include transition(all 0.25s ease);
      @include border-radius($grid16x);

      &:hover {
        color: #fff;
        font-weight: 900;
        background-color: $brand-pink;
      }
    }
  }
}
</style>
