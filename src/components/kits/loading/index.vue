<template>
    <transition name="fadeIn">
        <div style="height: 100%">
            <div id="loading">
                <animation :path="path" id="loading-img" v-if="type"/>
                <animation :path="customPath" id="loading-img" v-else/>
                <div class="loading-text" v-if="loadingText">{{loadingText}}</div>
            </div>
            <div class="mask" v-if="background" :style="{background: background}"></div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "loading",
        props: {
            type: {
                type: String,
                default: null
            },
            customPath: {
                type: String,
                default: null
            },
            loadingText: {
                type: String,
                default: null
            },
            // mask: {
            //     type: Boolean,
            //     default: false
            // },
            background: {
                type: String,
                default: undefined
            }
        },
        computed: {
            path() {
                if (this.type == "book") {

                    return "./ani/loading-book.json"
                }
                if (this.type == "brochure") {
                    return "./ani/loading-brochure.json"
                }
                if (this.type == "bookmark") {

                    return "./ani/bookmark.json"
                }
                if (this.type == "image") {

                    return "./ani/image-loading.json"
                }
                if (this.type == 'reading') {
                    return "./ani/successfully-added.json"
                }
                if (this.type == "analysis") {
                    return "./ani/data-analysis.json"
                }
                if (this.type == 'van') {
                    return "./ani/van.json"
                }
                if (this.type == 'gift') {
                    return "./ani/gift.json"
                }
                if (this.type == 'skeleton') {
                    return "./ani/skeleton.json"
                }
                if (this.type == 'circle01') {
                    return "./ani/circle01.json"
                }
                if (this.type == 'infinite') {
                    return "./ani/infinite.json"
                }
                if (this.type == 'circle02') {
                    return "./ani/circle2.json"
                }




            }
        }
    }
</script>

<style lang="scss" scoped>
    #loading {
        position: absolute;
        left: calc(50% - 120px);
        top: calc(50% - 140px);
        z-index: 999;

        .loading-text {
            width: 100%;
            // background: #323B4E;
            color: #fff;
            font-size: 14px;
            margin-top: -48px;

        }
    }

    .mask {
        width: 100%;
        height: 100%;
        background: #fff;
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

</style>
