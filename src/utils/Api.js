import Axios from './services'
const urlServer = {
    getHome: (id)=>`/api/tab/${id}?start=0`,
    getCategory: '/api/tabs',
    getCategoryLIstById: (id)=>`/api/tab/${id}`,
    getDetail: '/api/detail',
    getSeach: '/api/search',
    
}


const getHome= (id) => Axios.getInstance().get(urlServer.getHome(id))
const getCategory = () => Axios.getInstance().get(urlServer.getCategory)
const getCategoryLIstById = (id) => Axios.getInstance().get(urlServer.getCategoryLIstById(id))
const getDetail = (id) => Axios.getInstance().get(urlServer.getDetail, {params:{id}})
const getSeach = (params) => Axios.getInstance().get(urlServer.getSeach, {params})


export default {
    getHome,
    getCategory,
    getCategoryLIstById,
    getDetail,
    getSeach
    
}