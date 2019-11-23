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
            left: calc(50% - 32px);
            top: calc(50% - 32px);
            width: 64px;
            height: 64px;
            border-radius: 80px;
            box-shadow: 0 0 0 6px #fff;

            &::before {
                position: absolute;
                content: '';
                left: 20px;
                top: 20px;
                width: 24px;
                height: 24px;
                border-radius: 80px;
                box-shadow: 0 0 0 4px #fff;
                animation: circle 1.2s linear infinite;

            }
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

    @keyframes circle {
        0% {
            transform: scale(0);
        }
        80% {
            transform: scale(3.2);
        }
        100% {
            transform: scale(2);
        }


    }

</style>
