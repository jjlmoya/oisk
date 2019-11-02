<template>
  <div>
    <Layout>
      <Slider>
        <Passenger/>
      </Slider>
    </Layout>
  </div>
</template>


<script>

  import Layout from '@/layout/Default.vue';
  import Slider from '@/components/Slider/Default.vue';
  import Passenger from '@/components/Passenger/Default.vue';
  import SeoService from '../services/seoService';

  export default {
    name: 'home',
    components: {
      Layout,
      Passenger,
      Slider
    },
    metaInfo() {
      let seoService = new SeoService({
        title: 'Muchoviaje - Buscador',
        description: 'Un buscador dinámico para que encuentres tus vacaciones'
      });
      return seoService.getMetas();
    }
  };
</script>
