<template>
    <div class="passenger passenger--default">
        <div class="passenger__container">
            <div class="passenger__counter" v-on:click="toggleForm">
                {{this.total}} viajero{{this.total > 1 ? 's': ''}}
            </div>
            <Button
                    :url="'/tipo-de-viaje?adults=' + adults + '&child=' + child + '&babies='+babies"
                    :cta="'Empezar'">

            </Button>
        </div>
        <div :class="{'is-active': form }" class="passenger__form">
            <div class="passenger__range">
                <label>{{this.adults}} adulto/s</label>
                <input v-model="adults" type="range" name="adults" max="9" min="1"/>
            </div>
            <div class="passenger__range">
                <label>{{this.child}} niños/s</label>
                <input v-model="child" type="range" name="child" max="4" min="0"/>
            </div>
            <div class="passenger__range">
                <label>{{this.babies}} bebé/s</label>
                <input v-model="babies" type="range" name="babies" max="2" min="0"/>
            </div>
            <span v-on:click="toggleForm" class="passenger__form__accept">Aceptar</span>
        </div>
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
        methods: {
            toggleForm() {
                this.form = !this.form;
            },
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            }
        },

        data() {
            return {
                adults: 2,
                child: 0,
                babies: 0,
                form: false,
                total: 2

            }
        },
        mounted() {
            this.total = parseInt(this.adults) + parseInt(this.child) + parseInt(this.babies);
        },
        updated() {
            this.total = parseInt(this.adults) + parseInt(this.child) + parseInt(this.babies);
        },

    };
</script>
