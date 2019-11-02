<template>
    <div class="passenger passenger--default">
        <div class="passenger__counter">
        {{this.adults + this.child + this.babies}} viajero{{this.adults + this.child + this.babies > 1 ? 's': ''}}
        </div>
        <Button v-bind:test="adults">Empezar</Button>
    </div>
</template>

<style lang="scss">
    @import 'passenger.scss';
</style>

<script>
    import Button from '@/components/Button/Default.vue';

    export default {
        components: {
            Button
        },
        data() {
            return {
                adults: 2,
                child: 0,
                babies: 0
            }
        },
        mounted() {

        }
    };
</script>