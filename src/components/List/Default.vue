<template>

    <ul class="list list--default">
        <li v-for="type in travelTypes" class="list__element">
            <router-link :to="'/destino?type=' + type.id+ '&adults=' + adults + '&child=' + child + '&babies='+babies">
                <img v-bind:src=type.icon>
                <h2>{{type.name}}</h2>
            </router-link>
        </li>
    </ul>
</template>

<style lang="scss">
    @import 'list.scss';
</style>

<script>

    import travelTypes from "../../data/travelTypes";

    export default {
        data() {
            return {
                travelTypes: travelTypes,
                doThings: () => {
                    console.log('doThings')
                },

            }
        },
        computed: {
            adults() {
                console.log(this.$route.query)
                return this.$route.query.adults;
            },
            child() {
                return this.$route.query.child
            },
            babies() {
                return this.$route.query.babies
            }
        }
    };
</script>
