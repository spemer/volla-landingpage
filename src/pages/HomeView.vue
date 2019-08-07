<template lang="pug">
  div#homeView
    Hero
    Service
    EasyStart.section__each
    Download.section__each
    JoinUs.section__each
</template>

<script>
const Hero = () =>
  import(
    /* webpackChunkName: 'components/home/Hero' */ "@/components/home/Hero"
  );
const Service = () =>
  import(
    /* webpackChunkName: 'components/home/Service' */ "@/components/home/Service"
  );
const EasyStart = () =>
  import(
    /* webpackChunkName: 'components/home/EasyStart' */ "@/components/home/EasyStart"
  );
const Download = () =>
  import(
    /* webpackChunkName: 'components/home/Download' */ "@/components/home/Download"
  );
const JoinUs = () =>
  import(
    /* webpackChunkName: 'components/home/JoinUs' */ "@/components/home/JoinUs"
  );

import { globalVar } from "@/globalVar";

export default {
  name: "HomeView",

  metaInfo: {
    title: globalVar.serviceEn,
    titleTemplate: `%s - ${globalVar.tagline}`
  },

  components: {
    Hero,
    Service,
    EasyStart,
    Download,
    JoinUs
  }
};
</script>
