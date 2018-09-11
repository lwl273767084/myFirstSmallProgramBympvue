<template>
    <div class="my">
        <div class="myinfo">
            <img @click="toLogin" :src="userInfo.avatarUrl" alt="头像">
            <div @click="toLogin">
                <p>{{userInfo.nickName}}</p>
                <p v-if="userInfo.nickname">点击登录</p>
                <p v-else>微信用户</p>
            </div>
        </div>
        <div class="iconlist">
            <div v-for="(item, index) in listData" :key="index">
                <span class="iconfont" :class="item.icon"></span>
                <span>{{item.title}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { login, toLogin } from "../../utils";
export default {
    onShow() {
        wx.getSetting({
            success: res => {
                // 用户信息授权
                if (res.authSetting["scope.userInfo"]) {
                    if (login()) {
                        this.userInfo = login();
                        console.log(this.userInfo.avatarUrl);
                        // this.avator = this.userInfo.avatarUrl;
                    }
                } else {
                    wx.navigateTo({
                        url:'/pages/login/main'
                    });
                }
            }
        });
    },
    data() {
        return {
            userInfo: {
                nickName: "",
                avatarUrl: ""
            },
            listData: [
                {
                    title: "我的订单",
                    icon: "icon-unie64a",
                    url: ""
                },
                {
                    title: "优惠券",
                    icon: "icon-youhuiquan",
                    url: ""
                },
                {
                    title: "我的足迹",
                    icon: "icon-zuji",
                    url: ""
                },
                {
                    title: "我的收藏",
                    icon: "icon-shoucang",
                    url: "/pages/collectlist/main"
                },
                {
                    title: "地址管理",
                    icon: "icon-dizhiguanli",
                    url: "/pages/address/main"
                },
                {
                    title: "联系客服",
                    icon: "icon-lianxikefu",
                    url: ""
                },
                {
                    title: "帮助中心",
                    icon: "icon-bangzhuzhongxin",
                    url: ""
                },
                {
                    title: "意见反馈",
                    icon: "icon-yijianfankui",
                    url: "/pages/feedback/main"
                }
            ]
        };
    },
    methods: {
        /**
         * 跳转登陆
         */
        toLogin() {
            if (!this.userInfo.avatarUrl) {
                wx.navigateTo({
                    url: "/pages/login/main"
                });
            }
        }
    }
};
</script>
<style lang="scss" scoped>
@import "./style";
</style>

