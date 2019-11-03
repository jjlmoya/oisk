<template>
    <ul class="list list--country">
        <li v-for="type in data" class="list__element">
            <router-link
                    :to="'/producto?destination=' + type.id+ '&type=' + type + '&adults=' + adults + '&child=' + child + '&babies='+babies">
                <figure class="list__figure">
                    <img v-bind:src=type.image v-bind:alt=type.id class=""/>
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

    import destination from "../../data/destination";

    export default {
        data() {
            return destination;
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
            },
            type() {
                return this.$route.query.type;
            }
        }
    };
</script>
