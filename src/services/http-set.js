import axios from'axios'
import  url  from './url'
var apiUrl = url.baseUrl;
console.log(apiUrl);




export function myGet(url, params) {
    let _url = url?( apiUrl + url) : apiUrl
    return new Promise((resolve, reject) => {
      axios.get(_url, {params}).then(function (response) {
        // console.log(response)
        return resolve(response.data)
      })
      .catch(function (err) {
        // 由网络或者服务器抛出的错误
        return reject(err)
      })
    }) 
  }
   
  export function myPost(url, params) {
    let _url = apiUrl + url
    return new Promise((resolve, reject) => {
      axios.post(_url, {params}).then(function (response) {
        resolve(response.data)
      })
      .catch(function (err) {
        // 由网络或者服务器抛出的错误
        console.log(err)
        reject(err)
      })
    })
  }


  // 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么  -----添加token
    config.headers.common["Authorization"] = '123456';
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// // 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.status===200 || response.status === 304){
      return response
    }
    return Promise.reject(response);
  }, function (error) {
    console.log(error.response)
    // 对响应错误做点什么----返回Promise.reject 后在APP中才可以获取到对应的error
    return Promise.reject(error);
  });
