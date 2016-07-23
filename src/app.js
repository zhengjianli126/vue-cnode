import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
var router = new VueRouter({
    history: true
})

router.map({
    '/': { //首页
        component: (resolve) => {
            require(['./component/indexList.vue'], resolve)
        }
    },
    '/topic/create': { //创建主题
        component: (resolve) => {
            require(['./component/topicCreate.vue'], resolve)
        }
    },
    '/topic/:id': { //主题详情
        component: (resolve) => {
            require(['./component/topic.vue'], resolve)
        }
    },
    'my/messages': { //我的消息
        component: (resolve) => {
            require(['./component/myMessages.vue'], resolve)
        }
    },
    'user/:loginname': { //用户信息
        component: (resolve) => {
            require(['./component/userView.vue'], resolve)
        }
    },
    '/signin': { //登录
        component: (resolve) => {
            require(['./component/signin.vue'], resolve)
        }
    },
    '/signout': { //退出
        component: (resolve) => {
            require(['./component/signout.vue'], resolve)
        }
    }
})

var App = Vue.extend({})

router.start(App, '#app')