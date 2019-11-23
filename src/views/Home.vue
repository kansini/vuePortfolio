<template>
    <div class="home">
        <pageLoader v-if="isLoading" :background="bgColor"/>
        <div class="btn-close" @click="isLoading = !isLoading"></div>
        <portfolio :data="portfolio"/>
    </div>
</template>

<script>
    import portfolio from "@/components/Portfolio"
    import pageLoader from '@/components/PageLoader'

    export default {
        name: 'home',
        components: {
            portfolio,
            pageLoader
        },
        data() {
            return {
                isLoading: false,
                bgColor:"",
                portfolio: [
                    {
                        type: "Services",
                        title: "浦东新区大调研工作智能化推进平台",
                        year: 2019,
                        tag: "Performance marketing",
                        bg: "#72C4FE"
                    },
                    {
                        type: "Online store",
                        title: "黄浦区社区管理",
                        year: 2019,
                        tag: "Performance marketing",
                        bg: "#86D8FF"
                    },
                    {
                        type: "Services",
                        title: "Panasonic Eplaza",
                        year: 2019,
                        tag: "Performance marketing",
                        bg: "#8FE1EE"
                    },
                    {
                        type: "Services",
                        title: "Panasonic Eplaza",
                        year: 2018,
                        tag: "Performance marketing",
                        bg: "#FBDB5C"
                    },
                    {
                        type: "B2B",
                        title: "Panasonic Eplaza",
                        year: 2018,
                        tag: "Performance marketing",
                        bg: "#FFAFA7"
                    },
                    {
                        type: "B2B",
                        title: "Panasonic Eplaza",
                        year: 2018,
                        tag: "Performance marketing",
                        bg: "#FF95A1"
                    },
                    {
                        type: "B2B",
                        title: "Panasonic Eplaza",
                        year: 2017,
                        tag: "Performance marketing",
                        bg: "#EBD6A9"
                    },
                    {
                        type: "Online store",
                        title: "Panasonic Eplaza",
                        year: 2017,
                        tag: "Performance marketing",
                        bg: "#323B4E"
                    },
                    {
                        type: "Multi Media",
                        title: "Panasonic Eplaza",
                        year: 2017,
                        tag: "Performance marketing",
                        bg: "#FF9CA6"
                    },
                    {
                        type: "Online store",
                        title: "Panasonic Eplaza",
                        year: 2017,
                        tag: "Performance marketing",
                        bg: "#EFD7B0"
                    },
                    {
                        type: "Online store",
                        title: "Panasonic Eplaza",
                        year: 2017,
                        tag: "Performance marketing",
                        bg: "#DCC0AA"
                    },
                    {
                        type: "Online store",
                        title: "Panasonic Eplaza",
                        year: 2017,
                        tag: "Performance marketing",
                        bg: "#FFA1A1"
                    }
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .home {
        .btn-close {
            position: absolute;
            top: 0;
            right: 0;
            width: 64px;
            height: 64px;
            cursor: pointer;
            opacity: .85;
            transform: scale(.55);
            transition: all ease .5s;
            z-index: 9999;

            &:hover {
                transform: scale(.65) rotate(90deg);
                opacity: 1;
            }

            &::before,
            &::after {
                position: absolute;
                left: 16px;
                top: 31px;
                content: '';
                width: 32px;
                height: 2px;
                background: #fff;
            }

            &::before {
                transform: rotate(45deg);
            }

            &::after {
                transform: rotate(-45deg);
            }

        }

    }
</style>
