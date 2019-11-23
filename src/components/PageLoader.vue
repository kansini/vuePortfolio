<template>
    <div class="page-loader" :style="{background:background}">
        <transition name="fadeIn">
            <div class="loading" v-if="isLoading"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "PageLoader",
        props: ['background'],
        data() {
            return {
                isLoading: false
            }
        },
        mounted() {
            setTimeout(() => {
                this.isLoading = true
            }, 400)
        }
    }
</script>

<style lang="scss" scoped>
    .page-loader {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        transform-origin: left center;
        height: 100vh;
        animation: loading linear .4s forwards;
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
                animation: circle linear 1.2s infinite;

            }
        }
    }

    @keyframes loading {
        0% {
            width: 0;
        }
        70% {
            width: 50%;
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
