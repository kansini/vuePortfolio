<template>
    <div class="page-loader" :style="{background:background}">
        <div class="loading"></div>
    </div>
</template>

<script>
    export default {
        name: "PageLoader",
        props: ['background']
    }
</script>

<style lang="scss" scoped>
    .page-loader {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        animation: loading linear .3s forwards;
        z-index: 9999;

        .loading {
            position: absolute;
            left: calc(50% - 40px);
            top: calc(50% - 40px);
            width: 80px;
            height: 80px;
            border-radius: 80px;
            box-shadow: 0 0 0 8px #fff;
        }
    }

    @keyframes loading {
        0% {
            width: 0;
        }
        100% {
            width: 100%;
        }

    }

</style>
