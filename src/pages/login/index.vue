<template>
    <div class="login">
        <div class="logo"></div>
        <button class="login-btn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">微信登录</button>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        /**
         * 登陆（暂时微信登陆）
         */
        doLogin() {
            wx.login({
                success: res => {
                    wx.getUserInfo({
                        success: info => {
                            console.log(info.userInfo);
                            wx.setStorageSync("userInfo", info.userInfo);
                            wx.navigateBack({});
                        }
                    });
                }
            });
            // wx.getSetting({
            //     success(res) {
            //         if (!res.authSetting["scope.record"]) {
            //             wx.authorize({
            //                 scope: "scope.userInfo",
            //                 success(info) {
            //                     console.log(info);
            //                 }
            //             });
            //         }
            //     }
            // });
        }
    }
};
</script>
<style lang="scss" scoped>
@import "./style";
</style>

