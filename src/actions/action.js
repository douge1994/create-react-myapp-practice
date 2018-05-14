
export const increaseAction = ()=>{
    return { type: 'increase' }
};
export const deleteAction = { type: 'delete' };

export const authorized = { type: 'authorize'};


export const clearAuthorized = { type: 'clearAuthorize'};


/**
 * action的两种写法
 * 函数式&&对象式
 * 函数式写法在dispatch调用时使用example() 
 * 对象时直接example即可
 * 
 * 
 * 
 * 
 * 建议阅读顺序：Index-->App-->Home&&Login(整个项目的页面逻辑)
 *              由Login-->进入Home(包含3个按需路由Test、Topic、ReduxExample)<整个项目按需加载>
 *              按需加载主要思想是Bundle.js
 * 登录退出以及项目中的count操作建议阅读顺序是：
 *              Actions（描述如何操作reducer）--->Reducers(Index-->authorize&&reducer)<执行reducer>--->Home&&App<获取state以及调用reducer的具体操作>
 * 
 * */ 

 