import Loadable from 'react-loadable';

const Loading = ()=>null;

const About = Loadable({
    loader:()=>import("./About"),
    loading:Loading,
});
const MyAddress = Loadable({
    loader:()=>import("./MyAddress"),
    loading:Loading,
});
const MyBrowsing = Loadable({
    loader:()=>import("./MyBrowsing"),
    loading:Loading,
});
const MyCollect = Loadable({
    loader:()=>import("./MyCollect"),
    loading:Loading,
});
const MyOrder = Loadable({
    loader:()=>import("./MyOrder"),
    loading:Loading,
});
const MySetting = Loadable({
    loader:()=>import("./MySetting"),
    loading:Loading,
});

export {
    About,
    MyBrowsing,
    MyAddress,
    MyCollect,
    MyOrder,
    MySetting
}