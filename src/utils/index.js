function formatNumber(n) {
    const str = n.toString()
    return str[1] ? str : `0${str}`
}

export function formatTime(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const t1 = [year, month, day].map(formatNumber).join('/')
    const t2 = [hour, minute, second].map(formatNumber).join(':')

    return `${t1} ${t2}`
}

const baseHost = 'https://www.easy-mock.com/mock/5b8cea0cb4f2405353a0409d/mpvueShop'
const baseUrl = {
    banner: baseHost + '/index/banner', // 首页轮播图
    brand: baseHost + '/index/brandList', // 首页展示商品
    channel: baseHost + '/index/channel', // 快捷入口
    newGoods: baseHost + '/index/newGoods', // 新品首发
    hotGoods: baseHost + '/index/hotGoods', // 好物精选
    topicList: baseHost + '/index/topicList', // 专题精选
    newCategoryList: baseHost + '/index/newCategoryList', // 好物精选
}

//请求封装
function request(url, method, data, header = {}) {
    wx.showLoading({
        title: '加载中' //数据请求前loading
    })
    return new Promise((resolve, reject) => {
        wx.request({
            url: baseUrl[url], //仅为示例，并非真实的接口地址
            method: method,
            data: data,
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                wx.hideLoading();
                console.log(res);
                resolve(res.data)
            },
            fail: function (error) {
                wx.hideLoading();
                reject(false)
            },
            complete: function () {
                wx.hideLoading();
            }
        })
    })
}
export function get(url, data) {
    return request(url, 'GET', data)
}
export function post(url, data) {
    return request(url, 'POST', data)
}

export function toLogin() {
    const userInfo = wx.getStorageSync('userInfo');
    if (!userInfo) {
        wx.navigateTo({
            url: "/pages/login/main"
        });
    } else {
        return true;
    }
}

export function login() {
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
        return userInfo;
    }
}

export default {
    formatNumber,
    formatTime,
    post,
    get
}
