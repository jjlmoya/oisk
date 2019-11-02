<template>
    <div>
        <Layout>
            <div class="business-line">
                <Title title="¿Que tipo de viaje estás pensando?"></Title>
                <List/>
            </div>
        </Layout>
    </div>
</template>
<style lang="scss">
    @import 'business-line.scss';
</style>
<script>
    import Layout from '@/layout/Default.vue';
    import List from '@/components/List/Default.vue';
    import Title from '@/components/Title/Default.vue';
    import SeoService from '../services/seoService';

    export default {
        name: 'tipo-de-viaje',
        components: {
            Layout,
            List,
            Title
        },
        metaInfo() {
            let seoService = new SeoService({
                title: 'Muchoviaje - ¿Que desea?',
                description: 'Un buscador dinámico para que encuentres tus vacaciones'
            });
            return seoService.getMetas();
        }
    };
</script>
