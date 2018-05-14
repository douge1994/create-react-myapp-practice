import React,{Component} from 'react'
// 引入 ECharts 主模块
import echarts from 'echarts/dist/echarts.common';
// 引入折线图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


import '../commons/initalcss'




class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
   componentDidMount(){
       // 基于准备好的dom，初始化echarts实例
       var myChart = echarts.init(document.getElementById('echart'));

       // 指定图表的配置项和数据
       var option = {
           title: {
               text: 'ECharts 入门示例'
           },
           tooltip: {},
           legend: {
               data:['销量']
           },
           xAxis: {
               data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
           },
           yAxis: {},
           series: [{
               name: '销量',
               type: 'bar',
               data: [5, 20, 36, 10, 10, 20]
           }]
       };

       // 使用刚指定的配置项和数据显示图表。
       myChart.setOption(option);
       myChart.on('click', function (params) {
        console.log(params);
    });
    
   }

    render() {
        return (
            <div>
               <div className="col-sm-6 col-lg-3">
                    <div className="widget-simple-chart text-right card-box">
                        <div className="circliful-chart circliful" data-dimension="90" data-text="35%" data-width="5" data-fontsize="14" data-percent="35" data-fgcolor="#5fbeaa" data-bgcolor="#ebeff2" style={{"width": "90px"}}>
                        <span className="circle-text" style={{"lineHeight": "90px", "fontSize": "14px"}}>35%</span><canvas width="90" height="90"></canvas></div>
                        <h3 className="text-success counter">1708</h3>
                        <p className="text-muted text-nowrap">Total Sales today</p>
                    </div>
                </div>
                <div id="echart" style={{width:'500px',height:"300px"}}></div>
            </div>
        );
    }
}

export default Test;