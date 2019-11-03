<template>
    <ul class="list list--country">
        <li v-for="type in data" class="list__element">
            <router-link :to="'/destino?type=' + type.id+ '&adults=' + adults + '&child=' + child + '&babies='+babies">
                <figure class="list__figure">
                    <img v-bind:src=type.image v-bind:alt=type.id />
                    <figcaption>
                        <h2>{{type.name}}</h2>
                        <p>
                            Sometimes one should just look at things and think about things without doing things.
                        </p>
                    </figcaption>
                </figure>
            </router-link>
        </li>
    </ul>
</template>

<style lang="scss">
    @import 'list.scss';
</style>

<script>

    export default {
        data() {
            return {
                destinations: {
                    caribbean: [
                        {
                            id: 'habana',
                            name: 'Habana',
                            image: 'https://www.captainmorgans.com/wp-content/uploads/2018/11/caribbean-icon.png'
                        },
                        {
                            id: 'varadero',
                            name: 'Varadero',
                            image: 'https://www.captainmorgans.com/wp-content/uploads/2018/11/caribbean-icon.png'
                        },

                    ],
                    europe: [
                        {
                            id: 'barcelona',
                            name: 'Barcelona',
                            image: 'https://static.hosteltur.com/app/public/uploads/img/articles/2017/12/01/L_5b150f23729cb_shutterstock_552368572.jpg'
                        },
                        {
                            id: 'madrid',
                            name: 'Madrid',
                            image: 'https://s03.s3c.es/imag/_v0/770x420/f/7/a/700x420_madrid-centro-coches-dreamstime.jpg'
                        },
                        {
                            id: 'berlin',
                            name: 'Berlín',
                            image: 'https://www.visitberlin.de/system/files/styles/visitberlin_teaser_single_visitberlin_mobile_1x/private/image/Fernsehturm_iStock_c_bluejayphoto_DL_PPT_0.jpg?h=cbc5e7bf&itok=MfN7PE-c'
                        },
                        {
                            id: 'venecia',
                            name: 'Venecia',
                            image: 'https://www.losapuntesdelviajero.com/wp-content/uploads/2012/05/Puente-de-Rialto-Puentes-de-Venecia-e1560352594850.jpg'
                        }
                    ]
                },
            }
        },
        computed: {
            data() {
                return this.destinations[this.$route.query.type];
            },
            adults() {
                return this.$route.query.adults;
            },
            child() {
                return this.$route.query.child;
            },
            babies() {
                return this.$route.query.babies;
            },
            destination() {
                return this.$route.query.destination;
            }
        }
    };
</script>
