import axios from './service'

export default class ApiService {

  constructor() {
      
  }

  get(url, params, config) {
    if (!params) {
      params = {}
    }
    return axios.get(url, params, config)
  }

  post(url, data, config) {
    if (!data) {
        data = {}
    }
    if (!config) {
      config = {}
    }
    // if (type === HttpConstant.FORM_DATA_REQ) {
    //   const configTmp = Object.assign({}, config)
    //   configTmp['Content-Type'] = HttpConstant.FORM_DATA_REQ
    //   params = qs.stringify(params)
    // }
    return axios.post(url, data, config)
  }

  put(url, params, config) {
    if (!params) {
      params = {}
    }
    return axios.put(url, params, config)
  }

  delete(url, params, config) {
    if (!params) {
      params = {}
    }
    return axios.delete(url, params, config)
  }
}