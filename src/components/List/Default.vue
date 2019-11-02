<template>

    <ul class="list list--default">
        <li v-for="type in travelTypes" class="list__element">
            <a href="/destino">
                <img v-bind:src=type.icon >
                <h2>{{type.name}}</h2>
            </a>
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
                travelTypes: [
                    {
                        id: 'caribbean',
                        name: 'Caribe',
                        icon: 'https://www.captainmorgans.com/wp-content/uploads/2018/11/caribbean-icon.png'
                    },
                    {
                        id: 'europe',
                        name: 'Europa',
                        icon: 'https://www.pngrepo.com/png/267195/170/leaning-tower-of-pisa-italy.png'
                    },
                    {
                        id: 'grandes-viajes',
                        name: 'Gran viaje',
                        icon: 'http://rsii.in/wp-content/themes/rsinsurance/img/travel-icon.png'
                    },
                    {
                        id: 'espana',
                        name: 'Cerca de mi',
                        icon: 'https://img.icons8.com/plasticine/2x/address.png'
                    }
                ],
                doThings: () => {
                    console.log('doThings')
                }
            }
        },
        mounted() {

        }
    };
</script>