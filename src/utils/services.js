// import axios from 'axios';
import axios from 'axios'
import { Toast } from 'antd-mobile';

// const isDev = process.env.NODE_ENV === 'development';

// const ajax = axios.create({
//   baseURL:"http://www.xiongmaoyouxuan.com"
// });

// ajax.interceptors.request.use(config => {
//   Toast.loading('加载中…', 0);
//   return config;
// })

// ajax.interceptors.response.use(resp => {
//   Toast.hide();
//   return resp;
// })
const requestInterceptorError = (err) => err
const responseInterceptor = (response) => response
const responseInterceptorError = (err) => {
  if (err.response) {
    switch (err.response.status) {
      case 400:
        // 401 没有token
        console.log(err.response)
        Toast.fail(err.response.data.msg || '参数错误')
        break
      case 401:
        // 401 没有token
        Toast.fail(err.response.data.msg || '权限错误')
        break
      case 500:
        // 500 接口异常
        Toast.fail(err.response.data.msg || '异常')
        break
      default:
        break
    }
    return Promise.reject(err)
  }
  return Promise.reject(err)
}

// export const getHome = () => {
//   return ajax.get('/api/tab/1?start=0');
// }

// export const getCategory = ()=>{
//   return ajax.get('/api/tabs');
// }
// export const getCategoryLIstById = (id)=>{
//   return ajax.get(`/api/tab/${id}`);
// }
// export const getDetail = (id)=>{
//   return ajax.get(`/api/detail?id=${id}&normal=1&sa=`);
// }
class Http {
  constructor() {
    const options = {
      baseURL: "http://www.xiongmaoyouxuan.com",
      timeout: 6000
    }
    this.session = axios.create(options)
    this.session.interceptors.request.use(
      // requestInterceptor,
      requestInterceptorError
    )
    this.session.interceptors.response.use(
      responseInterceptor,
      responseInterceptorError
    )
  }
  static getInstance() {
    if (!Http.instance) {
      Http.instance = new Http()
    }
    return Http.instance
  }
  checkResponse(response) {
    return new Promise((resolve, reject) => {
      const { data } = response
      const { code, msg } = data
      if (
        code !== 200
        // code !== ECode.GAIN_SUCCESS &&
        // code !== ECode.GAIN_SUCCESS_EMPTY
      ) {
        /// TODO: 后面改成自定义提示控件
        // message.warning(msg)
        return reject({ code, msg })
      }
      return resolve(data)
    })
  }
  /**
   * get方法
   * @param url api接口
   */

  get(api, params) {
    return this.session(
      Object.assign({ method: 'get', url: api }, params)
    ).then((response) => {
      return this.checkResponse(response)
    })
  }

  /**
   * post方法
   * @param url api接口
   * @param param 参数
   */
  post(api, params) {
    return this.session(
      Object.assign({ method: 'post', url: api }, params)
    ).then((response) => {
      return this.checkResponse(response)
    })
  }

  /**
   * delete方法
   * @param url  api接口
   */
  delete(api, params) {
    return this.session(
      Object.assign({ method: 'delete', url: api }, params)
    ).then((response) => {
      return this.checkResponse(response)
    })
  }

  /**
   * put方法
   * @param url  api接口
   * @param param 参数
   */
  put(api, params) {
    return this.session(
      Object.assign({ method: 'put', url: api }, params)
    ).then((response) => {
      return this.checkResponse(response)
    })
  }
}

export default Http