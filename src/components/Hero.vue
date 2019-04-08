<template lang="pug">
  div#hero
    div.hero__dim
      div.container
        p Test
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'hero',
}
</script>

<style lang="scss">
$baseURI: '../assets/dist/hero.jpg';

#hero {
  width: 100%;
  height: $grid128x;
  position: relative;
  margin-top: $header;
  background-image: url('#{$baseURI}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media #{$tablet} {
    max-height: calc(92vh - #{$grid16x});
  }

  .hero__dim {
    height: 100%;
    background-color: $black38;
  }
}
</style>
