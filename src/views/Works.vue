<template>
    <div id="works">
        <div class="btn-close" @click="$router.push('/')"></div>
    </div>
</template>

<script>

    export default {
        name: "Works",
        components:{

        }
    }
</script>

<style lang="scss" scoped>
    #works {
        width: 100%;
        height: 100vh;
        background: $blue2;

        .btn-close {
            position: absolute;
            top: 0;
            right: 0;
            width: 64px;
            height: 64px;
            cursor: pointer;
            opacity: .7;
            transform: scale(.8);
            transition: all ease .5s;
            z-index: 999;

            &:hover {
                transform: scale(1);
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
