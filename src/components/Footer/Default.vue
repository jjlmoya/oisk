<template>
  <footer class="footer-default">
      <BreadCrumbs />
  </footer>
</template>

<style lang="scss">
  @import 'footer.scss';
</style>

<script>
  import BreadCrumbs from '@/components/BreadCrumbs/Default.vue';

  export default {
    components: {
      BreadCrumbs
    },
    mounted() {

    }
  };
</script>