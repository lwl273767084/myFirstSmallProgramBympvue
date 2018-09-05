<template>
    <div class="index">
        <div class="swiper">
            <swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" circular="true" duration="500">
                <block v-for="(item, index) in banner " :key="index">
                    <swiper-item class="swiper-item">
                        <image :src="item.image_url" class="slide-image" />
                    </swiper-item>
                </block>
            </swiper>
        </div>
        <div class="channel">
            <div v-for="(item,index) in channel" :key="index">
                <img :src="item.icon_url" :alt="item.name">
                <p>{{item.name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { post } from "../../utils";
export default {
    data() {
        return {
            banner: [],
            channel:[]
        };
    },
    mounted() {
        this.getData()
        this.getChannel()
    },
    methods: {
        /**
         * 获取轮播图
         */
        async getData() {
            const data = await post("banner")
            this.banner = data.data.banner
        },
        /**
         * 获取快捷入口
         */
        async getChannel(){
            const data = await post('channel')
            this.channel = data.data.channel
        }
    },
    created() {}
};
</script>
<style lang='scss' scoped>
@import "./style.scss";
</style>


