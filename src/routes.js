import{
        Home,
        Mall,
        Cart,
        Mine,
        Detail
} from "./Pages"
import{
        About,
        MyAddress,
        MyBrowsing,
        MyCollect,
        MyOrder,
        MySetting
    } from "./Pages/Mine/SubPage"
const routes= [{
        path:"/home",
        title:"首页",
        icon:"&#xe604;",
        component:Home
},{
        path:"/mall",
        title:"商城",
        icon:"&#xe603;",
        component:Mall
},{
        path:"/cart",
        title:"购物车",
        icon:"&#xe601;",
        component:Cart
},{
        path:"/mine",
        title:"我的",
        icon:"&#xe602;",
        component:Mine
},{
        path:"/detail/:id",
        component:Detail
},{
        path:"/MyOrder",
        // title:"我的订单",
        // icon:"&#xe602;",
        component:MyOrder
    },{
        path:"/MyAddress",
        // title:"我的收货地址",
        // icon:"&#xe603;",
        component:MyAddress
    },{
        path:"/MyBrowsing",
        // title:"浏览历史",
        // icon:"&#xe601;",
        component:MyBrowsing
    },{
        path:"/MyCollect",
        // title:"我的收藏",
        // icon:"&#xe602;",
        component:MyCollect
    },{
        path:"/MySetting",
        // title:"设置",
        // icon:"&#xe602;",
        component:MySetting
    },{
        path:"/About",
        // title:"关于",
        // icon:"&#xe604;",
        component:About
    }]

export default routes;