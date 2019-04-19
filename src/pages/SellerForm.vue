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
        p.sellerform__form--title(required) 이메일 주소
        input.sellerform__form--input(
          type="email" name="email" v-model="email"
          placeholder="회신받을 이메일 주소를 입력해주세요." required
        )
        p.sellerform__form--title(required) 담당자 이름
        input.sellerform__form--input(
          type="text" name="name" v-model="name"
          placeholder="담당자 이름을 입력해주세요." required
        )
        p.sellerform__form--title(required) 전화번호
        input.sellerform__form--input(
          type="tel" name="contact" v-model="contact"
          minlength="8" maxlength="16"
          placeholder="'-' 없이 숫자만 입력해주세요." required
        )
        p.sellerform__form--title 웹사이트 주소
        input.sellerform__form--input(
          type="text" name="site" v-model="site"
          placeholder="웹사이트 주소를 입력해주세요."
        )
        p.sellerform__form--title SNS 주소
        input.sellerform__form--input(
          type="text" name="sns" v-model="sns"
          placeholder="대표 SNS 주소를 입력해주세요."
        )
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
import {globalVar} from '@/globalVar'

export default {
  name: 'sellerForm',

  metaInfo: {
    title: globalVar.serviceEn + ' - ' + globalVar.sellerForm,
    titleTemplate: '%s',
  },

  data () {
    return {
      email: '',
      name: '',
      contact: '',
      site: '',
      sns: '',
      details: '',
    }
  },

  methods: {
    sendPost() {
      let baseURI = globalVar.requestSellerUrl

      axios.post(baseURI,
        {
          email: this.email,
          name: this.name,
          contact: this.contact,
          site: this.site,
          sns: this.sns,
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

      alert(this.name + ' 님의 입점신청이 정상적으로 접수되었습니다.\n빠른 시일 내로 안내 메일을 발송해드리겠습니다.')
      // window.close()
      // window.postMessage('close')
    },

  },

}
</script>

<style lang="scss">
$width: 320px;
// $pablet-width: 320px;
$mobile-width: 288px;

#sellerForm {
  text-align: center;
  padding: $grid12x 0 $grid32x;

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
    margin-top: $grid16x;

    // @media #{$pablet} {
    //   width: $pablet-width;
    // }

    @media #{$mobile} {
      width: $mobile-width;
    }

    .sellerform__form--title {
      display: block;
      text-align: left;
      font-weight: 900;
      margin-bottom: $grid;
      @include font-size($grid5x);

      &[required] {
        &::after {
          content: ' *';
          color: $brand-pink;
        }
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
      @include transition(all 0.25s ease);

      // @media #{$pablet} {
      //   width: $pablet-width;
      // }

      @media #{$mobile} {
        width: $mobile-width;
      }

      &.textarea {
        resize: none;
        height: $grid32x;
        @include line-height($grid4x);
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
