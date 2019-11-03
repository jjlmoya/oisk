<template>
    <div>
        <Layout>
            <Slider>
                Destination
            </Slider>
        </Layout>
    </div>
</template>


<script>

    import Layout from '@/layout/Default.vue';
    import Slider from '@/components/Slider/Default.vue';
    import SeoService from '../services/seoService';

    export default {
        name: 'destino',
        components: {
            Layout,
            Slider
        },
        metaInfo() {
            let seoService = new SeoService({
                title: 'Muchoviaje - Seleccione Destino',
                description: 'Un buscador dinámico para que encuentres tus vacaciones'
            });
            return seoService.getMetas();
        }
    };
</script>
