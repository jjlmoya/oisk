<template>
  <div class="l-default">
    <HeaderDefault/>
    <div class="l-default__main">
      <div class="l-default__content">
        <slot/>
      </div>
    </div>
    <FooterDefault/>
  </div>
</template>


<script>
  import HeaderDefault from '@/components/Header/Default.vue';
  import FooterDefault from '@/components/Footer/Default.vue';

  export default {
    name: 'default-layout',
    components: {
      HeaderDefault,
      FooterDefault
    }
  }
</script>


<style lang="scss">
  @import 'default.scss';
</style>
