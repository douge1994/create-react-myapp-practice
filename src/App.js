import React ,{Component}from "react";
import {
    Route,
    Router,
    Redirect,
    // withRouter,
    Switch
    } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'
import $ from 'jquery';
import Login from './components/Login';
import Home from './components/Home';

import { connect } from 'react-redux'
import { authorized } from './actions/action'

import axios from 'axios'
import loginService from './services/login-service'
import { myGet } from './services/http-set'

import 'antd/dist/antd.css'


const history = createBrowserHistory();

class App extends Component {
    constructor (props){
        super(props)
        this.state={
            isAuthorized:false
        }
    }

    handleSubmit(location,formValue){
        const that=this;
        // console.log(formValue);//表单数据
        // console.log(location);//router 的location 属性
        loginService.test().then(function(res){
            if(res.data[0].success == true){
                localStorage.setItem('isAuthorized',res.data[0].isAuthorized)
                
                that.props.handleSubmit();
            }
        },(err)=>{
             console.log(err.response)
        })
         
    }
    
    render() {
        // console.log(this.props)
        return (
            <Router history={history}>
                <div>
                   <Switch>
                       
                        <Route exact path="/" render={(location)=>{
                                return this.props.isAuthorized?    <Redirect to="/home" />:
                                    <Login onSubmit={this.handleSubmit.bind(this,location)}/>
                        }} />
                        <Route  path='/home'  component={Home}/>
                        {/* <Route  path='/test'  component={Test}/> */}
                    
                   </Switch>
                </div>
            </Router> 
        );
    }
}
const mapStateToProps=(state)=>{
    // console.log('app中权限控制state')
   return {
     isAuthorized:state.authorize.isAuthorized
 }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleSubmit:()=>{
          dispatch(authorized)
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);


/**
 * 建议阅读顺序：Index-->App-->Home&&Login(整个项目的页面逻辑)
 *              由Login-->进入Home(包含3个按需路由Test、Topic、ReduxExample)<整个项目按需加载>
 *              按需加载主要思想是Bundle.js
 * 登录退出以及项目中的count操作建议阅读顺序是：
 *              Actions（描述如何操作reducer）--->Reducers(Index-->authorize&&reducer)<执行reducer>--->Home&&App<获取state以及调用reducer的具体操作>
 * 
 * App为路由开始部分。
 * 此处做了登录页面和主页面的路由，并为路由跳转做了权限reducer式控制
 * 
 * */ 