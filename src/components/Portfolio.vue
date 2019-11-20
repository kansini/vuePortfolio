<template>
    <div class="portfolio">
        <div class="portfolio-filter"></div>
        <div class="portfolio-list">
            <router-link to="/" tag="div" class="portfolio-list-item" v-for="(item,index) in portfolio" :key="index">
                <div class="list-item-header">
                    <div class="list-item-type">{{item.type}}</div>
                    <div class="list-item-title">{{item.title}}</div>
                </div>
                <div class="list-item-container_overflow list-item-container" :style="{background: item.bg}">

                </div>
                <div class="list-item-year">{{item.year}}</div>
                <div class="list-item-footer">{{item.tag}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Portfolio",
        data() {
            return {
                portfolio: [
                    {
                        type: "Services",
                        title:"浦东新区大调研工作智能化推进平台",
                        year: 2017,
                        tag:"Performance marketing",
                        bg: "#72C4FE"
                    },
                    {
                        type: "Online store",
                        title:"黄浦区社区管理",
                        year: 2017,
                        tag:"Performance marketing",
                        bg: "#86D8FF"
                    },
                    {
                        type: "Services",
                        title:"Panasonic Eplaza",
                        year: 2018,
                        tag:"Performance marketing",
                        bg: "#8FE1EE"
                    },
                    {
                        type: "Services",
                        title:"Panasonic Eplaza",
                        year: 2018,
                        tag:"Performance marketing",
                        bg: "#FBDB5C"
                    },
                    {
                        type: "B2B",
                        title:"Panasonic Eplaza",
                        year: 2018,
                        tag:"Performance marketing",
                        bg: "#FFAFA7"
                    },
                    {
                        type: "B2B",
                        title:"Panasonic Eplaza",
                        year: 2019,
                        tag:"Performance marketing",
                        bg: "#FF95A1"
                    },
                    {
                        type: "B2B",
                        title:"Panasonic Eplaza",
                        year: 2019,
                        tag:"Performance marketing",
                        bg: "#EBD6A9"
                    },
                    {
                        type: "Online store",
                        title:"Panasonic Eplaza",
                        year: 2019,
                        tag:"Performance marketing",
                        bg: "#323B4E"
                    },
                    {
                        type: "Multi Media",
                        title:"Panasonic Eplaza",
                        year: 2019,
                        tag:"Performance marketing",
                        bg: "#FF9CA6"
                    },
                    {
                        type: "Online store",
                        title:"Panasonic Eplaza",
                        year: 2019,
                        tag:"Performance marketing",
                        bg: "#EFD7B0"
                    },
                    {
                        type: "Online store",
                        title:"Panasonic Eplaza",
                        year: 2019,
                        tag:"Performance marketing",
                        bg: "#DCC0AA"
                    },
                    {
                        type: "Online store",
                        title:"Panasonic Eplaza",
                        year: 2019,
                        tag:"Performance marketing",
                        bg: "#FFA1A1"
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .portfolio {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-right: 64px;
        box-sizing: border-box;

        .portfolio-filter {
            width: calc(100% / 3);
        }

        .portfolio-list {
            //width: 100%;
            width: calc(100% - calc(100%) / 3);
            border-right: 1px solid #f1f1f1;
            border-bottom: 1px solid #f1f1f1;
            box-sizing: border-box;

            &::after {
                display: table;
                content: '';
                clear: both;
            }

            .portfolio-list-item {
                position: relative;
                float: left;
                width: calc(100% / 3);
                border-top: 1px solid #f1f1f1;
                border-left: 1px solid #f1f1f1;
                box-sizing: border-box;
                cursor: pointer;

                &:hover .list-item-container_overflow {
                    clip-path: circle(150% at 100% 100%);
                }

                &:hover .list-item-header {
                    transform: translateY(24px);

                    > div {
                        margin-bottom: 4px;
                    }
                }

                &:hover .list-item-year {
                    opacity: 1;
                    transform: translateY(-120px);
                }

                &:hover .list-item-footer {
                    color: #fff;
                }

                .list-item-header {
                    position: absolute;
                    transform: translateY(64px);
                    width: 100%;
                    text-align: center;
                    color: #fff;
                    z-index: 999;
                    transition: transform ease .6s;

                    > div {
                        margin-bottom: 8px;
                        transition: all ease .8s;
                    }

                    .list-item-type {
                        font-size: 14px;
                    }

                    .list-item-title {
                        padding: 0 56px;
                        box-sizing: border-box;
                        font-size: 20px;
                        font-weight: bold;
                    }

                }

                .list-item-year {
                    font: 900 56px Gilroy, sans-serif;
                    color: #fff;
                    position: absolute;
                    bottom: 0px;
                    opacity: 0;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    z-index: 10;
                    transform: translateY(0);
                    transition: transform .6s ease, opacity .4s ease;

                }

                .list-item-footer {
                    width: 100%;
                    text-align: center;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    height: 48px;
                    line-height: 48px;
                    font-size: 14px;
                    color: #7b7575;
                    z-index: 999;
                    transition: all .2s ease;
                }


                .list-item-container_overflow {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    clip-path: circle(36% at 50% 42%);
                    transition: clip-path .6s ease;
                    z-index: 2;
                }

                .list-item-container {
                    width: 100%;
                    padding-top: 120%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }

            }
        }

    }

</style>
