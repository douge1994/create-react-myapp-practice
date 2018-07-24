const authorize=(state,action)=>{
    // if(!state){
    //     state={ isAuthorized: false}
    // }
    if(!state) { 
        console.log('state'); 
        if(localStorage.getItem('isAuthorized')) { 
            return state = { 
                isAuthorized: true, 
                usermsg: 'test'
            } 
        } 
        return state={ 
            isAuthorized: false, 
            usermsg: {} 
        } 
    } 
    // const isAuthorized = state.isAuthorized
    var status='';
    switch(action.type){
        case 'authorize' :
            return { isAuthorized:true,usermsg: 'test' }
        case 'clearAuthorize' :
            return { isAuthorized:false,usermsg: 'test' }
        default:
            return state;
    }
}

export default authorize;


/**
 * 本reducer为控制登录权限----->>但是登录权限应该是存储在localstorage中的
 * 此仅仅为了练习reducer 和登录退出控制...路由跳转
 * */ 