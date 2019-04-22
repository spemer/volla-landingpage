<template lang="pug">
  div#sellerForm
    div.container
      h1.sellerform__form--title 셀러 입점신청서
      p.sellerform__form--subtitle Volla 셀러(판매자)용 입점 신청서입니다.
        span 는 필수 입력 항목입니다.

      form.sellerform__form--form(
        name="sellerform__form"
        @submit.prevent="sendPost"
      )
        p.sellerform__form--title(
          v-for="list in sellerForm_List"
        ) {{ list.text }}
          span(
            :required="list.required"
          )
          input.sellerform__form--input(
            :type="list.type"
            :name="list.name"
            v-model="list.value"
            :required="list.required"
            :minlength="list.minlength"
            :maxlength="list.maxlength"
            :placeholder="list.placeholder"
          )

        p.sellerform__form--title.host {{ sellerForm_Category[0].text }}
          span(
            :required="sellerForm_Category[0].required"
          )
            div.sellerform__form--div(
              v-for="category in sellerForm_Category"
            )
              input.sellerform__form--input(
                :id="category.id"
                :type="category.type"
                :name="category.name"
                :value="category.buttonText"
                :required="category.required"
                v-model="sellerForm_CategoryValue.value"
              )
              label.sellerform__form--label(
                :for="category.id"
                :class="category.class"
                v-model="sellerForm_CategoryValue.value"
              ) {{ category.buttonText }}

        p.sellerform__form--title {{ sellerForm_Details.text }}
          textarea.sellerform__form--input.textarea(
            :type="sellerForm_Details.text"
            :name="sellerForm_Details.name"
            v-model="sellerForm_Details.value"
            :placeholder="sellerForm_Details.placeholder"
          )

        button.sellerform__form--submit(
          name="sellerform__form"
          @click="checkCategoryValue"
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
    sellerForm_List: {
      get() {
        return this.$store.state.sellerForm_List
      },
      set(value) {
        this.$store.commit('UpdateSellerFormList', value)
      },
    },

    sellerForm_CategoryValue: {
      get() {
        return this.$store.state.sellerForm_CategoryValue
      },
      set(value) {
        this.$store.commit('UpdateSellerFormCategoryValue', value)
      },
    },

    sellerForm_Details: {
      get() {
        return this.$store.state.sellerForm_Details
      },
      set(value) {
        this.$store.commit('UpdateSellerFormDetails', value)
      },
    },

    sellerForm_Category() { return this.$store.state.sellerForm_Category },

  },

  methods: {
    checkCategoryValue() {
      if (! this.sellerForm_CategoryValue.value)
        alert('호스트 지원 희망여부를 선택해주세요.')
    },

    sendPost() {
      let baseURI = globalVar.requestSellerUrl

      axios.post(baseURI,
        {
          email: this.sellerForm_List[0].value,
          name: this.sellerForm_List[1].value,
          contact: this.sellerForm_List[2].value,
          site: this.sellerForm_List[3].value,
          sns: this.sellerForm_List[4].value,
          apply_categories: this.sellerForm_CategoryValue.value,
          details: this.sellerForm_Details.value,
        },
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        },
      )
      .then(res => { console.log(res.data) })

      alert(this.$store.state.sellerForm_List[1].value
        + ' 님의 입점신청이 정상적으로 접수되었습니다.'
        + '\n빠른 시일 내로 안내 메일을 발송해드리겠습니다.')
    },

  },

}
</script>

<style lang="scss">
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

        span {
          &::before {
            content: ' *\A';
            white-space: pre;
          }
        }

        .sellerform__form--div {
          display: inline-block;

          .sellerform__form--label {
            color: $black54;
            cursor: pointer;
            font-weight: 300;
            text-align: center;
            margin-top: $grid4x;
            display: inline-block;
            padding: $grid2x $grid4x;
            border: 1px solid $textccc;
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
