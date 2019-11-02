<template>
    <a class="button button--default" href="/tipo-de-viaje">
        {{this.test}}
        <slot/>
    </a>
</template>

<style lang="scss">
    @import 'button.scss';
</style>

<script>

    export default {
        data() {
            return {
               test: ''
            }
        },
        mounted() {
            console.log(this.test);
        }
    };
</script>