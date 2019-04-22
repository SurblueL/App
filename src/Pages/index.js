import Loadable from 'react-loadable';

const Loading = ()=>null;

const Home = Loadable({
    loader:()=>import("./Home"),
    loading:Loading,
});
const Cart = Loadable({
    loader:()=>import("./Cart"),
    loading:Loading,
});
const Mall = Loadable({
    loader:()=>import("./Mall"),
    loading:Loading,
});
const Mine = Loadable({
    loader:()=>import("./Mine"),
    loading:Loading,
});
const Detail = Loadable({
    loader:()=>import("./Detail"),
    loading:Loading,
});

export {
    Home,
    Mall,
    Cart,
    Mine,
    Detail
}