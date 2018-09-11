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
        <div class="brand">
            <div class="head">品牌制造商直供</div>
            <div class="content">
                <div v-for="(item,index) in brand" :key="index">
                    <div>
                        <p>{{item.name}}</p>
                        <p>{{item.floor_price}}元起</p>
                    </div>
                    <img :src="item.new_pic_url" :alt="item.name">
                </div>
            </div>
        </div>
        <div class="newgoods">
            <div class="newgoods-top">
                <div class="top">
                    <p>新品首发</p>
                    <p>查看全部</p>
                </div>
            </div>
            <div class="list">
                <ul>
                    <scroll-view class="scroll-view" :scroll-x="true">
                        <li @click="goodsDetail(item.id)" v-for="(item, index) in newGoods" :key="index">
                            <img :src="item.list_pic_url" :alt="item.name">
                            <p>{{item.name}}</p>
                            <p>{{item.goods_brief}}</p>
                            <p>￥{{item.retail_price}}</p>
                        </li>
                    </scroll-view>
                </ul>
            </div>
        </div>
        <div class="newgoods hotgoods">
            <div class="newgoods-top">
                <div class="top">
                    <p>人气推荐
                        <span></span>好物精选</p>
                    <p>查看全部</p>
                </div>
            </div>
            <div class="list">
                <ul>
                    <scroll-view class="scroll-view" :scroll-x="true">
                        <li v-for="(item, index) in hotGoods" :key="index">
                            <img :src="item.list_pic_url" alt="">
                            <p>{{item.name}}</p>
                            <p>{{item.goods_brief}}</p>
                            <p>￥{{item.retail_price}}</p>
                        </li>
                    </scroll-view>
                </ul>
            </div>
        </div>
        <div class="topicList">
            <div class="topicList-top">
                专题精选
                <span class="icon"></span>
            </div>
            <div class="list">
                <ul>
                    <scroll-view class="scroll-view" :scroll-x='true'>
                        <li v-for="(item,index) in topicList" :key="index">
                            <img :src="item.item_pic_url">
                            <div class="btom">
                                <div>
                                    <p>{{item.title}}</p>
                                    <p>{{item.subtitle}}</p>
                                </div>
                                <div>
                                    <p>{{item.price_info}}元起</p>
                                </div>
                            </div>
                        </li>
                    </scroll-view>
                </ul>
            </div>
        </div>
        <div class="newcategory">
            <div class="list" v-for="(item,index) in newCategoryList" :key="index">
                <div class="head">{{item.name}}好物</div>
                <div class="sublist">
                    <div v-for="(subitem,subindex) in item.goodsList" :key="subindex">
                        <img :src="subitem.list_pic_url">
                        <p>{{subitem.name}}</p>
                        <p>￥{{subitem.retail_price}}</p>
                    </div>
                    <div>
                        <div class="last">
                            <p>{{item.name}}好物</p>
                            <span class="icon"></span>
                        </div>
                    </div>
                </div>
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
            channel: [],
            brand: [],
            newGoods: [],
            hotGoods: [],
            topicList: [],
            newCategoryList: []
        };
    },
    mounted() {
        this.getData();
        this.getChannel();
        this.getBrand();
        this.getNewGoods();
        this.getHotGoods();
        this.getTopicList();
        this.getNewCategoryList();
    },
    methods: {
        /**
         * 获取轮播图
         */
        async getData() {
            const data = await post("banner");
            this.banner = data.data.banner;
        },
        /**
         * 获取快捷入口
         */
        async getChannel() {
            const data = await post("channel");
            this.channel = data.data.channel;
        },
        /**
         * 获取品牌直供
         */
        async getBrand() {
            const data = await post("brand");
            this.brand = data.data.brandList;
        },
        /**
         * 获取新品首发
         */
        async getNewGoods() {
            const data = await post("newGoods");
            this.newGoods = data.data.newGoods;
        },
        /**
         * 获取好物精选
         */
        async getHotGoods() {
            const data = await post("hotGoods");
            this.hotGoods = data.data.hotGoods;
        },
        /**
         * 获取专题精选
         */
        async getTopicList() {
            const data = await post("topicList");
            this.topicList = data.data.topicList;
        },
        /**
         * 获取商品分类列表
         */
        async getNewCategoryList() {
            const data = await post("newCategoryList");
            this.newCategoryList = data.data.newCategoryList;
        }
    },
    created() {}
};
</script>
<style lang='scss' scoped>
@import "./style.scss";
</style>


