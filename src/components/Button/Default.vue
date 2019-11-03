<template>

    <router-link :to="url">
        <a class="button button--default">
            {{this.cta}}
        </a>
    </router-link>

</template>

<style lang="scss">
    @import 'button.scss';
</style>

<script>
    export default {
        props: ['url', 'cta'],
    };
</script>
