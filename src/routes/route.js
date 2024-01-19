import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);



import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Profile from '@/pages/Profile';
import Orders from '@/pages/Orders';
import Store from '@/pages/Store';
import Cart from '@/pages/Cart';
import Addresses from '@/pages/Addresses';
import Login from '@/pages/Login';
import Register from '@/pages/Register'


const routes = [
{
    path:'/', 
    component:Login

},
{
    path:'/home',
    component:Home
},
{
    path:'/register',
    component:Register
},
{
    path:'/search',
    component:Search

},
{
    path:'/profile',
    component:Profile

},
{
    path:'/orders',
    component:Orders

},

{
    path:'/store/:id',
    component:Store

},

{
    path:'/cart',
    component:Cart

},
{
    path:'/addresses',
    component:Addresses

},

];

const router = new VueRouter({
    routes,
    mode:'hash'
});

export default router;