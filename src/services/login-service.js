import { myGet } from './http-set'
import url from './url'
function logService(){
    var loginService={};
    loginService.test=function(){
         return myGet(url.test)
        // return myGet('./xxxx') 错误测试使用路径
    }
    return loginService;
}

export default logService()