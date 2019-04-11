<template lang="pug">
  div#download
    div.container
      h1.download__title.section__title 어플로 간편하게 즐겨보세요.
      p.section__subtitle {{ serviceKo }}는 안드로이드 구글 플레이, 아이폰 앱스토어에서 받으실 수 있습니다.

      div.download__badge
        a.download__badge--link(
          v-for="(value, key) in badges"
          :key="key"
          target="_blank"
          :href="value.href"
          v-tooltip.bottom="{content: key + ' ' + value.title + '에서 다운받기', delay: {show: 500, hide: 100}}"
        )
          img.download__badge--each(
            :src="value.src"
          )
          span.download__badge--text {{ value.title }}

      div.download__mockup
        img.download__mockup--img(
          src="/src/assets/dist/screen.png"
        )
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'download',

  data () {
    return {
      badges: {
        Android: {
          src: '/src/assets/dist/playstore.png',
          title: 'Google Play',
          href: globalVar.androidStore,
        },
        iOS: {
          src: '/src/assets/dist/appstore.png',
          title: 'App Store',
          href: globalVar.iosStore,
        },
      },

      serviceKo: globalVar.serviceKo,
    }
  },

}
</script>

<style lang="scss">
#download {
  height: 612px;
  overflow-y: hidden;
  border-top: 1px solid $texteee;

  @media #{$pablet} {
    height: 602px;
  }

  .download__badge {
    width: 100%;
    outline: none;
    margin: 0 auto;
    text-align: center;
    display: inline-block;

    .download__badge--link {
      height: $grid10x;
      display: inline-block;
      margin-bottom: $grid8x;
      border-radius: $grid16x;
      border: 1px solid $texteee;
      padding: $grid2x $grid4x 0;
      @include transition(all 0.25s ease);

      &:hover {
        opacity: 0.75;
      }

      &:first-child {
        margin-right: $grid4x;

        @media #{$ip6} {
          margin-right: $grid2x;
        }

        @media #{$mobile} {
          margin-left: $grid2x;
          padding: $grid2x $grid4x 0;
        }

        @media #{$mini} {
          margin-bottom: $grid4x;
        }
      }

      .download__badge--each {
        width: $grid6x;
        margin-right: $grid2x;
        vertical-align: bottom;
      }

      .download__badge--text {
        color: $text777;
        font-weight: 700;
        vertical-align: bottom;
      }
    }
  }

  .download__mockup {
    text-align: center;

    .download__mockup--img {
      width: 320px;
      margin: 0 auto;

      @media #{$mobile} {
        width: 280px;
      }
    }
  }
}
</style>
