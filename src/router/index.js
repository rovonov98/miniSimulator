import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home')

Vue.use(VueRouter)


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home'
        }
    ]
})