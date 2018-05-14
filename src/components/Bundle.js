
/*
 *此处js为按需加载服务；参考网站：
 * https://www.jianshu.com/p/547aa7b92d8c
 * https://reacttraining.com/react-router/web/guides/code-splitting
 */ 


import {Component} from 'react'
class  Bundle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mod: null
        };
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        // console.log(props)
        this.setState({
            mod: null
        });
        //注意这里，使用Promise对象; mod.default导出默认
        props.load().then((mod) => {
            // console.log(mod.default)
            this.setState({
                mod: mod.default ? mod.default : mod
            });
        });
    }

    render() {
        return this.state.mod ? this.props.children(this.state.mod) : null;
    }

}


export  default Bundle; 