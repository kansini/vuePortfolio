<template>
    <div class="portfolio">
        <div class="portfolio-filter">
            <div class="portfolio-filter-header">
                <div class="logo"></div>
            </div>
            <div class="portfolio-filter-content">
                <div class="portfolio-filter-inner">
                    <div class="baseFilter">
                        <div class="baseFilter-header active" :class="{isOpen:current > -1}" @click="current = -1">
                            <h1>All cases</h1>
                        </div>
                    </div>
                    <div class="baseFilter" v-for="(item,index) in filterData" :key="index">
                        <div class="baseFilter-header" :class="{opened:current === index}"
                             @click="openFilter(index)">
                            <h1>{{item.title}}</h1>
                            <div class="baseFilter-icon"></div>
                        </div>
                        <scroll-bar classes="scrollbar" ref="Scrollbar">
                            <ul class="baseFilter-list">
                                <li class="filter-list-item" v-for="listItem in item.listData">
                                    {{listItem.name}}
                                </li>
                            </ul>
                        </scroll-bar>
                    </div>
                </div>
            </div>

        </div>

        <div class="portfolio-list">
            <div class="portfolio-list-item" v-for="(item,index) in data" :key="index" @click="view(item.bg)">
                <div class="list-item-header">
                    <div class="list-item-type">{{item.type}}</div>
                    <div class="list-item-title">{{item.title}}</div>
                </div>
                <div class="list-item-container_overflow list-item-container" :style="{background: item.bg}">
                </div>
                <div class="list-item-img">
                    <img :src="'./img/item' + index + '.png'" alt="">
                </div>
                <div class="list-item-year">{{item.year}}</div>
                <div class="list-item-footer">{{item.tag}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import scrollBar from 'vue2-scrollbar'

    export default {
        name: "Portfolio",
        components: {scrollBar},
        props: {
            data: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        data() {
            return {
                opened: false,
                current: -1,
                currentHeight: 0,
                filterData: [
                    {
                        title: "Clients",
                        listData: [
                            {name: "Alexandria doors", path: '/'},
                            {name: "INCANTO", path: '/'},
                            {name: "Audi", path: '/'},
                            {name: "LiteBox", path: '/'},
                            {name: "Alexandria doors", path: '/'},
                            {name: "INCANTO", path: '/'},
                            {name: "Audi", path: '/'},
                            {name: "LiteBox", path: '/'}
                        ]
                    },
                    {
                        title: "Sphere",
                        listData: [
                            {name: "B2B", path: '/'},
                            {name: "Production", path: '/'},
                            {name: "Audi", path: '/'},
                            {name: "Constructing", path: '/'}
                        ]
                    },
                    {
                        title: "Service",
                        listData: [
                            {name: "Web development", path: '/'},
                            {name: "Design", path: '/'},
                            {name: "Mobile development", path: '/'},

                        ]
                    }]
            }
        },
        methods: {
            openFilter(index) {
                this.current = index
            },
            view(color) {
                this.$parent.isLoading = true
                this.$parent.bgColor = color
                // setTimeout(() => {
                //     this.$router.push('/works')
                // }, 1000)

            }
        }
    }
</script>

<style lang="scss" scoped>
    .portfolio {
        display: flex;
        justify-content: space-between;
        width: 100%;
        //padding-right: 64px;
        box-sizing: border-box;

        .portfolio-filter {
            width: calc(100% / 3);

            .portfolio-filter-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: 96px;
                padding: 0 40px;
                margin-bottom: 80px;
                box-sizing: border-box;
                transition: all ease .4s;

                .logo {
                    width: 96px;
                    height: 40px;
                    background: url("../assets/img/logo.svg") no-repeat center;
                    background-size: 100% auto;
                }
            }

            .portfolio-filter-content {
                width: 100%;
                padding: 0 40px;
                box-sizing: border-box;

                .portfolio-filter-inner {
                    width: 100%;
                    text-align: left;

                    .baseFilter {
                        &:not(:first-child) {
                            margin-top: 56px;

                            &:hover h1:before {
                                transform: scaleX(1);
                            }

                            h1 {
                                position: relative;

                                &::before {
                                    position: absolute;
                                    content: '';
                                    left: 0;
                                    bottom: 2px;
                                    width: 100%;
                                    height: 12px;
                                    border-radius: 8px;
                                    background: #eee;
                                    z-index: -1;
                                    transform: scaleX(0);
                                    transform-origin: left center;
                                    transition: all ease .6s;
                                }

                            }

                        }

                        .baseFilter-header {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            cursor: pointer;
                            transition: opacity ease .5s;

                            h1 {
                                font-size: 18px;
                                color: #000;
                                font-weight: bold;
                                padding: 0 12px;
                            }

                            .baseFilter-icon {
                                position: relative;
                                width: 12px;
                                height: 12px;

                                &::before {
                                    position: absolute;
                                    content: '';
                                    width: 100%;
                                    height: 4px;
                                    left: 0;
                                    top: 4px;
                                    background: #000;
                                    transition: all ease .6s;
                                }

                                &::after {
                                    position: absolute;
                                    content: '';
                                    width: 100%;
                                    height: 4px;
                                    left: 0;
                                    top: 4px;
                                    transform: rotate(90deg);
                                    background: #000;
                                    transition: all ease .6s;
                                }

                            }
                        }

                        .isOpen {
                            opacity: .6;
                            transition: opacity ease .5s;

                            &:hover {
                                opacity: .75;
                            }
                        }

                        .scrollbar {
                            width: 100%;
                            height: 0;
                            overflow: hidden;
                            transition: all ease .6s;
                        }

                        .baseFilter-list {
                            font-size: 14px;
                            padding-left: 24px;
                            margin-top: 12px;
                            box-sizing: border-box;
                            transition: height ease .4s;
                            overflow: scroll;

                            .filter-list-item {
                                padding: 8px 0;
                                color: rgba(0, 0, 0, .6);
                                transition: all ease .6s;
                                cursor: pointer;

                                &:hover {
                                    font-weight: 800;
                                    color: rgba(0, 0, 0, 1);
                                }
                            }

                        }

                        .opened {
                            .baseFilter-icon {
                                position: relative;

                                &::after {
                                    transform: rotate(180deg);
                                    transition: transform ease .8s;
                                }

                                &::before {
                                    opacity: 0;
                                    transition: opacity ease .4s;
                                }

                            }

                            h1:before {
                                transform: scaleX(1);
                            }
                        }

                        .opened + .scrollbar {
                            height: 240px;
                        }


                        .active {
                            h1 {
                                position: relative;

                                &::before {
                                    position: absolute;
                                    content: '';
                                    left: 0;
                                    bottom: 2px;
                                    width: 100%;
                                    height: 12px;
                                    border-radius: 8px;
                                    background: #fff0bd;
                                    z-index: -1;
                                }
                            }


                        }
                    }
                }
            }

        }

        .portfolio-list {
            //width: 100%;
            width: calc(100% - calc(100%) / 3);
            border-right: 1px solid #f1f1f1;
            border-bottom: 1px solid #f1f1f1;
            box-sizing: border-box;
            max-height: 100vh;
            overflow: scroll;

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

                    > div {
                        margin-bottom: 4px;
                    }
                }

                &:hover .list-item-year {
                    opacity: 1;
                    transform: translateY(-200px);
                    text-shadow: 2px 2px 0px rgba(255, 255, 255, .4), 4px 4px 0px rgba(255, 255, 255, .2), 6px 6px 0px rgba(255, 255, 255, .1);
                }

                &:hover .list-item-footer {
                    color: #fff;
                }

                &:hover .list-item-img {
                    width: 90%;
                    left: 5%;
                    top: 45%;
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
                        font-family: "Noto Sans S Chinese";
                        font-weight: 800;
                    }

                }

                .list-item-year {
                    font: 800 52px "Noto Sans S Chinese";
                    color: rgba(255, 255, 255, 1);
                    position: absolute;
                    bottom: 0px;
                    opacity: 0;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    z-index: 10;
                    text-shadow: 0px 0px 0px rgba(255, 255, 255, .4), 0px 0px 0px rgba(255, 255, 255, .2), 0px 0px 0px rgba(255, 255, 255, .1);
                    transform: translateY(0);
                    transition: transform .6s ease, opacity .4s ease, text-shadow 1.6s ease;

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

                .list-item-img {
                    position: absolute;
                    width: 80%;
                    left: 10%;
                    top: 42%;
                    z-index: 11;
                    transition: all ease .6s;

                    img {
                        width: 100%;
                    }
                }


            }
        }

    }

</style>
