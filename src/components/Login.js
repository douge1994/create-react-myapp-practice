import React,{ Component } from 'react'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {username: '',password:''};
    }
    handleChange(event) {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: event.target.value
        });
      }
    
    handleSubmit(event) {
        // console.log(this.state);
        this.props.onSubmit(this.state)
        event.preventDefault();
    }
    render(){
        return (
            <div className="wrapper-page">
                <div className="text-center">
                    <a className="logo logo-lg"><i className="md md-equalizer"></i> <span>Minton</span> </a>
                </div>
                <form className="form-horizontal m-t-20" onSubmit={this.handleSubmit.bind(this)} >
                    <div className="form-group">
                        <div className="col-xs-12">
                            <input className="form-control" name='username' type="text" required="" placeholder="Username"
                                onChange={this.handleChange.bind(this)}/>
                                <i className="md md-account-circle form-control-feedback l-h-34"></i>
                        </div>
                    </div>
                        <div className="form-group">
                            <div className="col-xs-12">
                                <input className="form-control" name="password" type="password" required="" placeholder="Password"
                                    onChange={this.handleChange.bind(this)} autoComplete='****'/>
                                    <i className="md md-vpn-key form-control-feedback l-h-34"></i>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-xs-12">
                                <div className="checkbox checkbox-primary">
                                    <input id="checkbox-signup" type="checkbox"/>
                                        <label>
                                            Remember me
                                        </label>
                                    </div>

                                </div>
                            </div>
                        <div className="form-group text-right m-t-20">
                            <div className="col-xs-12">
                                <button className="btn btn-primary btn-custom w-md waves-effect waves-light" type="submit">
                                Log In
                                </button>
                            </div>
                        </div>
                </form>
            </div>
        )
    }
}

export default Login



/*
 * 建议阅读顺序：Index-->App-->Home&&Login(整个项目的页面逻辑)
 *              由Login-->进入Home(包含3个按需路由Test、Topic、ReduxExample)<整个项目按需加载>
 *              按需加载主要思想是Bundle.js
 * 登录退出以及项目中的count操作建议阅读顺序是：
 *              Actions（描述如何操作reducer）--->Reducers(Index-->authorize&&reducer)<执行reducer>--->Home&&App<获取state以及调用reducer的具体操作>
 * 
*/ 