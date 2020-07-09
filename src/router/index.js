import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            component: () => import('@/App.vue')
        },{
            path:'/ours',
            component: () => import('@/pages/Ours')
        },{
            path:'/file',
            component: () => import('@/pages/File')
        },{
            path:'/fire',
            component: () => import('@/pages/Fire'),
            children:[
                {
                    path:'/fire/a',
                    component : () => import('../pages/Fire/a.vue')
                }, {
                    path:'/fire/b/:id',
                    component : () => import('../pages/Fire/b.vue')
                }
            ]
        },{
            redirect: '/ours',
            path: '/'
        }
    ]
})