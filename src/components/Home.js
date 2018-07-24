import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Redirect,
   // withRouter
    } from "react-router-dom";
import { connect } from 'react-redux'
import { increaseAction,deleteAction,clearAuthorized } from '../actions/action'



import '../commons/initalcss'
import '../css/home.css'


/**
 * 按需加载组件使用~~~~~
 * @param --start-- 此处为按需加载各个组件<test中含有一个echart的引入。>
 */ 
import Bundle from './Bundle'
const Topic = (props) => (
  <Bundle load={() => import('./Topic')}>
      {(Topic) => <Topic {...props}/>}
  </Bundle>
);
const Test = (props) => (
  <Bundle load={() => import('./Test')}>
      {(Test) => <Test {...props}/>}
  </Bundle>
);
const ReduxExample2 = (props) => (
  <Bundle load={() => import('./ReduxExample2')}>
      {(ReduxExample2) => <ReduxExample2 {...props}/>}
  </Bundle>
);
const ReactTable = (props) => (
    <Bundle load={() => import('./ReactTable')}>
        {(ReactTable) => <ReactTable {...props}/>}
    </Bundle>
  );
/**
 * 
 * @param --end-- 此处为按需加载各个组件<test中含有一个echart的引入。>
 */ 


class DownMenu extends Component {
    render(){
        return <ul className="menu-list">
                    <li>menu1</li>
                    <li>menu2</li>
                    <li>menu3</li>
                </ul>    
    }
}
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            downDown:false
        }
    }
    /**
     * 
     * react-redux使用很重要...
     * 
     */ 
    handleClick(){
      // console.log(this.props)
      this.props.handleClick()//此次调用是因为connect后,将更改value的事件放置在了store中
    }
    handleClickExample2(){
      this.props.handleClickExample2()//此次调用是因为connect后,将更改value的事件放置在了store中
    }
    signOut(){//退出登录
        if(localStorage.getItem('isAuthorized')){
            localStorage.clear('isAuthorized')
        }
        this.props.signOut();
    }

    downTownMenu(){
        console.log(123)
        this.setState({
            downDown:!this.state.downDown
        })
    }
    render() {
        const { match }=this.props
        console.log(this.props)
        if (!this.props.isAuthorized) {  //退出登录权限控制...此处为state控制...实际应该是存入本地控制
             return <Redirect push to="/" />; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数  
        }  
        
        const childRoute=(match) =>{
          return (
            <div>
              <div className="nav-left">
                <ul>
                    <li>
                      <NavLink exact activeStyle={{backgroundColor:'#3f61b1'}} to={`${match.url}`}>首页</NavLink>
                    </li>
                    <li>
                      <NavLink exact activeStyle={{backgroundColor:'#3f61b1'}} to={`${match.url}/test`}>测试</NavLink>
                    </li>
                    <li>
                      <NavLink exact activeStyle={{backgroundColor:'#3f61b1'}} to={`${match.url}/Topic`}>topic</NavLink>
                    </li>
                  </ul>
              </div>
              <div className="main-right">
                  <div className="header">
                    <ul>
                        <li className="logo text-left"> 
                            <Link className="logo" to={`${match.url}`}><i className="md md-equalizer"></i> <span>^_^</span></Link> 
                        </li>
                        <li onClick={this.signOut.bind(this)}>
                            <span className="bgColor">sign out</span>
                        </li>
                        <li onClick={this.downTownMenu.bind(this)} 
                            className={`${this.state.downDown? 'active-menu':''}`}>
                            
                            <span className="bgColor">menu</span>
                            
                           { this.state.downDown? <DownMenu/>:''}
                        </li>
                        <li>
                            <span className="bgColor">two</span>
                        </li>
                    </ul>
                  </div>
                  <div className="content">
                      <div className="col-lg-12">
                              <Route exact path={`${match.url}/test`} component={Test} />
                              <Route exact path={`${match.url}/Topic`} component={Topic} />
                              <Route exact path={match.url} render={() => (
                                  <div>
                                      <h3>react-redux 使用.</h3>

                                      <h4>example--------------1</h4>
                                      <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Increase</button>
                                      <p>{this.props.value}</p>


                                      <h4>example--------------2</h4>
                                      <ReduxExample2 value={this.props.value} onClick={this.handleClickExample2.bind(this)}/> 
                                      <h5>react  table-------</h5>
                                      <ReactTable/>
                                  </div>
                                  
                              )}/>
                      </div>
                  </div>
              </div>
            </div>
          )
        }
        return childRoute(match)
              
    }
}

//为了给value赋值。。那么告知已经在App注册的store，此处将通过state.count获取store里的信息从而赋值给value
const mapStateToProps=(state)=>{
    //  console.log(state)
    return {
      value: state.reducers.count,
      isAuthorized:state.authorize.isAuthorized
  }
}
// 为了更改数据（就是那个value）,需要通过某种操作实现（此处是点击噢,在上面的组件里有“”““调用”“”哦），注意书写模式哈，
//此处通过handleClick和handleClickExample2发送事件（dispatch（xxx）;xxx就是一个对象，这个对象有个type属性,和reducer里面的一一对应----使得value改变的逻辑就在reducer里面）
//handleClick和handleClickExample2返回的是一个函数哦、、函数函数函数~~~~注意书写模式哈
const mapDispatchToProps=(dispatch)=>{
    return {
      handleClick:()=>{
          dispatch(increaseAction())
      },
      handleClickExample2:()=>{
        dispatch(deleteAction)
      },
      signOut:()=>{
          dispatch(clearAuthorized)
      }
    }
}
//connect 函数 就是没有传入参数mapStateToProps，mapDispatchToProps。。。它也会将home组件同store联系在一起
//也将享受store的监听从而渲染页面
export default connect(mapStateToProps,mapDispatchToProps)(Home);




/*
 * 建议阅读顺序：Index-->App-->Home&&Login(整个项目的页面逻辑)
 *              由Login-->进入Home(包含3个按需路由Test、Topic、ReduxExample)<整个项目按需加载>
 *              按需加载主要思想是Bundle.js
 * 登录退出以及项目中的count操作建议阅读顺序是：
 *              Actions（描述如何操作reducer）--->Reducers(Index-->authorize&&reducer)<执行reducer>--->Home&&App<获取state以及调用reducer的具体操作>
 * 
*/ 