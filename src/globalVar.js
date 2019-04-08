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

    serviceKo: '볼라',
    serviceEn: 'Volla',
    tagline: '실시간 쇼핑 스트리밍',
    taglineLong: '라이브 방송으로 만나는 동대문 쇼핑',

    callTo: '+82-10-7422-8845',
    mailTo: 'alex.lee@volla.live',

    websiteUrl: 'https://volla.live',
    ceoWebsiteUrl: 'https://volla.live/admin',
    iosStore: '#',
    androidStore: '#',
  }
})
