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
          placeholder="이메일 주소를 입력해주세요" required
        )
        p.sellerform__form--title(required) 상호명
        input.sellerform__form--input(
          type="text" name="shop" v-model="shop"
          placeholder="상호명을 입력해주세요" required
        )
        p.sellerform__form--title(required) 담당자 이름
        input.sellerform__form--input(
          type="text" name="name" v-model="name"
          placeholder="담당자 이름을 입력해주세요" required
        )
        p.sellerform__form--title(required) 전화번호
        input.sellerform__form--input(
          type="tel" name="contact" v-model="contact"
          placeholder="'-' 없이 숫자만 입력해주세요" required
        )
        p.sellerform__form--title 웹사이트 주소
        input.sellerform__form--input(
          type="text" name="site" v-model="site"
          placeholder="웹사이트 주소를 입력해주세요"
        )
        p.sellerform__form--title SNS 주소
        input.sellerform__form--input(
          type="text" name="sns" v-model="sns"
          placeholder="대표 SNS 주소를 입력해주세요"
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
      shop: '',
      name: '',
      contact: '',
      site: '',
      sns: '',
    }
  },

  methods: {
    sendPost() {
      let baseURI = 'https://operator-apis.volla.live'
      axios.post(baseURI, {
      	email: this.email,
      	shop: this.shop,
      	name: this.name,
      	contact: this.contact,
      	site: this.site,
      	sns: this.sns,
      })
      .then(function(res) {
      	console.log(res.data)
      })
    },

  },

}
</script>

<style lang="scss">
$width: 320px;
$min-width: 288px;

#sellerForm {
  text-align: center;
  padding: $grid16x 0 $grid32x;

  // .sellerform__form--title {
  // }

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

    @media #{$mobile} {
      width: $min-width;
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
      outline: none;
      width: $width;
      display: inline-block;
      margin-bottom: $grid12x;
      padding: $grid4x 0 $grid;
      border-bottom: 1px solid $textccc;
      @include transition(all 0.25s ease);

      @media #{$mobile} {
        width: $min-width;
      }

      &:focus {
        border-bottom: 1px solid $brand-pink;
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
      width: 200px;
      outline: none;
      margin: 0 auto;
      display: block;
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
