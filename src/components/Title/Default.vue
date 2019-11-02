<template>
    <h1 class="heading heading--h1">{{this.title}}</h1>
</template>

<style lang="scss">
    @import 'title.scss';
</style>

<script>

    export default {
        props: ['title'],
        mounted() {

        }
    };
</script>