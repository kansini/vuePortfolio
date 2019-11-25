<template>
    <div class="page-loader" :style="{background:background}">
        <div class="works-nav">
            <div class="btn-next"></div>
            <div class="btn-pre"></div>
        </div>
        <transition name="fadeIn">
            <animation path="./ani/loading-book.json" renderer="svg" id="loading" v-show="isLoading"/>
            <!--            <div class="loading" v-show="isLoading"></div>-->
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
            }, 600);
            // setTimeout(() => {
            //     this.isLoading = false
            // }, 4000)

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
        animation: loading linear .5s forwards;
        z-index: 9999;

        .works-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 24px;
            border: 2px solid rgba(255, 255, 255, .85);
            border-radius: 35px;
            box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, .1);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 40px;
            height: 88px;
            z-index: 9999;

            [class^="btn-"] {
                width: 40px;
                height: 40px;
                cursor: pointer;
                opacity: .6;
                transition: all ease .4s;

                &:hover {
                    opacity: 1;
                    transform: scale(1.2);
                }
            }

            .btn-next {
                background: url("../assets/img/ico-next.svg") no-repeat center;
                background-size: 6px;
            }

            .btn-pre {
                background: url("../assets/img/ico-pre.svg") no-repeat center;
                background-size: 6px;
            }


        }

        #loading {
            position: absolute;
            left: calc(50% - 120px);
            top: calc(50% - 140px);
        }

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
        60% {
            width: 30%;
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
