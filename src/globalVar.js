import Vue from 'vue'

export const globalVar = new Vue({
  data: {
    companyName: '알에스파이브',
    companyNameFull: '(주)알에스파이브',
    companyNameFullKo: '주식회사 알에스파이브',
    companyAdr: '서울특별시 송파구 송파대로 345, 209동 904호(가락동, 헬리오시티)',
    companyCEO: '이문규',
    companyID: '653-12-01150',
    companyItc: '2019-서울송파-0847',
    companyMailTo: 'riversouthfive@gmail.com',

    serviceKo: '볼라',
    serviceEn: 'Volla',
    tagline: '실시간 쇼핑 스트리밍',
    taglineLong: '라이브 방송으로 만나는 동대문 쇼핑',
    sellerForm: '셀러 입점신청',

    callTo: '+82-10-7422-8845',
    mailTo: 'ceo@volla.live',

    websiteUrl: 'https://volla.live',
    ceoWebsiteUrl: 'https://volla.live/admin',
    sellerRequestUrl: 'https://forms.gle/vrSC9rELrEoYutdN8',
    iosStore: '#',
    androidStore: '#',
    facebookUrl: 'https://facebook.com/vollaofficial/',
    instagramUrl: 'https://www.instagram.com/volla_official/',
    requestSellerUrl: 'https://operator-apis.volla.live/requestSeller',

    tosDateNow: '2019년 3월 26일',

    userPrivacyPageTitle: '개인정보처리방침(이용자용)',
    userServicePageTitle: '서비스이용약관(이용자용)',
    ceoPrivacyPageTitle: '개인정보처리방침(판매자용)',
    ceoServicePageTitle: '서비스이용약관(쇼핑몰사업자용)',
  }
})
