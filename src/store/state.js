import {
  globalVar
} from '@/globalVar'

const state = {
  thisYear: new Date().getFullYear(),

  // DownloadBtn.vue
  badges: {
    Android: {
      src: '/src/assets/dist/playstore.png',
      title: 'Google Play',
      class: 'fa-google-play',
      href: globalVar.androidStore,
      dlWait() {
        window.open(globalVar.androidStore, '_blank')
      },
    },
    iOS: {
      src: '/src/assets/dist/appstore.png',
      title: 'App Store',
      class: 'fa-apple',
      href: globalVar.iosStore,
      dlWait() {
        alert('아이폰용 어플이 5월 중으로 곧 출시됩니다. 조금만 기다려주세요!')
      },
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

  tokenState: false,

  benefits: {
    top: [
      '입점 비용이 없습니다. 상품만 있다면, 누구나 온라인 판매자가 됩니다.',
      '매출 수수료는 당연히 타 업체들과 비교하여 더욱 저렴합니다.',
      '전문장비가 없어도, 스마트폰만으로 손쉽게 라이브 방송을 시작할 수 있습니다.',
    ],
    bottom: [
      '보다 큰 수익을 위한 수수료 할인',
      '보다 활발한 방송을 위한 쇼호스트 지원',
      '보다 원활한 입점을 위한 입점 절차 및 방송 지원',
    ],
  },

}

export default state
