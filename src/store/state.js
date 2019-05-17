import {
  globalVar
} from '@/globalVar'

export default {
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
      desc: '눈과 손이 지루할 틈 없는 쇼핑시간, ' + globalVar.serviceKo + '에는 실시간으로 보고 듣고 이야기하는 즐거움이 있습니다.',
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
      '페이스북',
    ],
    instagram: [
      globalVar.instagramUrl,
      'fa-instagram',
      '인스타그램',
    ],
    appstore: [
      globalVar.iosStore,
      'fa-app-store-ios',
      '앱 스토어 다운받기',
    ],
    android: [
      globalVar.androidStore,
      'fa-google-play',
      '구글 플레이 다운받기',
    ],
  },

  // pages/tos
  tosVars: {
    companyNameFullKo: globalVar.companyNameFullKo,
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
      placeholder: '숫자만 입력해주세요.',
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
      text: '호스트 지원 희망여부',
      buttonText: '직접 방송',
      id: 'hostTrue',
      type: 'radio',
      name: 'apply_category',
      required: true,
      class: 'first',
    },
    {
      buttonText: '호스트 지원 필요',
      id: 'hostFalse',
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

  marketing: {
    val_1: false,
    val_2: false
  },

  tokenState: false,

  marketingTerms: {
    personal: {
      title: '(필수) 개인정보 수집 및 이용에 동의합니다.',
      desc: '[개인정보 수집/이용] 귀하는 개인(신용)정보의 선택적인 수집∙이용, 제공에 대한 동의를 거부할 수 있습니다. 다만, 동의하지 않을 경우 관련 편의제공 안내 등 이용 목적에 따른 혜택에 제한이 있을 수 있습니다. 동의한 경우에도 귀하는 동의를 철회하거나 마케팅 목적으로 귀하에게 연락하는 것을 중지하도록 요청할 수 있습니다.',
    },
    marketing: {
      title: '(선택) 마케팅 정보 수신에 동의합니다.',
      desc: '목적: 당사의 상품·서비스 안내 및 이용권유, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 시장조사 및 상품·서비스 개발연구 등',
    },
  },

  benefits: {
    top: {
      benefits_1: '입점비용이 없습니다. 상품만 있다면 누구나 온라인 셀러가 될 수 있습니다.',
      benefits_2: '매출 수수료는 당연히 타 업체들과 비교했을 때에도, 더욱 더 저렴합니다.',
      benefits_3: '전문장비가 없어도 스마트폰만으로 쉽게 라이브 방송을 시작할 수 있습니다.',
    },
    bottom: {
      benefits2_1: '보다 큰 수익을 위한 낮은 수수료율과 수수료 할인',
      benefits2_2: '보다 활발한 방송을 위한 라이브 방송 호스트 지원',
      benefits2_3: '보다 원활한 입점을 위한 입점 절차 및 방송 지원',
    },
  },

  startWith: {
    condition_1: '자신의 상품을 잘 보여줄 수 있도록 매장을 운영하고 있는 분',
    condition_2: '온라인 쇼핑몰 구축을 염두하고 있지만 어려움을 겪고 있는 분',
    condition_3: '직접 소비자들과 소통하면서, 동시에 매출을 올리고 싶은 분',
  },

  statsList: {
    first: {
      endVal: 66,
      suffix: '%',
      decimals: 0,
      title: '모바일 점유율',
    },
    second: {
      endVal: 5.15,
      suffix: '배',
      decimals: 2,
      title: '평균 구매 전환율 (온라인 쇼핑 대비)',
    },
    third: {
      endVal: 4.9,
      suffix: '배',
      decimals: 1,
      title: '평균 구매량 (온라인 쇼핑 대비)',
    },
  },

}
