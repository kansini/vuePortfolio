<template>
    <div class="portfolio">
        <div class="portfolio-filter"></div>
        <div class="portfolio-list">
            <router-link to="/" tag="div" class="portfolio-list-item" v-for="(item,index) in portfolio">
                <div class="list-item-header">
                    <div class="list-item-type">Online store</div>
                    <div class="list-item-title"><span>Panasonic Eplaza</span></div>
                </div>
                <div class="list-item-container_overflow list-item-container" :style="{background: item.bg}">

                </div>
                <div class="list-item-year">{{item.year}}</div>
                <div class="list-item-footer">Performance marketing</div>
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
                        year: 2017,
                        bg: "#72C4FE"
                    },
                    {
                        year: 2017,
                        bg: "#86D8FF"
                    },
                    {
                        year: 2018,
                        bg: "#8FE1EE"
                    },
                    {
                        year: 2018,
                        bg: "#FBDB5C"
                    },
                    {
                        year: 2018,
                        bg: "#FFAFA7"
                    },
                    {
                        year: 2019,
                        bg: "#FF95A1"
                    },
                    {
                        year: 2019,
                        bg: "#EBD6A9"
                    },
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
                    transform: translateY(16px);
                }

                &:hover .list-item-year {
                    opacity: 1;
                    transform: translateY(-80px);
                }

                &:hover .list-item-footer {
                    color: #fff;
                }

                .list-item-header {
                    position: absolute;
                    transform: translateY(80px);
                    width: 100%;
                    text-align: center;
                    color: #fff;
                    z-index: 999;
                    transition: transform ease .6s;

                    .list-item-type {
                        font-size: 14px;
                    }

                    .list-item-title {
                        font-size: 28px;
                        font-weight: bold;
                    }

                }

                .list-item-year {
                    font: 900 56px Gilroy, sans-serif;
                    color: #fff;
                    position: absolute;
                    bottom: 64px;
                    opacity: 0;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    z-index: 10;
                    transform: translateY(0);
                    transition: transform .4s ease, opacity .6s ease;

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
                    clip-path: circle(38% at 50% 42%);
                    transition: clip-path .6s ease;
                    z-index: 2;
                }

                .list-item-container {
                    width: 100%;
                    padding-top: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }

            }
        }

    }

</style>
