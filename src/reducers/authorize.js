const authorize=(state,action)=>{
    if(!state){
        state={ isAuthorized: false}
    }
    const isAuthorized = state.isAuthorized
    switch(action.type){
        case 'authorize' :
            return { isAuthorized:true }
        case 'clearAuthorize' :
            return { isAuthorized:false }
        default:
            return state;
    }
}

export default authorize;


/**
 * 本reducer为控制登录权限----->>但是登录权限应该是存储在localstorage中的
 * 此仅仅为了练习reducer 和登录退出控制...路由跳转
 * */ 