import Axios from './services'
const urlServer = {
    getHome: (id)=>`/api/tab/${id}?start=0`,
    getCategory: '/api/tabs',
    getCategoryLIstById: (id)=>`/api/tab/${id}`,
    getDetail: '/api/detail',
    
}


const getHome= (id) => Axios.getInstance().get(urlServer.getHome(id))
const getCategory = () => Axios.getInstance().get(urlServer.getCategory)
const getCategoryLIstById = (id) => Axios.getInstance().get(urlServer.getCategoryLIstById(id))
const getDetail = (id) => Axios.getInstance().get(urlServer.getDetail, {params:{id}})


export default {
    getHome,
    getCategory,
    getCategoryLIstById,
    getDetail
    
}