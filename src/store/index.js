import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {
  globalVar
} from '@/globalVar'

Vue.use(Vuex)

export default new Vuex.Store({
  debug: true,

  state: {
    thisYear: new Date().getFullYear(),

    // DownloadBtn.vue
    badges: {
      Android: {
        src: '/src/assets/dist/playstore.png',
        title: 'Google Play',
        class: 'fa-google-play',
        href: globalVar.androidStore,
      },
      iOS: {
        src: '/src/assets/dist/appstore.png',
        title: 'App Store',
        class: 'fa-apple',
        href: globalVar.iosStore,
      },
    },

    // Service.vue
    serviceList: {
      serviceList1: {
        title: '라이브 방송 + 모바일 쇼핑',
        desc: '눈과 손이 지루할 틈 없는 쇼핑시간, 볼라에는 실시간으로 보고 듣고 이야기하는 즐거움이 있습니다.',
      },
      serviceList2: {
        title: '원하는 정보를 실시간으로',
        desc: '상세한 정보를 실시간 방송으로 확인하고, 다른 사람들과 함께 정보를 교류하고 소통할 수 있습니다.',
      },
      serviceList3: {
        title: '쇼핑까지 한 자리에서',
        desc: '마음에 드는 제품이 있다면, 방송을 보는 동시에 실시간으로 장바구니에 담거나 구매할 수도 있습니다.',
      },
    },

    // Footer.vue
    infoList: {
      상호명: globalVar.companyNameFull,
      사업자등록번호: globalVar.companyID,
      통신판매업신고번호: globalVar.companyItc,
      대표이사: globalVar.companyCEO,
      대표전화: globalVar.callTo,
      주소: globalVar.companyAdr,
    },

    // Footer.vue
    tosList: {
      userPrivacyPageTitle: [
        globalVar.userPrivacyPageTitle,
        'user/privacy'
      ],
      userServicePageTitle: [
        globalVar.userServicePageTitle,
        'user/service'
      ],
      ceoPrivacyPageTitle: [
        globalVar.ceoPrivacyPageTitle,
        'ceo/privacy'
      ],
      ceoServicePageTitle: [
        globalVar.ceoServicePageTitle,
        'ceo/service'
      ],
    },

    snsList: {
      facebook: [
        globalVar.facebookUrl,
        'fa-facebook-square',
      ],
      instagram: [
        globalVar.instagramUrl,
        'fa-instagram',
      ],
    },

    // pages/tos
    tosVars: {
      companyNameFullKo: globalVar.companyNameFullKo,
      ceoWebsiteUrl: globalVar.ceoWebsiteUrl,
      companyName: globalVar.companyName,
      companyCEO: globalVar.companyCEO,
      websiteUrl: globalVar.websiteUrl,
      tosDateNow: globalVar.tosDateNow,
      serviceEn: globalVar.serviceEn,
      callTo: globalVar.callTo,
      mailTo: globalVar.mailTo,
    },

    // SellerForm.vue
    sellerForm_List: [{
        value: '',
        text: '이메일 주소',
        type: 'email',
        name: 'email',
        placeholder: '회신받을 이메일 주소를 입력해주세요.',
        required: true,
      },
      {
        value: '',
        text: '담당자 이름',
        type: 'text',
        name: 'name',
        placeholder: '담당자 이름을 입력해주세요.',
        required: true,
      },
      {
        value: '',
        text: '전화번호',
        type: 'tel',
        name: 'contact',
        minlength: '8',
        maxlength: '12',
        placeholder: '" - " 없이 숫자만 입력해주세요.',
        required: true,
      },
      {
        value: '',
        text: '웹사이트 주소',
        type: 'text',
        name: 'site',
        placeholder: '웹사이트 주소를 입력해주세요.',
      },
      {
        value: '',
        text: 'SNS 주소',
        type: 'text',
        name: 'sns',
        placeholder: '대표 SNS 주소를 입력해주세요.',
      },
    ],

    sellerForm_Category: [{
        buttonText: '직접 방송',
        id: 'hostTrue',
        text: '호스트 지원 희망여부 선택',
        type: 'radio',
        name: 'apply_category',
        required: true,
        class: 'first',
      },
      {
        buttonText: '호스트 지원 필요',
        id: 'hostFalse',
        text: '호스트 지원 희망여부 선택',
        type: 'radio',
        name: 'apply_category',
        required: true,
      },
    ],

    sellerForm_CategoryValue: {
      value: '',
    },

    sellerForm_Details: {
      value: '',
      text: '기타 문의사항',
      type: 'text',
      name: 'details',
      placeholder: '기타 문의사항을 적어주세요.',
    },

  },

  getters: {

  },

  mutations: {
    UpdateSellerFormList(state, value) {
      state.sellerForm_List.value = value
    },

    UpdateSellerFormCategoryValue(state, value) {
      state.sellerForm_CategoryValue.value = value
    },

    UpdateSellerFormDetails(state, value) {
      state.sellerForm_Details.value = value
    },

  },

  actions: {

  },
})
